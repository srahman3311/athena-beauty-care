(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/clients/category-treatment/CategoryTreatment.js":
/*!********************************************************************!*\
  !*** ./components/clients/category-treatment/CategoryTreatment.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategoryTreatment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _category_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category/Category */ "./components/clients/category-treatment/category/Category.js");
/* harmony import */ var _Treatment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Treatment */ "./components/clients/category-treatment/Treatment.js");
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\CategoryTreatment.js";


 // Stylesheet

 // Components





function CategoryTreatment({
  activePage,
  activeCategory,
  changeActiveCategory,
  selectedTreatments,
  selectTreatment
}) {
  const {
    data: categoryData,
    error: categoryDataFetchingError,
    loading: categoryDataLoading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_2__.default)("get", "http://localhost:7070/api/categories", {});
  const {
    data: treatmentData,
    error: treatmentDataFetchingError,
    loading: treatmentDataLoading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_2__.default)("get", "http://localhost:7070/api/treatments", {});
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: treatments,
    1: setTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (categoryData !== null) setCategories(categoryData);
    if (treatmentData !== null) setTreatments(treatmentData);
  }, [categoryData, treatmentData]); // function addNewTreatment(stylist, treatment) {
  //     console.log(stylist);
  //     console.log(treatment)
  // }
  // if(categoryDataLoading || treatmentDataLoading) {
  //     return (<div>Loading....</div>);
  // }
  // if(categoryDataFetchingError || treatmentDataFetchingError) {
  //     return (<div>Something went wrong</div>);
  // }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().category_treatment),
    style: {
      display: activePage === 2 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().category),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
        content: "Select category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().categoryItem_list),
        children: categories.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_category_Category__WEBPACK_IMPORTED_MODULE_3__.default, {
            item: item,
            index: index,
            activeCategory: activeCategory,
            changeActiveCategory: changeActiveCategory,
            selectedTreatments: selectedTreatments
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().treatment),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
        content: "Select treatment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().treatmentItem_list),
        children: treatments.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Treatment__WEBPACK_IMPORTED_MODULE_4__.default, {
            item: item,
            activeCategory: activeCategory,
            selectedTreatments: selectedTreatments,
            treatments: treatments,
            selectTreatment: selectTreatment
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/category-treatment/Treatment.js":
/*!************************************************************!*\
  !*** ./components/clients/category-treatment/Treatment.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Treatment)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/client-ui/ClientGlobals.module.css */ "./styles/client-ui/ClientGlobals.module.css");
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _client_reusable_components_EventHandlerDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../client-reusable-components/EventHandlerDiv */ "./components/clients/client-reusable-components/EventHandlerDiv.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\Treatment.js";
 // Stylesheet


 // Components



function Treatment({
  item,
  activeCategory,
  selectedTreatments,
  selectTreatment,
  treatments
}) {
  // console.log(selectedTreatments.some(xxx => xxx.description === "abc" && xxx.category === "bbc"));
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatmentItem_container),
    style: {
      display: activeCategory === item.category ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_4___default().eventHandler_div),
      onClick: event => selectTreatment(event, treatments),
      children: item.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatment_item),
      style: {
        backgroundImage: selectedTreatments.some(x => x.title === item.title) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatmentItem_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: [item.title, " (", item.duration, " minutes)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        style: {
          display: !item.description && "none"
        },
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatment_content),
        children: item.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/category-treatment/category/Category.js":
/*!********************************************************************!*\
  !*** ./components/clients/category-treatment/category/Category.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_reusable_components_EventHandlerDiv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../client-reusable-components/EventHandlerDiv */ "./components/clients/client-reusable-components/EventHandlerDiv.js");
/* harmony import */ var _CategorySerial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CategorySerial */ "./components/clients/category-treatment/category/CategorySerial.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\category\\Category.js";
// Stylesheet
 // Components




function Category({
  item,
  index,
  activeCategory,
  changeActiveCategory,
  selectedTreatments
}) {
  // Gradients for background
  const blueGradient = "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))";
  const redGradient = "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"; // Styling Conditions

  const condition1 = activeCategory === item.title;
  const condition2 = selectedTreatments.some(treatment => treatment.category === item.title); // Inline style

  const style = {
    backgroundImage: condition1 ? blueGradient : condition2 && redGradient
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_client_reusable_components_EventHandlerDiv__WEBPACK_IMPORTED_MODULE_0__.default, {
      content: item.title,
      clickEventHandler: changeActiveCategory
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().category_item),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().categoryItem_content),
        style: style,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_CategorySerial__WEBPACK_IMPORTED_MODULE_1__.default, {
          index: index,
          content: item.title,
          activeCategory: activeCategory
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          style: {
            color: activeCategory === item.title && "white"
          },
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/category-treatment/category/CategorySerial.js":
/*!**************************************************************************!*\
  !*** ./components/clients/category-treatment/category/CategorySerial.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CategorySerial)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\category\\CategorySerial.js";

function CategorySerial({
  index,
  content,
  activeCategory
}) {
  const style = {
    backgroundColor: activeCategory === content && "white",
    color: activeCategory === content && "black"
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
    style: style,
    children: index + 1
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/client-reusable-components/EventHandlerDiv.js":
/*!**************************************************************************!*\
  !*** ./components/clients/client-reusable-components/EventHandlerDiv.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EventHandlerDiv)
/* harmony export */ });
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/client-ui/ClientGlobals.module.css */ "./styles/client-ui/ClientGlobals.module.css");
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\client-reusable-components\\EventHandlerDiv.js";
// Stylesheet


function EventHandlerDiv({
  content,
  clickEventHandler
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1___default().eventHandler_div),
    onClick: clickEventHandler,
    children: content
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/client-reusable-components/ItemHeader.js":
/*!*********************************************************************!*\
  !*** ./components/clients/client-reusable-components/ItemHeader.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ItemHeader)
/* harmony export */ });
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/client-ui/ClientGlobals.module.css */ "./styles/client-ui/ClientGlobals.module.css");
/* harmony import */ var _styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\client-reusable-components\\ItemHeader.js";
// Stylesheet


function ItemHeader({
  content
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1___default().item_header),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
      className: (_styles_client_ui_ClientGlobals_module_css__WEBPACK_IMPORTED_MODULE_1___default().itemHeader_content),
      children: content
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/confirmation-page/Confirmation.js":
/*!**************************************************************!*\
  !*** ./components/clients/confirmation-page/Confirmation.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Confirmation)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/5.svg */ "./images/5.svg");
/* harmony import */ var _lib_getDates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/getDates */ "./lib/getDates.js");
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\confirmation-page\\Confirmation.js";
// Next Modules




 // Stylesheet
//import styles from "../../../styles/InformationPayment.module.css";
// libs


 // components


function Confirmation({
  activePage,
  clientEvents
}) {
  console.log(clientEvents);
  const {
    0: dates,
    1: setDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setDates((0,_lib_getDates__WEBPACK_IMPORTED_MODULE_5__.getDates)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    style: {
      display: activePage === 5 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_6__.default, {
      content: "Confirmation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, this), clientEvents.map(event => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
        className: "client_events",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          children: event.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          children: event.eventDuration
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 25
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("p", {
          children: ["Event will start from ", event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 25
        }, this)]
      }, event._id.toString(), true, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/date-time/DateCard.js":
/*!**************************************************!*\
  !*** ./components/clients/date-time/DateCard.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateCard)
/* harmony export */ });
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\DateCard.js";
// Stylesheet


function DateCard({
  dateTime,
  selectedDate,
  setSelectedDate,
  selectedTime
}) {
  console.log(selectedTime);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateCard_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: event => setSelectedDate(event.target.textContent),
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateHidden_div),
      children: dateTime.dateInDateFormat
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_card),
      style: {
        backgroundImage: selectedDate === dateTime.dateInDateFormat ? "linear-gradient(to left, green, rgba(0, 0, 139, 0.4))" : selectedTime.includes(dateTime.dateInDateFormat) && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().weekDay_text),
        children: dateTime.date.weekDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_text),
        children: dateTime.date.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().month_text),
        children: dateTime.date.month
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().clockIcon_container),
        style: {
          border: dateTime.date.weekDay === "Today" && "1px solid blue"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          style: {
            color: dateTime.date.weekDay === "Today" && "blue"
          },
          className: "far fa-clock"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/date-time/DateTime.js":
/*!**************************************************!*\
  !*** ./components/clients/date-time/DateTime.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DateTime)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/5.svg */ "./images/5.svg");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_getDates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/getDates */ "./lib/getDates.js");
/* harmony import */ var _choose_stylists_ChooseStylists__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./choose-stylists/ChooseStylists */ "./components/clients/date-time/choose-stylists/ChooseStylists.js");
/* harmony import */ var _DateCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DateCard */ "./components/clients/date-time/DateCard.js");
/* harmony import */ var _Stylists__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stylists */ "./components/clients/date-time/Stylists.js");
/* harmony import */ var _Times__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Times */ "./components/clients/date-time/Times.js");
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\DateTime.js";
// Next Modules




 // Stylesheet

 // libs

 // components







function DateTime({
  state,
  activePage,
  selectedTreatments,
  setSortedSelectedTreatments,
  location,
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime
}) {
  const {
    0: dates,
    1: setDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: dateTimes,
    1: setDateTimes
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  const {
    0: dateIndex,
    1: setDateIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setDates((0,_lib_getDates__WEBPACK_IMPORTED_MODULE_5__.getDates)());
  }, []);
  console.log(dateTimes);
  console.log(selectedTime);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().date_time),
    style: {
      display: activePage === 3 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_choose_stylists_ChooseStylists__WEBPACK_IMPORTED_MODULE_6__.default, {
      selectedTreatments: selectedTreatments,
      setSortedSelectedTreatments: setSortedSelectedTreatments,
      location: location,
      setDateTimes: setDateTimes,
      setSelectedDate: setSelectedDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
      content: "Select date/time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dateTime_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().content_Image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()) // layout and objecFit properties must be set to fill to make the image fit to it's container.  
        // layout="fill"
        // objectFit="fill"
        , {
          src: _images_5_svg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: "Login Background Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().prev),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().next),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates),
          children: dateTimes.map((dateTime, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DateCard__WEBPACK_IMPORTED_MODULE_7__.default, {
              dateTime: dateTime,
              selectedDate: selectedDate,
              setSelectedDate: setSelectedDate,
              selectedTime: selectedTime
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 33
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().available_time_list),
          children: dateTimes.map((dateTime, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().time),
              style: {
                display: selectedDate === dateTime.dateInDateFormat ? "flex" : "none"
              },
              children: dateTime.times.map(time => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                  style: {
                    position: "relative"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                    onClick: event => selectedTime === event.target.textContent ? setSelectedTime("") : setSelectedTime(event.target.textContent),
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dateHidden_div),
                    children: `${selectedDate}T${time}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                    style: {
                      backgroundImage: selectedTime === `${selectedDate}T${time}` && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                    },
                    children: time
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 116,
                    columnNumber: 49
                  }, this)]
                }, time, true, {
                  fileName: _jsxFileName,
                  lineNumber: 106,
                  columnNumber: 45
                }, this);
              })
            }, `${dateTime.date.date}-${dateTime.date.weekDay}`, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 33
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/date-time/Stylists.js":
/*!**************************************************!*\
  !*** ./components/clients/date-time/Stylists.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Stylists)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_person_girl_flat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/person-girl-flat.png */ "./images/person-girl-flat.png");
/* harmony import */ var _images_Component_143_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/Component 143 – 2.png */ "./images/Component 143 – 2.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\Stylists.js";
 // Stylesheet





function Stylists() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().stylists_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h4", {
      style: {
        marginBottom: "10px"
      },
      children: "Stylist"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().stylist),
      style: {
        backgroundColor: "pink"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageHidden_div)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _images_person_girl_flat_png__WEBPACK_IMPORTED_MODULE_1__.default
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        style: {
          textAlign: "center"
        },
        children: "Athena"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().stylist),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageHidden_div)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _images_person_girl_flat_png__WEBPACK_IMPORTED_MODULE_1__.default
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        style: {
          textAlign: "center"
        },
        children: "Soudi"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 12
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().stylist),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().imageHidden_div)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _images_person_girl_flat_png__WEBPACK_IMPORTED_MODULE_1__.default
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
        style: {
          textAlign: "center"
        },
        children: "Tina"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/date-time/Times.js":
/*!***********************************************!*\
  !*** ./components/clients/date-time/Times.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Times)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_person_girl_flat_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/person-girl-flat.png */ "./images/person-girl-flat.png");
/* harmony import */ var _images_Component_143_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../images/Component 143 – 2.png */ "./images/Component 143 – 2.png");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\Times.js";
 // Stylesheet





function Times() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().times_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().times),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          style: {
            backgroundColor: "blue"
          },
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().times),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().times),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().times),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_4___default().time_text),
          children: "13.30 PM"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/date-time/choose-stylists/ChooseStylists.js":
/*!************************************************************************!*\
  !*** ./components/clients/date-time/choose-stylists/ChooseStylists.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChooseStylists)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var _lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/find-time-slots-copy/findTimeSlots */ "./lib/find-time-slots-copy/findTimeSlots.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\choose-stylists\\ChooseStylists.js";
 // Components 




function ChooseStylists({
  location,
  selectedTreatments,
  setSortedSelectedTreatments,
  setDateTimes,
  setSelectedDate
}) {
  const styles = {
    width: "60%",
    margin: "0 auto 10px auto",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#ccc"
  };
  const {
    0: treatments,
    1: setTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]); // OnChange handler for stylist

  function finalizeTreatments(event, index) {
    console.log("stylist: " + event.target.value); // event.target.value contains the stylist

    const stylist = event.target.value; // Find the treatment from the selectedTreatments list using index

    const treatment = selectedTreatments[index];
    const newTreatmentTitle = selectedTreatments[index].title; // Every treatment has multiple stylists and user has the flexibility to choose stylist from the stylists of a 
    // specific treatment. If user is trying to change the stylist then previous treatment must be ommitted.  

    const doesExist = treatments.some(newItem => newItem.treatmentTitle === newTreatmentTitle);

    if (doesExist || !stylist) {
      const filteredTreatments = treatments.filter(item => item.treatmentTitle !== newTreatmentTitle);
      if (!stylist) return setTreatments(filteredTreatments);
      const newtreatment = {
        category: treatment.category,
        choosenStylist: stylist,
        location,
        treatmentDuration: treatment.duration,
        treatmentPrice: treatment.price,
        treatmentTitle: treatment.title
      };
      return setTreatments([...filteredTreatments, newtreatment]);
    }

    const newtreatment = {
      category: treatment.category,
      choosenStylist: stylist,
      location,
      treatmentDuration: treatment.duration,
      treatmentPrice: treatment.price,
      treatmentTitle: treatment.title
    };
    setTreatments(currentValue => {
      return [...currentValue, newtreatment];
    });
  }

  async function findTimes() {
    // Need to sort the treatments as per the client's selection order. 
    const newTreatments = [];
    selectedTreatments.forEach(selectedTreatment => {
      treatments.forEach(treatment => {
        if (treatment.treatmentTitle === selectedTreatment.title) {
          newTreatments.push(treatment);
        }
      });
    });
    if (newTreatments.length !== selectedTreatments.length) return alert("Please select a stylist for all treatments");
    setSortedSelectedTreatments(newTreatments);
    const dateTimes = await (0,_lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_2__.findTimeSlots)(newTreatments);
    setDateTimes(dateTimes);
    setSelectedDate(dateTimes[0].dateInDateFormat);
  }

  console.log(treatments);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "choose_stylists",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_1__.default, {
      content: "Choose stylists"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), selectedTreatments.map((treatment, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "chooseStylists_content",
        style: styles,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: treatment.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: treatment.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("select", {
          name: "treatment" // Index will find the treatment from the selectedTreatments list
          ,
          onChange: event => finalizeTreatments(event, index),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
            value: "",
            children: "Choose stylist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 142,
            columnNumber: 33
          }, this), treatment.stylists.map(stylist => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
              value: stylist,
              children: stylist
            }, stylist, false, {
              fileName: _jsxFileName,
              lineNumber: 145,
              columnNumber: 41
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 29
        }, this)]
      }, treatment.title, true, {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 25
      }, this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: "buttonssss",
      style: {
        width: "100%",
        textAlign: "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("button", {
        onClick: findTimes,
        children: "Find Available Starting Times"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 125,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/information-payment/InformationPayment.js":
/*!**********************************************************************!*\
  !*** ./components/clients/information-payment/InformationPayment.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InformationPayment)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_6_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/6.svg */ "./components/clients/information-payment/images/6.svg");
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/InformationPayment.module.css */ "./styles/InformationPayment.module.css");
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./components/clients/information-payment/Input.js");
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\information-payment\\InformationPayment.js";
// Next Modules



 // Stylesheet

 // libs
// components




function InformationPayment({
  activePage,
  clientInfo,
  clientInfoOnChangeHandler,
  validationError,
  createBooking
}) {
  // const [dates, setDates] = useState([]);
  // useEffect(() => {
  // }, [])
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().info_payment),
    style: {
      display: activePage === 4 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
      content: "Information / payment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().infoPayment_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().image_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _images_6_svg__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Login Background Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().name_inputs),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().input_label),
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().name_info),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
            type: "text",
            name: "firstName",
            placeholder: "First Name",
            value: clientInfo.firstName,
            clientInfoOnChangeHandler: clientInfoOnChangeHandler,
            validationError: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
            type: "text",
            name: "lastName",
            placeholder: "Last Name",
            value: clientInfo.lastName,
            clientInfoOnChangeHandler: clientInfoOnChangeHandler,
            validationError: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().phone_input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().input_label),
          children: "Phone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: "number",
          name: "phone",
          placeholder: "+31 235 5632",
          value: clientInfo.phone,
          clientInfoOnChangeHandler: clientInfoOnChangeHandler,
          validationError: validationError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().email_input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().input_label),
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: "email",
          name: "email",
          placeholder: "abcd@gmail.com",
          value: clientInfo.email,
          clientInfoOnChangeHandler: clientInfoOnChangeHandler,
          validationError: validationError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().checkbox),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
            children: "Please keep me informed of the offers and promotions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().howHeardAboutUs_input),
        style: {
          backgroundColor: "green"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_7___default().input_label),
          children: "How did you hear about athena beauty care?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
          name: "howHeardAboutUs",
          onChange: clientInfoOnChangeHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
            value: "Friends",
            children: "Friends"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
            value: "others",
            children: "Others"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 106,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
      style: {
        display: clientInfo.email ? "block" : "none"
      },
      onClick: createBooking,
      children: "Confirm"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/information-payment/Input.js":
/*!*********************************************************!*\
  !*** ./components/clients/information-payment/Input.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Input)
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "next/script");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_raphael_lovaski_Pe9IXUuC6QU_unsplash_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg */ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg");
/* harmony import */ var _images_5_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../images/5.svg */ "./images/5.svg");
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/InformationPayment.module.css */ "./styles/InformationPayment.module.css");
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\information-payment\\Input.js";
// Next Modules




 // Stylesheet

 // libs
// components


function Input({
  type,
  name,
  placeholder,
  value,
  clientInfoOnChangeHandler,
  validationError
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().input),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
      type: type,
      name: name,
      placeholder: placeholder,
      value: value,
      onChange: clientInfoOnChangeHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
      style: {
        display: validationError ? "block" : "none",
        color: "red"
      },
      children: [placeholder.toLowerCase(), " can't be blank"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/libs/useAxios.js":
/*!*********************************************!*\
  !*** ./components/clients/libs/useAxios.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAxios)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function useAxios(url) {
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const endPoint = `http://localhost:7070/api/locations/${url}`;
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(endPoint);
      setData(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, [url]);
  return {
    data,
    error,
    loading
  };
}

/***/ }),

/***/ "./components/clients/location/Location.js":
/*!*************************************************!*\
  !*** ./components/clients/location/Location.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Location)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var _styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../styles/client-ui/Location.module.css */ "./styles/client-ui/Location.module.css");
/* harmony import */ var _styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _LocationIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LocationIcon */ "./components/clients/location/LocationIcon.js");
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var _client_reusable_components_EventHandlerDiv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../client-reusable-components/EventHandlerDiv */ "./components/clients/client-reusable-components/EventHandlerDiv.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\location\\Location.js";
// Next Modules
// import Script from "next/script";
// import Image from "next/image";


 // import LoginBgImage from "../../../images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg";
// import Logo from "../../../images/5.svg";
// Stylesheet




 // components


function Location({
  activePage,
  state,
  updateState
}) {
  const {
    data,
    error,
    loading
  } = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_2__.default)("get", "http://localhost:7070/api/locations", {});
  const {
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (data !== null) setLocations(data); // if(categoryData !== null) setCategories(categoryData);
    // if(treatmentData !== null) setTreatments(treatmentData);
  }, [data]);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: "Loading...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 24
  }, this);
  if (error) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    children: "Something went wrong"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 22
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().select_location),
    style: {
      display: activePage === 1 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_4__.default, {
      content: "Select location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().location_list),
      children: locations.map((location, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
          className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_EventHandlerDiv__WEBPACK_IMPORTED_MODULE_5__.default, {
            content: location.title,
            clickEventHandler: updateState
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 33
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
            className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().locationInfo_container),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
              className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().location_info),
              style: {
                backgroundColor: state.location === location.title && "blue"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
                className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_7___default().location_content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h5", {
                  children: location.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: [location.address1, ", ", location.address2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 60,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Zip Code: ", location.zipCode]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: ["Phone: ", location.phone]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: location.city
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 45
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
                  children: location.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 45
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 41
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_LocationIcon__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 41
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 37
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 33
          }, this)]
        }, index + 1, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 29
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/location/LocationIcon.js":
/*!*****************************************************!*\
  !*** ./components/clients/location/LocationIcon.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LocationIcon)
/* harmony export */ });
/* harmony import */ var _styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/client-ui/Location.module.css */ "./styles/client-ui/Location.module.css");
/* harmony import */ var _styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\location\\LocationIcon.js";
// Stylesheet


function LocationIcon() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_client_ui_Location_module_css__WEBPACK_IMPORTED_MODULE_1___default().location_icon),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      style: {
        color: "darkblue",
        fontSize: "24px"
      },
      className: "fas fa-map-marker-alt"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/navigation-bar/NavigationBar.js":
/*!************************************************************!*\
  !*** ./components/clients/navigation-bar/NavigationBar.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationBar)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/NavigationBar.module.css */ "./styles/NavigationBar.module.css");
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _NavigationButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavigationButton */ "./components/clients/navigation-bar/NavigationButton.js");
/* harmony import */ var _NavigationText__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavigationText */ "./components/clients/navigation-bar/NavigationText.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\navigation-bar\\NavigationBar.js";
 // Stylesheet

 // Components




function NavigationBar({
  state,
  selectedTreatments,
  activePage,
  setActivePage,
  selectedTime
}) {
  const items = [{
    id: 1,
    content: "Select Location"
  }, {
    id: 2,
    content: "Category and Treatment"
  }, {
    id: 3,
    content: "Select Time / Date"
  }, {
    id: 4,
    content: "Information / Payment"
  }, {
    id: 5,
    content: "Confirmation"
  }]; // const items = [
  //     {id: 1, content: "Category and Treatment"},
  //     {id: 2, content: "Select Location"},
  //     {id: 3, content: "Select Time / Date"},
  //     {id: 4, content: "Information / Payment"},
  //     {id: 5, content: "Confirmation"}
  // ];

  const {
    0: windowWidth,
    1: setWindowWidth
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  if (false) {}
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setWindowWidth(window.innerWidth);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigationBar_container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().wrapper),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigation_bar),
        children: items.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_NavigationButton__WEBPACK_IMPORTED_MODULE_1__.default, {
            windowWidth: windowWidth,
            state: state,
            selectedTreatments: selectedTreatments,
            activePage: activePage,
            setActivePage: setActivePage,
            value: item.id,
            selectedTime: selectedTime
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigationText_container),
        children: items.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_NavigationText__WEBPACK_IMPORTED_MODULE_2__.default, {
            windowWidth: windowWidth,
            text: item.content
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/navigation-bar/NavigationButton.js":
/*!***************************************************************!*\
  !*** ./components/clients/navigation-bar/NavigationButton.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationButton)
/* harmony export */ });
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/NavigationBar.module.css */ "./styles/NavigationBar.module.css");
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\navigation-bar\\NavigationButton.js";
// //
// import Link from "next/link"


function NavigationButton({
  windowWidth,
  state,
  selectedTreatments,
  activePage,
  setActivePage,
  value,
  selectedTime
}) {
  function changeActivePage(event) {
    const newValue = Number(event.target.textContent);
    if (newValue === 2 && !state.location) return alert("Please select a location");
    if (newValue === 3 && !selectedTreatments.length) return alert("Please select at least one treatment");
    if (newValue === 4 && !selectedTime) return alert("Please pick a starting time");
    setActivePage(newValue);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navigation_links),
    style: {
      width: value === 5 && (windowWidth <= 600 ? "50px" : "100px")
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_container),
      style: {
        width: value === 5 && "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        style: {
          backgroundColor: activePage === value && "darkblue"
        },
        className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navigationLink_button),
        value: activePage // onClick= {event => setActivePage(Number(event.target.textContent))}
        ,
        onClick: changeActivePage,
        children: value
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().blankPara_container),
      style: {
        display: value === 5 && "none"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/navigation-bar/NavigationText.js":
/*!*************************************************************!*\
  !*** ./components/clients/navigation-bar/NavigationText.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NavigationText)
/* harmony export */ });
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/NavigationBar.module.css */ "./styles/NavigationBar.module.css");
/* harmony import */ var _styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\navigation-bar\\NavigationText.js";
// //
// import Link from "next/link"


function NavigationText({
  windowWidth,
  text
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().navigation_text),
    style: {
      width: text === "Confirmation" && (windowWidth <= 600 ? "50px" : "100px")
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().text),
      style: {
        width: text === "Confirmation" && "100%"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_content),
        children: text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().text_blankDiv)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/reusable-components/Alert.js":
/*!*************************************************!*\
  !*** ./components/reusable-components/Alert.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Alert)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Alert.js";

function Alert({
  message
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "alert",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: message
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./lib/find-time-slots-copy/findTimeSlots.js":
/*!***************************************************!*\
  !*** ./lib/find-time-slots-copy/findTimeSlots.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "findTimeSlots": () => (/* binding */ findTimeSlots)
/* harmony export */ });
/* harmony import */ var _helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helper-functions/fetchEvents */ "./lib/find-time-slots-copy/helper-functions/fetchEvents.js");
/* harmony import */ var _helper_functions_getDates__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper-functions/getDates */ "./lib/find-time-slots-copy/helper-functions/getDates.js");
/* harmony import */ var _helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper-functions/getStylists */ "./lib/find-time-slots-copy/helper-functions/getStylists.js");
/* harmony import */ var _helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helper-functions/getWorkingTimes */ "./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js");
// Modules needed to fetch events




const defaultTimesArray = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
const findTimeSlots = async newTreatments => {
  /*
  const newTreatments = [
      {
          category: "Permanent Makeup",
          choosenStylist: "Jennifer Gorgeous",
          location: "Athena Beauty Care - Bogur",
          treatmentDuration: 85,
          treatmentPrice: 23,
          treatmentTitle: "Permanent Makeup with light massage"
      },
      {
          category: "Massage",
          choosenStylist: "Andrea Gorgeous",
          location: "Athena Beauty Care - Bogur",
          treatmentDuration: 75,
          treatmentPrice: 42,
          treatmentTitle: "Massage for 30 mins"
      },
      {
          category: "Brows",
          choosenStylist: "Athena Gorgeous",
          location: "Athena Beauty Care - Bogur",
          treatmentDuration: 35,
          treatmentPrice: 45,
          treatmentTitle: "Shaping brows"
      }
    ];
  */
  // Calculate total 30 dates in the format 'year-month-date' format starting from today
  const datesArray = (0,_helper_functions_getDates__WEBPACK_IMPORTED_MODULE_1__.getDates)(); // Putting the location info in a variable

  const location = newTreatments[0].location; // Fetching information of all stylists as per all treatments

  const allStylists = await (0,_helper_functions_getStylists__WEBPACK_IMPORTED_MODULE_2__.getStylists)(newTreatments);
  console.log(allStylists); // Fetching calendar events of all stylists

  const calendarEvents = await (0,_helper_functions_fetchEvents__WEBPACK_IMPORTED_MODULE_0__.fetchEvents)(); //console.log("Calendar events: ", calendarEvents);
  // Find the dates when all stylists are available at the requested location. Also find all the workingTimes of all stylists
  // on those dates

  const stylistsWorkingTimesOnAvailableDates = (0,_helper_functions_getWorkingTimes__WEBPACK_IMPORTED_MODULE_3__.getWorkingTimes)(datesArray, allStylists, newTreatments, location);
  console.log(stylistsWorkingTimesOnAvailableDates); // const stylistsFreeTimesOnAvailableDates = findFreeTimes(stylistsWorkingTimesOnAvailableDates, calendarEvents);
  // console.log(stylistsFreeTimesOnAvailableDates);

  const stylistsFreeTimesOnAvailableDates = [];
  stylistsWorkingTimesOnAvailableDates.forEach(workingTime => {
    const xxx = [];
    workingTime.stylistWorkingTimes.forEach(item => {
      const busyTimes = [];
      calendarEvents.forEach(event => {
        const eventDate = event.startTime.substring(0, event.startTime.indexOf("T"));
        const startingTime = event.startTime.substring(event.startTime.indexOf("T") + 1, event.startTime.length);
        const startingHour = Number(startingTime.substring(0, 2));
        const startingMinute = Number(startingTime.substring(3, 5));

        if (event.status === "Active") {
          if (eventDate === workingTime.date && event.stylist === item.stylist && event.eventLocation === location) {
            for (let k = 0; k < Math.ceil(event.eventDuration / 15); k++) {
              let interval = 15 * k + startingMinute;
              let hour = startingHour; // interval / 60 gives us the value which should be added to hour. For example - if interval is 
              // 75 then we must add 1 with hour 

              let hourIncrement = Math.floor(interval / 60); // Adding hour increment with hour

              hour += hourIncrement; // if hourIncrement is more than or equal to 1 then interval value must be re-calculated

              if (hourIncrement >= 1) {
                interval = interval - 60 * hourIncrement;
              } // if interval is 0 then add extra one 0 to keep the minute value in two digits


              if (interval === 0) interval += "0"; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

              if (hour < 10) {
                busyTimes.push(`0${hour}:${interval}`);
              } else {
                busyTimes.push(`${hour}:${interval}`);
              }
            }
          }
        }
      });
      const newWorkingTimes = item.workingTimes.filter(time => !busyTimes.includes(time));
      xxx.push({
        stylist: item.stylist,
        freeTimes: newWorkingTimes
      });
    });
    stylistsFreeTimesOnAvailableDates.push({
      date: workingTime.date,
      stylistsAndTheirFreeTimes: xxx
    });
  });
  console.log(stylistsFreeTimesOnAvailableDates); // Reduce function accepts two arguments. First one is a function with two parameters and the second is initial value
  // If initial value is not explicitly defined (for following case, 0) then reduce function will by default take the
  // first item of the array as the initial value.   

  const countOfTimesToOmmit = newTreatments.reduce((total, treatment) => total + Math.ceil(treatment.treatmentDuration / 15), 0);
  console.log(defaultTimesArray.length);
  console.log(countOfTimesToOmmit);
  console.log(defaultTimesArray.length - countOfTimesToOmmit);
  const qqq = [];
  stylistsFreeTimesOnAvailableDates.forEach((date, index) => {
    // 2021-11-15
    // This array will be populated with all the starting free times of each date
    const availableTimesByDate = [];

    for (let i = 0; i < defaultTimesArray.length + 1 - countOfTimesToOmmit; i++) {
      // 10:00
      // totalTimeCount value will be updated on each item of stylistsWithFreeTimes array in the following loop. 
      // For example, if stylistsWithFreeTimes has three items (say first item's duration is 45, second is 55 
      // and third is 25) then at the end of the loop totalTimeCount will be (Math.ceil(45 / 15) +  Math.ceil(55 / 15)
      // + Math.ceil(25 / 15)) 3 + 4 + 2 = 9
      let totalTimeCount = 0; // This is a temporary array which will be populated with free times of each stylist by looping through the 
      // stylistsWithFreeTimes array

      const temp = [];

      for (let j = 0; j < date.stylistsAndTheirFreeTimes.length; j++) {
        const item = date.stylistsAndTheirFreeTimes[j]; // Count will determine how many free times should be looked for. For example if count is 3 and starting
        // time is 09:30 then 09:30, 09:45 & 10:00 should be looked for

        const count = Math.ceil(newTreatments[j].treatmentDuration / 15); // As said above totalTimeCount must be updated on each item of stylistsWithFreeTimes array

        totalTimeCount += count; // This is very crucial. On each item of stylistsWithFreeTimes array this startingTime will be updated,
        // for example - say we are at 09:00 on first item of stylistsWithFreeTimes array, count is 3
        // and stylist of this item is available on all three times 09:00, 09:15 & 9:30. So startingTime must be 
        // from 09:45 for the 2nd item of stylistsWithFreeTimes array. Say for the second item count is 4 and stylist
        // is available on all four times 09:45, 10:00, 10:15 & 10:30, so startingTime for the third item of the 
        //  stylistsWithFreeTimes array 10:45. 

        let startingTime = ""; // if temp length is zero then we are at the first item of stylistsWithFreeTimes array

        if (!temp.length) {
          startingTime = defaultTimesArray[i];
        } else {
          // For each consecutive item after the first one of stylistsWithFreeTimes array startingTime will be 
          // the next time after the time of last item of temp array. 
          const y = defaultTimesArray.indexOf(temp[temp.length - 1]);
          startingTime = defaultTimesArray[y + 1];
        } //


        let hour = Number(startingTime.substring(0, 2)); // 11

        let minutes = Number(startingTime.substring(3, 5)); // 30

        for (let k = 1; k <= count; k++) {
          let hourIncrement = Math.floor(minutes / 60);
          hour += hourIncrement;

          if (hourIncrement >= 1) {
            minutes = minutes - 60 * hourIncrement;
          } // if minutes is 0 then add extra one 0 to keep the minute value in two digits


          if (minutes === 0) minutes += "0";
          let time = ""; // if hour is less than 10 then add a 0 before it to make it consistent with calendar hour/minute

          if (hour < 10) {
            time = `0${hour}:${minutes}`;
          } else {
            time = `${hour}:${minutes}`;
          } //const freeTimes = item.freeTimesArray[index].freeTimes;


          const freeTimes = item.freeTimes;

          if (freeTimes.includes(time)) {
            temp.push(time);
          }

          ;
          minutes = Number(minutes);
          minutes += 15;
        } // Say startingTime is 09:00 & count is 3. So totalTimeCount is also 3. After first iteration temp.length 
        // must be equals to 3 otherwise it means that stylist is not available at all three times (09:00. 09:15 & 09:30)
        // In such case further iteration is not necessary. 


        if (temp.length < totalTimeCount) break;
      }

      if (totalTimeCount === temp.length) availableTimesByDate.push(defaultTimesArray[i]);
    }

    qqq.push({
      date: date.date,
      times: availableTimesByDate
    });
  });
  console.log(qqq);
  const dateTimesArray = [];
  qqq.forEach((dateTimes, index) => {
    const newDate = new Date(dateTimes.date);
    const date = newDate.getDate();
    const year = newDate.getFullYear();
    const weekDay = newDate.toLocaleString("en-us", {
      weekday: "short"
    });
    const month = newDate.toLocaleString("en-us", {
      month: "short"
    });
    dateTimesArray.push({
      date: {
        date,
        weekDay,
        month,
        year
      },
      dateInDateFormat: dateTimes.date,
      times: dateTimes.times
    });
  });
  return dateTimesArray;
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/fetchEvents.js":
/*!******************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/fetchEvents.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchEvents": () => (/* binding */ fetchEvents)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Axios
 // Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.

const fetchEvents = async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/events");
    return response.data.events;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getDates.js":
/*!***************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getDates.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": () => (/* binding */ getDates)
/* harmony export */ });
const getDates = () => {
  const dates = []; // Populating dateTimeArray with 30 dates from today

  for (let i = 0; i <= 30; i++) {
    // One day equals 86400000 milliseconds. For each iteration we need to add (86400000 * i) milliseconds with today. This way
    // we can calculate dates as many as we want.   
    const date = new Date(new Date().getTime() + 86400000 * i);
    const year = date.getFullYear().toString();
    let month = (date.getMonth() + 1).toString();
    let day = date.getDate().toString();
    if (month < 10) month = `0${month}`;
    if (day < 10) day = `0${day}`;
    const newDate = `${year}-${month}-${day}`;
    dates.push(newDate);
  }

  return dates;
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getStylists.js":
/*!******************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getStylists.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylists": () => (/* binding */ getStylists)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
// Axios
 // Fetching calendar events of all stylists
// for loop is the way to go for fetching data through api calls. forEach sucks.

const getStylists = async newTreatments => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_0___default().get("http://localhost:7070/api/stylists");
    const stylists = [];
    newTreatments.forEach(treatment => {
      response.data.forEach(stylist => {
        const stylistFullName = stylist.firstName + " " + stylist.lastName;
        if (treatment.choosenStylist === stylistFullName) stylists.push(stylist);
      });
    });
    return stylists;
  } catch (err) {
    console.log(err.response.data.msg);
  }
};

/***/ }),

/***/ "./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js":
/*!**********************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getWorkingTimes.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWorkingTimes": () => (/* binding */ getWorkingTimes)
/* harmony export */ });
const times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"]; // 2021-11-15

const getWorkingTimes = (datesArray, allStylists, newTreatments, location) => {
  const stylistsWorkingTimesOnAvailableDates = []; // For each date of the dateTimeArray loop through the each stylist's workSchdule to find day match.

  datesArray.forEach(date => {
    const newDate = new Date(date); // get the day name (example - Monday) from the date to check against each stylist's workSchedule's day Name

    const dayName = newDate.toLocaleDateString("en-US", {
      weekday: "long"
    }); // No stylist has workSchedule on Saturday and Sunday so end the current iteration here

    if (dayName === "Saturday" || dayName === "Sunday") return;
    const temp = []; // Loot through all stylists to be able to loop through their workSchedule 

    allStylists.forEach(stylist => {
      // Only one from the stylist workSchedule array will match with the current date iteration, if it's found no need to
      // loop through the rest of the schedules
      for (let p = 0; p < stylist.workSchedule.length; p++) {
        const schedule = stylist.workSchedule[p];

        if (schedule.location === location && schedule.day === dayName) {
          // Array of times above has all the possible working times. startTimeIndex is the index of time from the times
          // array, endTimeIndex is the 
          // Check which times from the times array above match with the working start and end time of the current stylist
          // on current date. We need to put all the times starting from startTime and ending at endTime
          const startTimeIndex = times.indexOf(schedule.startTime);
          const endTimeIndex = times.indexOf(schedule.endTime);
          const workingTimes = [];

          for (let q = startTimeIndex; q <= endTimeIndex; q++) {
            workingTimes.push(times[q]);
          }

          temp.push({
            stylist: stylist.firstName + " " + stylist.lastName,
            workingTimes
          });
          break;
        }
      }
    }); // Say day of current date iteration is Monday and all stylists are available on this day at the requested location. It
    // means a 

    if (temp.length === newTreatments.length) stylistsWorkingTimesOnAvailableDates.push({
      date,
      stylistWorkingTimes: temp
    });
  });
  return stylistsWorkingTimesOnAvailableDates;
};

/***/ }),

/***/ "./lib/getDates.js":
/*!*************************!*\
  !*** ./lib/getDates.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": () => (/* binding */ getDates)
/* harmony export */ });
const getDates = () => {
  let datesArray = [];
  datesArray.push({
    date: new Date().getDate(),
    weekDay: "Today",
    month: new Date().toLocaleString("en-us", {
      month: "short"
    })
  });

  for (let i = 1; i <= 7; i++) {
    const newDate = new Date(new Date().getTime() + 86400000 * i);
    const date = newDate.getDate();
    const weekDay = newDate.toLocaleString("en-us", {
      weekday: "short"
    });
    const month = newDate.toLocaleString("en-us", {
      month: "short"
    });
    datesArray.push({
      date,
      weekDay,
      month
    });
  }

  return datesArray;
};

/***/ }),

/***/ "./libs/useAxios.js":
/*!**************************!*\
  !*** ./libs/useAxios.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ useAxios)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);


function useAxios(method, url, body, happening) {
  //console.log(url);
  // // Need to put following three in the useEffect's dependecy array to allow for dynamic data fetching based on user's 
  // // search input, navigation to previous and next items.
  // let searchText = "";
  // let skip = 0;
  // let limit = 0;
  // // If it's a post request then body will contain searchText, skip and limit. Update the above three with the body's values
  // if(body !== "undefined") {
  //     searchText = body.searchText;
  //     skip = body.skip;
  //     limit = body.limit
  // }
  // console.log(searchText, skip, limit);
  // console.log(method, url, body);
  const {
    0: data,
    1: setData
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: totalDataCount,
    1: setTotalDataCount
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: error,
    1: setError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default()({
        method,
        url,
        data: body
      });
      const newData = await response.data; //console.log(newData);
      // If data are being fetched with get method then an array of json objects has been sent from backend

      if (Array.isArray(newData)) return setData(newData);

      if (response.data.items === "undefined") {
        return setData(newData);
      } // Else, data are being fetched with post method. So an object has been sent from backend which contains data and
      // totalDataCount


      const {
        items,
        totalItemCount
      } = response.data;
      setData(items);
      setTotalDataCount(totalItemCount);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    fetchData();
  }, [url, happening]); //console.log(data);

  return {
    data,
    totalDataCount,
    error,
    loading
  };
}

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = Image1;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/head */ "../shared/lib/head"));

var _toBase64 = __webpack_require__(/*! ../shared/lib/to-base-64 */ "../shared/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../server/image-config */ "../server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === "function") {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

const loadedImageURLs = new Set();

if (true) {
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['default', defaultLoader], ['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['custom', customLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];

function isStaticRequire(src) {
  return src.default !== undefined;
}

function isStaticImageData(src) {
  return src.src !== undefined;
}

function isStaticImport(src) {
  return typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}

const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":[]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
    const percentSizes = [];

    for (let match; match = viewportWidthRe.exec(sizes); match) {
      percentSizes.push(parseInt(match[2]));
    }

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load(_objectSpread({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
} // See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.


function handleLoading(img, src, layout, placeholder, onLoadingComplete) {
  if (!img) {
    return;
  }

  const handleLoad = () => {
    if (!img.src.startsWith('data:')) {
      const p = 'decode' in img ? img.decode() : Promise.resolve();
      p.catch(() => {}).then(() => {
        if (placeholder === 'blur') {
          img.style.filter = 'none';
          img.style.backgroundSize = 'none';
          img.style.backgroundImage = 'none';
        }

        loadedImageURLs.add(src);

        if (onLoadingComplete) {
          const {
            naturalWidth,
            naturalHeight
          } = img; // Pass back read-only primitive values but not the
          // underlying DOM element because it could be misused.

          onLoadingComplete({
            naturalWidth,
            naturalHeight
          });
        }

        if (true) {
          var ref;

          if ((ref = img.parentElement) === null || ref === void 0 ? void 0 : ref.parentElement) {
            const parent = getComputedStyle(img.parentElement.parentElement);

            if (layout === 'responsive' && parent.display === 'flex') {
              console.warn(`Image with src "${src}" may not render properly as a child of a flex container. Consider wrapping the image with a div to configure the width.`);
            } else if (layout === 'fill' && parent.position !== 'relative') {
              console.warn(`Image with src "${src}" may not render properly with a parent using position:"${parent.position}". Consider changing the parent style to position:"relative" with a width and height.`);
            }
          }
        }
      });
    }
  };

  if (img.complete) {
    // If the real image fails to load, this will still remove the placeholder.
    // This is the desired behavior for now, and will be revisited when error
    // handling is worked on for the image component itself.
    handleLoad();
  } else {
    img.onload = handleLoad;
  }
}

function Image1(_param) {
  var {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    lazyBoundary = '200px',
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    onLoadingComplete,
    loader = defaultImageLoader,
    placeholder = 'empty',
    blurDataURL
  } = _param,
      all = _objectWithoutProperties(_param, ["src", "sizes", "unoptimized", "priority", "loading", "lazyBoundary", "className", "quality", "width", "height", "objectFit", "objectPosition", "onLoadingComplete", "loader", "placeholder", "blurDataURL"]);

  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';

  if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  let staticSrc = '';

  if (isStaticImport(src)) {
    const staticImageData = isStaticRequire(src) ? src.default : src;

    if (!staticImageData.src) {
      throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
    }

    blurDataURL = blurDataURL || staticImageData.blurDataURL;
    staticSrc = staticImageData.src;

    if (!layout || layout !== 'fill') {
      height = height || staticImageData.height;
      width = width || staticImageData.width;

      if (!staticImageData.height || !staticImageData.width) {
        throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
      }
    }
  }

  src = typeof src === 'string' ? src : staticSrc;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src.startsWith('data:') || src.startsWith('blob:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  if (false) {}

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (typeof widthInt !== 'undefined' && isNaN(widthInt) || typeof heightInt !== 'undefined' && isNaN(heightInt)) {
      throw new Error(`Image with src "${src}" has invalid "width" or "height" property. These should be numeric values.`);
    }

    if (layout === 'fill' && (width || height)) {
      console.warn(`Image with src "${src}" and "layout='fill'" has unused properties assigned. Please remove "width" and "height".`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (placeholder === 'blur') {
      if (layout !== 'fill' && (widthInt || 0) * (heightInt || 0) < 1600) {
        console.warn(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder='blur'" property to improve performance.`);
      }

      if (!blurDataURL) {
        const VALID_BLUR_EXT = ['jpeg', 'png', 'webp'] // should match next-image-loader
        ;
        throw new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
          Possible solutions:
            - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
            - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')}
            - Remove the "placeholder" property, effectively no blur effect
          Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`);
      }
    }

    if ('ref' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoadingComplete" property instead.`);
    }

    if ('style' in rest) {
      console.warn(`Image with src "${src}" is using unsupported "style" property. Please use the "className" property instead.`);
    }

    const rand = Math.floor(Math.random() * 1000) + 100;

    if (!unoptimized && !loader({
      src,
      width: rand,
      quality: 75
    }).includes(rand.toString())) {
      console.warn(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
    }
  }

  const [setRef, isIntersected] = (0, _useIntersection).useIntersection({
    rootMargin: lazyBoundary,
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };
  const blurStyle = placeholder === 'blur' ? {
    filter: 'blur(20px)',
    backgroundSize: objectFit || 'cover',
    backgroundImage: `url("${blurDataURL}")`,
    backgroundPosition: objectPosition || '0% 0%'
  } : {};

  if (layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  let srcString = src;
  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    src: `data:image/svg+xml;base64,${(0, _toBase64).toBase64(sizerSvg)}`
  }) : null) : null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    "data-nimg": layout,
    className: className,
    ref: img => {
      setRef(img);
      handleLoading(img, srcString, layout, placeholder, onLoadingComplete);
    },
    style: _objectSpread({}, imgStyle, blurStyle)
  })), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    decoding: "async",
    "data-nimg": layout,
    style: imgStyle,
    className: className,
    loading: loading || 'lazy'
  }))), priority ? // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset

  /*#__PURE__*/
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src,
    // @ts-ignore: imagesrcset is not yet in the link element type.
    imagesrcset: imgAttributes.srcSet,
    // @ts-ignore: imagesizes is not yet in the link element type.
    imagesizes: imgAttributes.sizes
  })) : null);
}

function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?auto=format&fit=max&w=300
  const url = new URL(`${root}${normalizeSrc(src)}`);
  const params = url.searchParams;
  params.set('auto', params.get('auto') || 'format');
  params.set('fit', params.get('fit') || 'max');
  params.set('w', params.get('w') || width.toString());

  if (quality) {
    params.set('q', quality.toString());
  }

  return url.href;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function customLoader({
  src
}) {
  throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if ( true && !configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_clients_libs_useAxios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/clients/libs/useAxios */ "./components/clients/libs/useAxios.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_reusable_components_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/reusable-components/Alert */ "./components/reusable-components/Alert.js");
/* harmony import */ var _components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clients/navigation-bar/NavigationBar */ "./components/clients/navigation-bar/NavigationBar.js");
/* harmony import */ var _components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clients/category-treatment/CategoryTreatment */ "./components/clients/category-treatment/CategoryTreatment.js");
/* harmony import */ var _components_clients_location_Location__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clients/location/Location */ "./components/clients/location/Location.js");
/* harmony import */ var _components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/clients/date-time/DateTime */ "./components/clients/date-time/DateTime.js");
/* harmony import */ var _components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/clients/information-payment/InformationPayment */ "./components/clients/information-payment/InformationPayment.js");
/* harmony import */ var _components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/clients/confirmation-page/Confirmation */ "./components/clients/confirmation-page/Confirmation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React


 // Stylesheet

 // Reusable Components

 // components








function Home() {
  // Other states
  const {
    0: clientEvents,
    1: setClientEvents
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: selectedTreatments,
    1: setSelectedTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: sortedSelectedTreatments,
    1: setSortedSelectedTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: validationError,
    1: setValidationError
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: clientInfo,
    1: setClientInfo
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    howHeardAboutUs: "",
    others: ""
  });
  const {
    0: state,
    1: setState
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    category: "",
    treatment: "",
    location: "",
    session: "",
    date: "",
    stylist: "",
    coupon: "",
    paid: false
  });
  const {
    0: activeCategory,
    1: setActiveCategory
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("Brows");
  const {
    0: activePage,
    1: setActivePage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: selectedDate,
    1: setSelectedDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: selectedTime,
    1: setSelectedTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""); // update the state with values of the non input fields such as location, stylist, date, time etc. 

  function updateState(event) {
    const text = event.target.textContent;

    if (text.includes("Athena Beauty Care")) {
      return setState(currentValue => {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          location: text
        });
      });
    }
  }

  function changeActiveCategory(e) {
    const text = e.target.textContent;
    setActiveCategory(text);
  }
  /*
  function addTreatment (stylist, item) {
     
      // loop through the already selected treatments to see if clicked one exists or not. It returns either true or false
      const doesExist = selectedTreatments.some(newItem => newItem.treatmentTitle === item.title);
        // If clicked treatment exists update the selectedTreatments array by removing the clicked treatment
      if(doesExist) {
            const temp = [];
            selectedTreatments.forEach(newItem => {
                  
              if(newItem.treatmentTitle !== item.title) {
                  temp.push(newItem);
              }
                  
          })
            setSelectedTreatments(temp);
            if(stylist) {
                setSelectedTreatments(currentValue => 
                  [
                      ...currentValue, 
                      { 
                          category: item.category, 
                          treatmentTitle: item.title, 
                          treatmentDuration: item.duration, 
                          treatmentPrice: item.price,
                          choosenStylist: stylist,
                          location: state.location 
                      }
                  ]
              );
              
          } else {
                return setActiveTreatment("");
              
          }
          
          return setActiveTreatment("");
      }
        // If clicked treatment doesn't exist then add it in the selectedTreatments array
      setSelectedTreatments(currentValue => 
          [
              ...currentValue, 
              { 
                  category: item.category, 
                  treatmentTitle: item.title, 
                  treatmentDuration: item.duration, 
                  treatmentPrice: item.price,
                  choosenStylist: stylist,
                  location: state.location 
              }
          ]
      );
        return setActiveTreatment("");
    }
  */


  function clientInfoOnChangeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;
    return setClientInfo(currentValue => {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        [name]: value
      });
    });
  }

  function selectTreatment(event, treatments) {
    const treatmentTitle = event.target.textContent; // loop through the already selected treatments to see if clicked one exists or not. It returns either true or false

    const doesExist = selectedTreatments.some(newItem => newItem.title === treatmentTitle);

    if (doesExist) {
      const filteredSelectedTreatments = selectedTreatments.filter(treatment => treatment.title !== treatmentTitle);
      setSelectedTreatments(filteredSelectedTreatments);
    } else {
      for (let x = 0; x < treatments.length; x++) {
        if (treatments[x].title === treatmentTitle) {
          setSelectedTreatments(currentValue => {
            return [...currentValue, treatments[x]];
          });
          break;
        }
      }
    }
  }

  async function createBooking() {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default().post("http://localhost:7070/api/events/client-events", {
        sortedSelectedTreatments,
        selectedTime,
        clientInfo
      });
      console.log(response.data);
      setClientEvents(response.data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setActivePage(5);
    }
  } // console.log(locationData);
  // if(locationDataLoading || categoryDataLoading || treatmentDataLoading) {
  //     return (<div>Loading....</div>);
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().home),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_4__.default, {
      state: state,
      selectedTreatments: selectedTreatments,
      activePage: activePage,
      setActivePage: setActivePage,
      selectedTime: selectedTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_location_Location__WEBPACK_IMPORTED_MODULE_6__.default, {
      activePage: activePage,
      state: state,
      updateState: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedTreatments: selectedTreatments,
      activePage: activePage,
      activeCategory: activeCategory,
      changeActiveCategory: changeActiveCategory,
      selectTreatment: selectTreatment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_7__.default, {
      state: state,
      activePage: activePage,
      updateState: updateState,
      location: state.location,
      selectedTreatments: selectedTreatments,
      setSortedSelectedTreatments: setSortedSelectedTreatments,
      selectedDate: selectedDate,
      setSelectedDate: setSelectedDate,
      selectedTime: selectedTime,
      setSelectedTime: setSelectedTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_8__.default, {
      activePage: activePage,
      clientInfo: clientInfo,
      clientInfoOnChangeHandler: clientInfoOnChangeHandler,
      validationError: validationError,
      createBooking: createBooking
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_9__.default, {
      activePage: activePage,
      clientEvents: clientEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 273,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 226,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./components/clients/information-payment/images/6.svg":
/*!*************************************************************!*\
  !*** ./components/clients/information-payment/images/6.svg ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/components/clients/information-payment/images/6.c65e4a16f5bf0b0c04d20dd5125afbf1.svg","height":240,"width":328});

/***/ }),

/***/ "./images/5.svg":
/*!**********************!*\
  !*** ./images/5.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/5.c1ba88555280ae862b4a76853ef0a541.svg","height":189,"width":242});

/***/ }),

/***/ "./images/Component 143 – 2.png":
/*!**************************************!*\
  !*** ./images/Component 143 – 2.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/Component 143 – 2.d48b1991ea14a932e3a91fae4b3a4265.png","height":128,"width":77,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2FComponent+143+%E2%80%93+2.d48b1991ea14a932e3a91fae4b3a4265.png&w=8&q=70"});

/***/ }),

/***/ "./images/person-girl-flat.png":
/*!*************************************!*\
  !*** ./images/person-girl-flat.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/person-girl-flat.53a3bd115e0867b8e508a2cfe5f6df6c.png","height":100,"width":100,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fperson-girl-flat.53a3bd115e0867b8e508a2cfe5f6df6c.png&w=8&q=70"});

/***/ }),

/***/ "./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg":
/*!*********************************************************!*\
  !*** ./images/raphael-lovaski-Pe9IXUuC6QU-unsplash.jpg ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/raphael-lovaski-Pe9IXUuC6QU-unsplash.ecb8cc4722137904d7022c5918349a6f.jpg","height":4000,"width":6000,"blurDataURL":"/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fimages%2Fraphael-lovaski-Pe9IXUuC6QU-unsplash.ecb8cc4722137904d7022c5918349a6f.jpg&w=8&q=70"});

/***/ }),

/***/ "./styles/CategoryTreatment.module.css":
/*!*********************************************!*\
  !*** ./styles/CategoryTreatment.module.css ***!
  \*********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"category_treatment": "CategoryTreatment_category_treatment__3SYzF",
	"category": "CategoryTreatment_category__2tF2f",
	"treatment": "CategoryTreatment_treatment__2wznu",
	"header": "CategoryTreatment_header__1Kqzb",
	"categoryItem_list": "CategoryTreatment_categoryItem_list__5pofv",
	"categoryItem_container": "CategoryTreatment_categoryItem_container__3dwc7",
	"category_item": "CategoryTreatment_category_item__RrOXh",
	"categoryItem_content": "CategoryTreatment_categoryItem_content__2imbs",
	"treatmentItem_container": "CategoryTreatment_treatmentItem_container__EsT7c",
	"categoryTreatment_hiddenDiv": "CategoryTreatment_categoryTreatment_hiddenDiv__1xCls",
	"treatment_item": "CategoryTreatment_treatment_item__1RyPt",
	"treatmentItem_content": "CategoryTreatment_treatmentItem_content__Oklei",
	"treatment_content": "CategoryTreatment_treatment_content__L-6Re",
	"stylists": "CategoryTreatment_stylists__3zyoF",
	"stylist_list": "CategoryTreatment_stylist_list__2Pk2K",
	"stylistList_item": "CategoryTreatment_stylistList_item__2Pphb"
};


/***/ }),

/***/ "./styles/DateTime.module.css":
/*!************************************!*\
  !*** ./styles/DateTime.module.css ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"dateHidden_div": "DateTime_dateHidden_div__15Yix",
	"available_time_list": "DateTime_available_time_list__1W6_8",
	"time": "DateTime_time__2tMuV",
	"individual_time": "DateTime_individual_time__12sT_",
	"date_time": "DateTime_date_time__1Wl3F",
	"header": "DateTime_header__-NfxO",
	"dateTime_content": "DateTime_dateTime_content__ZOwAK",
	"content_Image": "DateTime_content_Image__Nowz2",
	"dates_container": "DateTime_dates_container__rX-Wd",
	"dates": "DateTime_dates__21Uki",
	"prev": "DateTime_prev__Ay9lf",
	"next": "DateTime_next__2ZUxT",
	"dateCard_container": "DateTime_dateCard_container__2_0Ui",
	"date_card": "DateTime_date_card__2YVPn",
	"weekDay_text": "DateTime_weekDay_text__1Sjzs",
	"date_text": "DateTime_date_text__1mi3e",
	"month_text": "DateTime_month_text__1rUQT",
	"clockIcon_container": "DateTime_clockIcon_container__2NAtf",
	"stylists_times": "DateTime_stylists_times__1BOIM",
	"stylists_container": "DateTime_stylists_container__144S3",
	"times_container": "DateTime_times_container__3qYaj",
	"times": "DateTime_times__11_9q",
	"time_text": "DateTime_time_text__1jM1E",
	"stylist": "DateTime_stylist__28Zq4"
};


/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"home": "Home_home__17yb6"
};


/***/ }),

/***/ "./styles/InformationPayment.module.css":
/*!**********************************************!*\
  !*** ./styles/InformationPayment.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"infoPayment_header": "InformationPayment_infoPayment_header__PrX5x",
	"infoPayment_content": "InformationPayment_infoPayment_content__1Mxvp",
	"image_container": "InformationPayment_image_container__15ycd",
	"input_label": "InformationPayment_input_label__1Z1uO",
	"input": "InformationPayment_input__1LJ2d",
	"checkbox": "InformationPayment_checkbox__37KKl",
	"name_inputs": "InformationPayment_name_inputs__1BSiR",
	"name_info": "InformationPayment_name_info__1QlfH",
	"phone_input": "InformationPayment_phone_input__3PMIP",
	"email_input": "InformationPayment_email_input__1OVrW",
	"howHeardAboutUs_input": "InformationPayment_howHeardAboutUs_input__3vlXM"
};


/***/ }),

/***/ "./styles/NavigationBar.module.css":
/*!*****************************************!*\
  !*** ./styles/NavigationBar.module.css ***!
  \*****************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"navigationBar_container": "NavigationBar_navigationBar_container__3c-2H",
	"wrapper": "NavigationBar_wrapper__aZKos",
	"navigation_bar": "NavigationBar_navigation_bar__Y85UZ",
	"navigation_links": "NavigationBar_navigation_links__qdJ-S",
	"button_container": "NavigationBar_button_container__1kRB3",
	"navigationLink_button": "NavigationBar_navigationLink_button__117LD",
	"blankPara_container": "NavigationBar_blankPara_container__yTYu4",
	"navigationText_container": "NavigationBar_navigationText_container__2LWcR",
	"navigation_text": "NavigationBar_navigation_text__2_qN5",
	"text": "NavigationBar_text__3waVi",
	"text_content": "NavigationBar_text_content__2WJFU",
	"text_blankDiv": "NavigationBar_text_blankDiv__2WhDU"
};


/***/ }),

/***/ "./styles/client-ui/ClientGlobals.module.css":
/*!***************************************************!*\
  !*** ./styles/client-ui/ClientGlobals.module.css ***!
  \***************************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"item_header": "ClientGlobals_item_header__3gXTK",
	"itemHeader_content": "ClientGlobals_itemHeader_content__3Q-xA",
	"eventHandler_div": "ClientGlobals_eventHandler_div__uSo51"
};


/***/ }),

/***/ "./styles/client-ui/Location.module.css":
/*!**********************************************!*\
  !*** ./styles/client-ui/Location.module.css ***!
  \**********************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"locations": "Location_locations__2jSOi",
	"select_location": "Location_select_location__2x7pI",
	"location_list": "Location_location_list__1s52r",
	"wrapper": "Location_wrapper__2ypIU",
	"location_hiddenDiv": "Location_location_hiddenDiv__1WUJa",
	"locationInfo_container": "Location_locationInfo_container__160wC",
	"location_info": "Location_location_info__2S1ol",
	"location_content": "Location_location_content__cUg07",
	"location_table": "Location_location_table__3qeXv",
	"locationAdd_form": "Location_locationAdd_form__1nAmz",
	"location_input": "Location_location_input__NXHrj"
};


/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "../server/image-config":
/*!***************************************************!*\
  !*** external "next/dist/server/image-config.js" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ "../shared/lib/head":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/head.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ "../shared/lib/to-base-64":
/*!*****************************************************!*\
  !*** external "next/dist/shared/lib/to-base-64.js" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ "next/script":
/*!******************************!*\
  !*** external "next/script" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/script");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9DYXRlZ29yeVRyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L1RyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L2NhdGVnb3J5L0NhdGVnb3J5LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvY2F0ZWdvcnkvQ2F0ZWdvcnlTZXJpYWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY29uZmlybWF0aW9uLXBhZ2UvQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL1N0eWxpc3RzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L0lucHV0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvbG9jYXRpb24vTG9jYXRpb25JY29uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uVGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZmV0Y2hFdmVudHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0RGF0ZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0V29ya2luZ1RpbWVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L2ltYWdlcy82LnN2ZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvNS5zdmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgVHJlYXRtZW50IGZyb20gXCIuL1RyZWF0bWVudFwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlUcmVhdG1lbnQgKHsgXHJcbiAgICBhY3RpdmVQYWdlLCBcclxuICAgIGFjdGl2ZUNhdGVnb3J5LCBcclxuICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cyxcclxuICAgIHNlbGVjdFRyZWF0bWVudCBcclxufSkge1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBjYXRlZ29yeURhdGEsIGVycm9yOiBjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yLCBsb2FkaW5nOiBjYXRlZ29yeURhdGFMb2FkaW5nXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2NhdGVnb3JpZXNcIiwge30pO1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHRyZWF0bWVudERhdGEsIGVycm9yOiB0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvciwgbG9hZGluZzogdHJlYXRtZW50RGF0YUxvYWRpbmdcclxuICAgIH0gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvdHJlYXRtZW50c1wiLCB7fSlcclxuXHJcbiAgICBjb25zdCBbY2F0ZWdvcmllcywgc2V0Q2F0ZWdvcmllc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdHJlYXRtZW50cywgc2V0VHJlYXRtZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoY2F0ZWdvcnlEYXRhICE9PSBudWxsKSBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5RGF0YSk7XHJcbiAgICAgICAgaWYodHJlYXRtZW50RGF0YSAhPT0gbnVsbCkgc2V0VHJlYXRtZW50cyh0cmVhdG1lbnREYXRhKTtcclxuXHJcbiAgICB9LCBbY2F0ZWdvcnlEYXRhLCB0cmVhdG1lbnREYXRhXSlcclxuXHJcblxyXG5cclxuICAgIFxyXG4gICAgXHJcblxyXG4gICAgLy8gZnVuY3Rpb24gYWRkTmV3VHJlYXRtZW50KHN0eWxpc3QsIHRyZWF0bWVudCkge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHN0eWxpc3QpO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRyZWF0bWVudClcclxuICAgIC8vIH1cclxuXHJcbiAgIFxyXG4gICAgLy8gaWYoY2F0ZWdvcnlEYXRhTG9hZGluZyB8fCB0cmVhdG1lbnREYXRhTG9hZGluZykge1xyXG4gICAgLy8gICAgIHJldHVybiAoPGRpdj5Mb2FkaW5nLi4uLjwvZGl2Pik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gaWYoY2F0ZWdvcnlEYXRhRmV0Y2hpbmdFcnJvciB8fCB0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvcikge1xyXG4gICAgLy8gICAgIHJldHVybiAoPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2Pik7XHJcbiAgICAvLyB9XHJcbiAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5X3RyZWF0bWVudH0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5fT5cclxuICAgICAgICAgICAgICAgIHsvKiA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5TZWxlY3QgdGhlIENhdGVnb3J5PC9oND4gKi99XHJcbiAgICAgICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgY2F0ZWdvcnlcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW1fbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGVnb3JpZXMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7aW5kZXh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkgPSB7Y2hhbmdlQWN0aXZlQ2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50fT5cclxuICAgICAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCB0cmVhdG1lbnRcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnRzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUcmVhdG1lbnQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudHMgPSB7dHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RUcmVhdG1lbnQgPSB7c2VsZWN0VHJlYXRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBjbGllbnRHbG9iYWxTdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzXCJcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEV2ZW50SGFuZGxlckRpdiBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvRXZlbnRIYW5kbGVyRGl2XCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRyZWF0bWVudCAoeyBcclxuICAgIGl0ZW0sIFxyXG4gICAgYWN0aXZlQ2F0ZWdvcnksIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLCBcclxuICAgIHNlbGVjdFRyZWF0bWVudCxcclxuICAgIHRyZWF0bWVudHMgXHJcbn0pIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFRyZWF0bWVudHMuc29tZSh4eHggPT4geHh4LmRlc2NyaXB0aW9uID09PSBcImFiY1wiICYmIHh4eC5jYXRlZ29yeSA9PT0gXCJiYmNcIikpO1xyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudEl0ZW1fY29udGFpbmVyfSBcclxuICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogYWN0aXZlQ2F0ZWdvcnkgPT09IGl0ZW0uY2F0ZWdvcnkgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIHsvKiA8RXZlbnRIYW5kbGVyRGl2IFxyXG4gICAgICAgICAgICAgICAgY29udGVudCA9IHtgJHtpdGVtLnRpdGxlfSwgJHtpdGVtLmR1cmF0aW9ufSwgJHtpdGVtLnByaWNlfWB9IFxyXG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIgPSB7Y2hhbmdlQWN0aXZlVHJlYXRtZW50fSBcclxuICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGllbnRHbG9iYWxTdHlsZXMuZXZlbnRIYW5kbGVyX2Rpdn0gb25DbGljayA9IHtldmVudCA9PiBzZWxlY3RUcmVhdG1lbnQoZXZlbnQsIHRyZWF0bWVudHMpfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdHN9IHN0eWxlID0ge3tkaXNwbGF5OiBpdGVtLnRpdGxlID09PSBhY3RpdmVUcmVhdG1lbnQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgPHA+U2VsZWN0IGEgc3R5bGlzdDwvcD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0X2xpc3R9ID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdExpc3RfaXRlbX0gb25DbGljayA9IHtlID0+IGFkZFRyZWF0bWVudChlLnRhcmdldC50ZXh0Q29udGVudCwgaXRlbSl9PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3R5bGlzdHMubWFwKChzdHlsaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0TGlzdF9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtID0+IG5ld0l0ZW0uY2hvb3NlblN0eWxpc3QgPT09IHN0eWxpc3QgJiYgbmV3SXRlbS50cmVhdG1lbnRUaXRsZSA9PT0gaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtlID0+IGFkZFRyZWF0bWVudChlLnRhcmdldC50ZXh0Q29udGVudCwgaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0eWxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50X2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC50aXRsZSA9PT0gaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICkgJiYgXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmVkLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfSAoe2l0ZW0uZHVyYXRpb259IG1pbnV0ZXMpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6ICFpdGVtLmRlc2NyaXB0aW9uICYmIFwibm9uZVwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50X2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi8uLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuaW1wb3J0IENhdGVnb3J5U2VyaWFsIGZyb20gXCIuL0NhdGVnb3J5U2VyaWFsXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSAoeyBpdGVtLCBpbmRleCwgYWN0aXZlQ2F0ZWdvcnksIGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBzZWxlY3RlZFRyZWF0bWVudHMgfSkge1xyXG5cclxuICAgIC8vIEdyYWRpZW50cyBmb3IgYmFja2dyb3VuZFxyXG4gICAgY29uc3QgYmx1ZUdyYWRpZW50ID0gXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZGFya2JsdWUsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiO1xyXG4gICAgY29uc3QgcmVkR3JhZGllbnQgPSBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiO1xyXG5cclxuICAgIC8vIFN0eWxpbmcgQ29uZGl0aW9uc1xyXG4gICAgY29uc3QgY29uZGl0aW9uMSA9IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLnRpdGxlXHJcbiAgICBjb25zdCBjb25kaXRpb24yID0gc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUodHJlYXRtZW50ID0+IHRyZWF0bWVudC5jYXRlZ29yeSA9PT0gaXRlbS50aXRsZSk7XHJcblxyXG4gICAgLy8gSW5saW5lIHN0eWxlXHJcbiAgICBjb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZEltYWdlOiBjb25kaXRpb24xID8gYmx1ZUdyYWRpZW50IDogY29uZGl0aW9uMiAmJiByZWRHcmFkaWVudCB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtX2NvbnRhaW5lcn0+XHJcbiAgICBcclxuICAgICAgICAgICAgPEV2ZW50SGFuZGxlckRpdiBjb250ZW50ID0ge2l0ZW0udGl0bGV9IGNsaWNrRXZlbnRIYW5kbGVyID0ge2NoYW5nZUFjdGl2ZUNhdGVnb3J5fSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeV9pdGVtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtX2NvbnRlbnR9IHN0eWxlID0ge3N0eWxlfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeVNlcmlhbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0ge2l0ZW0udGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7eyBjb2xvcjogYWN0aXZlQ2F0ZWdvcnkgPT09IGl0ZW0udGl0bGUgJiYgXCJ3aGl0ZVwiIH19PntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5U2VyaWFsICh7IGluZGV4LCBjb250ZW50LCBhY3RpdmVDYXRlZ29yeSB9KSB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVDYXRlZ29yeSA9PT0gY29udGVudCAmJiBcIndoaXRlXCIsXHJcbiAgICAgICAgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBjb250ZW50ICYmIFwiYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIHN0eWxlID0ge3N0eWxlfT57aW5kZXggKyAxfTwvc3Bhbj5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEhhbmRsZXJEaXYoeyBjb250ZW50LCBjbGlja0V2ZW50SGFuZGxlciB9KSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudEhhbmRsZXJfZGl2fSBvbkNsaWNrID0ge2NsaWNrRXZlbnRIYW5kbGVyfT5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcblxyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY2xpZW50LXVpL0NsaWVudEdsb2JhbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtSGVhZGVyKHsgY29udGVudCB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaXRlbV9oZWFkZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IHtzdHlsZXMuaXRlbUhlYWRlcl9jb250ZW50fT57Y29udGVudH08L2g0PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuLy9pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtYXRpb24gKHsgYWN0aXZlUGFnZSwgY2xpZW50RXZlbnRzIH0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjbGllbnRFdmVudHMpO1xyXG5cclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldERhdGVzKGdldERhdGVzKCkpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIFxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSA1ID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIkNvbmZpcm1hdGlvblwiIC8+XHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAge2NsaWVudEV2ZW50cy5tYXAoZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGllbnRfZXZlbnRzXCIga2V5ID0ge2V2ZW50Ll9pZC50b1N0cmluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V2ZW50LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2V2ZW50LmV2ZW50RHVyYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEV2ZW50IHdpbGwgc3RhcnQgZnJvbSB7ZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVDYXJkICh7IGRhdGVUaW1lLCAgc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGUsIHNlbGVjdGVkVGltZSB9KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRUaW1lKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlQ2FyZF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHNldFNlbGVjdGVkRGF0ZShldmVudC50YXJnZXQudGV4dENvbnRlbnQpfSBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIaWRkZW5fZGl2fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7ZGF0ZVRpbWUuZGF0ZUluRGF0ZUZvcm1hdH1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9jYXJkfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogc2VsZWN0ZWREYXRlID09PSBkYXRlVGltZS5kYXRlSW5EYXRlRm9ybWF0IFxyXG4gICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZ3JlZW4sIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZS5pbmNsdWRlcyhkYXRlVGltZS5kYXRlSW5EYXRlRm9ybWF0KSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHJnYigyNTUsMCwwLCAwLjQpLCByZ2IoMCwwLDI1NSwgMC45KSwgZGFya2JsdWUpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLndlZWtEYXlfdGV4dH0+e2RhdGVUaW1lLmRhdGUud2Vla0RheX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RleHR9PntkYXRlVGltZS5kYXRlLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9udGhfdGV4dH0+e2RhdGVUaW1lLmRhdGUubW9udGh9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrSWNvbl9jb250YWluZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tib3JkZXI6IGRhdGVUaW1lLmRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwiMXB4IHNvbGlkIGJsdWVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGUgPSB7e2NvbG9yOiBkYXRlVGltZS5kYXRlLndlZWtEYXkgPT09IFwiVG9kYXlcIiAmJiBcImJsdWVcIn19IGNsYXNzTmFtZT1cImZhciBmYS1jbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaG9vc2VTdHlsaXN0cyBmcm9tIFwiLi9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHNcIjtcclxuaW1wb3J0IERhdGVDYXJkIGZyb20gXCIuL0RhdGVDYXJkXCI7XHJcbmltcG9ydCBTdHlsaXN0cyBmcm9tIFwiLi9TdHlsaXN0c1wiO1xyXG5pbXBvcnQgVGltZXMgZnJvbSBcIi4vVGltZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUgKHsgXHJcbiAgICBzdGF0ZSwgXHJcbiAgICBhY3RpdmVQYWdlLCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cywgXHJcbiAgICBzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMsXHJcbiAgICBsb2NhdGlvbixcclxuICAgIHNlbGVjdGVkRGF0ZSxcclxuICAgIHNldFNlbGVjdGVkRGF0ZSxcclxuICAgIHNlbGVjdGVkVGltZSxcclxuICAgIHNldFNlbGVjdGVkVGltZSBcclxufSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGVUaW1lcywgc2V0RGF0ZVRpbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG4gICAgY29uc3QgW2RhdGVJbmRleCwgc2V0RGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICBcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldERhdGVzKGdldERhdGVzKCkpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICBcclxuICAgIGNvbnNvbGUubG9nKGRhdGVUaW1lcyk7XHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRpbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPENob29zZVN0eWxpc3RzIFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICBzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMgPSB7c2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSB7bG9jYXRpb259IFxyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZVRpbWVzID0ge3NldERhdGVUaW1lc31cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZSA9IHtzZXRTZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE0YWI4YjEyNmQuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBkYXRlL3RpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlVGltZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucHJldn0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlVGltZSA9IHtkYXRlVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWREYXRlID0ge3NlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlID0ge3NldFNlbGVjdGVkRGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZSA9IHtzZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWlsYWJsZV90aW1lX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVzLm1hcCgoZGF0ZVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7YCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUud2Vla0RheX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogc2VsZWN0ZWREYXRlID09PSBkYXRlVGltZS5kYXRlSW5EYXRlRm9ybWF0ID8gXCJmbGV4XCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWUudGltZXMubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHt0aW1lfSBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudCA9PiBzZWxlY3RlZFRpbWUgPT09IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA/IHNldFNlbGVjdGVkVGltZShcIlwiKSA6IHNldFNlbGVjdGVkVGltZShldmVudC50YXJnZXQudGV4dENvbnRlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUhpZGRlbl9kaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgJHtzZWxlY3RlZERhdGV9VCR7dGltZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5kaXZpZHVhbF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBzZWxlY3RlZFRpbWUgPT09IGAke3NlbGVjdGVkRGF0ZX1UJHt0aW1lfWAgJiYgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwwLDAsIDAuNCksIHJnYigwLDAsMjU1LCAwLjkpLCBkYXJrYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3R5bGlzdHNfdGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxpc3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGltZXMgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKi99XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQmVhdXRpY2lhbiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQucG5nXCJcclxuaW1wb3J0IEJlYXV0aWNpYW4yIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvQ29tcG9uZW50IDE0MyDigJMgMi5wbmdcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHlsaXN0cyAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0c19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGUgPSB7e21hcmdpbkJvdHRvbTogXCIxMHB4XCJ9fT5TdHlsaXN0PC9oND5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInBpbmtcIn19PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPEltYWdlIHNyYz17QmVhdXRpY2lhbn0gLz5cclxuICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkF0aGVuYTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5Tb3VkaTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5UaW5hPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQmVhdXRpY2lhbiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQucG5nXCJcclxuaW1wb3J0IEJlYXV0aWNpYW4yIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvQ29tcG9uZW50IDE0MyDigJMgMi5wbmdcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lcyAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifX0gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb21wb25lbnRzIFxyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5pbXBvcnQgeyBmaW5kVGltZVNsb3RzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9maW5kVGltZVNsb3RzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9vc2VTdHlsaXN0cyAoeyBcclxuICAgIGxvY2F0aW9uLCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cywgXHJcbiAgICBzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMsXHJcbiAgICBzZXREYXRlVGltZXMsIFxyXG4gICAgc2V0U2VsZWN0ZWREYXRlIFxyXG59KSB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG8gMTBweCBhdXRvXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBbdHJlYXRtZW50cywgc2V0VHJlYXRtZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gT25DaGFuZ2UgaGFuZGxlciBmb3Igc3R5bGlzdFxyXG4gICAgZnVuY3Rpb24gZmluYWxpemVUcmVhdG1lbnRzKGV2ZW50LCBpbmRleCkge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcInN0eWxpc3Q6IFwiICsgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0LnZhbHVlIGNvbnRhaW5zIHRoZSBzdHlsaXN0XHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgdHJlYXRtZW50IGZyb20gdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBsaXN0IHVzaW5nIGluZGV4XHJcbiAgICAgICAgY29uc3QgdHJlYXRtZW50ID0gc2VsZWN0ZWRUcmVhdG1lbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBuZXdUcmVhdG1lbnRUaXRsZSA9IHNlbGVjdGVkVHJlYXRtZW50c1tpbmRleF0udGl0bGU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIEV2ZXJ5IHRyZWF0bWVudCBoYXMgbXVsdGlwbGUgc3R5bGlzdHMgYW5kIHVzZXIgaGFzIHRoZSBmbGV4aWJpbGl0eSB0byBjaG9vc2Ugc3R5bGlzdCBmcm9tIHRoZSBzdHlsaXN0cyBvZiBhIFxyXG4gICAgICAgIC8vIHNwZWNpZmljIHRyZWF0bWVudC4gSWYgdXNlciBpcyB0cnlpbmcgdG8gY2hhbmdlIHRoZSBzdHlsaXN0IHRoZW4gcHJldmlvdXMgdHJlYXRtZW50IG11c3QgYmUgb21taXR0ZWQuICBcclxuICAgICAgICBjb25zdCBkb2VzRXhpc3QgPSB0cmVhdG1lbnRzLnNvbWUobmV3SXRlbSA9PiBuZXdJdGVtLnRyZWF0bWVudFRpdGxlID09PSBuZXdUcmVhdG1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIGlmKGRvZXNFeGlzdCB8fCAhc3R5bGlzdCkge1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFRyZWF0bWVudHMgPSB0cmVhdG1lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0udHJlYXRtZW50VGl0bGUgIT09IG5ld1RyZWF0bWVudFRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFzdHlsaXN0KSByZXR1cm4gc2V0VHJlYXRtZW50cyhmaWx0ZXJlZFRyZWF0bWVudHMpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3dHJlYXRtZW50ID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0cmVhdG1lbnQuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IHRyZWF0bWVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiB0cmVhdG1lbnQucHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogdHJlYXRtZW50LnRpdGxlXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VHJlYXRtZW50cyhbLi4uZmlsdGVyZWRUcmVhdG1lbnRzLCBuZXd0cmVhdG1lbnRdKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld3RyZWF0bWVudCA9IHtcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cmVhdG1lbnQuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBzdHlsaXN0LFxyXG4gICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IHRyZWF0bWVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IHRyZWF0bWVudC5wcmljZSxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IHRyZWF0bWVudC50aXRsZVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IHsgcmV0dXJuIFsuLi5jdXJyZW50VmFsdWUsIG5ld3RyZWF0bWVudF19KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRUaW1lcygpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgdHJlYXRtZW50cyBhcyBwZXIgdGhlIGNsaWVudCdzIHNlbGVjdGlvbiBvcmRlci4gXHJcbiAgICAgICAgY29uc3QgbmV3VHJlYXRtZW50cyA9IFtdO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMuZm9yRWFjaChzZWxlY3RlZFRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICB0cmVhdG1lbnRzLmZvckVhY2godHJlYXRtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnQudHJlYXRtZW50VGl0bGUgPT09IHNlbGVjdGVkVHJlYXRtZW50LnRpdGxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyZWF0bWVudHMucHVzaCh0cmVhdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKG5ld1RyZWF0bWVudHMubGVuZ3RoICE9PSBzZWxlY3RlZFRyZWF0bWVudHMubGVuZ3RoKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgc3R5bGlzdCBmb3IgYWxsIHRyZWF0bWVudHNcIik7XHJcblxyXG4gICAgICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyhuZXdUcmVhdG1lbnRzKTtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBjb25zdCBkYXRlVGltZXMgPSBhd2FpdCBmaW5kVGltZVNsb3RzKG5ld1RyZWF0bWVudHMpO1xyXG5cclxuICAgICAgICBzZXREYXRlVGltZXMoZGF0ZVRpbWVzKTtcclxuXHJcbiAgICBcclxuICAgICAgICBzZXRTZWxlY3RlZERhdGUoZGF0ZVRpbWVzWzBdLmRhdGVJbkRhdGVGb3JtYXQpO1xyXG5cclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyh0cmVhdG1lbnRzKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob29zZV9zdHlsaXN0c1wiPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJDaG9vc2Ugc3R5bGlzdHNcIiAvPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLm1hcCgodHJlYXRtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfSBrZXkgPSB7dHJlYXRtZW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJlYXRtZW50LmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmVhdG1lbnQudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0cmVhdG1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmRleCB3aWxsIGZpbmQgdGhlIHRyZWF0bWVudCBmcm9tIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IGZpbmFsaXplVHJlYXRtZW50cyhldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlwiPkNob29zZSBzdHlsaXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudC5zdHlsaXN0cy5tYXAoc3R5bGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleSA9IHtzdHlsaXN0fSB2YWx1ZSA9IHtzdHlsaXN0fT57c3R5bGlzdH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfT5cclxuICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UcmVhdG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkF0aGVuYSBHb3JnZW91c1wiPkF0aGVuYSBHb3JnZW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlNvdWRpIEdvcmdlb3VzXCI+U291ZGkgR29yZ2VvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJKZW5uaWZlciBHb3JnZW91c1wiPkplbm5pZmVyIEdvcmdlb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc3Nzc1wiIHN0eWxlID0ge3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaW5kVGltZXN9PkZpbmQgQXZhaWxhYmxlIFN0YXJ0aW5nIFRpbWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1hZ2VzLzYuc3ZnXCI7XHJcblxyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb3JtYXRpb25QYXltZW50ICh7IGFjdGl2ZVBhZ2UsIGNsaWVudEluZm8sIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIsIHZhbGlkYXRpb25FcnJvciwgY3JlYXRlQm9va2luZyB9KSB7XHJcblxyXG4gICAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgLy8gfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19wYXltZW50fSAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHsvKiA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1BheW1lbnRfaGVhZGVyfT5JbmZvcm1hdGlvbiAvIFBheW1lbnQ8L2g0PiAqL31cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiSW5mb3JtYXRpb24gLyBwYXltZW50XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1BheW1lbnRfY29udGVudH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZV9pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5OYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZV9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG9uZV9pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9PlBob25lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCIrMzEgMjM1IDU2MzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiYWJjZEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2Uga2VlcCBtZSBpbmZvcm1lZCBvZiB0aGUgb2ZmZXJzIGFuZCBwcm9tb3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dIZWFyZEFib3V0VXNfaW5wdXR9IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5Ib3cgZGlkIHlvdSBoZWFyIGFib3V0IGF0aGVuYSBiZWF1dHkgY2FyZT88L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZSA9IFwiaG93SGVhcmRBYm91dFVzXCIgb25DaGFuZ2U9e2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJGcmllbmRzXCI+RnJpZW5kczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJvdGhlcnNcIj5PdGhlcnM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJob3dIZWFyZEFib3V0VXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5ob3dIZWFyZEFib3V0VXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxwPlBob25lPC9wPiAqL31cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBzdHlsZSA9IHt7ZGlzcGxheTogY2xpZW50SW5mby5lbWFpbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0gb25DbGljayA9IHtjcmVhdGVCb29raW5nfT5Db25maXJtPC9idXR0b24+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0ICh7IHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCB2YWx1ZSwgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciwgdmFsaWRhdGlvbkVycm9yIH0pIHtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlID0ge3R5cGV9IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0ge3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB2YWxpZGF0aW9uRXJyb3IgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIudG9Mb3dlckNhc2UoKX0gY2FuJ3QgYmUgYmxhbmtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF4aW9zKHVybCkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBlbmRQb2ludCA9IGBodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9ucy8ke3VybH1gO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoZW5kUG9pbnQpO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICAgIH0sIFt1cmxdKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXRhLCBlcnJvciwgbG9hZGluZyB9O1xyXG5cclxufVxyXG4iLCIvLyBOZXh0IE1vZHVsZXNcclxuLy8gaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuLy8gaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuLy8gaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY2xpZW50LXVpL0xvY2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IExvY2F0aW9uSWNvbiBmcm9tIFwiLi9Mb2NhdGlvbkljb25cIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuaW1wb3J0IEV2ZW50SGFuZGxlckRpdiBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvRXZlbnRIYW5kbGVyRGl2XCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uICh7IGFjdGl2ZVBhZ2UsIHN0YXRlLCB1cGRhdGVTdGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3Qge2RhdGEsIGVycm9yLCBsb2FkaW5nfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnNcIiwge30pO1xyXG4gICAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihkYXRhICE9PSBudWxsKSBzZXRMb2NhdGlvbnMoZGF0YSk7XHJcbiAgICAgICAgLy8gaWYoY2F0ZWdvcnlEYXRhICE9PSBudWxsKSBzZXRDYXRlZ29yaWVzKGNhdGVnb3J5RGF0YSk7XHJcbiAgICAgICAgLy8gaWYodHJlYXRtZW50RGF0YSAhPT0gbnVsbCkgc2V0VHJlYXRtZW50cyh0cmVhdG1lbnREYXRhKTtcclxuXHJcbiAgICB9LCBbZGF0YV0pXHJcblxyXG5cclxuICAgIGlmKGxvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi4uPC9kaXY+XHJcbiAgICBpZihlcnJvcikgcmV0dXJuIDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj5cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdF9sb2NhdGlvbn0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDEgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IGxvY2F0aW9uXCIgLz5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25fbGlzdH0+XHJcbiAgICAgICAgICAgICAgICB7bG9jYXRpb25zLm1hcCgobG9jYXRpb24sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHtpbmRleCArIDF9IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXZlbnRIYW5kbGVyRGl2IGNvbnRlbnQgPSB7bG9jYXRpb24udGl0bGV9IGNsaWNrRXZlbnRIYW5kbGVyID0ge3VwZGF0ZVN0YXRlfSAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uSW5mb19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25faW5mb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzdGF0ZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24udGl0bGUgJiYgXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1Pntsb2NhdGlvbi50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbi5hZGRyZXNzMX0sIHtsb2NhdGlvbi5hZGRyZXNzMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+WmlwIENvZGU6IHtsb2NhdGlvbi56aXBDb2RlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5QaG9uZToge2xvY2F0aW9uLnBob25lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uY2l0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9uLmNvdW50cnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9jYXRpb25JY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY2xpZW50LXVpL0xvY2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvY2F0aW9uSWNvbigpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2ljb259PlxyXG4gICAgICAgICAgICA8aSBzdHlsZSA9IHt7Y29sb3I6IFwiZGFya2JsdWVcIiwgZm9udFNpemU6IFwiMjRweFwifX0gY2xhc3NOYW1lPVwiZmFzIGZhLW1hcC1tYXJrZXItYWx0XCI+PC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcblxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gXCIuL05hdmlnYXRpb25CdXR0b25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25UZXh0IGZyb20gXCIuL05hdmlnYXRpb25UZXh0XCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyICh7IHN0YXRlLCBzZWxlY3RlZFRyZWF0bWVudHMsIGFjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2UsIHNlbGVjdGVkVGltZSB9KSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAge2lkOiAxLCBjb250ZW50OiBcIlNlbGVjdCBMb2NhdGlvblwifSxcclxuICAgICAgICB7aWQ6IDIsIGNvbnRlbnQ6IFwiQ2F0ZWdvcnkgYW5kIFRyZWF0bWVudFwifSxcclxuICAgICAgICB7aWQ6IDMsIGNvbnRlbnQ6IFwiU2VsZWN0IFRpbWUgLyBEYXRlXCJ9LFxyXG4gICAgICAgIHtpZDogNCwgY29udGVudDogXCJJbmZvcm1hdGlvbiAvIFBheW1lbnRcIn0sXHJcbiAgICAgICAge2lkOiA1LCBjb250ZW50OiBcIkNvbmZpcm1hdGlvblwifVxyXG4gICAgXTtcclxuXHJcbiAgICAvLyBjb25zdCBpdGVtcyA9IFtcclxuICAgIC8vICAgICB7aWQ6IDEsIGNvbnRlbnQ6IFwiQ2F0ZWdvcnkgYW5kIFRyZWF0bWVudFwifSxcclxuICAgIC8vICAgICB7aWQ6IDIsIGNvbnRlbnQ6IFwiU2VsZWN0IExvY2F0aW9uXCJ9LFxyXG4gICAgLy8gICAgIHtpZDogMywgY29udGVudDogXCJTZWxlY3QgVGltZSAvIERhdGVcIn0sXHJcbiAgICAvLyAgICAge2lkOiA0LCBjb250ZW50OiBcIkluZm9ybWF0aW9uIC8gUGF5bWVudFwifSxcclxuICAgIC8vICAgICB7aWQ6IDUsIGNvbnRlbnQ6IFwiQ29uZmlybWF0aW9uXCJ9XHJcbiAgICAvLyBdO1xyXG4gICAgXHJcbiAgICBcclxuICAgIGNvbnN0IFt3aW5kb3dXaWR0aCwgc2V0V2luZG93V2lkdGhdID0gdXNlU3RhdGUoMCk7XHJcblxyXG4gICAgaWYodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKTtcclxuXHJcbiAgICB9LCBbXSk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uQmFyX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX2Jhcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB7d2luZG93V2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUGFnZSA9IHtzZXRBY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2l0ZW0uaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZSA9IHtzZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uVGV4dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvblRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHt3aW5kb3dXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0ge2l0ZW0uY29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCIvLyAvL1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uICh7IFxyXG4gICAgd2luZG93V2lkdGgsIFxyXG4gICAgc3RhdGUsIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLCBcclxuICAgIGFjdGl2ZVBhZ2UsIFxyXG4gICAgc2V0QWN0aXZlUGFnZSwgXHJcbiAgICB2YWx1ZSwgXHJcbiAgICBzZWxlY3RlZFRpbWUgXHJcbn0pIHtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUGFnZShldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IE51bWJlcihldmVudC50YXJnZXQudGV4dENvbnRlbnQpO1xyXG5cclxuICAgICAgICBpZihuZXdWYWx1ZSA9PT0gMiAmJiAhc3RhdGUubG9jYXRpb24pIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBsb2NhdGlvblwiKTtcclxuXHJcbiAgICAgICAgaWYobmV3VmFsdWUgPT09IDMgJiYgIXNlbGVjdGVkVHJlYXRtZW50cy5sZW5ndGgpIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYXQgbGVhc3Qgb25lIHRyZWF0bWVudFwiKTtcclxuICAgICAgICBpZihuZXdWYWx1ZSA9PT0gNCAmJiAhc2VsZWN0ZWRUaW1lKSByZXR1cm4gYWxlcnQoXCJQbGVhc2UgcGljayBhIHN0YXJ0aW5nIHRpbWVcIik7XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZVBhZ2UobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX2xpbmtzfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmICh3aW5kb3dXaWR0aCA8PSA2MDAgPyBcIjUwcHhcIiA6IFwiMTAwcHhcIil9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmIFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogYWN0aXZlUGFnZSA9PT0gdmFsdWUgJiYgXCJkYXJrYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtzdHlsZXMubmF2aWdhdGlvbkxpbmtfYnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHthY3RpdmVQYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPSB7ZXZlbnQgPT4gc2V0QWN0aXZlUGFnZShOdW1iZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz0ge2NoYW5nZUFjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5ibGFua1BhcmFfY29udGFpbmVyfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiB2YWx1ZSA9PT0gNSAmJiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuIiwiLy8gLy9cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvblRleHQgKHsgd2luZG93V2lkdGgsIHRleHQgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX3RleHR9IHN0eWxlID0ge3t3aWR0aDogdGV4dCA9PT0gXCJDb25maXJtYXRpb25cIiAmJiAod2luZG93V2lkdGggPD0gNjAwID8gXCI1MHB4XCIgOiBcIjEwMHB4XCIpfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gc3R5bGUgPSB7e3dpZHRoOiB0ZXh0ID09PSBcIkNvbmZpcm1hdGlvblwiICYmIFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRlbnR9ID57dGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfYmxhbmtEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgICAgICBcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2ZldGNoRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNcIjtcclxuaW1wb3J0IHsgZ2V0V29ya2luZ1RpbWVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRUaW1lc0FycmF5ID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGltZVNsb3RzID0gYXN5bmMgKG5ld1RyZWF0bWVudHMpID0+IHtcclxuXHJcbiAgICAvKlxyXG4gICAgY29uc3QgbmV3VHJlYXRtZW50cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBlcm1hbmVudCBNYWtldXBcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiSmVubmlmZXIgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDg1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogMjMsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlBlcm1hbmVudCBNYWtldXAgd2l0aCBsaWdodCBtYXNzYWdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiTWFzc2FnZVwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBbmRyZWEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDc1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIk1hc3NhZ2UgZm9yIDMwIG1pbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCcm93c1wiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBdGhlbmEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDM1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlNoYXBpbmcgYnJvd3NcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdO1xyXG4gICAgKi9cclxuXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIDMwIGRhdGVzIGluIHRoZSBmb3JtYXQgJ3llYXItbW9udGgtZGF0ZScgZm9ybWF0IHN0YXJ0aW5nIGZyb20gdG9kYXlcclxuICAgIGNvbnN0IGRhdGVzQXJyYXkgPSBnZXREYXRlcygpO1xyXG5cclxuICAgIC8vIFB1dHRpbmcgdGhlIGxvY2F0aW9uIGluZm8gaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgXHJcbiAgICAvLyBGZXRjaGluZyBpbmZvcm1hdGlvbiBvZiBhbGwgc3R5bGlzdHMgYXMgcGVyIGFsbCB0cmVhdG1lbnRzXHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgY29uc29sZS5sb2coYWxsU3R5bGlzdHMpO1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gYXdhaXQgZmV0Y2hFdmVudHMoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJDYWxlbmRhciBldmVudHM6IFwiLCBjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBkYXRlcyB3aGVuIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEFsc28gZmluZCBhbGwgdGhlIHdvcmtpbmdUaW1lcyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIC8vIG9uIHRob3NlIGRhdGVzXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBnZXRXb3JraW5nVGltZXMoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZmluZEZyZWVUaW1lcyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMsIGNhbGVuZGFyRXZlbnRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2god29ya2luZ1RpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB4eHggPSBbXTtcclxuXHJcbiAgICAgICAgd29ya2luZ1RpbWUuc3R5bGlzdFdvcmtpbmdUaW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudERhdGUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nSG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTWludXRlID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuc3RhdHVzID09PSBcIkFjdGl2ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50RGF0ZSA9PT0gd29ya2luZ1RpbWUuZGF0ZSAmJiBldmVudC5zdHlsaXN0ID09PSBpdGVtLnN0eWxpc3QgJiYgZXZlbnQuZXZlbnRMb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBNYXRoLmNlaWwoZXZlbnQuZXZlbnREdXJhdGlvbiAvIDE1KTsgaysrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSAoMTUgKiBrKSArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWwgLyA2MCBnaXZlcyB1cyB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIGhvdXIuIEZvciBleGFtcGxlIC0gaWYgaW50ZXJ2YWwgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW50ZXJ2YWwgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dvcmtpbmdUaW1lcyA9IGl0ZW0ud29ya2luZ1RpbWVzLmZpbHRlcih0aW1lID0+ICFidXN5VGltZXMuaW5jbHVkZXModGltZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeHh4LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogaXRlbS5zdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzOiBuZXdXb3JraW5nVGltZXNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGU6IHdvcmtpbmdUaW1lLmRhdGUsIHN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXM6IHh4eH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gUmVkdWNlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cy4gRmlyc3Qgb25lIGlzIGEgZnVuY3Rpb24gd2l0aCB0d28gcGFyYW1ldGVycyBhbmQgdGhlIHNlY29uZCBpcyBpbml0aWFsIHZhbHVlXHJcbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgKGZvciBmb2xsb3dpbmcgY2FzZSwgMCkgdGhlbiByZWR1Y2UgZnVuY3Rpb24gd2lsbCBieSBkZWZhdWx0IHRha2UgdGhlXHJcbiAgICAvLyBmaXJzdCBpdGVtIG9mIHRoZSBhcnJheSBhcyB0aGUgaW5pdGlhbCB2YWx1ZS4gICBcclxuICAgIGNvbnN0IGNvdW50T2ZUaW1lc1RvT21taXQgPSBuZXdUcmVhdG1lbnRzLnJlZHVjZSgodG90YWwsIHRyZWF0bWVudCkgPT4gdG90YWwgKyAoTWF0aC5jZWlsKHRyZWF0bWVudC50cmVhdG1lbnREdXJhdGlvbiAvIDE1KSksIDApO1xyXG4gIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3VudE9mVGltZXNUb09tbWl0KTtcclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQpO1xyXG5cclxuICAgIGNvbnN0IHFxcSA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAyMDIxLTExLTE1XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHN0YXJ0aW5nIGZyZWUgdGltZXMgb2YgZWFjaCBkYXRlXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IChkZWZhdWx0VGltZXNBcnJheS5sZW5ndGggKyAxKSAtIGNvdW50T2ZUaW1lc1RvT21taXQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gMTA6MDBcclxuXHJcbiAgICAgICAgICAgIC8vIHRvdGFsVGltZUNvdW50IHZhbHVlIHdpbGwgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgbG9vcC4gXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgaGFzIHRocmVlIGl0ZW1zIChzYXkgZmlyc3QgaXRlbSdzIGR1cmF0aW9uIGlzIDQ1LCBzZWNvbmQgaXMgNTUgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGlyZCBpcyAyNSkgdGhlbiBhdCB0aGUgZW5kIG9mIHRoZSBsb29wIHRvdGFsVGltZUNvdW50IHdpbGwgYmUgKE1hdGguY2VpbCg0NSAvIDE1KSArICBNYXRoLmNlaWwoNTUgLyAxNSlcclxuICAgICAgICAgICAgLy8gKyBNYXRoLmNlaWwoMjUgLyAxNSkpIDMgKyA0ICsgMiA9IDlcclxuICAgICAgICAgICAgbGV0IHRvdGFsVGltZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgYXJyYXkgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBmcmVlIHRpbWVzIG9mIGVhY2ggc3R5bGlzdCBieSBsb29waW5nIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAvLyBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXNbal07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvdW50IHdpbGwgZGV0ZXJtaW5lIGhvdyBtYW55IGZyZWUgdGltZXMgc2hvdWxkIGJlIGxvb2tlZCBmb3IuIEZvciBleGFtcGxlIGlmIGNvdW50IGlzIDMgYW5kIHN0YXJ0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKG5ld1RyZWF0bWVudHNbal0udHJlYXRtZW50RHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHZlcnkgY3J1Y2lhbC4gT24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSB0aGlzIHN0YXJ0aW5nVGltZSB3aWxsIGJlIHVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAwOTo0NSBmb3IgdGhlIDJuZCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheS4gU2F5IGZvciB0aGUgc2Vjb25kIGl0ZW0gY291bnQgaXMgNCBhbmQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydGluZ1RpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBhZnRlciB0aGUgdGltZSBvZiBsYXN0IGl0ZW0gb2YgdGVtcCBhcnJheS4gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRlZmF1bHRUaW1lc0FycmF5LmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyAxMVxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDw9IGNvdW50OyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG1pbnV0ZXMgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyZWVUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE51bWJlcihtaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXkgc3RhcnRpbmdUaW1lIGlzIDA5OjAwICYgY291bnQgaXMgMy4gU28gdG90YWxUaW1lQ291bnQgaXMgYWxzbyAzLiBBZnRlciBmaXJzdCBpdGVyYXRpb24gdGVtcC5sZW5ndGggXHJcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGggPCB0b3RhbFRpbWVDb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkZWZhdWx0VGltZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcXEucHVzaCh7ZGF0ZTogZGF0ZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHFxcSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZVRpbWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBxcXEuZm9yRWFjaCgoZGF0ZVRpbWVzLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZVRpbWVzLmRhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3QgeWVhciA9IG5ld0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBjb25zdCB3ZWVrRGF5ID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgIHdlZWtkYXk6IFwic2hvcnRcIiB9KTtcclxuICAgICAgICBjb25zdCBtb250aCA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSk7XHJcblxyXG4gICAgICAgIGRhdGVUaW1lc0FycmF5LnB1c2goe1xyXG4gICAgICAgICAgICBkYXRlOiB7ZGF0ZSwgd2Vla0RheSwgbW9udGgsIHllYXJ9LFxyXG4gICAgICAgICAgICBkYXRlSW5EYXRlRm9ybWF0OiBkYXRlVGltZXMuZGF0ZSxcclxuICAgICAgICAgICAgdGltZXM6IGRhdGVUaW1lcy50aW1lc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRlVGltZXNBcnJheTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG4vLyBGZXRjaGluZyBjYWxlbmRhciBldmVudHMgb2YgYWxsIHN0eWxpc3RzXHJcbi8vIGZvciBsb29wIGlzIHRoZSB3YXkgdG8gZ28gZm9yIGZldGNoaW5nIGRhdGEgdGhyb3VnaCBhcGkgY2FsbHMuIGZvckVhY2ggc3Vja3MuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEV2ZW50cyA9IGFzeW5jICgpID0+IHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5ldmVudHM7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBnZXREYXRlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG5cclxuICAgIC8vIFBvcHVsYXRpbmcgZGF0ZVRpbWVBcnJheSB3aXRoIDMwIGRhdGVzIGZyb20gdG9kYXlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMzA7IGkrKykge1xyXG5cclxuICAgICAgICAvLyBPbmUgZGF5IGVxdWFscyA4NjQwMDAwMCBtaWxsaXNlY29uZHMuIEZvciBlYWNoIGl0ZXJhdGlvbiB3ZSBuZWVkIHRvIGFkZCAoODY0MDAwMDAgKiBpKSBtaWxsaXNlY29uZHMgd2l0aCB0b2RheS4gVGhpcyB3YXlcclxuICAgICAgICAvLyB3ZSBjYW4gY2FsY3VsYXRlIGRhdGVzIGFzIG1hbnkgYXMgd2Ugd2FudC4gICBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgaWYgKGRheSA8IDEwKSBkYXkgPSBgMCR7ZGF5fWA7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgICAgICBkYXRlcy5wdXNoKG5ld0RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZXM7XHJcblxyXG59IiwiLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuLy8gZm9yIGxvb3AgaXMgdGhlIHdheSB0byBnbyBmb3IgZmV0Y2hpbmcgZGF0YSB0aHJvdWdoIGFwaSBjYWxscy4gZm9yRWFjaCBzdWNrcy5cclxuZXhwb3J0IGNvbnN0IGdldFN0eWxpc3RzID0gYXN5bmMgKG5ld1RyZWF0bWVudHMpID0+IHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxpc3RzID0gW107XHJcblxyXG4gICAgICAgIG5ld1RyZWF0bWVudHMuZm9yRWFjaCh0cmVhdG1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxpc3RGdWxsTmFtZSA9IHN0eWxpc3QuZmlyc3ROYW1lICsgXCIgXCIgKyBzdHlsaXN0Lmxhc3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRyZWF0bWVudC5jaG9vc2VuU3R5bGlzdCA9PT0gc3R5bGlzdEZ1bGxOYW1lKSBzdHlsaXN0cy5wdXNoKHN0eWxpc3QpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGlzdHM7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImNvbnN0IHRpbWVzID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl07XHJcblxyXG4vLyAyMDIxLTExLTE1XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V29ya2luZ1RpbWVzID0gKGRhdGVzQXJyYXksIGFsbFN0eWxpc3RzLCBuZXdUcmVhdG1lbnRzLCBsb2NhdGlvbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyA9IFtdO1xyXG5cclxuICAgIC8vIEZvciBlYWNoIGRhdGUgb2YgdGhlIGRhdGVUaW1lQXJyYXkgbG9vcCB0aHJvdWdoIHRoZSBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZHVsZSB0byBmaW5kIGRheSBtYXRjaC5cclxuICAgIGRhdGVzQXJyYXkuZm9yRWFjaChkYXRlID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgZGF5IG5hbWUgKGV4YW1wbGUgLSBNb25kYXkpIGZyb20gdGhlIGRhdGUgdG8gY2hlY2sgYWdhaW5zdCBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZWR1bGUncyBkYXkgTmFtZVxyXG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBuZXdEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIE5vIHN0eWxpc3QgaGFzIHdvcmtTY2hlZHVsZSBvbiBTYXR1cmRheSBhbmQgU3VuZGF5IHNvIGVuZCB0aGUgY3VycmVudCBpdGVyYXRpb24gaGVyZVxyXG4gICAgICAgIGlmKGRheU5hbWUgPT09IFwiU2F0dXJkYXlcIiB8fCBkYXlOYW1lID09PSBcIlN1bmRheVwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTG9vdCB0aHJvdWdoIGFsbCBzdHlsaXN0cyB0byBiZSBhYmxlIHRvIGxvb3AgdGhyb3VnaCB0aGVpciB3b3JrU2NoZWR1bGUgXHJcbiAgICAgICAgYWxsU3R5bGlzdHMuZm9yRWFjaChzdHlsaXN0ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgb25lIGZyb20gdGhlIHN0eWxpc3Qgd29ya1NjaGVkdWxlIGFycmF5IHdpbGwgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBkYXRlIGl0ZXJhdGlvbiwgaWYgaXQncyBmb3VuZCBubyBuZWVkIHRvXHJcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzdCBvZiB0aGUgc2NoZWR1bGVzXHJcbiAgICAgICAgICAgIGZvcihsZXQgcCA9IDA7IHAgPCBzdHlsaXN0LndvcmtTY2hlZHVsZS5sZW5ndGg7IHArKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlID0gc3R5bGlzdC53b3JrU2NoZWR1bGVbcF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2NoZWR1bGUubG9jYXRpb24gPT09IGxvY2F0aW9uICYmIHNjaGVkdWxlLmRheSA9PT0gZGF5TmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiB0aW1lcyBhYm92ZSBoYXMgYWxsIHRoZSBwb3NzaWJsZSB3b3JraW5nIHRpbWVzLiBzdGFydFRpbWVJbmRleCBpcyB0aGUgaW5kZXggb2YgdGltZSBmcm9tIHRoZSB0aW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5LCBlbmRUaW1lSW5kZXggaXMgdGhlIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB3aGljaCB0aW1lcyBmcm9tIHRoZSB0aW1lcyBhcnJheSBhYm92ZSBtYXRjaCB3aXRoIHRoZSB3b3JraW5nIHN0YXJ0IGFuZCBlbmQgdGltZSBvZiB0aGUgY3VycmVudCBzdHlsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb24gY3VycmVudCBkYXRlLiBXZSBuZWVkIHRvIHB1dCBhbGwgdGhlIHRpbWVzIHN0YXJ0aW5nIGZyb20gc3RhcnRUaW1lIGFuZCBlbmRpbmcgYXQgZW5kVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzY2hlZHVsZS5zdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWVJbmRleCA9IHRpbWVzLmluZGV4T2Yoc2NoZWR1bGUuZW5kVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtpbmdUaW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHEgPSBzdGFydFRpbWVJbmRleDsgcSA8PSBlbmRUaW1lSW5kZXg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZXMucHVzaCh0aW1lc1txXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2goeyBzdHlsaXN0OiBzdHlsaXN0LmZpcnN0TmFtZSArIFwiIFwiICsgc3R5bGlzdC5sYXN0TmFtZSwgd29ya2luZ1RpbWVzfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTYXkgZGF5IG9mIGN1cnJlbnQgZGF0ZSBpdGVyYXRpb24gaXMgTW9uZGF5IGFuZCBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBvbiB0aGlzIGRheSBhdCB0aGUgcmVxdWVzdGVkIGxvY2F0aW9uLiBJdFxyXG4gICAgICAgIC8vIG1lYW5zIGEgXHJcbiAgICAgICAgaWYodGVtcC5sZW5ndGggPT09IG5ld1RyZWF0bWVudHMubGVuZ3RoKSBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGUsIHN0eWxpc3RXb3JraW5nVGltZXM6IHRlbXB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzO1xyXG5cclxufSIsIlxyXG5leHBvcnQgY29uc3QgZ2V0RGF0ZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGRhdGVzQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gICAgZGF0ZXNBcnJheS5wdXNoKHtcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLmdldERhdGUoKSxcclxuICAgICAgICB3ZWVrRGF5OiBcIlRvZGF5XCIsXHJcbiAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSApXHJcbiAgICB9KVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg4NjQwMDAwMCAqIGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyAgd2Vla2RheTogXCJzaG9ydFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KVxyXG5cclxuICAgICAgICBkYXRlc0FycmF5LnB1c2goe2RhdGUsIHdlZWtEYXksIG1vbnRofSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGVzQXJyYXk7XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBeGlvcyhtZXRob2QsIHVybCwgYm9keSwgaGFwcGVuaW5nKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICAgIC8vIC8vIE5lZWQgdG8gcHV0IGZvbGxvd2luZyB0aHJlZSBpbiB0aGUgdXNlRWZmZWN0J3MgZGVwZW5kZWN5IGFycmF5IHRvIGFsbG93IGZvciBkeW5hbWljIGRhdGEgZmV0Y2hpbmcgYmFzZWQgb24gdXNlcidzIFxyXG4gICAgLy8gLy8gc2VhcmNoIGlucHV0LCBuYXZpZ2F0aW9uIHRvIHByZXZpb3VzIGFuZCBuZXh0IGl0ZW1zLlxyXG4gICAgLy8gbGV0IHNlYXJjaFRleHQgPSBcIlwiO1xyXG4gICAgLy8gbGV0IHNraXAgPSAwO1xyXG4gICAgLy8gbGV0IGxpbWl0ID0gMDtcclxuXHJcbiAgICAvLyAvLyBJZiBpdCdzIGEgcG9zdCByZXF1ZXN0IHRoZW4gYm9keSB3aWxsIGNvbnRhaW4gc2VhcmNoVGV4dCwgc2tpcCBhbmQgbGltaXQuIFVwZGF0ZSB0aGUgYWJvdmUgdGhyZWUgd2l0aCB0aGUgYm9keSdzIHZhbHVlc1xyXG4gICAgLy8gaWYoYm9keSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy8gICAgIHNlYXJjaFRleHQgPSBib2R5LnNlYXJjaFRleHQ7XHJcbiAgICAvLyAgICAgc2tpcCA9IGJvZHkuc2tpcDtcclxuICAgIC8vICAgICBsaW1pdCA9IGJvZHkubGltaXRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXh0LCBza2lwLCBsaW1pdCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXRob2QsIHVybCwgYm9keSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RvdGFsRGF0YUNvdW50LCBzZXRUb3RhbERhdGFDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoeyBtZXRob2QsIHVybCwgZGF0YTogYm9keSB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBnZXQgbWV0aG9kIHRoZW4gYW4gYXJyYXkgb2YganNvbiBvYmplY3RzIGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkobmV3RGF0YSkpIHJldHVybiBzZXREYXRhKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pdGVtcyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVsc2UsIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBwb3N0IG1ldGhvZC4gU28gYW4gb2JqZWN0IGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kIHdoaWNoIGNvbnRhaW5zIGRhdGEgYW5kXHJcbiAgICAgICAgICAgIC8vIHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsSXRlbUNvdW50IH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YShpdGVtcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUb3RhbERhdGFDb3VudCh0b3RhbEl0ZW1Db3VudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgICAgIGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW3VybCwgaGFwcGVuaW5nXSk7IFxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCIvLyBSZWFjdFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2xpYnMvdXNlQXhpb3NcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gUmV1c2FibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9BbGVydFwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25CYXJcIjtcclxuaW1wb3J0IENhdGVnb3J5VHJlYXRtZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L0NhdGVnb3J5VHJlYXRtZW50XCI7XHJcbmltcG9ydCBMb2NhdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2xvY2F0aW9uL0xvY2F0aW9uXCI7XHJcbmltcG9ydCBEYXRlVGltZSBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZVwiO1xyXG5pbXBvcnQgSW5mb3JtYXRpb25QYXltZW50IGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9JbmZvcm1hdGlvblBheW1lbnRcIjtcclxuaW1wb3J0IENvbmZpcm1hdGlvbiBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2NvbmZpcm1hdGlvbi1wYWdlL0NvbmZpcm1hdGlvblwiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUgKCkge1xyXG5cclxuXHJcbiAgICAvLyBPdGhlciBzdGF0ZXNcclxuICAgIGNvbnN0IFtjbGllbnRFdmVudHMsIHNldENsaWVudEV2ZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUcmVhdG1lbnRzLCBzZXRTZWxlY3RlZFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NvcnRlZFNlbGVjdGVkVHJlYXRtZW50cywgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbY2xpZW50SW5mbywgc2V0Q2xpZW50SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIGhvd0hlYXJkQWJvdXRVczogXCJcIixcclxuICAgICAgICBvdGhlcnM6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGNhdGVnb3J5OiBcIlwiLFxyXG4gICAgICAgIHRyZWF0bWVudDogXCJcIixcclxuICAgICAgICBsb2NhdGlvbjogXCJcIixcclxuICAgICAgICBzZXNzaW9uOiBcIlwiLFxyXG4gICAgICAgIGRhdGU6IFwiXCIsXHJcbiAgICAgICAgc3R5bGlzdDogXCJcIixcclxuICAgICAgICBjb3Vwb246IFwiXCIsXHJcbiAgICAgICAgcGFpZDogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJCcm93c1wiKTtcclxuICAgIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVGltZSwgc2V0U2VsZWN0ZWRUaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIHdpdGggdmFsdWVzIG9mIHRoZSBub24gaW5wdXQgZmllbGRzIHN1Y2ggYXMgbG9jYXRpb24sIHN0eWxpc3QsIGRhdGUsIHRpbWUgZXRjLiBcclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVN0YXRlIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBpZih0ZXh0LmluY2x1ZGVzKFwiQXRoZW5hIEJlYXV0eSBDYXJlXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHRleHRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVDYXRlZ29yeSAoZSkge1xyXG4gICAgICAgIGNvbnN0IHRleHQgPSBlLnRhcmdldC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICBcclxuICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgIFxyXG5cclxuICAgIC8qXHJcbiAgICBmdW5jdGlvbiBhZGRUcmVhdG1lbnQgKHN0eWxpc3QsIGl0ZW0pIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYWxyZWFkeSBzZWxlY3RlZCB0cmVhdG1lbnRzIHRvIHNlZSBpZiBjbGlja2VkIG9uZSBleGlzdHMgb3Igbm90LiBJdCByZXR1cm5zIGVpdGhlciB0cnVlIG9yIGZhbHNlXHJcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUobmV3SXRlbSA9PiBuZXdJdGVtLnRyZWF0bWVudFRpdGxlID09PSBpdGVtLnRpdGxlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgY2xpY2tlZCB0cmVhdG1lbnQgZXhpc3RzIHVwZGF0ZSB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGFycmF5IGJ5IHJlbW92aW5nIHRoZSBjbGlja2VkIHRyZWF0bWVudFxyXG4gICAgICAgIGlmKGRvZXNFeGlzdCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLmZvckVhY2gobmV3SXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihuZXdJdGVtLnRyZWF0bWVudFRpdGxlICE9PSBpdGVtLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGlzdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IGl0ZW0udGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IGl0ZW0uZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBjbGlja2VkIHRyZWF0bWVudCBkb2Vzbid0IGV4aXN0IHRoZW4gYWRkIGl0IGluIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgYXJyYXlcclxuICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IGl0ZW0udGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiBpdGVtLmR1cmF0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG5cclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgZnVuY3Rpb24gY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGV2ZW50LnRhcmdldC5uYW1lO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlXHJcblxyXG4gICAgICAgIHJldHVybiBzZXRDbGllbnRJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHNlbGVjdFRyZWF0bWVudChldmVudCwgdHJlYXRtZW50cykge1xyXG5cclxuICAgICAgICBjb25zdCB0cmVhdG1lbnRUaXRsZSA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHRyZWF0bWVudHMgdG8gc2VlIGlmIGNsaWNrZWQgb25lIGV4aXN0cyBvciBub3QuIEl0IHJldHVybnMgZWl0aGVyIHRydWUgb3IgZmFsc2VcclxuICAgICAgICBjb25zdCBkb2VzRXhpc3QgPSBzZWxlY3RlZFRyZWF0bWVudHMuc29tZShuZXdJdGVtID0+IG5ld0l0ZW0udGl0bGUgPT09IHRyZWF0bWVudFRpdGxlKTtcclxuXHJcblxyXG4gICAgICAgIGlmKGRvZXNFeGlzdCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRTZWxlY3RlZFRyZWF0bWVudHMgPSBzZWxlY3RlZFRyZWF0bWVudHMuZmlsdGVyKHRyZWF0bWVudCA9PiB0cmVhdG1lbnQudGl0bGUgIT09IHRyZWF0bWVudFRpdGxlKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKGZpbHRlcmVkU2VsZWN0ZWRUcmVhdG1lbnRzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IHRyZWF0bWVudHMubGVuZ3RoOyB4KyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnRzW3hdLnRpdGxlID09PSB0cmVhdG1lbnRUaXRsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IHsgcmV0dXJuIFsuLi5jdXJyZW50VmFsdWUsIHRyZWF0bWVudHNbeF1dIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQm9va2luZygpIHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzL2NsaWVudC1ldmVudHNcIiwge1xyXG4gICAgICAgICAgICAgICAgc29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lLFxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5mb1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBzZXRDbGllbnRFdmVudHMocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZS5kYXRhKTtcclxuXHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgc2V0QWN0aXZlUGFnZSg1KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uRGF0YSk7XHJcblxyXG4gICAgLy8gaWYobG9jYXRpb25EYXRhTG9hZGluZyB8fCBjYXRlZ29yeURhdGFMb2FkaW5nIHx8IHRyZWF0bWVudERhdGFMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PkxvYWRpbmcuLi4uPC9kaXY+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIFxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX0gXHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlID0ge3NldEFjdGl2ZVBhZ2V9IFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lID0ge3NlbGVjdGVkVGltZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExvY2F0aW9uXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlID0ge3VwZGF0ZVN0YXRlfSBcclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxDYXRlZ29yeVRyZWF0bWVudFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkgPSB7Y2hhbmdlQWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUcmVhdG1lbnQgPSB7c2VsZWN0VHJlYXRtZW50fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8RGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlID0ge3VwZGF0ZVN0YXRlfSBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge3N0YXRlLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB7c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlID0ge3NldFNlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZSA9IHtzZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRpbWUgPSB7c2V0U2VsZWN0ZWRUaW1lfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEluZm9ybWF0aW9uUGF5bWVudCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudEluZm8gPSB7Y2xpZW50SW5mb31cclxuICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn0gXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgY3JlYXRlQm9va2luZyA9IHtjcmVhdGVCb29raW5nfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb25maXJtYXRpb24gXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGllbnRFdmVudHM9e2NsaWVudEV2ZW50c31cclxuXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIHsvKiA8QWxlcnQgbWVzc2FnZT1cIlwiIC8+ICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9pbWFnZXMvNi5jNjVlNGExNmY1YmYwYjBjMDRkMjBkZDUxMjVhZmJmMS5zdmdcIixcImhlaWdodFwiOjI0MCxcIndpZHRoXCI6MzI4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzLzUuYzFiYTg4NTU1MjgwYWU4NjJiNGE3Njg1M2VmMGE1NDEuc3ZnXCIsXCJoZWlnaHRcIjoxODksXCJ3aWR0aFwiOjI0Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZ1wiLFwiaGVpZ2h0XCI6MTI4LFwid2lkdGhcIjo3NyxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZDb21wb25lbnQrMTQzKyVFMiU4MCU5MysyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQuNTNhM2JkMTE1ZTA4NjdiOGU1MDhhMmNmZTVmNmRmNmMucG5nXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZwZXJzb24tZ2lybC1mbGF0LjUzYTNiZDExNWUwODY3YjhlNTA4YTJjZmU1ZjZkZjZjLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5lY2I4Y2M0NzIyMTM3OTA0ZDcwMjJjNTkxODM0OWE2Zi5qcGdcIixcImhlaWdodFwiOjQwMDAsXCJ3aWR0aFwiOjYwMDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGaW1hZ2VzJTJGcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZyZ3PTgmcT03MFwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXRlZ29yeV90cmVhdG1lbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeV90cmVhdG1lbnRfXzNTWXpGXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeV9fMnRGMmZcIixcblx0XCJ0cmVhdG1lbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRfXzJ3em51XCIsXG5cdFwiaGVhZGVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfaGVhZGVyX18xS3F6YlwiLFxuXHRcImNhdGVnb3J5SXRlbV9saXN0XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlJdGVtX2xpc3RfXzVwb2Z2XCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2NvbnRhaW5lclwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5SXRlbV9jb250YWluZXJfXzNkd2M3XCIsXG5cdFwiY2F0ZWdvcnlfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X2l0ZW1fX1JyT1hoXCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2NvbnRlbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeUl0ZW1fY29udGVudF9fMmltYnNcIixcblx0XCJ0cmVhdG1lbnRJdGVtX2NvbnRhaW5lclwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudEl0ZW1fY29udGFpbmVyX19Fc1Q3Y1wiLFxuXHRcImNhdGVnb3J5VHJlYXRtZW50X2hpZGRlbkRpdlwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5VHJlYXRtZW50X2hpZGRlbkRpdl9fMXhDbHNcIixcblx0XCJ0cmVhdG1lbnRfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9pdGVtX18xUnlQdFwiLFxuXHRcInRyZWF0bWVudEl0ZW1fY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudEl0ZW1fY29udGVudF9fT2tsZWlcIixcblx0XCJ0cmVhdG1lbnRfY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9jb250ZW50X19MLTZSZVwiLFxuXHRcInN0eWxpc3RzXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfc3R5bGlzdHNfXzN6eW9GXCIsXG5cdFwic3R5bGlzdF9saXN0XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfc3R5bGlzdF9saXN0X18yUGsyS1wiLFxuXHRcInN0eWxpc3RMaXN0X2l0ZW1cIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0TGlzdF9pdGVtX18yUHBoYlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGF0ZUhpZGRlbl9kaXZcIjogXCJEYXRlVGltZV9kYXRlSGlkZGVuX2Rpdl9fMTVZaXhcIixcblx0XCJhdmFpbGFibGVfdGltZV9saXN0XCI6IFwiRGF0ZVRpbWVfYXZhaWxhYmxlX3RpbWVfbGlzdF9fMVc2XzhcIixcblx0XCJ0aW1lXCI6IFwiRGF0ZVRpbWVfdGltZV9fMnRNdVZcIixcblx0XCJpbmRpdmlkdWFsX3RpbWVcIjogXCJEYXRlVGltZV9pbmRpdmlkdWFsX3RpbWVfXzEyc1RfXCIsXG5cdFwiZGF0ZV90aW1lXCI6IFwiRGF0ZVRpbWVfZGF0ZV90aW1lX18xV2wzRlwiLFxuXHRcImhlYWRlclwiOiBcIkRhdGVUaW1lX2hlYWRlcl9fLU5meE9cIixcblx0XCJkYXRlVGltZV9jb250ZW50XCI6IFwiRGF0ZVRpbWVfZGF0ZVRpbWVfY29udGVudF9fWk93QUtcIixcblx0XCJjb250ZW50X0ltYWdlXCI6IFwiRGF0ZVRpbWVfY29udGVudF9JbWFnZV9fTm93ejJcIixcblx0XCJkYXRlc19jb250YWluZXJcIjogXCJEYXRlVGltZV9kYXRlc19jb250YWluZXJfX3JYLVdkXCIsXG5cdFwiZGF0ZXNcIjogXCJEYXRlVGltZV9kYXRlc19fMjFVa2lcIixcblx0XCJwcmV2XCI6IFwiRGF0ZVRpbWVfcHJldl9fQXk5bGZcIixcblx0XCJuZXh0XCI6IFwiRGF0ZVRpbWVfbmV4dF9fMlpVeFRcIixcblx0XCJkYXRlQ2FyZF9jb250YWluZXJcIjogXCJEYXRlVGltZV9kYXRlQ2FyZF9jb250YWluZXJfXzJfMFVpXCIsXG5cdFwiZGF0ZV9jYXJkXCI6IFwiRGF0ZVRpbWVfZGF0ZV9jYXJkX18yWVZQblwiLFxuXHRcIndlZWtEYXlfdGV4dFwiOiBcIkRhdGVUaW1lX3dlZWtEYXlfdGV4dF9fMVNqenNcIixcblx0XCJkYXRlX3RleHRcIjogXCJEYXRlVGltZV9kYXRlX3RleHRfXzFtaTNlXCIsXG5cdFwibW9udGhfdGV4dFwiOiBcIkRhdGVUaW1lX21vbnRoX3RleHRfXzFyVVFUXCIsXG5cdFwiY2xvY2tJY29uX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2Nsb2NrSWNvbl9jb250YWluZXJfXzJOQXRmXCIsXG5cdFwic3R5bGlzdHNfdGltZXNcIjogXCJEYXRlVGltZV9zdHlsaXN0c190aW1lc19fMUJPSU1cIixcblx0XCJzdHlsaXN0c19jb250YWluZXJcIjogXCJEYXRlVGltZV9zdHlsaXN0c19jb250YWluZXJfXzE0NFMzXCIsXG5cdFwidGltZXNfY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfdGltZXNfY29udGFpbmVyX18zcVlhalwiLFxuXHRcInRpbWVzXCI6IFwiRGF0ZVRpbWVfdGltZXNfXzExXzlxXCIsXG5cdFwidGltZV90ZXh0XCI6IFwiRGF0ZVRpbWVfdGltZV90ZXh0X18xak0xRVwiLFxuXHRcInN0eWxpc3RcIjogXCJEYXRlVGltZV9zdHlsaXN0X18yOFpxNFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fMTd5YjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluZm9QYXltZW50X2hlYWRlclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9oZWFkZXJfX1ByWDV4XCIsXG5cdFwiaW5mb1BheW1lbnRfY29udGVudFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9jb250ZW50X18xTXh2cFwiLFxuXHRcImltYWdlX2NvbnRhaW5lclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbWFnZV9jb250YWluZXJfXzE1eWNkXCIsXG5cdFwiaW5wdXRfbGFiZWxcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfbGFiZWxfXzFaMXVPXCIsXG5cdFwiaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfXzFMSjJkXCIsXG5cdFwiY2hlY2tib3hcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfY2hlY2tib3hfXzM3S0tsXCIsXG5cdFwibmFtZV9pbnB1dHNcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfbmFtZV9pbnB1dHNfXzFCU2lSXCIsXG5cdFwibmFtZV9pbmZvXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X25hbWVfaW5mb19fMVFsZkhcIixcblx0XCJwaG9uZV9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9waG9uZV9pbnB1dF9fM1BNSVBcIixcblx0XCJlbWFpbF9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9lbWFpbF9pbnB1dF9fMU9WcldcIixcblx0XCJob3dIZWFyZEFib3V0VXNfaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaG93SGVhcmRBYm91dFVzX2lucHV0X18zdmxYTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2aWdhdGlvbkJhcl9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25CYXJfY29udGFpbmVyX18zYy0ySFwiLFxuXHRcIndyYXBwZXJcIjogXCJOYXZpZ2F0aW9uQmFyX3dyYXBwZXJfX2FaS29zXCIsXG5cdFwibmF2aWdhdGlvbl9iYXJcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25fYmFyX19ZODVVWlwiLFxuXHRcIm5hdmlnYXRpb25fbGlua3NcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25fbGlua3NfX3FkSi1TXCIsXG5cdFwiYnV0dG9uX2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfYnV0dG9uX2NvbnRhaW5lcl9fMWtSQjNcIixcblx0XCJuYXZpZ2F0aW9uTGlua19idXR0b25cIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25MaW5rX2J1dHRvbl9fMTE3TERcIixcblx0XCJibGFua1BhcmFfY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9ibGFua1BhcmFfY29udGFpbmVyX195VFl1NFwiLFxuXHRcIm5hdmlnYXRpb25UZXh0X2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvblRleHRfY29udGFpbmVyX18yTFdjUlwiLFxuXHRcIm5hdmlnYXRpb25fdGV4dFwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl90ZXh0X18yX3FONVwiLFxuXHRcInRleHRcIjogXCJOYXZpZ2F0aW9uQmFyX3RleHRfXzN3YVZpXCIsXG5cdFwidGV4dF9jb250ZW50XCI6IFwiTmF2aWdhdGlvbkJhcl90ZXh0X2NvbnRlbnRfXzJXSkZVXCIsXG5cdFwidGV4dF9ibGFua0RpdlwiOiBcIk5hdmlnYXRpb25CYXJfdGV4dF9ibGFua0Rpdl9fMldoRFVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1faGVhZGVyXCI6IFwiQ2xpZW50R2xvYmFsc19pdGVtX2hlYWRlcl9fM2dYVEtcIixcblx0XCJpdGVtSGVhZGVyX2NvbnRlbnRcIjogXCJDbGllbnRHbG9iYWxzX2l0ZW1IZWFkZXJfY29udGVudF9fM1EteEFcIixcblx0XCJldmVudEhhbmRsZXJfZGl2XCI6IFwiQ2xpZW50R2xvYmFsc19ldmVudEhhbmRsZXJfZGl2X191U281MVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jYXRpb25zXCI6IFwiTG9jYXRpb25fbG9jYXRpb25zX18yalNPaVwiLFxuXHRcInNlbGVjdF9sb2NhdGlvblwiOiBcIkxvY2F0aW9uX3NlbGVjdF9sb2NhdGlvbl9fMng3cElcIixcblx0XCJsb2NhdGlvbl9saXN0XCI6IFwiTG9jYXRpb25fbG9jYXRpb25fbGlzdF9fMXM1MnJcIixcblx0XCJ3cmFwcGVyXCI6IFwiTG9jYXRpb25fd3JhcHBlcl9fMnlwSVVcIixcblx0XCJsb2NhdGlvbl9oaWRkZW5EaXZcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9oaWRkZW5EaXZfXzFXVUphXCIsXG5cdFwibG9jYXRpb25JbmZvX2NvbnRhaW5lclwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uSW5mb19jb250YWluZXJfXzE2MHdDXCIsXG5cdFwibG9jYXRpb25faW5mb1wiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2luZm9fXzJTMW9sXCIsXG5cdFwibG9jYXRpb25fY29udGVudFwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2NvbnRlbnRfX2NVZzA3XCIsXG5cdFwibG9jYXRpb25fdGFibGVcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl90YWJsZV9fM3FlWHZcIixcblx0XCJsb2NhdGlvbkFkZF9mb3JtXCI6IFwiTG9jYXRpb25fbG9jYXRpb25BZGRfZm9ybV9fMW5BbXpcIixcblx0XCJsb2NhdGlvbl9pbnB1dFwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2lucHV0X19OWEhyalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3NjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VBeGlvcyIsInN0eWxlcyIsIkNhdGVnb3J5IiwiVHJlYXRtZW50IiwiSXRlbUhlYWRlciIsIkNhdGVnb3J5VHJlYXRtZW50IiwiYWN0aXZlUGFnZSIsImFjdGl2ZUNhdGVnb3J5IiwiY2hhbmdlQWN0aXZlQ2F0ZWdvcnkiLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJzZWxlY3RUcmVhdG1lbnQiLCJkYXRhIiwiY2F0ZWdvcnlEYXRhIiwiZXJyb3IiLCJjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yIiwibG9hZGluZyIsImNhdGVnb3J5RGF0YUxvYWRpbmciLCJ0cmVhdG1lbnREYXRhIiwidHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IiLCJ0cmVhdG1lbnREYXRhTG9hZGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidHJlYXRtZW50cyIsInNldFRyZWF0bWVudHMiLCJjYXRlZ29yeV90cmVhdG1lbnQiLCJkaXNwbGF5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUl0ZW1fbGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRyZWF0bWVudCIsInRyZWF0bWVudEl0ZW1fbGlzdCIsImNsaWVudEdsb2JhbFN0eWxlcyIsIkV2ZW50SGFuZGxlckRpdiIsInRyZWF0bWVudEl0ZW1fY29udGFpbmVyIiwiZXZlbnRIYW5kbGVyX2RpdiIsImV2ZW50IiwidGl0bGUiLCJ0cmVhdG1lbnRfaXRlbSIsImJhY2tncm91bmRJbWFnZSIsInNvbWUiLCJ4IiwidHJlYXRtZW50SXRlbV9jb250ZW50IiwiZHVyYXRpb24iLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidHJlYXRtZW50X2NvbnRlbnQiLCJDYXRlZ29yeVNlcmlhbCIsImJsdWVHcmFkaWVudCIsInJlZEdyYWRpZW50IiwiY29uZGl0aW9uMSIsImNvbmRpdGlvbjIiLCJzdHlsZSIsImNhdGVnb3J5SXRlbV9jb250YWluZXIiLCJjYXRlZ29yeV9pdGVtIiwiY2F0ZWdvcnlJdGVtX2NvbnRlbnQiLCJjb2xvciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjbGlja0V2ZW50SGFuZGxlciIsIml0ZW1faGVhZGVyIiwiaXRlbUhlYWRlcl9jb250ZW50IiwiU2NyaXB0IiwiSW1hZ2UiLCJMb2dpbkJnSW1hZ2UiLCJMb2dvIiwiZ2V0RGF0ZXMiLCJDb25maXJtYXRpb24iLCJjbGllbnRFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZGF0ZXMiLCJzZXREYXRlcyIsImV2ZW50RHVyYXRpb24iLCJzdGFydFRpbWUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwiX2lkIiwidG9TdHJpbmciLCJEYXRlQ2FyZCIsImRhdGVUaW1lIiwic2VsZWN0ZWREYXRlIiwic2V0U2VsZWN0ZWREYXRlIiwic2VsZWN0ZWRUaW1lIiwiZGF0ZUNhcmRfY29udGFpbmVyIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJkYXRlSGlkZGVuX2RpdiIsImRhdGVJbkRhdGVGb3JtYXQiLCJkYXRlX2NhcmQiLCJpbmNsdWRlcyIsIndlZWtEYXlfdGV4dCIsImRhdGUiLCJ3ZWVrRGF5IiwiZGF0ZV90ZXh0IiwibW9udGhfdGV4dCIsIm1vbnRoIiwiY2xvY2tJY29uX2NvbnRhaW5lciIsImJvcmRlciIsIkNob29zZVN0eWxpc3RzIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkRhdGVUaW1lIiwic3RhdGUiLCJzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMiLCJsb2NhdGlvbiIsInNldFNlbGVjdGVkVGltZSIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImRhdGVJbmRleCIsInNldERhdGVJbmRleCIsImRhdGVfdGltZSIsImRhdGVUaW1lX2NvbnRlbnQiLCJjb250ZW50X0ltYWdlIiwiZGF0ZXNfY29udGFpbmVyIiwicHJldiIsIm5leHQiLCJhdmFpbGFibGVfdGltZV9saXN0IiwidGltZSIsInRpbWVzIiwicG9zaXRpb24iLCJpbmRpdmlkdWFsX3RpbWUiLCJCZWF1dGljaWFuIiwiQmVhdXRpY2lhbjIiLCJzdHlsaXN0c19jb250YWluZXIiLCJtYXJnaW5Cb3R0b20iLCJzdHlsaXN0IiwiaW1hZ2VIaWRkZW5fZGl2IiwidGV4dEFsaWduIiwidGltZXNfY29udGFpbmVyIiwidGltZV90ZXh0IiwiZmluZFRpbWVTbG90cyIsIndpZHRoIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJmaW5hbGl6ZVRyZWF0bWVudHMiLCJ2YWx1ZSIsIm5ld1RyZWF0bWVudFRpdGxlIiwiZG9lc0V4aXN0IiwibmV3SXRlbSIsInRyZWF0bWVudFRpdGxlIiwiZmlsdGVyZWRUcmVhdG1lbnRzIiwiZmlsdGVyIiwibmV3dHJlYXRtZW50IiwiY2hvb3NlblN0eWxpc3QiLCJ0cmVhdG1lbnREdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwiY3VycmVudFZhbHVlIiwiZmluZFRpbWVzIiwibmV3VHJlYXRtZW50cyIsImZvckVhY2giLCJzZWxlY3RlZFRyZWF0bWVudCIsInB1c2giLCJhbGVydCIsInN0eWxpc3RzIiwiSW5wdXQiLCJJbmZvcm1hdGlvblBheW1lbnQiLCJjbGllbnRJbmZvIiwiY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciIsInZhbGlkYXRpb25FcnJvciIsImNyZWF0ZUJvb2tpbmciLCJpbmZvX3BheW1lbnQiLCJpbmZvUGF5bWVudF9jb250ZW50IiwiaW1hZ2VfY29udGFpbmVyIiwibmFtZV9pbnB1dHMiLCJpbnB1dF9sYWJlbCIsIm5hbWVfaW5mbyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVfaW5wdXQiLCJwaG9uZSIsImVtYWlsX2lucHV0IiwiZW1haWwiLCJjaGVja2JveCIsImhvd0hlYXJkQWJvdXRVc19pbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsInRvTG93ZXJDYXNlIiwidXJsIiwic2V0RGF0YSIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImVuZFBvaW50IiwicmVzcG9uc2UiLCJnZXQiLCJMb2NhdGlvbkljb24iLCJMb2NhdGlvbiIsInVwZGF0ZVN0YXRlIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwic2VsZWN0X2xvY2F0aW9uIiwibG9jYXRpb25fbGlzdCIsIndyYXBwZXIiLCJsb2NhdGlvbkluZm9fY29udGFpbmVyIiwibG9jYXRpb25faW5mbyIsImxvY2F0aW9uX2NvbnRlbnQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiemlwQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwibG9jYXRpb25faWNvbiIsImZvbnRTaXplIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIk5hdmlnYXRpb25UZXh0IiwiTmF2aWdhdGlvbkJhciIsInNldEFjdGl2ZVBhZ2UiLCJpdGVtcyIsImlkIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lcldpZHRoIiwibmF2aWdhdGlvbkJhcl9jb250YWluZXIiLCJuYXZpZ2F0aW9uX2JhciIsIm5hdmlnYXRpb25UZXh0X2NvbnRhaW5lciIsImNoYW5nZUFjdGl2ZVBhZ2UiLCJuZXdWYWx1ZSIsIk51bWJlciIsIm5hdmlnYXRpb25fbGlua3MiLCJidXR0b25fY29udGFpbmVyIiwibmF2aWdhdGlvbkxpbmtfYnV0dG9uIiwiYmxhbmtQYXJhX2NvbnRhaW5lciIsInRleHQiLCJuYXZpZ2F0aW9uX3RleHQiLCJ0ZXh0X2NvbnRlbnQiLCJ0ZXh0X2JsYW5rRGl2IiwiQWxlcnQiLCJtZXNzYWdlIiwiZmV0Y2hFdmVudHMiLCJnZXRTdHlsaXN0cyIsImdldFdvcmtpbmdUaW1lcyIsImRlZmF1bHRUaW1lc0FycmF5IiwiZGF0ZXNBcnJheSIsImFsbFN0eWxpc3RzIiwiY2FsZW5kYXJFdmVudHMiLCJzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJ3b3JraW5nVGltZSIsInh4eCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJidXN5VGltZXMiLCJldmVudERhdGUiLCJzdGFydGluZ1RpbWUiLCJzdGFydGluZ0hvdXIiLCJzdGFydGluZ01pbnV0ZSIsInN0YXR1cyIsImV2ZW50TG9jYXRpb24iLCJrIiwiTWF0aCIsImNlaWwiLCJpbnRlcnZhbCIsImhvdXIiLCJob3VySW5jcmVtZW50IiwiZmxvb3IiLCJuZXdXb3JraW5nVGltZXMiLCJ3b3JraW5nVGltZXMiLCJmcmVlVGltZXMiLCJzdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzIiwiY291bnRPZlRpbWVzVG9PbW1pdCIsInJlZHVjZSIsInRvdGFsIiwicXFxIiwiYXZhaWxhYmxlVGltZXNCeURhdGUiLCJpIiwidG90YWxUaW1lQ291bnQiLCJ0ZW1wIiwiaiIsImNvdW50IiwieSIsIm1pbnV0ZXMiLCJkYXRlVGltZXNBcnJheSIsIm5ld0RhdGUiLCJEYXRlIiwiZ2V0RGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInRvTG9jYWxlU3RyaW5nIiwid2Vla2RheSIsImV2ZW50cyIsImVyciIsIm1zZyIsImdldFRpbWUiLCJnZXRNb250aCIsImRheSIsInN0eWxpc3RGdWxsTmFtZSIsImRheU5hbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwIiwid29ya1NjaGVkdWxlIiwic2NoZWR1bGUiLCJzdGFydFRpbWVJbmRleCIsImVuZFRpbWVJbmRleCIsImVuZFRpbWUiLCJxIiwibWV0aG9kIiwiYm9keSIsImhhcHBlbmluZyIsInRvdGFsRGF0YUNvdW50Iiwic2V0VG90YWxEYXRhQ291bnQiLCJuZXdEYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWxJdGVtQ291bnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJiYWNrZ3JvdW5kU2l6ZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndhcm4iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJyYW5kb20iLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkhvbWUiLCJzZXRDbGllbnRFdmVudHMiLCJzZXRTZWxlY3RlZFRyZWF0bWVudHMiLCJzb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJzZXRDbGllbnRJbmZvIiwiaG93SGVhcmRBYm91dFVzIiwib3RoZXJzIiwic2V0U3RhdGUiLCJzZXNzaW9uIiwiY291cG9uIiwicGFpZCIsInNldEFjdGl2ZUNhdGVnb3J5IiwiZSIsImZpbHRlcmVkU2VsZWN0ZWRUcmVhdG1lbnRzIiwicG9zdCIsImhvbWUiXSwic291cmNlUm9vdCI6IiJ9
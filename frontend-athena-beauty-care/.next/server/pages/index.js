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
      const data = await response.data;
      setClientEvents(data);
    } catch (error) {
      console.log(error.response.data);
    } finally {
      setClientInfo({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        howHeardAboutUs: "",
        others: ""
      });
      setState(currentValue => {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          location: ""
        });
      });
      setSelectedTreatments([]);
      setSortedSelectedTreatments([]);
      setSelectedDate("");
      setSelectedTime("");
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
      lineNumber: 246,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_location_Location__WEBPACK_IMPORTED_MODULE_6__.default, {
      activePage: activePage,
      state: state,
      updateState: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_5__.default, {
      selectedTreatments: selectedTreatments,
      activePage: activePage,
      activeCategory: activeCategory,
      changeActiveCategory: changeActiveCategory,
      selectTreatment: selectTreatment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 259,
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
      lineNumber: 270,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_8__.default, {
      activePage: activePage,
      clientInfo: clientInfo,
      clientInfoOnChangeHandler: clientInfoOnChangeHandler,
      validationError: validationError,
      createBooking: createBooking
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 283,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_9__.default, {
      activePage: activePage,
      clientEvents: clientEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 245,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7QUNBdlEsaUVBQWUsQ0FBQyxpU0FBaVM7Ozs7Ozs7Ozs7QUNBalQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L0NhdGVnb3J5VHJlYXRtZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvVHJlYXRtZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvY2F0ZWdvcnkvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9jYXRlZ29yeS9DYXRlZ29yeVNlcmlhbC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvRXZlbnRIYW5kbGVyRGl2LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jb25maXJtYXRpb24tcGFnZS9Db25maXJtYXRpb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlQ2FyZC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVUaW1lLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvU3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9UaW1lcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL2Nob29zZS1zdHlsaXN0cy9DaG9vc2VTdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9JbmZvcm1hdGlvblBheW1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5wdXQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2xpYnMvdXNlQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2xvY2F0aW9uL0xvY2F0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvbkljb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25UZXh0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9BbGVydC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9mZXRjaEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2dldERhdGVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvdXNlQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvaW1hZ2VzLzYuc3ZnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy81LnN2ZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvQ29tcG9uZW50IDE0MyDigJMgMi5wbmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQucG5nIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0luZm9ybWF0aW9uUGF5bWVudC5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL2NsaWVudC11aS9DbGllbnRHbG9iYWxzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL2NsaWVudC11aS9Mb2NhdGlvbi5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvc2NyaXB0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL2NhdGVnb3J5L0NhdGVnb3J5XCI7XHJcbmltcG9ydCBUcmVhdG1lbnQgZnJvbSBcIi4vVHJlYXRtZW50XCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVRyZWF0bWVudCAoeyBcclxuICAgIGFjdGl2ZVBhZ2UsIFxyXG4gICAgYWN0aXZlQ2F0ZWdvcnksIFxyXG4gICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnksIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLFxyXG4gICAgc2VsZWN0VHJlYXRtZW50IFxyXG59KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IGNhdGVnb3J5RGF0YSwgZXJyb3I6IGNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IsIGxvYWRpbmc6IGNhdGVnb3J5RGF0YUxvYWRpbmdcclxuICAgIH0gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiLCB7fSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogdHJlYXRtZW50RGF0YSwgZXJyb3I6IHRyZWF0bWVudERhdGFGZXRjaGluZ0Vycm9yLCBsb2FkaW5nOiB0cmVhdG1lbnREYXRhTG9hZGluZ1xyXG4gICAgfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS90cmVhdG1lbnRzXCIsIHt9KVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnRzLCBzZXRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjYXRlZ29yeURhdGEgIT09IG51bGwpIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlEYXRhKTtcclxuICAgICAgICBpZih0cmVhdG1lbnREYXRhICE9PSBudWxsKSBzZXRUcmVhdG1lbnRzKHRyZWF0bWVudERhdGEpO1xyXG5cclxuICAgIH0sIFtjYXRlZ29yeURhdGEsIHRyZWF0bWVudERhdGFdKVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICAvLyBmdW5jdGlvbiBhZGROZXdUcmVhdG1lbnQoc3R5bGlzdCwgdHJlYXRtZW50KSB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coc3R5bGlzdCk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2codHJlYXRtZW50KVxyXG4gICAgLy8gfVxyXG5cclxuICAgXHJcbiAgICAvLyBpZihjYXRlZ29yeURhdGFMb2FkaW5nIHx8IHRyZWF0bWVudERhdGFMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PkxvYWRpbmcuLi4uPC9kaXY+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yIHx8IHRyZWF0bWVudERhdGFGZXRjaGluZ0Vycm9yKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+KTtcclxuICAgIC8vIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlfdHJlYXRtZW50fSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgey8qIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlNlbGVjdCB0aGUgQ2F0ZWdvcnk8L2g0PiAqL31cclxuICAgICAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBjYXRlZ29yeVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnR9PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IHRyZWF0bWVudFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudEl0ZW1fbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWF0bWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0ge2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50cyA9IHt0cmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyZWF0bWVudCA9IHtzZWxlY3RUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbiAgICBcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNsaWVudEdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9DbGllbnRHbG9iYWxzLm1vZHVsZS5jc3NcIlxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlYXRtZW50ICh7IFxyXG4gICAgaXRlbSwgXHJcbiAgICBhY3RpdmVDYXRlZ29yeSwgXHJcbiAgICBzZWxlY3RlZFRyZWF0bWVudHMsIFxyXG4gICAgc2VsZWN0VHJlYXRtZW50LFxyXG4gICAgdHJlYXRtZW50cyBcclxufSkge1xyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKHh4eCA9PiB4eHguZGVzY3JpcHRpb24gPT09IFwiYWJjXCIgJiYgeHh4LmNhdGVnb3J5ID09PSBcImJiY1wiKSk7XHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50SXRlbV9jb250YWluZXJ9IFxyXG4gICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBhY3RpdmVDYXRlZ29yeSA9PT0gaXRlbS5jYXRlZ29yeSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgey8qIDxFdmVudEhhbmRsZXJEaXYgXHJcbiAgICAgICAgICAgICAgICBjb250ZW50ID0ge2Ake2l0ZW0udGl0bGV9LCAke2l0ZW0uZHVyYXRpb259LCAke2l0ZW0ucHJpY2V9YH0gXHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlciA9IHtjaGFuZ2VBY3RpdmVUcmVhdG1lbnR9IFxyXG4gICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsaWVudEdsb2JhbFN0eWxlcy5ldmVudEhhbmRsZXJfZGl2fSBvbkNsaWNrID0ge2V2ZW50ID0+IHNlbGVjdFRyZWF0bWVudChldmVudCwgdHJlYXRtZW50cyl9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0c30gc3R5bGUgPSB7e2Rpc3BsYXk6IGl0ZW0udGl0bGUgPT09IGFjdGl2ZVRyZWF0bWVudCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICA8cD5TZWxlY3QgYSBzdHlsaXN0PC9wPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RfbGlzdH0gPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0TGlzdF9pdGVtfSBvbkNsaWNrID0ge2UgPT4gYWRkVHJlYXRtZW50KGUudGFyZ2V0LnRleHRDb250ZW50LCBpdGVtKX0+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5zdHlsaXN0cy5tYXAoKHN0eWxpc3QsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RMaXN0X2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBzZWxlY3RlZFRyZWF0bWVudHMuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0gPT4gbmV3SXRlbS5jaG9vc2VuU3R5bGlzdCA9PT0gc3R5bGlzdCAmJiBuZXdJdGVtLnRyZWF0bWVudFRpdGxlID09PSBpdGVtLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICYmIFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge2UgPT4gYWRkVHJlYXRtZW50KGUudGFyZ2V0LnRleHRDb250ZW50LCBpdGVtKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3R5bGlzdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMuc29tZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgeCA9PiB4LnRpdGxlID09PSBpdGVtLnRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgKSAmJiBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudEl0ZW1fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2l0ZW0udGl0bGV9ICh7aXRlbS5kdXJhdGlvbn0gbWludXRlcyk8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogIWl0ZW0uZGVzY3JpcHRpb24gJiYgXCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRfY29udGVudH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uLy4uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBFdmVudEhhbmRsZXJEaXYgZnJvbSBcIi4uLy4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdlwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlTZXJpYWwgZnJvbSBcIi4vQ2F0ZWdvcnlTZXJpYWxcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5ICh7IGl0ZW0sIGluZGV4LCBhY3RpdmVDYXRlZ29yeSwgY2hhbmdlQWN0aXZlQ2F0ZWdvcnksIHNlbGVjdGVkVHJlYXRtZW50cyB9KSB7XHJcblxyXG4gICAgLy8gR3JhZGllbnRzIGZvciBiYWNrZ3JvdW5kXHJcbiAgICBjb25zdCBibHVlR3JhZGllbnQgPSBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBkYXJrYmx1ZSwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCI7XHJcbiAgICBjb25zdCByZWRHcmFkaWVudCA9IFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCI7XHJcblxyXG4gICAgLy8gU3R5bGluZyBDb25kaXRpb25zXHJcbiAgICBjb25zdCBjb25kaXRpb24xID0gYWN0aXZlQ2F0ZWdvcnkgPT09IGl0ZW0udGl0bGVcclxuICAgIGNvbnN0IGNvbmRpdGlvbjIgPSBzZWxlY3RlZFRyZWF0bWVudHMuc29tZSh0cmVhdG1lbnQgPT4gdHJlYXRtZW50LmNhdGVnb3J5ID09PSBpdGVtLnRpdGxlKTtcclxuXHJcbiAgICAvLyBJbmxpbmUgc3R5bGVcclxuICAgIGNvbnN0IHN0eWxlID0geyBiYWNrZ3JvdW5kSW1hZ2U6IGNvbmRpdGlvbjEgPyBibHVlR3JhZGllbnQgOiBjb25kaXRpb24yICYmIHJlZEdyYWRpZW50IH1cclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW1fY29udGFpbmVyfT5cclxuICAgIFxyXG4gICAgICAgICAgICA8RXZlbnRIYW5kbGVyRGl2IGNvbnRlbnQgPSB7aXRlbS50aXRsZX0gY2xpY2tFdmVudEhhbmRsZXIgPSB7Y2hhbmdlQWN0aXZlQ2F0ZWdvcnl9IC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW1fY29udGVudH0gc3R5bGUgPSB7c3R5bGV9ID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPENhdGVnb3J5U2VyaWFsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtpbmRleH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7aXRlbS50aXRsZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7IGNvbG9yOiBhY3RpdmVDYXRlZ29yeSA9PT0gaXRlbS50aXRsZSAmJiBcIndoaXRlXCIgfX0+e2l0ZW0udGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlTZXJpYWwgKHsgaW5kZXgsIGNvbnRlbnQsIGFjdGl2ZUNhdGVnb3J5IH0pIHtcclxuXHJcbiAgICBjb25zdCBzdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBjb250ZW50ICYmIFwid2hpdGVcIixcclxuICAgICAgICBjb2xvcjogYWN0aXZlQ2F0ZWdvcnkgPT09IGNvbnRlbnQgJiYgXCJibGFja1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gc3R5bGUgPSB7c3R5bGV9PntpbmRleCArIDF9PC9zcGFuPlxyXG4gICAgKTtcclxufSIsIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9DbGllbnRHbG9iYWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50SGFuZGxlckRpdih7IGNvbnRlbnQsIGNsaWNrRXZlbnRIYW5kbGVyIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50SGFuZGxlcl9kaXZ9IG9uQ2xpY2sgPSB7Y2xpY2tFdmVudEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG5cclxuXHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1IZWFkZXIoeyBjb250ZW50IH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5pdGVtX2hlYWRlcn0+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0ge3N0eWxlcy5pdGVtSGVhZGVyX2NvbnRlbnR9Pntjb250ZW50fTwvaDQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbiAoeyBhY3RpdmVQYWdlLCBjbGllbnRFdmVudHMgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNsaWVudEV2ZW50cyk7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiQ29uZmlybWF0aW9uXCIgLz5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB7Y2xpZW50RXZlbnRzLm1hcChldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNsaWVudF9ldmVudHNcIiBrZXkgPSB7ZXZlbnQuX2lkLnRvU3RyaW5nKCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnQuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57ZXZlbnQuZXZlbnREdXJhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXZlbnQgd2lsbCBzdGFydCBmcm9tIHtldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LnN0YXJ0VGltZS5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUNhcmQgKHsgZGF0ZVRpbWUsICBzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZSwgc2VsZWN0ZWRUaW1lIH0pIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRpbWUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVDYXJkX2NvbnRhaW5lcn1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPlxyXG5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gc2V0U2VsZWN0ZWREYXRlKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCl9IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUhpZGRlbl9kaXZ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtkYXRlVGltZS5kYXRlSW5EYXRlRm9ybWF0fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX2NhcmR9IFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBzZWxlY3RlZERhdGUgPT09IGRhdGVUaW1lLmRhdGVJbkRhdGVGb3JtYXQgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBncmVlbiwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCJcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lLmluY2x1ZGVzKGRhdGVUaW1lLmRhdGVJbkRhdGVGb3JtYXQpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwwLDAsIDAuNCksIHJnYigwLDAsMjU1LCAwLjkpLCBkYXJrYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMud2Vla0RheV90ZXh0fT57ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGV4dH0+e2RhdGVUaW1lLmRhdGUuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF90ZXh0fT57ZGF0ZVRpbWUuZGF0ZS5tb250aH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvY2tJY29uX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JvcmRlcjogZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5ID09PSBcIlRvZGF5XCIgJiYgXCIxcHggc29saWQgYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZSA9IHt7Y29sb3I6IGRhdGVUaW1lLmRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwiYmx1ZVwifX0gY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENob29zZVN0eWxpc3RzIGZyb20gXCIuL2Nob29zZS1zdHlsaXN0cy9DaG9vc2VTdHlsaXN0c1wiO1xyXG5pbXBvcnQgRGF0ZUNhcmQgZnJvbSBcIi4vRGF0ZUNhcmRcIjtcclxuaW1wb3J0IFN0eWxpc3RzIGZyb20gXCIuL1N0eWxpc3RzXCI7XHJcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9UaW1lc1wiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSAoeyBcclxuICAgIHN0YXRlLCBcclxuICAgIGFjdGl2ZVBhZ2UsIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLCBcclxuICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyxcclxuICAgIGxvY2F0aW9uLFxyXG4gICAgc2VsZWN0ZWREYXRlLFxyXG4gICAgc2V0U2VsZWN0ZWREYXRlLFxyXG4gICAgc2VsZWN0ZWRUaW1lLFxyXG4gICAgc2V0U2VsZWN0ZWRUaW1lIFxyXG59KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0ZVRpbWVzLCBzZXREYXRlVGltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBjb25zdCBbZGF0ZUluZGV4LCBzZXREYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgIFxyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gIFxyXG4gICAgY29uc29sZS5sb2coZGF0ZVRpbWVzKTtcclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGltZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlU3R5bGlzdHMgXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHtsb2NhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRlVGltZXMgPSB7c2V0RGF0ZVRpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlID0ge3NldFNlbGVjdGVkRGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMTRhYjhiMTI2ZC5qc1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IGRhdGUvdGltZVwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVUaW1lX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X0ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0IGFuZCBvYmplY0ZpdCBwcm9wZXJ0aWVzIG11c3QgYmUgc2V0IHRvIGZpbGwgdG8gbWFrZSB0aGUgaW1hZ2UgZml0IHRvIGl0J3MgY29udGFpbmVyLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXNfY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVzLm1hcCgoZGF0ZVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlQ2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVUaW1lID0ge2RhdGVUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZERhdGUgPSB7c2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUgPSB7c2V0U2VsZWN0ZWREYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lID0ge3NlbGVjdGVkVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhaWxhYmxlX3RpbWVfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBzZWxlY3RlZERhdGUgPT09IGRhdGVUaW1lLmRhdGVJbkRhdGVGb3JtYXQgPyBcImZsZXhcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS50aW1lcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge3RpbWV9IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0+IHNlbGVjdGVkVGltZSA9PT0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID8gc2V0U2VsZWN0ZWRUaW1lKFwiXCIpIDogc2V0U2VsZWN0ZWRUaW1lKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlSGlkZGVuX2Rpdn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake3NlbGVjdGVkRGF0ZX1UJHt0aW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmRpdmlkdWFsX3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHNlbGVjdGVkVGltZSA9PT0gYCR7c2VsZWN0ZWREYXRlfVQke3RpbWV9YCAmJiBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5zdHlsaXN0c190aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGlzdHMgLz5cclxuICAgICAgICAgICAgICAgIDxUaW1lcyAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBCZWF1dGljaWFuIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcGVyc29uLWdpcmwtZmxhdC5wbmdcIlxyXG5pbXBvcnQgQmVhdXRpY2lhbjIgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLnBuZ1wiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0eWxpc3RzICgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxoNCBzdHlsZSA9IHt7bWFyZ2luQm90dG9tOiBcIjEwcHhcIn19PlN0eWxpc3Q8L2g0PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwicGlua1wifX0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VIaWRkZW5fZGl2fT5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCZWF1dGljaWFufSAvPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+QXRoZW5hPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdH0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VIaWRkZW5fZGl2fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPEltYWdlIHNyYz17QmVhdXRpY2lhbn0gLz5cclxuICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlNvdWRpPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdH0+XHJcbiAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VIaWRkZW5fZGl2fT5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPEltYWdlIHNyYz17QmVhdXRpY2lhbn0gLz5cclxuICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PlRpbmE8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbmltcG9ydCBCZWF1dGljaWFuIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcGVyc29uLWdpcmwtZmxhdC5wbmdcIlxyXG5pbXBvcnQgQmVhdXRpY2lhbjIgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLnBuZ1wiXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRpbWVzICgpIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJibHVlXCJ9fSBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENvbXBvbmVudHMgXHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi8uLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcbmltcG9ydCB7IGZpbmRUaW1lU2xvdHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHNcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVN0eWxpc3RzICh7IFxyXG4gICAgbG9jYXRpb24sIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLCBcclxuICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyxcclxuICAgIHNldERhdGVUaW1lcywgXHJcbiAgICBzZXRTZWxlY3RlZERhdGUgXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICAgICAgd2lkdGg6IFwiNjAlXCIsXHJcbiAgICAgICAgbWFyZ2luOiBcIjAgYXV0byAxMHB4IGF1dG9cIixcclxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJzcGFjZS1ldmVubHlcIixcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2NjY1wiXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IFt0cmVhdG1lbnRzLCBzZXRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIFxyXG5cclxuXHJcbiAgICAvLyBPbkNoYW5nZSBoYW5kbGVyIGZvciBzdHlsaXN0XHJcbiAgICBmdW5jdGlvbiBmaW5hbGl6ZVRyZWF0bWVudHMoZXZlbnQsIGluZGV4KSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic3R5bGlzdDogXCIgKyBldmVudC50YXJnZXQudmFsdWUpO1xyXG5cclxuICAgICAgICAvLyBldmVudC50YXJnZXQudmFsdWUgY29udGFpbnMgdGhlIHN0eWxpc3RcclxuICAgICAgICBjb25zdCBzdHlsaXN0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSB0cmVhdG1lbnQgZnJvbSB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGxpc3QgdXNpbmcgaW5kZXhcclxuICAgICAgICBjb25zdCB0cmVhdG1lbnQgPSBzZWxlY3RlZFRyZWF0bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5ld1RyZWF0bWVudFRpdGxlID0gc2VsZWN0ZWRUcmVhdG1lbnRzW2luZGV4XS50aXRsZTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gRXZlcnkgdHJlYXRtZW50IGhhcyBtdWx0aXBsZSBzdHlsaXN0cyBhbmQgdXNlciBoYXMgdGhlIGZsZXhpYmlsaXR5IHRvIGNob29zZSBzdHlsaXN0IGZyb20gdGhlIHN0eWxpc3RzIG9mIGEgXHJcbiAgICAgICAgLy8gc3BlY2lmaWMgdHJlYXRtZW50LiBJZiB1c2VyIGlzIHRyeWluZyB0byBjaGFuZ2UgdGhlIHN0eWxpc3QgdGhlbiBwcmV2aW91cyB0cmVhdG1lbnQgbXVzdCBiZSBvbW1pdHRlZC4gIFxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHRyZWF0bWVudHMuc29tZShuZXdJdGVtID0+IG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgPT09IG5ld1RyZWF0bWVudFRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYoZG9lc0V4aXN0IHx8ICFzdHlsaXN0KSB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkVHJlYXRtZW50cyA9IHRyZWF0bWVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50cmVhdG1lbnRUaXRsZSAhPT0gbmV3VHJlYXRtZW50VGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgaWYoIXN0eWxpc3QpIHJldHVybiBzZXRUcmVhdG1lbnRzKGZpbHRlcmVkVHJlYXRtZW50cyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXd0cmVhdG1lbnQgPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHRyZWF0bWVudC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBzdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogdHJlYXRtZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IHRyZWF0bWVudC5wcmljZSxcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiB0cmVhdG1lbnQudGl0bGVcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUcmVhdG1lbnRzKFsuLi5maWx0ZXJlZFRyZWF0bWVudHMsIG5ld3RyZWF0bWVudF0pXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbmV3dHJlYXRtZW50ID0ge1xyXG5cclxuICAgICAgICAgICAgY2F0ZWdvcnk6IHRyZWF0bWVudC5jYXRlZ29yeSxcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogdHJlYXRtZW50LmR1cmF0aW9uLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogdHJlYXRtZW50LnByaWNlLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogdHJlYXRtZW50LnRpdGxlXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4geyByZXR1cm4gWy4uLmN1cnJlbnRWYWx1ZSwgbmV3dHJlYXRtZW50XX0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gZmluZFRpbWVzKCkge1xyXG5cclxuXHJcbiAgICAgICAgLy8gTmVlZCB0byBzb3J0IHRoZSB0cmVhdG1lbnRzIGFzIHBlciB0aGUgY2xpZW50J3Mgc2VsZWN0aW9uIG9yZGVyLiBcclxuICAgICAgICBjb25zdCBuZXdUcmVhdG1lbnRzID0gW107XHJcblxyXG4gICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5mb3JFYWNoKHNlbGVjdGVkVHJlYXRtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIHRyZWF0bWVudHMuZm9yRWFjaCh0cmVhdG1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRyZWF0bWVudC50cmVhdG1lbnRUaXRsZSA9PT0gc2VsZWN0ZWRUcmVhdG1lbnQudGl0bGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbmV3VHJlYXRtZW50cy5wdXNoKHRyZWF0bWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYobmV3VHJlYXRtZW50cy5sZW5ndGggIT09IHNlbGVjdGVkVHJlYXRtZW50cy5sZW5ndGgpIHJldHVybiBhbGVydChcIlBsZWFzZSBzZWxlY3QgYSBzdHlsaXN0IGZvciBhbGwgdHJlYXRtZW50c1wiKTtcclxuXHJcbiAgICAgICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzKG5ld1RyZWF0bWVudHMpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lcyA9IGF3YWl0IGZpbmRUaW1lU2xvdHMobmV3VHJlYXRtZW50cyk7XHJcblxyXG4gICAgICAgIHNldERhdGVUaW1lcyhkYXRlVGltZXMpO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlVGltZXNbMF0uZGF0ZUluRGF0ZUZvcm1hdCk7XHJcblxyXG4gICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRyZWF0bWVudHMpO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvb3NlX3N0eWxpc3RzXCI+XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIkNob29zZSBzdHlsaXN0c1wiIC8+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMubWFwKCh0cmVhdG1lbnQsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob29zZVN0eWxpc3RzX2NvbnRlbnRcIiBzdHlsZSA9IHtzdHlsZXN9IGtleSA9IHt0cmVhdG1lbnQudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmVhdG1lbnQuY2F0ZWdvcnl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyZWF0bWVudC50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInRyZWF0bWVudFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEluZGV4IHdpbGwgZmluZCB0aGUgdHJlYXRtZW50IGZyb20gdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7ZXZlbnQgPT4gZmluYWxpemVUcmVhdG1lbnRzKGV2ZW50LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiXCI+Q2hvb3NlIHN0eWxpc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50LnN0eWxpc3RzLm1hcChzdHlsaXN0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24ga2V5ID0ge3N0eWxpc3R9IHZhbHVlID0ge3N0eWxpc3R9PntzdHlsaXN0fTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNob29zZVN0eWxpc3RzX2NvbnRlbnRcIiBzdHlsZSA9IHtzdHlsZXN9PlxyXG4gICAgICAgICAgICAgICAgPHA+TG9jYXRpb248L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5DYXRlZ29yeTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPlRyZWF0bWVudDwvcD5cclxuICAgICAgICAgICAgICAgIDxzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiQXRoZW5hIEdvcmdlb3VzXCI+QXRoZW5hIEdvcmdlb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiU291ZGkgR29yZ2VvdXNcIj5Tb3VkaSBHb3JnZW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkplbm5pZmVyIEdvcmdlb3VzXCI+SmVubmlmZXIgR29yZ2VvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25zc3NzXCIgc3R5bGUgPSB7e3dpZHRoOiBcIjEwMCVcIiwgdGV4dEFsaWduOiBcImNlbnRlclwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2ZpbmRUaW1lc30+RmluZCBBdmFpbGFibGUgU3RhcnRpbmcgVGltZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi9pbWFnZXMvNi5zdmdcIjtcclxuXHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IElucHV0IGZyb20gXCIuL0lucHV0XCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmZvcm1hdGlvblBheW1lbnQgKHsgYWN0aXZlUGFnZSwgY2xpZW50SW5mbywgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciwgdmFsaWRhdGlvbkVycm9yLCBjcmVhdGVCb29raW5nIH0pIHtcclxuXHJcbiAgICAvLyBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAvLyB9LCBbXSlcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvX3BheW1lbnR9ICBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gNCA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgey8qIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5pbmZvUGF5bWVudF9oZWFkZXJ9PkluZm9ybWF0aW9uIC8gUGF5bWVudDwvaDQ+ICovfVxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJJbmZvcm1hdGlvbiAvIHBheW1lbnRcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbmZvUGF5bWVudF9jb250ZW50fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lX2lucHV0c30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9Pk5hbWU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lX2luZm99PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZmlyc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8uZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJsYXN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8ubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnBob25lX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+UGhvbmU8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInBob25lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIiszMSAyMzUgNTYzMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8ucGhvbmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZW1haWxfaW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5FbWFpbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJhYmNkQGdtYWlsLmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8uZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrYm94fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBsZWFzZSBrZWVwIG1lIGluZm9ybWVkIG9mIHRoZSBvZmZlcnMgYW5kIHByb21vdGlvbnM8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvd0hlYXJkQWJvdXRVc19pbnB1dH0gc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogXCJncmVlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9PkhvdyBkaWQgeW91IGhlYXIgYWJvdXQgYXRoZW5hIGJlYXV0eSBjYXJlPzwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBuYW1lID0gXCJob3dIZWFyZEFib3V0VXNcIiBvbkNoYW5nZT17Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkZyaWVuZHNcIj5GcmllbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIm90aGVyc1wiPk90aGVyczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImhvd0hlYXJkQWJvdXRVc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmhvd0hlYXJkQWJvdXRVc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogPHA+UGhvbmU8L3A+ICovfVxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHN0eWxlID0ge3tkaXNwbGF5OiBjbGllbnRJbmZvLmVtYWlsID8gXCJibG9ja1wiIDogXCJub25lXCJ9fSBvbkNsaWNrID0ge2NyZWF0ZUJvb2tpbmd9PkNvbmZpcm08L2J1dHRvbj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0luZm9ybWF0aW9uUGF5bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQgKHsgdHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIsIHZhbHVlLCBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyLCB2YWxpZGF0aW9uRXJyb3IgfSkge1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGUgPSB7dHlwZX0gXHJcbiAgICAgICAgICAgICAgICBuYW1lID0ge25hbWV9IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB7cGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHZhbGlkYXRpb25FcnJvciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlci50b0xvd2VyQ2FzZSgpfSBjYW4ndCBiZSBibGFua1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXhpb3ModXJsKSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zLyR7dXJsfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChlbmRQb2ludCk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW3VybF0pO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIi8vIE5leHQgTW9kdWxlc1xyXG4vLyBpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG4vLyBpbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG4vLyBpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25JY29uIGZyb20gXCIuL0xvY2F0aW9uSWNvblwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24gKHsgYWN0aXZlUGFnZSwgc3RhdGUsIHVwZGF0ZVN0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9uc1wiLCB7fSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHNldExvY2F0aW9ucyhkYXRhKTtcclxuICAgICAgICAvLyBpZihjYXRlZ29yeURhdGEgIT09IG51bGwpIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlEYXRhKTtcclxuICAgICAgICAvLyBpZih0cmVhdG1lbnREYXRhICE9PSBudWxsKSBzZXRUcmVhdG1lbnRzKHRyZWF0bWVudERhdGEpO1xyXG5cclxuICAgIH0sIFtkYXRhXSlcclxuXHJcblxyXG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi48L2Rpdj5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0X2xvY2F0aW9ufSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgbG9jYXRpb25cIiAvPlxyXG4gICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9saXN0fT5cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChsb2NhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge2luZGV4ICsgMX0gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEhhbmRsZXJEaXYgY29udGVudCA9IHtsb2NhdGlvbi50aXRsZX0gY2xpY2tFdmVudEhhbmRsZXIgPSB7dXBkYXRlU3RhdGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25JbmZvX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9pbmZvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmxvY2F0aW9uID09PSBsb2NhdGlvbi50aXRsZSAmJiBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2xvY2F0aW9uLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9uLmFkZHJlc3MxfSwge2xvY2F0aW9uLmFkZHJlc3MyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5aaXAgQ29kZToge2xvY2F0aW9uLnppcENvZGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBob25lOiB7bG9jYXRpb24ucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbi5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uY291bnRyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25JY29uKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25faWNvbn0+XHJcbiAgICAgICAgICAgIDxpIHN0eWxlID0ge3tjb2xvcjogXCJkYXJrYmx1ZVwiLCBmb250U2l6ZTogXCIyNHB4XCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4vTmF2aWdhdGlvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblRleHQgZnJvbSBcIi4vTmF2aWdhdGlvblRleHRcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIgKHsgc3RhdGUsIHNlbGVjdGVkVHJlYXRtZW50cywgYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZSwgc2VsZWN0ZWRUaW1lIH0pIHtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICB7aWQ6IDEsIGNvbnRlbnQ6IFwiU2VsZWN0IExvY2F0aW9uXCJ9LFxyXG4gICAgICAgIHtpZDogMiwgY29udGVudDogXCJDYXRlZ29yeSBhbmQgVHJlYXRtZW50XCJ9LFxyXG4gICAgICAgIHtpZDogMywgY29udGVudDogXCJTZWxlY3QgVGltZSAvIERhdGVcIn0sXHJcbiAgICAgICAge2lkOiA0LCBjb250ZW50OiBcIkluZm9ybWF0aW9uIC8gUGF5bWVudFwifSxcclxuICAgICAgICB7aWQ6IDUsIGNvbnRlbnQ6IFwiQ29uZmlybWF0aW9uXCJ9XHJcbiAgICBdO1xyXG5cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgLy8gICAgIHtpZDogMSwgY29udGVudDogXCJDYXRlZ29yeSBhbmQgVHJlYXRtZW50XCJ9LFxyXG4gICAgLy8gICAgIHtpZDogMiwgY29udGVudDogXCJTZWxlY3QgTG9jYXRpb25cIn0sXHJcbiAgICAvLyAgICAge2lkOiAzLCBjb250ZW50OiBcIlNlbGVjdCBUaW1lIC8gRGF0ZVwifSxcclxuICAgIC8vICAgICB7aWQ6IDQsIGNvbnRlbnQ6IFwiSW5mb3JtYXRpb24gLyBQYXltZW50XCJ9LFxyXG4gICAgLy8gICAgIHtpZDogNSwgY29udGVudDogXCJDb25maXJtYXRpb25cIn1cclxuICAgIC8vIF07XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25CYXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHt3aW5kb3dXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlID0ge3NldEFjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7aXRlbS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lID0ge3NlbGVjdGVkVGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25UZXh0X2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW1zLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZpZ2F0aW9uVGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0ge3dpbmRvd1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQgPSB7aXRlbS5jb250ZW50fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICk7XHJcbiAgICBcclxufSIsIi8vIC8vXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CdXR0b24gKHsgXHJcbiAgICB3aW5kb3dXaWR0aCwgXHJcbiAgICBzdGF0ZSwgXHJcbiAgICBzZWxlY3RlZFRyZWF0bWVudHMsIFxyXG4gICAgYWN0aXZlUGFnZSwgXHJcbiAgICBzZXRBY3RpdmVQYWdlLCBcclxuICAgIHZhbHVlLCBcclxuICAgIHNlbGVjdGVkVGltZSBcclxufSkge1xyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVQYWdlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCk7XHJcblxyXG4gICAgICAgIGlmKG5ld1ZhbHVlID09PSAyICYmICFzdGF0ZS5sb2NhdGlvbikgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIGxvY2F0aW9uXCIpO1xyXG5cclxuICAgICAgICBpZihuZXdWYWx1ZSA9PT0gMyAmJiAhc2VsZWN0ZWRUcmVhdG1lbnRzLmxlbmd0aCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhdCBsZWFzdCBvbmUgdHJlYXRtZW50XCIpO1xyXG4gICAgICAgIGlmKG5ld1ZhbHVlID09PSA0ICYmICFzZWxlY3RlZFRpbWUpIHJldHVybiBhbGVydChcIlBsZWFzZSBwaWNrIGEgc3RhcnRpbmcgdGltZVwiKTtcclxuXHJcbiAgICAgICAgc2V0QWN0aXZlUGFnZShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fbGlua3N9IHN0eWxlID0ge3t3aWR0aDogdmFsdWUgPT09IDUgJiYgKHdpbmRvd1dpZHRoIDw9IDYwMCA/IFwiNTBweFwiIDogXCIxMDBweFwiKX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9jb250YWluZXJ9IHN0eWxlID0ge3t3aWR0aDogdmFsdWUgPT09IDUgJiYgXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBhY3RpdmVQYWdlID09PSB2YWx1ZSAmJiBcImRhcmtibHVlXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ge3N0eWxlcy5uYXZpZ2F0aW9uTGlua19idXR0b259IFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2FjdGl2ZVBhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uQ2xpY2s9IHtldmVudCA9PiBzZXRBY3RpdmVQYWdlKE51bWJlcihldmVudC50YXJnZXQudGV4dENvbnRlbnQpKX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7Y2hhbmdlQWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWUgPSB7c3R5bGVzLmJsYW5rUGFyYV9jb250YWluZXJ9IFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IHZhbHVlID09PSA1ICYmIFwibm9uZVwifX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHA+PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxufVxyXG4iLCIvLyAvL1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVGV4dCAoeyB3aW5kb3dXaWR0aCwgdGV4dCB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fdGV4dH0gc3R5bGUgPSB7e3dpZHRoOiB0ZXh0ID09PSBcIkNvbmZpcm1hdGlvblwiICYmICh3aW5kb3dXaWR0aCA8PSA2MDAgPyBcIjUwcHhcIiA6IFwiMTAwcHhcIil9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBzdHlsZSA9IHt7d2lkdGg6IHRleHQgPT09IFwiQ29uZmlybWF0aW9uXCIgJiYgXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29udGVudH0gPnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9ibGFua0Rpdn0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IG1lc3NhZ2UgfSkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRcIj5cclxuICAgICAgICAgICAgPHA+e21lc3NhZ2V9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIE1vZHVsZXMgbmVlZGVkIHRvIGZldGNoIGV2ZW50c1xyXG5pbXBvcnQgeyBmZXRjaEV2ZW50cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZmV0Y2hFdmVudHNcIjtcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldERhdGVzXCI7XHJcbmltcG9ydCB7IGdldFN0eWxpc3RzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0c1wiO1xyXG5pbXBvcnQgeyBnZXRXb3JraW5nVGltZXMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldFdvcmtpbmdUaW1lc1wiO1xyXG5cclxuY29uc3QgZGVmYXVsdFRpbWVzQXJyYXkgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGZpbmRUaW1lU2xvdHMgPSBhc3luYyAobmV3VHJlYXRtZW50cykgPT4ge1xyXG5cclxuICAgIC8qXHJcbiAgICBjb25zdCBuZXdUcmVhdG1lbnRzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiUGVybWFuZW50IE1ha2V1cFwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJKZW5uaWZlciBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogODUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiAyMyxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiUGVybWFuZW50IE1ha2V1cCB3aXRoIGxpZ2h0IG1hc3NhZ2VcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJNYXNzYWdlXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkFuZHJlYSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogNzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiA0MixcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiTWFzc2FnZSBmb3IgMzAgbWluc1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIkJyb3dzXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkF0aGVuYSBHb3JnZW91c1wiLFxyXG4gICAgICAgICAgICBsb2NhdGlvbjogXCJBdGhlbmEgQmVhdXR5IENhcmUgLSBCb2d1clwiLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogMzUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiA0NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IFwiU2hhcGluZyBicm93c1wiXHJcbiAgICAgICAgfVxyXG5cclxuICAgIF07XHJcbiAgICAqL1xyXG5cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdG90YWwgMzAgZGF0ZXMgaW4gdGhlIGZvcm1hdCAneWVhci1tb250aC1kYXRlJyBmb3JtYXQgc3RhcnRpbmcgZnJvbSB0b2RheVxyXG4gICAgY29uc3QgZGF0ZXNBcnJheSA9IGdldERhdGVzKCk7XHJcblxyXG4gICAgLy8gUHV0dGluZyB0aGUgbG9jYXRpb24gaW5mbyBpbiBhIHZhcmlhYmxlXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ld1RyZWF0bWVudHNbMF0ubG9jYXRpb247XHJcbiAgICBcclxuICAgIC8vIEZldGNoaW5nIGluZm9ybWF0aW9uIG9mIGFsbCBzdHlsaXN0cyBhcyBwZXIgYWxsIHRyZWF0bWVudHNcclxuICAgIGNvbnN0IGFsbFN0eWxpc3RzID0gYXdhaXQgZ2V0U3R5bGlzdHMobmV3VHJlYXRtZW50cyk7XHJcbiAgICBjb25zb2xlLmxvZyhhbGxTdHlsaXN0cyk7XHJcblxyXG4gICAgLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgY29uc3QgY2FsZW5kYXJFdmVudHMgPSBhd2FpdCBmZXRjaEV2ZW50cygpO1xyXG4gICAgLy9jb25zb2xlLmxvZyhcIkNhbGVuZGFyIGV2ZW50czogXCIsIGNhbGVuZGFyRXZlbnRzKTtcclxuXHJcblxyXG5cclxuICAgIC8vIEZpbmQgdGhlIGRhdGVzIHdoZW4gYWxsIHN0eWxpc3RzIGFyZSBhdmFpbGFibGUgYXQgdGhlIHJlcXVlc3RlZCBsb2NhdGlvbi4gQWxzbyBmaW5kIGFsbCB0aGUgd29ya2luZ1RpbWVzIG9mIGFsbCBzdHlsaXN0c1xyXG4gICAgLy8gb24gdGhvc2UgZGF0ZXNcclxuICAgIGNvbnN0IHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyA9IGdldFdvcmtpbmdUaW1lcyhkYXRlc0FycmF5LCBhbGxTdHlsaXN0cywgbmV3VHJlYXRtZW50cywgbG9jYXRpb24pO1xyXG5cclxuICAgXHJcblxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuXHJcbiAgICAvLyBjb25zdCBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBmaW5kRnJlZVRpbWVzKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcywgY2FsZW5kYXJFdmVudHMpO1xyXG4gICAgLy8gY29uc29sZS5sb2coc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuXHJcblxyXG4gICAgXHJcbiAgICBjb25zdCBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBbXTtcclxuXHJcbiAgICBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMuZm9yRWFjaCh3b3JraW5nVGltZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHh4eCA9IFtdO1xyXG5cclxuICAgICAgICB3b3JraW5nVGltZS5zdHlsaXN0V29ya2luZ1RpbWVzLmZvckVhY2goaXRlbSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBidXN5VGltZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNhbGVuZGFyRXZlbnRzLmZvckVhY2goZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0ZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoMCwgZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ1RpbWUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSArIDEsIGV2ZW50LnN0YXJ0VGltZS5sZW5ndGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdIb3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdNaW51dGUgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7XHJcblxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5zdGF0dXMgPT09IFwiQWN0aXZlXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZXZlbnREYXRlID09PSB3b3JraW5nVGltZS5kYXRlICYmIGV2ZW50LnN0eWxpc3QgPT09IGl0ZW0uc3R5bGlzdCAmJiBldmVudC5ldmVudExvY2F0aW9uID09PSBsb2NhdGlvbikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMDsgayA8IE1hdGguY2VpbChldmVudC5ldmVudER1cmF0aW9uIC8gMTUpOyBrKyspIHtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcnZhbCA9ICgxNSAqIGspICsgc3RhcnRpbmdNaW51dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ciA9IHN0YXJ0aW5nSG91cjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcnZhbCAvIDYwIGdpdmVzIHVzIHRoZSB2YWx1ZSB3aGljaCBzaG91bGQgYmUgYWRkZWQgdG8gaG91ci4gRm9yIGV4YW1wbGUgLSBpZiBpbnRlcnZhbCBpcyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDc1IHRoZW4gd2UgbXVzdCBhZGQgMSB3aXRoIGhvdXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IoaW50ZXJ2YWwgLyA2MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkaW5nIGhvdXIgaW5jcmVtZW50IHdpdGggaG91clxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXJJbmNyZW1lbnQgaXMgbW9yZSB0aGFuIG9yIGVxdWFsIHRvIDEgdGhlbiBpbnRlcnZhbCB2YWx1ZSBtdXN0IGJlIHJlLWNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVydmFsID0gaW50ZXJ2YWwgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBpbnRlcnZhbCBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlcnZhbCA9PT0gMCkgaW50ZXJ2YWwgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgMCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYCR7aG91cn06JHtpbnRlcnZhbH1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3V29ya2luZ1RpbWVzID0gaXRlbS53b3JraW5nVGltZXMuZmlsdGVyKHRpbWUgPT4gIWJ1c3lUaW1lcy5pbmNsdWRlcyh0aW1lKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB4eHgucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBzdHlsaXN0OiBpdGVtLnN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICBmcmVlVGltZXM6IG5ld1dvcmtpbmdUaW1lc1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5wdXNoKHsgZGF0ZTogd29ya2luZ1RpbWUuZGF0ZSwgc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lczogeHh4fSk7XHJcblxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcbiAgICBcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBSZWR1Y2UgZnVuY3Rpb24gYWNjZXB0cyB0d28gYXJndW1lbnRzLiBGaXJzdCBvbmUgaXMgYSBmdW5jdGlvbiB3aXRoIHR3byBwYXJhbWV0ZXJzIGFuZCB0aGUgc2Vjb25kIGlzIGluaXRpYWwgdmFsdWVcclxuICAgIC8vIElmIGluaXRpYWwgdmFsdWUgaXMgbm90IGV4cGxpY2l0bHkgZGVmaW5lZCAoZm9yIGZvbGxvd2luZyBjYXNlLCAwKSB0aGVuIHJlZHVjZSBmdW5jdGlvbiB3aWxsIGJ5IGRlZmF1bHQgdGFrZSB0aGVcclxuICAgIC8vIGZpcnN0IGl0ZW0gb2YgdGhlIGFycmF5IGFzIHRoZSBpbml0aWFsIHZhbHVlLiAgIFxyXG4gICAgY29uc3QgY291bnRPZlRpbWVzVG9PbW1pdCA9IG5ld1RyZWF0bWVudHMucmVkdWNlKCh0b3RhbCwgdHJlYXRtZW50KSA9PiB0b3RhbCArIChNYXRoLmNlaWwodHJlYXRtZW50LnRyZWF0bWVudER1cmF0aW9uIC8gMTUpKSwgMCk7XHJcbiAgXHJcblxyXG4gICAgY29uc29sZS5sb2coZGVmYXVsdFRpbWVzQXJyYXkubGVuZ3RoKTtcclxuICAgIGNvbnNvbGUubG9nKGNvdW50T2ZUaW1lc1RvT21taXQpO1xyXG4gICAgY29uc29sZS5sb2coZGVmYXVsdFRpbWVzQXJyYXkubGVuZ3RoIC0gY291bnRPZlRpbWVzVG9PbW1pdCk7XHJcblxyXG4gICAgY29uc3QgcXFxID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2goKGRhdGUsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIC8vIDIwMjEtMTEtMTVcclxuXHJcbiAgICAgICAgLy8gVGhpcyBhcnJheSB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGFsbCB0aGUgc3RhcnRpbmcgZnJlZSB0aW1lcyBvZiBlYWNoIGRhdGVcclxuICAgICAgICBjb25zdCBhdmFpbGFibGVUaW1lc0J5RGF0ZSA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCArIDEpIC0gY291bnRPZlRpbWVzVG9PbW1pdDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICAvLyAxMDowMFxyXG5cclxuICAgICAgICAgICAgLy8gdG90YWxUaW1lQ291bnQgdmFsdWUgd2lsbCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgaW4gdGhlIGZvbGxvd2luZyBsb29wLiBcclxuICAgICAgICAgICAgLy8gRm9yIGV4YW1wbGUsIGlmIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBoYXMgdGhyZWUgaXRlbXMgKHNheSBmaXJzdCBpdGVtJ3MgZHVyYXRpb24gaXMgNDUsIHNlY29uZCBpcyA1NSBcclxuICAgICAgICAgICAgLy8gYW5kIHRoaXJkIGlzIDI1KSB0aGVuIGF0IHRoZSBlbmQgb2YgdGhlIGxvb3AgdG90YWxUaW1lQ291bnQgd2lsbCBiZSAoTWF0aC5jZWlsKDQ1IC8gMTUpICsgIE1hdGguY2VpbCg1NSAvIDE1KVxyXG4gICAgICAgICAgICAvLyArIE1hdGguY2VpbCgyNSAvIDE1KSkgMyArIDQgKyAyID0gOVxyXG4gICAgICAgICAgICBsZXQgdG90YWxUaW1lQ291bnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy8gVGhpcyBpcyBhIHRlbXBvcmFyeSBhcnJheSB3aGljaCB3aWxsIGJlIHBvcHVsYXRlZCB3aXRoIGZyZWUgdGltZXMgb2YgZWFjaCBzdHlsaXN0IGJ5IGxvb3BpbmcgdGhyb3VnaCB0aGUgXHJcbiAgICAgICAgICAgIC8vIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZGF0ZS5zdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lc1tqXTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ291bnQgd2lsbCBkZXRlcm1pbmUgaG93IG1hbnkgZnJlZSB0aW1lcyBzaG91bGQgYmUgbG9va2VkIGZvci4gRm9yIGV4YW1wbGUgaWYgY291bnQgaXMgMyBhbmQgc3RhcnRpbmdcclxuICAgICAgICAgICAgICAgIC8vIHRpbWUgaXMgMDk6MzAgdGhlbiAwOTozMCwgMDk6NDUgJiAxMDowMCBzaG91bGQgYmUgbG9va2VkIGZvclxyXG4gICAgICAgICAgICAgICAgY29uc3QgY291bnQgPSBNYXRoLmNlaWwobmV3VHJlYXRtZW50c1tqXS50cmVhdG1lbnREdXJhdGlvbiAvIDE1KTsgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEFzIHNhaWQgYWJvdmUgdG90YWxUaW1lQ291bnQgbXVzdCBiZSB1cGRhdGVkIG9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRvdGFsVGltZUNvdW50ICs9IGNvdW50O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFRoaXMgaXMgdmVyeSBjcnVjaWFsLiBPbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IHRoaXMgc3RhcnRpbmdUaW1lIHdpbGwgYmUgdXBkYXRlZCxcclxuICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlIC0gc2F5IHdlIGFyZSBhdCAwOTowMCBvbiBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSwgY291bnQgaXMgM1xyXG4gICAgICAgICAgICAgICAgLy8gYW5kIHN0eWxpc3Qgb2YgdGhpcyBpdGVtIGlzIGF2YWlsYWJsZSBvbiBhbGwgdGhyZWUgdGltZXMgMDk6MDAsIDA5OjE1ICYgOTozMC4gU28gc3RhcnRpbmdUaW1lIG11c3QgYmUgXHJcbiAgICAgICAgICAgICAgICAvLyBmcm9tIDA5OjQ1IGZvciB0aGUgMm5kIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5LiBTYXkgZm9yIHRoZSBzZWNvbmQgaXRlbSBjb3VudCBpcyA0IGFuZCBzdHlsaXN0XHJcbiAgICAgICAgICAgICAgICAvLyBpcyBhdmFpbGFibGUgb24gYWxsIGZvdXIgdGltZXMgMDk6NDUsIDEwOjAwLCAxMDoxNSAmIDEwOjMwLCBzbyBzdGFydGluZ1RpbWUgZm9yIHRoZSB0aGlyZCBpdGVtIG9mIHRoZSBcclxuICAgICAgICAgICAgICAgIC8vICBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgMTA6NDUuIFxyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVGltZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRlbXAgbGVuZ3RoIGlzIHplcm8gdGhlbiB3ZSBhcmUgYXQgdGhlIGZpcnN0IGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICBpZighdGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVtpXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yIGVhY2ggY29uc2VjdXRpdmUgaXRlbSBhZnRlciB0aGUgZmlyc3Qgb25lIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSBzdGFydGluZ1RpbWUgd2lsbCBiZSBcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgbmV4dCB0aW1lIGFmdGVyIHRoZSB0aW1lIG9mIGxhc3QgaXRlbSBvZiB0ZW1wIGFycmF5LiBcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gZGVmYXVsdFRpbWVzQXJyYXkuaW5kZXhPZih0ZW1wW3RlbXAubGVuZ3RoIC0gMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nVGltZSA9IGRlZmF1bHRUaW1lc0FycmF5W3kgKyAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvL1xyXG4gICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygwLCAyKSk7IC8vIDExXHJcbiAgICAgICAgICAgICAgICBsZXQgbWludXRlcyA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDMsIDUpKTsgLy8gMzBcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDE7IGsgPD0gY291bnQ7IGsrKykge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgaG91ckluY3JlbWVudCA9IE1hdGguZmxvb3IobWludXRlcyAvIDYwKTtcclxuICAgICAgICAgICAgICAgICAgICBob3VyICs9IGhvdXJJbmNyZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXJJbmNyZW1lbnQgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gbWludXRlcyAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgbWludXRlcyBpcyAwIHRoZW4gYWRkIGV4dHJhIG9uZSAwIHRvIGtlZXAgdGhlIG1pbnV0ZSB2YWx1ZSBpbiB0d28gZGlnaXRzXHJcbiAgICAgICAgICAgICAgICAgICAgaWYobWludXRlcyA9PT0gMCkgbWludXRlcyArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaG91ciA8IDEwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSAoYDAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAke2hvdXJ9OiR7bWludXRlc31gKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc3QgZnJlZVRpbWVzID0gaXRlbS5mcmVlVGltZXNBcnJheVtpbmRleF0uZnJlZVRpbWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZnJlZVRpbWVzLmluY2x1ZGVzKHRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh0aW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzID0gTnVtYmVyKG1pbnV0ZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgKz0gMTU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNheSBzdGFydGluZ1RpbWUgaXMgMDk6MDAgJiBjb3VudCBpcyAzLiBTbyB0b3RhbFRpbWVDb3VudCBpcyBhbHNvIDMuIEFmdGVyIGZpcnN0IGl0ZXJhdGlvbiB0ZW1wLmxlbmd0aCBcclxuICAgICAgICAgICAgICAgIC8vIG11c3QgYmUgZXF1YWxzIHRvIDMgb3RoZXJ3aXNlIGl0IG1lYW5zIHRoYXQgc3R5bGlzdCBpcyBub3QgYXZhaWxhYmxlIGF0IGFsbCB0aHJlZSB0aW1lcyAoMDk6MDAuIDA5OjE1ICYgMDk6MzApXHJcbiAgICAgICAgICAgICAgICAvLyBJbiBzdWNoIGNhc2UgZnVydGhlciBpdGVyYXRpb24gaXMgbm90IG5lY2Vzc2FyeS4gXHJcbiAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aCA8IHRvdGFsVGltZUNvdW50KSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodG90YWxUaW1lQ291bnQgPT09IHRlbXAubGVuZ3RoKSBhdmFpbGFibGVUaW1lc0J5RGF0ZS5wdXNoKGRlZmF1bHRUaW1lc0FycmF5W2ldKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHFxcS5wdXNoKHtkYXRlOiBkYXRlLmRhdGUsIHRpbWVzOiBhdmFpbGFibGVUaW1lc0J5RGF0ZX0pO1xyXG4gICAgICAgXHJcblxyXG4gICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc29sZS5sb2cocXFxKTtcclxuXHJcbiAgICBjb25zdCBkYXRlVGltZXNBcnJheSA9IFtdO1xyXG5cclxuICAgIHFxcS5mb3JFYWNoKChkYXRlVGltZXMsIGluZGV4KSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlVGltZXMuZGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCB5ZWFyID0gbmV3RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyAgd2Vla2RheTogXCJzaG9ydFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KTtcclxuXHJcbiAgICAgICAgZGF0ZVRpbWVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgICAgIGRhdGU6IHtkYXRlLCB3ZWVrRGF5LCBtb250aCwgeWVhcn0sXHJcbiAgICAgICAgICAgIGRhdGVJbkRhdGVGb3JtYXQ6IGRhdGVUaW1lcy5kYXRlLFxyXG4gICAgICAgICAgICB0aW1lczogZGF0ZVRpbWVzLnRpbWVzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGRhdGVUaW1lc0FycmF5O1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuLy8gZm9yIGxvb3AgaXMgdGhlIHdheSB0byBnbyBmb3IgZmV0Y2hpbmcgZGF0YSB0aHJvdWdoIGFwaSBjYWxscy4gZm9yRWFjaCBzdWNrcy5cclxuZXhwb3J0IGNvbnN0IGZldGNoRXZlbnRzID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHNcIik7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmV2ZW50cztcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGNvbnN0IGdldERhdGVzID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGRhdGVzID0gW107XHJcblxyXG4gICAgLy8gUG9wdWxhdGluZyBkYXRlVGltZUFycmF5IHdpdGggMzAgZGF0ZXMgZnJvbSB0b2RheVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8PSAzMDsgaSsrKSB7XHJcblxyXG4gICAgICAgIC8vIE9uZSBkYXkgZXF1YWxzIDg2NDAwMDAwIG1pbGxpc2Vjb25kcy4gRm9yIGVhY2ggaXRlcmF0aW9uIHdlIG5lZWQgdG8gYWRkICg4NjQwMDAwMCAqIGkpIG1pbGxpc2Vjb25kcyB3aXRoIHRvZGF5LiBUaGlzIHdheVxyXG4gICAgICAgIC8vIHdlIGNhbiBjYWxjdWxhdGUgZGF0ZXMgYXMgbWFueSBhcyB3ZSB3YW50LiAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg4NjQwMDAwMCAqIGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICAgICAgICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgICAgIGRhdGVzLnB1c2gobmV3RGF0ZSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlcztcclxuXHJcbn0iLCIvLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4vLyBmb3IgbG9vcCBpcyB0aGUgd2F5IHRvIGdvIGZvciBmZXRjaGluZyBkYXRhIHRocm91Z2ggYXBpIGNhbGxzLiBmb3JFYWNoIHN1Y2tzLlxyXG5leHBvcnQgY29uc3QgZ2V0U3R5bGlzdHMgPSBhc3luYyAobmV3VHJlYXRtZW50cykgPT4ge1xyXG5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9zdHlsaXN0c1wiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdHMgPSBbXTtcclxuXHJcbiAgICAgICAgbmV3VHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXNwb25zZS5kYXRhLmZvckVhY2goc3R5bGlzdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3R5bGlzdEZ1bGxOYW1lID0gc3R5bGlzdC5maXJzdE5hbWUgKyBcIiBcIiArIHN0eWxpc3QubGFzdE5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodHJlYXRtZW50LmNob29zZW5TdHlsaXN0ID09PSBzdHlsaXN0RnVsbE5hbWUpIHN0eWxpc3RzLnB1c2goc3R5bGlzdCk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBzdHlsaXN0cztcclxuXHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyLnJlc3BvbnNlLmRhdGEubXNnKTtcclxuXHJcbiAgICB9XHJcblxyXG59IiwiY29uc3QgdGltZXMgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXTtcclxuXHJcbi8vIDIwMjEtMTEtMTVcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXb3JraW5nVGltZXMgPSAoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgLy8gRm9yIGVhY2ggZGF0ZSBvZiB0aGUgZGF0ZVRpbWVBcnJheSBsb29wIHRocm91Z2ggdGhlIGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hkdWxlIHRvIGZpbmQgZGF5IG1hdGNoLlxyXG4gICAgZGF0ZXNBcnJheS5mb3JFYWNoKGRhdGUgPT4ge1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgLy8gZ2V0IHRoZSBkYXkgbmFtZSAoZXhhbXBsZSAtIE1vbmRheSkgZnJvbSB0aGUgZGF0ZSB0byBjaGVjayBhZ2FpbnN0IGVhY2ggc3R5bGlzdCdzIHdvcmtTY2hlZHVsZSdzIGRheSBOYW1lXHJcbiAgICAgICAgY29uc3QgZGF5TmFtZSA9IG5ld0RhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVVNcIiwgeyB3ZWVrZGF5OiBcImxvbmdcIiB9KTtcclxuXHJcbiAgICAgICAgLy8gTm8gc3R5bGlzdCBoYXMgd29ya1NjaGVkdWxlIG9uIFNhdHVyZGF5IGFuZCBTdW5kYXkgc28gZW5kIHRoZSBjdXJyZW50IGl0ZXJhdGlvbiBoZXJlXHJcbiAgICAgICAgaWYoZGF5TmFtZSA9PT0gXCJTYXR1cmRheVwiIHx8IGRheU5hbWUgPT09IFwiU3VuZGF5XCIpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBMb290IHRocm91Z2ggYWxsIHN0eWxpc3RzIHRvIGJlIGFibGUgdG8gbG9vcCB0aHJvdWdoIHRoZWlyIHdvcmtTY2hlZHVsZSBcclxuICAgICAgICBhbGxTdHlsaXN0cy5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgLy8gT25seSBvbmUgZnJvbSB0aGUgc3R5bGlzdCB3b3JrU2NoZWR1bGUgYXJyYXkgd2lsbCBtYXRjaCB3aXRoIHRoZSBjdXJyZW50IGRhdGUgaXRlcmF0aW9uLCBpZiBpdCdzIGZvdW5kIG5vIG5lZWQgdG9cclxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSByZXN0IG9mIHRoZSBzY2hlZHVsZXNcclxuICAgICAgICAgICAgZm9yKGxldCBwID0gMDsgcCA8IHN0eWxpc3Qud29ya1NjaGVkdWxlLmxlbmd0aDsgcCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2NoZWR1bGUgPSBzdHlsaXN0LndvcmtTY2hlZHVsZVtwXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzY2hlZHVsZS5sb2NhdGlvbiA9PT0gbG9jYXRpb24gJiYgc2NoZWR1bGUuZGF5ID09PSBkYXlOYW1lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFycmF5IG9mIHRpbWVzIGFib3ZlIGhhcyBhbGwgdGhlIHBvc3NpYmxlIHdvcmtpbmcgdGltZXMuIHN0YXJ0VGltZUluZGV4IGlzIHRoZSBpbmRleCBvZiB0aW1lIGZyb20gdGhlIHRpbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXJyYXksIGVuZFRpbWVJbmRleCBpcyB0aGUgXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHdoaWNoIHRpbWVzIGZyb20gdGhlIHRpbWVzIGFycmF5IGFib3ZlIG1hdGNoIHdpdGggdGhlIHdvcmtpbmcgc3RhcnQgYW5kIGVuZCB0aW1lIG9mIHRoZSBjdXJyZW50IHN0eWxpc3RcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbiBjdXJyZW50IGRhdGUuIFdlIG5lZWQgdG8gcHV0IGFsbCB0aGUgdGltZXMgc3RhcnRpbmcgZnJvbSBzdGFydFRpbWUgYW5kIGVuZGluZyBhdCBlbmRUaW1lXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lSW5kZXggPSB0aW1lcy5pbmRleE9mKHNjaGVkdWxlLnN0YXJ0VGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzY2hlZHVsZS5lbmRUaW1lKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgd29ya2luZ1RpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgcSA9IHN0YXJ0VGltZUluZGV4OyBxIDw9IGVuZFRpbWVJbmRleDsgcSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtpbmdUaW1lcy5wdXNoKHRpbWVzW3FdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCh7IHN0eWxpc3Q6IHN0eWxpc3QuZmlyc3ROYW1lICsgXCIgXCIgKyBzdHlsaXN0Lmxhc3ROYW1lLCB3b3JraW5nVGltZXN9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIFNheSBkYXkgb2YgY3VycmVudCBkYXRlIGl0ZXJhdGlvbiBpcyBNb25kYXkgYW5kIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIG9uIHRoaXMgZGF5IGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEl0XHJcbiAgICAgICAgLy8gbWVhbnMgYSBcclxuICAgICAgICBpZih0ZW1wLmxlbmd0aCA9PT0gbmV3VHJlYXRtZW50cy5sZW5ndGgpIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcy5wdXNoKHsgZGF0ZSwgc3R5bGlzdFdvcmtpbmdUaW1lczogdGVtcH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXM7XHJcblxyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBnZXREYXRlcyA9ICgpID0+IHtcclxuXHJcbiAgICBsZXQgZGF0ZXNBcnJheSA9IFtdO1xyXG5cclxuXHJcbiAgICBkYXRlc0FycmF5LnB1c2goe1xyXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpLFxyXG4gICAgICAgIHdlZWtEYXk6IFwiVG9kYXlcIixcclxuICAgICAgICBtb250aDogbmV3IERhdGUoKS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9IClcclxuICAgIH0pXHJcblxyXG4gICAgZm9yKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDg2NDAwMDAwICogaSkpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7ICB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0pXHJcblxyXG4gICAgICAgIGRhdGVzQXJyYXkucHVzaCh7ZGF0ZSwgd2Vla0RheSwgbW9udGh9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZXNBcnJheTtcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF4aW9zKG1ldGhvZCwgdXJsLCBib2R5LCBoYXBwZW5pbmcpIHtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHVybCk7XHJcblxyXG4gICAgLy8gLy8gTmVlZCB0byBwdXQgZm9sbG93aW5nIHRocmVlIGluIHRoZSB1c2VFZmZlY3QncyBkZXBlbmRlY3kgYXJyYXkgdG8gYWxsb3cgZm9yIGR5bmFtaWMgZGF0YSBmZXRjaGluZyBiYXNlZCBvbiB1c2VyJ3MgXHJcbiAgICAvLyAvLyBzZWFyY2ggaW5wdXQsIG5hdmlnYXRpb24gdG8gcHJldmlvdXMgYW5kIG5leHQgaXRlbXMuXHJcbiAgICAvLyBsZXQgc2VhcmNoVGV4dCA9IFwiXCI7XHJcbiAgICAvLyBsZXQgc2tpcCA9IDA7XHJcbiAgICAvLyBsZXQgbGltaXQgPSAwO1xyXG5cclxuICAgIC8vIC8vIElmIGl0J3MgYSBwb3N0IHJlcXVlc3QgdGhlbiBib2R5IHdpbGwgY29udGFpbiBzZWFyY2hUZXh0LCBza2lwIGFuZCBsaW1pdC4gVXBkYXRlIHRoZSBhYm92ZSB0aHJlZSB3aXRoIHRoZSBib2R5J3MgdmFsdWVzXHJcbiAgICAvLyBpZihib2R5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAvLyAgICAgc2VhcmNoVGV4dCA9IGJvZHkuc2VhcmNoVGV4dDtcclxuICAgIC8vICAgICBza2lwID0gYm9keS5za2lwO1xyXG4gICAgLy8gICAgIGxpbWl0ID0gYm9keS5saW1pdFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRleHQsIHNraXAsIGxpbWl0KTtcclxuICAgIC8vIGNvbnNvbGUubG9nKG1ldGhvZCwgdXJsLCBib2R5KTtcclxuXHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbdG90YWxEYXRhQ291bnQsIHNldFRvdGFsRGF0YUNvdW50XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcyh7IG1ldGhvZCwgdXJsLCBkYXRhOiBib2R5IH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbmV3RGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIGdldCBtZXRob2QgdGhlbiBhbiBhcnJheSBvZiBqc29uIG9iamVjdHMgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmRcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShuZXdEYXRhKSkgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLml0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRWxzZSwgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIHBvc3QgbWV0aG9kLiBTbyBhbiBvYmplY3QgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmQgd2hpY2ggY29udGFpbnMgZGF0YSBhbmRcclxuICAgICAgICAgICAgLy8gdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxJdGVtQ291bnQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRvdGFsRGF0YUNvdW50KHRvdGFsSXRlbUNvdW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICB9LCBbdXJsLCBoYXBwZW5pbmddKTsgXHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhkYXRhKTtcclxuXHJcbiAgICByZXR1cm4geyBkYXRhLCB0b3RhbERhdGFDb3VudCwgZXJyb3IsIGxvYWRpbmcgfTtcclxuXHJcbn1cclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBJbWFnZTE7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9oZWFkID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9oZWFkXCIpKTtcbnZhciBfdG9CYXNlNjQgPSByZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi90by1iYXNlLTY0XCIpO1xudmFyIF9pbWFnZUNvbmZpZyA9IHJlcXVpcmUoXCIuLi9zZXJ2ZXIvaW1hZ2UtY29uZmlnXCIpO1xudmFyIF91c2VJbnRlcnNlY3Rpb24gPSByZXF1aXJlKFwiLi91c2UtaW50ZXJzZWN0aW9uXCIpO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgfVxuICAgIHJldHVybiBvYmo7XG59XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkge1xuICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7XG4gICAgICAgIH07XG4gICAgICAgIHZhciBvd25LZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIG93bktleXMgPSBvd25LZXlzLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSkuZmlsdGVyKGZ1bmN0aW9uKHN5bSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwgc3ltKS5lbnVtZXJhYmxlO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIG93bktleXMuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgICAgICAgICAgIF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuICAgIHZhciBrZXksIGk7XG4gICAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICAgICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XG4gICAgICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcbiAgICAgICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzb3VyY2UsIGtleSkpIGNvbnRpbnVlO1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSB7XG4gICAgfTtcbiAgICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAga2V5ID0gc291cmNlS2V5c1tpXTtcbiAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmNvbnN0IGxvYWRlZEltYWdlVVJMcyA9IG5ldyBTZXQoKTtcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGdsb2JhbC5fX05FWFRfSU1BR0VfSU1QT1JURUQgPSB0cnVlO1xufVxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbXG4gICAgJ2xhenknLFxuICAgICdlYWdlcicsXG4gICAgdW5kZWZpbmVkXG5dO1xuY29uc3QgbG9hZGVycyA9IG5ldyBNYXAoW1xuICAgIFtcbiAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICBkZWZhdWx0TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdpbWdpeCcsXG4gICAgICAgIGltZ2l4TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjbG91ZGluYXJ5JyxcbiAgICAgICAgY2xvdWRpbmFyeUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnYWthbWFpJyxcbiAgICAgICAgYWthbWFpTG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdjdXN0b20nLFxuICAgICAgICBjdXN0b21Mb2FkZXJcbiAgICBdLCBcbl0pO1xuY29uc3QgVkFMSURfTEFZT1VUX1ZBTFVFUyA9IFtcbiAgICAnZmlsbCcsXG4gICAgJ2ZpeGVkJyxcbiAgICAnaW50cmluc2ljJyxcbiAgICAncmVzcG9uc2l2ZScsXG4gICAgdW5kZWZpbmVkLCBcbl07XG5mdW5jdGlvbiBpc1N0YXRpY1JlcXVpcmUoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5kZWZhdWx0ICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltYWdlRGF0YShzcmMpIHtcbiAgICByZXR1cm4gc3JjLnNyYyAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbXBvcnQoc3JjKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBzcmMgPT09ICdvYmplY3QnICYmIChpc1N0YXRpY1JlcXVpcmUoc3JjKSB8fCBpc1N0YXRpY0ltYWdlRGF0YShzcmMpKTtcbn1cbmNvbnN0IHsgZGV2aWNlU2l6ZXM6IGNvbmZpZ0RldmljZVNpemVzICwgaW1hZ2VTaXplczogY29uZmlnSW1hZ2VTaXplcyAsIGxvYWRlcjogY29uZmlnTG9hZGVyICwgcGF0aDogY29uZmlnUGF0aCAsIGRvbWFpbnM6IGNvbmZpZ0RvbWFpbnMgLCAgfSA9IHByb2Nlc3MuZW52Ll9fTkVYVF9JTUFHRV9PUFRTIHx8IF9pbWFnZUNvbmZpZy5pbWFnZUNvbmZpZ0RlZmF1bHQ7XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gW1xuICAgIC4uLmNvbmZpZ0RldmljZVNpemVzLFxuICAgIC4uLmNvbmZpZ0ltYWdlU2l6ZXNcbl07XG5jb25maWdEZXZpY2VTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5hbGxTaXplcy5zb3J0KChhLCBiKT0+YSAtIGJcbik7XG5mdW5jdGlvbiBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpIHtcbiAgICBpZiAoc2l6ZXMgJiYgKGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSkge1xuICAgICAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoUmUgPSAvKF58XFxzKSgxP1xcZD9cXGQpdncvZztcbiAgICAgICAgY29uc3QgcGVyY2VudFNpemVzID0gW107XG4gICAgICAgIGZvcihsZXQgbWF0Y2g7IG1hdGNoID0gdmlld3BvcnRXaWR0aFJlLmV4ZWMoc2l6ZXMpOyBtYXRjaCl7XG4gICAgICAgICAgICBwZXJjZW50U2l6ZXMucHVzaChwYXJzZUludChtYXRjaFsyXSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDE7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKChzKT0+cyA+PSBjb25maWdEZXZpY2VTaXplc1swXSAqIHNtYWxsZXN0UmF0aW9cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpZHRoICE9PSAnbnVtYmVyJyB8fCBsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGhzOiBjb25maWdEZXZpY2VTaXplcyxcbiAgICAgICAgICAgIGtpbmQ6ICd3J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB3aWR0aHMgPSBbXG4gICAgICAgIC4uLm5ldyBTZXQoLy8gPiBUaGlzIG1lYW5zIHRoYXQgbW9zdCBPTEVEIHNjcmVlbnMgdGhhdCBzYXkgdGhleSBhcmUgM3ggcmVzb2x1dGlvbixcbiAgICAgICAgLy8gPiBhcmUgYWN0dWFsbHkgM3ggaW4gdGhlIGdyZWVuIGNvbG9yLCBidXQgb25seSAxLjV4IGluIHRoZSByZWQgYW5kXG4gICAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgICAvLyA+IHJlc29sdXRpb24gaW1hZ2Ugd2lsbCBiZSB2aXN1YWxseSB0aGUgc2FtZSwgdGhvdWdoIHRoZSAzeCBpbWFnZVxuICAgICAgICAvLyA+IHRha2VzIHNpZ25pZmljYW50bHkgbW9yZSBkYXRhLiBFdmVuIHRydWUgM3ggcmVzb2x1dGlvbiBzY3JlZW5zIGFyZVxuICAgICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAgIC8vID4gc29tZXRoaW5nIGxpa2UgYSBtYWduaWZ5aW5nIGdsYXNzLlxuICAgICAgICAvLyBodHRwczovL2Jsb2cudHdpdHRlci5jb20vZW5naW5lZXJpbmcvZW5fdXMvdG9waWNzL2luZnJhc3RydWN0dXJlLzIwMTkvY2FwcGluZy1pbWFnZS1maWRlbGl0eS1vbi11bHRyYS1oaWdoLXJlc29sdXRpb24tZGV2aWNlcy5odG1sXG4gICAgICAgIFtcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqLyBcbiAgICAgICAgXS5tYXAoKHcpPT5hbGxTaXplcy5maW5kKChwKT0+cCA+PSB3XG4gICAgICAgICAgICApIHx8IGFsbFNpemVzW2FsbFNpemVzLmxlbmd0aCAtIDFdXG4gICAgICAgICkpLCBcbiAgICBdO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRocyxcbiAgICAgICAga2luZDogJ3gnXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdlbmVyYXRlSW1nQXR0cnMoeyBzcmMgLCB1bm9wdGltaXplZCAsIGxheW91dCAsIHdpZHRoICwgcXVhbGl0eSAsIHNpemVzICwgbG9hZGVyICB9KSB7XG4gICAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3QgeyB3aWR0aHMgLCBraW5kICB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKTtcbiAgICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDE7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2l6ZXM6ICFzaXplcyAmJiBraW5kID09PSAndycgPyAnMTAwdncnIDogc2l6ZXMsXG4gICAgICAgIHNyY1NldDogd2lkdGhzLm1hcCgodywgaSk9PmAke2xvYWRlcih7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdcbiAgICAgICAgICAgIH0pfSAke2tpbmQgPT09ICd3JyA/IHcgOiBpICsgMX0ke2tpbmR9YFxuICAgICAgICApLmpvaW4oJywgJyksXG4gICAgICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgICAgIC8vIGF0dHJpYnV0ZXMgaW4gb3JkZXIuIElmIHdlIGtlZXAgYHNyY2AgdGhlIGZpcnN0IG9uZSwgU2FmYXJpIHdpbGxcbiAgICAgICAgLy8gaW1tZWRpYXRlbHkgc3RhcnQgdG8gZmV0Y2ggYHNyY2AsIGJlZm9yZSBgc2l6ZXNgIGFuZCBgc3JjU2V0YCBhcmUgZXZlblxuICAgICAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgICAgICAvLyBhbmQgYHNpemVzYCBhcmUgZGVmaW5lZC5cbiAgICAgICAgLy8gVGhpcyBidWcgY2Fubm90IGJlIHJlcHJvZHVjZWQgaW4gQ2hyb21lIG9yIEZpcmVmb3guXG4gICAgICAgIHNyYzogbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHF1YWxpdHksXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhzW2xhc3RdXG4gICAgICAgIH0pXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGdldEludCh4KSB7XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4geDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gZGVmYXVsdEltYWdlTG9hZGVyKGxvYWRlclByb3BzKSB7XG4gICAgY29uc3QgbG9hZCA9IGxvYWRlcnMuZ2V0KGNvbmZpZ0xvYWRlcik7XG4gICAgaWYgKGxvYWQpIHtcbiAgICAgICAgcmV0dXJuIGxvYWQoX29iamVjdFNwcmVhZCh7XG4gICAgICAgICAgICByb290OiBjb25maWdQYXRoXG4gICAgICAgIH0sIGxvYWRlclByb3BzKSk7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBcImxvYWRlclwiIGZvdW5kIGluIFwibmV4dC5jb25maWcuanNcIi4gRXhwZWN0ZWQ6ICR7X2ltYWdlQ29uZmlnLlZBTElEX0xPQURFUlMuam9pbignLCAnKX0uIFJlY2VpdmVkOiAke2NvbmZpZ0xvYWRlcn1gKTtcbn1cbi8vIFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3EvMzk3Nzc4MzMvMjY2NTM1IGZvciB3aHkgd2UgdXNlIHRoaXMgcmVmXG4vLyBoYW5kbGVyIGluc3RlYWQgb2YgdGhlIGltZydzIG9uTG9hZCBhdHRyaWJ1dGUuXG5mdW5jdGlvbiBoYW5kbGVMb2FkaW5nKGltZywgc3JjLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgIGlmICghaW1nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlTG9hZCA9ICgpPT57XG4gICAgICAgIGlmICghaW1nLnNyYy5zdGFydHNXaXRoKCdkYXRhOicpKSB7XG4gICAgICAgICAgICBjb25zdCBwID0gJ2RlY29kZScgaW4gaW1nID8gaW1nLmRlY29kZSgpIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICBwLmNhdGNoKCgpPT57XG4gICAgICAgICAgICB9KS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmZpbHRlciA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRTaXplID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2FkZWRJbWFnZVVSTHMuYWRkKHNyYyk7XG4gICAgICAgICAgICAgICAgaWYgKG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmF0dXJhbFdpZHRoICwgbmF0dXJhbEhlaWdodCAgfSA9IGltZztcbiAgICAgICAgICAgICAgICAgICAgLy8gUGFzcyBiYWNrIHJlYWQtb25seSBwcmltaXRpdmUgdmFsdWVzIGJ1dCBub3QgdGhlXG4gICAgICAgICAgICAgICAgICAgIC8vIHVuZGVybHlpbmcgRE9NIGVsZW1lbnQgYmVjYXVzZSBpdCBjb3VsZCBiZSBtaXN1c2VkLlxuICAgICAgICAgICAgICAgICAgICBvbkxvYWRpbmdDb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsV2lkdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYXR1cmFsSGVpZ2h0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVmO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHJlZiA9IGltZy5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBnZXRDb21wdXRlZFN0eWxlKGltZy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnICYmIHBhcmVudC5kaXNwbGF5ID09PSAnZmxleCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgYXMgYSBjaGlsZCBvZiBhIGZsZXggY29udGFpbmVyLiBDb25zaWRlciB3cmFwcGluZyB0aGUgaW1hZ2Ugd2l0aCBhIGRpdiB0byBjb25maWd1cmUgdGhlIHdpZHRoLmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiBwYXJlbnQucG9zaXRpb24gIT09ICdyZWxhdGl2ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbWF5IG5vdCByZW5kZXIgcHJvcGVybHkgd2l0aCBhIHBhcmVudCB1c2luZyBwb3NpdGlvbjpcIiR7cGFyZW50LnBvc2l0aW9ufVwiLiBDb25zaWRlciBjaGFuZ2luZyB0aGUgcGFyZW50IHN0eWxlIHRvIHBvc2l0aW9uOlwicmVsYXRpdmVcIiB3aXRoIGEgd2lkdGggYW5kIGhlaWdodC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBpZiAoaW1nLmNvbXBsZXRlKSB7XG4gICAgICAgIC8vIElmIHRoZSByZWFsIGltYWdlIGZhaWxzIHRvIGxvYWQsIHRoaXMgd2lsbCBzdGlsbCByZW1vdmUgdGhlIHBsYWNlaG9sZGVyLlxuICAgICAgICAvLyBUaGlzIGlzIHRoZSBkZXNpcmVkIGJlaGF2aW9yIGZvciBub3csIGFuZCB3aWxsIGJlIHJldmlzaXRlZCB3aGVuIGVycm9yXG4gICAgICAgIC8vIGhhbmRsaW5nIGlzIHdvcmtlZCBvbiBmb3IgdGhlIGltYWdlIGNvbXBvbmVudCBpdHNlbGYuXG4gICAgICAgIGhhbmRsZUxvYWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBpbWcub25sb2FkID0gaGFuZGxlTG9hZDtcbiAgICB9XG59XG5mdW5jdGlvbiBJbWFnZTEoX3BhcmFtKSB7XG4gICAgdmFyIHsgc3JjICwgc2l6ZXMgLCB1bm9wdGltaXplZCA9ZmFsc2UgLCBwcmlvcml0eSA9ZmFsc2UgLCBsb2FkaW5nICwgbGF6eUJvdW5kYXJ5ID0nMjAwcHgnICwgY2xhc3NOYW1lICwgcXVhbGl0eSAsIHdpZHRoICwgaGVpZ2h0ICwgb2JqZWN0Rml0ICwgb2JqZWN0UG9zaXRpb24gLCBvbkxvYWRpbmdDb21wbGV0ZSAsIGxvYWRlciA9ZGVmYXVsdEltYWdlTG9hZGVyICwgcGxhY2Vob2xkZXIgPSdlbXB0eScgLCBibHVyRGF0YVVSTCAgfSA9IF9wYXJhbSwgYWxsID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wYXJhbSwgW1wic3JjXCIsIFwic2l6ZXNcIiwgXCJ1bm9wdGltaXplZFwiLCBcInByaW9yaXR5XCIsIFwibG9hZGluZ1wiLCBcImxhenlCb3VuZGFyeVwiLCBcImNsYXNzTmFtZVwiLCBcInF1YWxpdHlcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiLCBcIm9iamVjdEZpdFwiLCBcIm9iamVjdFBvc2l0aW9uXCIsIFwib25Mb2FkaW5nQ29tcGxldGVcIiwgXCJsb2FkZXJcIiwgXCJwbGFjZWhvbGRlclwiLCBcImJsdXJEYXRhVVJMXCJdKTtcbiAgICBsZXQgcmVzdCA9IGFsbDtcbiAgICBsZXQgbGF5b3V0ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJztcbiAgICBpZiAoJ2xheW91dCcgaW4gcmVzdCkge1xuICAgICAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgICAgICBpZiAocmVzdC5sYXlvdXQpIGxheW91dCA9IHJlc3QubGF5b3V0O1xuICAgICAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgICAgIGRlbGV0ZSByZXN0WydsYXlvdXQnXTtcbiAgICB9XG4gICAgbGV0IHN0YXRpY1NyYyA9ICcnO1xuICAgIGlmIChpc1N0YXRpY0ltcG9ydChzcmMpKSB7XG4gICAgICAgIGNvbnN0IHN0YXRpY0ltYWdlRGF0YSA9IGlzU3RhdGljUmVxdWlyZShzcmMpID8gc3JjLmRlZmF1bHQgOiBzcmM7XG4gICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLnNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIHNyYy4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICB9XG4gICAgICAgIGJsdXJEYXRhVVJMID0gYmx1ckRhdGFVUkwgfHwgc3RhdGljSW1hZ2VEYXRhLmJsdXJEYXRhVVJMO1xuICAgICAgICBzdGF0aWNTcmMgPSBzdGF0aWNJbWFnZURhdGEuc3JjO1xuICAgICAgICBpZiAoIWxheW91dCB8fCBsYXlvdXQgIT09ICdmaWxsJykge1xuICAgICAgICAgICAgaGVpZ2h0ID0gaGVpZ2h0IHx8IHN0YXRpY0ltYWdlRGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB3aWR0aCA9IHdpZHRoIHx8IHN0YXRpY0ltYWdlRGF0YS53aWR0aDtcbiAgICAgICAgICAgIGlmICghc3RhdGljSW1hZ2VEYXRhLmhlaWdodCB8fCAhc3RhdGljSW1hZ2VEYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBbiBvYmplY3Qgc2hvdWxkIG9ubHkgYmUgcGFzc2VkIHRvIHRoZSBpbWFnZSBjb21wb25lbnQgc3JjIHBhcmFtZXRlciBpZiBpdCBjb21lcyBmcm9tIGEgc3RhdGljIGltYWdlIGltcG9ydC4gSXQgbXVzdCBpbmNsdWRlIGhlaWdodCBhbmQgd2lkdGguIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzcmMgPSB0eXBlb2Ygc3JjID09PSAnc3RyaW5nJyA/IHNyYyA6IHN0YXRpY1NyYztcbiAgICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aCk7XG4gICAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodCk7XG4gICAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KTtcbiAgICBsZXQgaXNMYXp5ID0gIXByaW9yaXR5ICYmIChsb2FkaW5nID09PSAnbGF6eScgfHwgdHlwZW9mIGxvYWRpbmcgPT09ICd1bmRlZmluZWQnKTtcbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykgfHwgc3JjLnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSFRUUC9CYXNpY3Nfb2ZfSFRUUC9EYXRhX1VSSXNcbiAgICAgICAgdW5vcHRpbWl6ZWQgPSB0cnVlO1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGxvYWRlZEltYWdlVVJMcy5oYXMoc3JjKSkge1xuICAgICAgICBpc0xhenkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2UgaXMgbWlzc2luZyByZXF1aXJlZCBcInNyY1wiIHByb3BlcnR5LiBNYWtlIHN1cmUgeW91IHBhc3MgXCJzcmNcIiBpbiBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxheW91dFwiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bGF5b3V0fVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MQVlPVVRfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4od2lkdGhJbnQpIHx8IHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKGhlaWdodEludCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcIndpZHRoXCIgb3IgXCJoZWlnaHRcIiBwcm9wZXJ0eS4gVGhlc2Ugc2hvdWxkIGJlIG51bWVyaWMgdmFsdWVzLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJyAmJiAod2lkdGggfHwgaGVpZ2h0KSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGFuZCBcImxheW91dD0nZmlsbCdcIiBoYXMgdW51c2VkIHByb3BlcnRpZXMgYXNzaWduZWQuIFBsZWFzZSByZW1vdmUgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgaW52YWxpZCBcImxvYWRpbmdcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xvYWRpbmd9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xPQURJTkdfVkFMVUVTLm1hcChTdHJpbmcpLmpvaW4oJywnKX0uYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByaW9yaXR5ICYmIGxvYWRpbmcgPT09ICdsYXp5Jykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBib3RoIFwicHJpb3JpdHlcIiBhbmQgXCJsb2FkaW5nPSdsYXp5J1wiIHByb3BlcnRpZXMuIE9ubHkgb25lIHNob3VsZCBiZSB1c2VkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICBpZiAobGF5b3V0ICE9PSAnZmlsbCcgJiYgKHdpZHRoSW50IHx8IDApICogKGhlaWdodEludCB8fCAwKSA8IDE2MDApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgc21hbGxlciB0aGFuIDQweDQwLiBDb25zaWRlciByZW1vdmluZyB0aGUgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSB0byBpbXByb3ZlIHBlcmZvcm1hbmNlLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFibHVyRGF0YVVSTCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFZBTElEX0JMVVJfRVhUID0gW1xuICAgICAgICAgICAgICAgICAgICAnanBlZycsXG4gICAgICAgICAgICAgICAgICAgICdwbmcnLFxuICAgICAgICAgICAgICAgICAgICAnd2VicCdcbiAgICAgICAgICAgICAgICBdIC8vIHNob3VsZCBtYXRjaCBuZXh0LWltYWdlLWxvYWRlclxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgYnV0IGlzIG1pc3NpbmcgdGhlIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eS5cbiAgICAgICAgICBQb3NzaWJsZSBzb2x1dGlvbnM6XG4gICAgICAgICAgICAtIEFkZCBhIFwiYmx1ckRhdGFVUkxcIiBwcm9wZXJ0eSwgdGhlIGNvbnRlbnRzIHNob3VsZCBiZSBhIHNtYWxsIERhdGEgVVJMIHRvIHJlcHJlc2VudCB0aGUgaW1hZ2VcbiAgICAgICAgICAgIC0gQ2hhbmdlIHRoZSBcInNyY1wiIHByb3BlcnR5IHRvIGEgc3RhdGljIGltcG9ydCB3aXRoIG9uZSBvZiB0aGUgc3VwcG9ydGVkIGZpbGUgdHlwZXM6ICR7VkFMSURfQkxVUl9FWFQuam9pbignLCcpfVxuICAgICAgICAgICAgLSBSZW1vdmUgdGhlIFwicGxhY2Vob2xkZXJcIiBwcm9wZXJ0eSwgZWZmZWN0aXZlbHkgbm8gYmx1ciBlZmZlY3RcbiAgICAgICAgICBSZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL3BsYWNlaG9sZGVyLWJsdXItZGF0YS11cmxgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3JlZicgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwicmVmXCIgcHJvcGVydHkuIENvbnNpZGVyIHVzaW5nIHRoZSBcIm9uTG9hZGluZ0NvbXBsZXRlXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoJ3N0eWxlJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJzdHlsZVwiIHByb3BlcnR5LiBQbGVhc2UgdXNlIHRoZSBcImNsYXNzTmFtZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmFuZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApICsgMTAwO1xuICAgICAgICBpZiAoIXVub3B0aW1pemVkICYmICFsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgd2lkdGg6IHJhbmQsXG4gICAgICAgICAgICBxdWFsaXR5OiA3NVxuICAgICAgICB9KS5pbmNsdWRlcyhyYW5kLnRvU3RyaW5nKCkpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGEgXCJsb2FkZXJcIiBwcm9wZXJ0eSB0aGF0IGRvZXMgbm90IGltcGxlbWVudCB3aWR0aC4gUGxlYXNlIGltcGxlbWVudCBpdCBvciB1c2UgdGhlIFwidW5vcHRpbWl6ZWRcIiBwcm9wZXJ0eSBpbnN0ZWFkLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyLXdpZHRoYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgW3NldFJlZiwgaXNJbnRlcnNlY3RlZF0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcbiAgICAgICAgcm9vdE1hcmdpbjogbGF6eUJvdW5kYXJ5LFxuICAgICAgICBkaXNhYmxlZDogIWlzTGF6eVxuICAgIH0pO1xuICAgIGNvbnN0IGlzVmlzaWJsZSA9ICFpc0xhenkgfHwgaXNJbnRlcnNlY3RlZDtcbiAgICBsZXQgd3JhcHBlclN0eWxlO1xuICAgIGxldCBzaXplclN0eWxlO1xuICAgIGxldCBzaXplclN2ZztcbiAgICBsZXQgaW1nU3R5bGUgPSB7XG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB0b3A6IDAsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBwYWRkaW5nOiAwLFxuICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgbWFyZ2luOiAnYXV0bycsXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIHdpZHRoOiAwLFxuICAgICAgICBoZWlnaHQ6IDAsXG4gICAgICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG1pbkhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgb2JqZWN0Rml0LFxuICAgICAgICBvYmplY3RQb3NpdGlvblxuICAgIH07XG4gICAgY29uc3QgYmx1clN0eWxlID0gcGxhY2Vob2xkZXIgPT09ICdibHVyJyA/IHtcbiAgICAgICAgZmlsdGVyOiAnYmx1cigyMHB4KScsXG4gICAgICAgIGJhY2tncm91bmRTaXplOiBvYmplY3RGaXQgfHwgJ2NvdmVyJyxcbiAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKFwiJHtibHVyRGF0YVVSTH1cIilgLFxuICAgICAgICBiYWNrZ3JvdW5kUG9zaXRpb246IG9iamVjdFBvc2l0aW9uIHx8ICcwJSAwJSdcbiAgICB9IDoge1xuICAgIH07XG4gICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIGxheW91dD1cImZpbGxcIiAvPlxuICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgICBsZWZ0OiAwLFxuICAgICAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIC8+XG4gICAgICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdUb3AgPSBpc05hTihxdW90aWVudCkgPyAnMTAwJScgOiBgJHtxdW90aWVudCAqIDEwMH0lYDtcbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cInJlc3BvbnNpdmVcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBwYWRkaW5nVG9wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmA7XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZml4ZWQnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImZpeGVkXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0SW50XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgLz5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtdXN0IHVzZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIgcHJvcGVydGllcyBvciBcImxheW91dD0nZmlsbCdcIiBwcm9wZXJ0eS5gKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaW1nQXR0cmlidXRlcyA9IHtcbiAgICAgICAgc3JjOiAnZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBQUFBQVAvLy95SDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUJSQUE3JyxcbiAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgIHNpemVzOiB1bmRlZmluZWRcbiAgICB9O1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgICAgaW1nQXR0cmlidXRlcyA9IGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICBsYXlvdXQsXG4gICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgc2l6ZXMsXG4gICAgICAgICAgICBsb2FkZXJcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxldCBzcmNTdHJpbmcgPSBzcmM7XG4gICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiB3cmFwcGVyU3R5bGVcbiAgICB9LCBzaXplclN0eWxlID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHNpemVyU3R5bGVcbiAgICB9LCBzaXplclN2ZyA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICAgICAgcGFkZGluZzogMFxuICAgICAgICB9LFxuICAgICAgICBhbHQ6IFwiXCIsXG4gICAgICAgIFwiYXJpYS1oaWRkZW5cIjogdHJ1ZSxcbiAgICAgICAgc3JjOiBgZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwkeygwLCBfdG9CYXNlNjQpLnRvQmFzZTY0KHNpemVyU3ZnKX1gXG4gICAgfSkgOiBudWxsKSA6IG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBpbWdBdHRyaWJ1dGVzLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogKGltZyk9PntcbiAgICAgICAgICAgIHNldFJlZihpbWcpO1xuICAgICAgICAgICAgaGFuZGxlTG9hZGluZyhpbWcsIHNyY1N0cmluZywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpO1xuICAgICAgICB9LFxuICAgICAgICBzdHlsZTogX29iamVjdFNwcmVhZCh7XG4gICAgICAgIH0sIGltZ1N0eWxlLCBibHVyU3R5bGUpXG4gICAgfSkpLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJub3NjcmlwdFwiLCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgIHNyYyxcbiAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgIGxheW91dCxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICBzaXplcyxcbiAgICAgICAgbG9hZGVyXG4gICAgfSksIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBzdHlsZTogaW1nU3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nIHx8ICdsYXp5J1xuICAgIH0pKSksIHByaW9yaXR5ID8gLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgIC8vIGZvciBicm93c2VycyB0aGF0IGRvIG5vdCBzdXBwb3J0IGBpbWFnZXNyY3NldGAsIGFuZCBpbiB0aG9zZSBjYXNlc1xuICAgIC8vIGl0IHdvdWxkIGxpa2VseSBjYXVzZSB0aGUgaW5jb3JyZWN0IGltYWdlIHRvIGJlIHByZWxvYWRlZC5cbiAgICAvL1xuICAgIC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2F0dHItbGluay1pbWFnZXNyY3NldFxuICAgIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfaGVhZC5kZWZhdWx0LCBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgICAga2V5OiAnX19uaW1nLScgKyBpbWdBdHRyaWJ1dGVzLnNyYyArIGltZ0F0dHJpYnV0ZXMuc3JjU2V0ICsgaW1nQXR0cmlidXRlcy5zaXplcyxcbiAgICAgICAgcmVsOiBcInByZWxvYWRcIixcbiAgICAgICAgYXM6IFwiaW1hZ2VcIixcbiAgICAgICAgaHJlZjogaW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyYyxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzcmNzZXQgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc3Jjc2V0OiBpbWdBdHRyaWJ1dGVzLnNyY1NldCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZTogaW1hZ2VzaXplcyBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzaXplczogaW1nQXR0cmlidXRlcy5zaXplc1xuICAgIH0pKSA6IG51bGwpKTtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVNyYyhzcmMpIHtcbiAgICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmM7XG59XG5mdW5jdGlvbiBpbWdpeExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2F1dG89Zm9ybWF0JmZpdD1tYXgmdz0zMDBcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX1gKTtcbiAgICBjb25zdCBwYXJhbXMgPSB1cmwuc2VhcmNoUGFyYW1zO1xuICAgIHBhcmFtcy5zZXQoJ2F1dG8nLCBwYXJhbXMuZ2V0KCdhdXRvJykgfHwgJ2Zvcm1hdCcpO1xuICAgIHBhcmFtcy5zZXQoJ2ZpdCcsIHBhcmFtcy5nZXQoJ2ZpdCcpIHx8ICdtYXgnKTtcbiAgICBwYXJhbXMuc2V0KCd3JywgcGFyYW1zLmdldCgndycpIHx8IHdpZHRoLnRvU3RyaW5nKCkpO1xuICAgIGlmIChxdWFsaXR5KSB7XG4gICAgICAgIHBhcmFtcy5zZXQoJ3EnLCBxdWFsaXR5LnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICByZXR1cm4gdXJsLmhyZWY7XG59XG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggIH0pIHtcbiAgICByZXR1cm4gYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfT9pbXdpZHRoPSR7d2lkdGh9YDtcbn1cbmZ1bmN0aW9uIGNsb3VkaW5hcnlMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vZGVtby9pbWFnZS91cGxvYWQvd18zMDAsY19saW1pdCxxX2F1dG8vdHVydGxlcy5qcGdcbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAgICdmX2F1dG8nLFxuICAgICAgICAnY19saW1pdCcsXG4gICAgICAgICd3XycgKyB3aWR0aCxcbiAgICAgICAgJ3FfJyArIChxdWFsaXR5IHx8ICdhdXRvJylcbiAgICBdO1xuICAgIGxldCBwYXJhbXNTdHJpbmcgPSBwYXJhbXMuam9pbignLCcpICsgJy8nO1xuICAgIHJldHVybiBgJHtyb290fSR7cGFyYW1zU3RyaW5nfSR7bm9ybWFsaXplU3JjKHNyYyl9YDtcbn1cbmZ1bmN0aW9uIGN1c3RvbUxvYWRlcih7IHNyYyAgfSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBtaXNzaW5nIFwibG9hZGVyXCIgcHJvcC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlcmApO1xufVxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBtaXNzaW5nVmFsdWVzID0gW107XG4gICAgICAgIC8vIHRoZXNlIHNob3VsZCBhbHdheXMgYmUgcHJvdmlkZWQgYnV0IG1ha2Ugc3VyZSB0aGV5IGFyZVxuICAgICAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKTtcbiAgICAgICAgaWYgKCF3aWR0aCkgbWlzc2luZ1ZhbHVlcy5wdXNoKCd3aWR0aCcpO1xuICAgICAgICBpZiAobWlzc2luZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5leHQgSW1hZ2UgT3B0aW1pemF0aW9uIHJlcXVpcmVzICR7bWlzc2luZ1ZhbHVlcy5qb2luKCcsICcpfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnLy8nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgcHJvdG9jb2wtcmVsYXRpdmUgVVJMICgvLykgbXVzdCBiZSBjaGFuZ2VkIHRvIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgICAgICAgbGV0IHBhcnNlZFNyYztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcGFyc2VkU3JjID0gbmV3IFVSTChzcmMpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGlmIHVzaW5nIHJlbGF0aXZlIGltYWdlIGl0IG11c3Qgc3RhcnQgd2l0aCBhIGxlYWRpbmcgc2xhc2ggXCIvXCIgb3IgYmUgYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAndGVzdCcgJiYgIWNvbmZpZ0RvbWFpbnMuaW5jbHVkZXMocGFyc2VkU3JjLmhvc3RuYW1lKSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArIGBTZWUgbW9yZSBpbmZvOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLXVuY29uZmlndXJlZC1ob3N0YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGAke3Jvb3R9P3VybD0ke2VuY29kZVVSSUNvbXBvbmVudChzcmMpfSZ3PSR7d2lkdGh9JnE9JHtxdWFsaXR5IHx8IDc1fWA7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWltYWdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCByZXF1ZXN0SWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjayAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGNiKSB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgY2Ioe1xuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lUmVtYWluaW5nOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIDEpO1xufTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2s7XG5jb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2sgJiYgc2VsZi5jYW5jZWxJZGxlQ2FsbGJhY2suYmluZCh3aW5kb3cpIHx8IGZ1bmN0aW9uKGlkKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XG59O1xuZXhwb3J0cy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSBjYW5jZWxJZGxlQ2FsbGJhY2s7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlcXVlc3QtaWRsZS1jYWxsYmFjay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMudXNlSW50ZXJzZWN0aW9uID0gdXNlSW50ZXJzZWN0aW9uO1xudmFyIF9yZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJztcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbih7IHJvb3RNYXJnaW4gLCBkaXNhYmxlZCAgfSkge1xuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XG4gICAgY29uc3QgdW5vYnNlcnZlID0gKDAsIF9yZWFjdCkudXNlUmVmKCk7XG4gICAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gKDAsIF9yZWFjdCkudXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcbiAgICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpO1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuO1xuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSBvYnNlcnZlKGVsLCAoaXNWaXNpYmxlKT0+aXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKVxuICAgICAgICAgICAgLCB7XG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGlzRGlzYWJsZWQsXG4gICAgICAgIHJvb3RNYXJnaW4sXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICAoMCwgX3JlYWN0KS51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKCk9PigwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykuY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIHZpc2libGVcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBzZXRSZWYsXG4gICAgICAgIHZpc2libGVcbiAgICBdO1xufVxuZnVuY3Rpb24gb2JzZXJ2ZShlbGVtZW50LCBjYWxsYmFjaywgb3B0aW9ucykge1xuICAgIGNvbnN0IHsgaWQgLCBvYnNlcnZlciAsIGVsZW1lbnRzICB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucyk7XG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGVsZW1lbnQpO1xuICAgIHJldHVybiBmdW5jdGlvbiB1bm9ic2VydmUoKSB7XG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcbiAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsZW1lbnQpO1xuICAgICAgICAvLyBEZXN0cm95IG9ic2VydmVyIHdoZW4gdGhlcmUncyBub3RoaW5nIGxlZnQgdG8gd2F0Y2g6XG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XG5mdW5jdGlvbiBjcmVhdGVPYnNlcnZlcihvcHRpb25zKSB7XG4gICAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJyc7XG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XG4gICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgY29uc3QgZWxlbWVudHMgPSBuZXcgTWFwKCk7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpPT57XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XG4gICAgICAgICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sIG9wdGlvbnMpO1xuICAgIG9ic2VydmVycy5zZXQoaWQsIGluc3RhbmNlID0ge1xuICAgICAgICBpZCxcbiAgICAgICAgb2JzZXJ2ZXIsXG4gICAgICAgIGVsZW1lbnRzXG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2UtaW50ZXJzZWN0aW9uLmpzLm1hcCIsIi8vIFJlYWN0XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvbGlicy91c2VBeGlvc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBSZXVzYWJsZSBDb21wb25lbnRzXHJcbmltcG9ydCBBbGVydCBmcm9tIFwiLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0FsZXJ0XCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBOYXZpZ2F0aW9uQmFyIGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvbmF2aWdhdGlvbi1iYXIvTmF2aWdhdGlvbkJhclwiO1xyXG5pbXBvcnQgQ2F0ZWdvcnlUcmVhdG1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvQ2F0ZWdvcnlUcmVhdG1lbnRcIjtcclxuaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvbG9jYXRpb24vTG9jYXRpb25cIjtcclxuaW1wb3J0IERhdGVUaW1lIGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVUaW1lXCI7XHJcbmltcG9ydCBJbmZvcm1hdGlvblBheW1lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L0luZm9ybWF0aW9uUGF5bWVudFwiO1xyXG5pbXBvcnQgQ29uZmlybWF0aW9uIGZyb20gXCIuLi9jb21wb25lbnRzL2NsaWVudHMvY29uZmlybWF0aW9uLXBhZ2UvQ29uZmlybWF0aW9uXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSAoKSB7XHJcblxyXG5cclxuICAgIC8vIE90aGVyIHN0YXRlc1xyXG4gICAgY29uc3QgW2NsaWVudEV2ZW50cywgc2V0Q2xpZW50RXZlbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRyZWF0bWVudHMsIHNldFNlbGVjdGVkVHJlYXRtZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbc29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzLCBzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRJbmZvLCBzZXRDbGllbnRJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaG93SGVhcmRBYm91dFVzOiBcIlwiLFxyXG4gICAgICAgIG90aGVyczogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdHJlYXRtZW50OiBcIlwiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgIHNlc3Npb246IFwiXCIsXHJcbiAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICBzdHlsaXN0OiBcIlwiLFxyXG4gICAgICAgIGNvdXBvbjogXCJcIixcclxuICAgICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2FjdGl2ZUNhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkJyb3dzXCIpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWREYXRlLCBzZXRTZWxlY3RlZERhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUaW1lLCBzZXRTZWxlY3RlZFRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCB2YWx1ZXMgb2YgdGhlIG5vbiBpbnB1dCBmaWVsZHMgc3VjaCBhcyBsb2NhdGlvbiwgc3R5bGlzdCwgZGF0ZSwgdGltZSBldGMuIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmKHRleHQuaW5jbHVkZXMoXCJBdGhlbmEgQmVhdXR5IENhcmVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNhdGVnb3J5IChlKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIHNldEFjdGl2ZUNhdGVnb3J5KHRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgXHJcblxyXG4gICAgLypcclxuICAgIGZ1bmN0aW9uIGFkZFRyZWF0bWVudCAoc3R5bGlzdCwgaXRlbSkge1xyXG4gICAgICAgXHJcbiAgICAgICAgLy8gbG9vcCB0aHJvdWdoIHRoZSBhbHJlYWR5IHNlbGVjdGVkIHRyZWF0bWVudHMgdG8gc2VlIGlmIGNsaWNrZWQgb25lIGV4aXN0cyBvciBub3QuIEl0IHJldHVybnMgZWl0aGVyIHRydWUgb3IgZmFsc2VcclxuICAgICAgICBjb25zdCBkb2VzRXhpc3QgPSBzZWxlY3RlZFRyZWF0bWVudHMuc29tZShuZXdJdGVtID0+IG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgPT09IGl0ZW0udGl0bGUpO1xyXG5cclxuICAgICAgICAvLyBJZiBjbGlja2VkIHRyZWF0bWVudCBleGlzdHMgdXBkYXRlIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgYXJyYXkgYnkgcmVtb3ZpbmcgdGhlIGNsaWNrZWQgdHJlYXRtZW50XHJcbiAgICAgICAgaWYoZG9lc0V4aXN0KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcblxyXG4gICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMuZm9yRWFjaChuZXdJdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgIT09IGl0ZW0udGl0bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2gobmV3SXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHModGVtcCk7XHJcblxyXG4gICAgICAgICAgICBpZihzdHlsaXN0KSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiBcclxuICAgICAgICAgICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogaXRlbS50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogaXRlbS5kdXJhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBzdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgcmV0dXJuIHNldEFjdGl2ZVRyZWF0bWVudChcIlwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIElmIGNsaWNrZWQgdHJlYXRtZW50IGRvZXNuJ3QgZXhpc3QgdGhlbiBhZGQgaXQgaW4gdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBhcnJheVxyXG4gICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4gXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSwgXHJcbiAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LCBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogaXRlbS50aXRsZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IGl0ZW0uZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBzdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbiBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcblxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICBmdW5jdGlvbiBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldENsaWVudEluZm8oY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VHJlYXRtZW50KGV2ZW50LCB0cmVhdG1lbnRzKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWF0bWVudFRpdGxlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGFscmVhZHkgc2VsZWN0ZWQgdHJlYXRtZW50cyB0byBzZWUgaWYgY2xpY2tlZCBvbmUgZXhpc3RzIG9yIG5vdC4gSXQgcmV0dXJucyBlaXRoZXIgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKG5ld0l0ZW0gPT4gbmV3SXRlbS50aXRsZSA9PT0gdHJlYXRtZW50VGl0bGUpO1xyXG5cclxuXHJcbiAgICAgICAgaWYoZG9lc0V4aXN0KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlbGVjdGVkVHJlYXRtZW50cyA9IHNlbGVjdGVkVHJlYXRtZW50cy5maWx0ZXIodHJlYXRtZW50ID0+IHRyZWF0bWVudC50aXRsZSAhPT0gdHJlYXRtZW50VGl0bGUpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoZmlsdGVyZWRTZWxlY3RlZFRyZWF0bWVudHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdHJlYXRtZW50cy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRyZWF0bWVudHNbeF0udGl0bGUgPT09IHRyZWF0bWVudFRpdGxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4geyByZXR1cm4gWy4uLmN1cnJlbnRWYWx1ZSwgdHJlYXRtZW50c1t4XV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBjcmVhdGVCb29raW5nKCkge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9ldmVudHMvY2xpZW50LWV2ZW50c1wiLCB7XHJcbiAgICAgICAgICAgICAgICBzb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUsXHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmZvXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXRDbGllbnRFdmVudHMoZGF0YSk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2xpZW50SW5mbyh7XHJcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIHBob25lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBob3dIZWFyZEFib3V0VXM6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBvdGhlcnM6IFwiXCJcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhbXSk7XHJcbiAgICAgICAgICAgIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyhbXSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShcIlwiKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUaW1lKFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRBY3RpdmVQYWdlKDUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgLy8gY29uc29sZS5sb2cobG9jYXRpb25EYXRhKTtcclxuXHJcbiAgICAvLyBpZihsb2NhdGlvbkRhdGFMb2FkaW5nIHx8IGNhdGVnb3J5RGF0YUxvYWRpbmcgfHwgdHJlYXRtZW50RGF0YUxvYWRpbmcpIHtcclxuICAgIC8vICAgICByZXR1cm4gKDxkaXY+TG9hZGluZy4uLi48L2Rpdj4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob21lfT5cclxuICAgICAgICAgICAgPE5hdmlnYXRpb25CYXIgXHJcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX0gXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfSBcclxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UgPSB7c2V0QWN0aXZlUGFnZX0gXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUgPSB7c2VsZWN0ZWRUaW1lfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TG9jYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENhdGVnb3J5VHJlYXRtZW50XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIHNlbGVjdFRyZWF0bWVudCA9IHtzZWxlY3RUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgICAgIDxEYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSB7c3RhdGUubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZSA9IHtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUgPSB7c2V0U2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lID0ge3NlbGVjdGVkVGltZX1cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGltZSA9IHtzZXRTZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5mb3JtYXRpb25QYXltZW50IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5mbyA9IHtjbGllbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVCb29raW5nID0ge2NyZWF0ZUJvb2tpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPENvbmZpcm1hdGlvbiBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudEV2ZW50cz17Y2xpZW50RXZlbnRzfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBtZXNzYWdlPVwiXCIgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L2ltYWdlcy82LmM2NWU0YTE2ZjViZjBiMGMwNGQyMGRkNTEyNWFmYmYxLnN2Z1wiLFwiaGVpZ2h0XCI6MjQwLFwid2lkdGhcIjozMjh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvNS5jMWJhODg1NTUyODBhZTg2MmI0YTc2ODUzZWYwYTU0MS5zdmdcIixcImhlaWdodFwiOjE4OSxcIndpZHRoXCI6MjQyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIuZDQ4YjE5OTFlYTE0YTkzMmUzYTkxZmFlNGIzYTQyNjUucG5nXCIsXCJoZWlnaHRcIjoxMjgsXCJ3aWR0aFwiOjc3LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmltYWdlcyUyRkNvbXBvbmVudCsxNDMrJUUyJTgwJTkzKzIuZDQ4YjE5OTFlYTE0YTkzMmUzYTkxZmFlNGIzYTQyNjUucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcGVyc29uLWdpcmwtZmxhdC41M2EzYmQxMTVlMDg2N2I4ZTUwOGEyY2ZlNWY2ZGY2Yy5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmltYWdlcyUyRnBlcnNvbi1naXJsLWZsYXQuNTNhM2JkMTE1ZTA4NjdiOGU1MDhhMmNmZTVmNmRmNmMucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZ1wiLFwiaGVpZ2h0XCI6NDAwMCxcIndpZHRoXCI6NjAwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZyYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guZWNiOGNjNDcyMjEzNzkwNGQ3MDIyYzU5MTgzNDlhNmYuanBnJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3J5X3RyZWF0bWVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X3RyZWF0bWVudF9fM1NZekZcIixcblx0XCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X18ydEYyZlwiLFxuXHRcInRyZWF0bWVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9fMnd6bnVcIixcblx0XCJoZWFkZXJcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9oZWFkZXJfXzFLcXpiXCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2xpc3RcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeUl0ZW1fbGlzdF9fNXBvZnZcIixcblx0XCJjYXRlZ29yeUl0ZW1fY29udGFpbmVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlJdGVtX2NvbnRhaW5lcl9fM2R3YzdcIixcblx0XCJjYXRlZ29yeV9pdGVtXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlfaXRlbV9fUnJPWGhcIixcblx0XCJjYXRlZ29yeUl0ZW1fY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5SXRlbV9jb250ZW50X18yaW1ic1wiLFxuXHRcInRyZWF0bWVudEl0ZW1fY29udGFpbmVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50SXRlbV9jb250YWluZXJfX0VzVDdjXCIsXG5cdFwiY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2X18xeENsc1wiLFxuXHRcInRyZWF0bWVudF9pdGVtXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50X2l0ZW1fXzFSeVB0XCIsXG5cdFwidHJlYXRtZW50SXRlbV9jb250ZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50SXRlbV9jb250ZW50X19Pa2xlaVwiLFxuXHRcInRyZWF0bWVudF9jb250ZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50X2NvbnRlbnRfX0wtNlJlXCIsXG5cdFwic3R5bGlzdHNcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0c19fM3p5b0ZcIixcblx0XCJzdHlsaXN0X2xpc3RcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0X2xpc3RfXzJQazJLXCIsXG5cdFwic3R5bGlzdExpc3RfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3N0eWxpc3RMaXN0X2l0ZW1fXzJQcGhiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXRlSGlkZGVuX2RpdlwiOiBcIkRhdGVUaW1lX2RhdGVIaWRkZW5fZGl2X18xNVlpeFwiLFxuXHRcImF2YWlsYWJsZV90aW1lX2xpc3RcIjogXCJEYXRlVGltZV9hdmFpbGFibGVfdGltZV9saXN0X18xVzZfOFwiLFxuXHRcInRpbWVcIjogXCJEYXRlVGltZV90aW1lX18ydE11VlwiLFxuXHRcImluZGl2aWR1YWxfdGltZVwiOiBcIkRhdGVUaW1lX2luZGl2aWR1YWxfdGltZV9fMTJzVF9cIixcblx0XCJkYXRlX3RpbWVcIjogXCJEYXRlVGltZV9kYXRlX3RpbWVfXzFXbDNGXCIsXG5cdFwiaGVhZGVyXCI6IFwiRGF0ZVRpbWVfaGVhZGVyX18tTmZ4T1wiLFxuXHRcImRhdGVUaW1lX2NvbnRlbnRcIjogXCJEYXRlVGltZV9kYXRlVGltZV9jb250ZW50X19aT3dBS1wiLFxuXHRcImNvbnRlbnRfSW1hZ2VcIjogXCJEYXRlVGltZV9jb250ZW50X0ltYWdlX19Ob3d6MlwiLFxuXHRcImRhdGVzX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2RhdGVzX2NvbnRhaW5lcl9fclgtV2RcIixcblx0XCJkYXRlc1wiOiBcIkRhdGVUaW1lX2RhdGVzX18yMVVraVwiLFxuXHRcInByZXZcIjogXCJEYXRlVGltZV9wcmV2X19BeTlsZlwiLFxuXHRcIm5leHRcIjogXCJEYXRlVGltZV9uZXh0X18yWlV4VFwiLFxuXHRcImRhdGVDYXJkX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2RhdGVDYXJkX2NvbnRhaW5lcl9fMl8wVWlcIixcblx0XCJkYXRlX2NhcmRcIjogXCJEYXRlVGltZV9kYXRlX2NhcmRfXzJZVlBuXCIsXG5cdFwid2Vla0RheV90ZXh0XCI6IFwiRGF0ZVRpbWVfd2Vla0RheV90ZXh0X18xU2p6c1wiLFxuXHRcImRhdGVfdGV4dFwiOiBcIkRhdGVUaW1lX2RhdGVfdGV4dF9fMW1pM2VcIixcblx0XCJtb250aF90ZXh0XCI6IFwiRGF0ZVRpbWVfbW9udGhfdGV4dF9fMXJVUVRcIixcblx0XCJjbG9ja0ljb25fY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfY2xvY2tJY29uX2NvbnRhaW5lcl9fMk5BdGZcIixcblx0XCJzdHlsaXN0c190aW1lc1wiOiBcIkRhdGVUaW1lX3N0eWxpc3RzX3RpbWVzX18xQk9JTVwiLFxuXHRcInN0eWxpc3RzX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX3N0eWxpc3RzX2NvbnRhaW5lcl9fMTQ0UzNcIixcblx0XCJ0aW1lc19jb250YWluZXJcIjogXCJEYXRlVGltZV90aW1lc19jb250YWluZXJfXzNxWWFqXCIsXG5cdFwidGltZXNcIjogXCJEYXRlVGltZV90aW1lc19fMTFfOXFcIixcblx0XCJ0aW1lX3RleHRcIjogXCJEYXRlVGltZV90aW1lX3RleHRfXzFqTTFFXCIsXG5cdFwic3R5bGlzdFwiOiBcIkRhdGVUaW1lX3N0eWxpc3RfXzI4WnE0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lXCI6IFwiSG9tZV9ob21lX18xN3liNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb1BheW1lbnRfaGVhZGVyXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2luZm9QYXltZW50X2hlYWRlcl9fUHJYNXhcIixcblx0XCJpbmZvUGF5bWVudF9jb250ZW50XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2luZm9QYXltZW50X2NvbnRlbnRfXzFNeHZwXCIsXG5cdFwiaW1hZ2VfY29udGFpbmVyXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2ltYWdlX2NvbnRhaW5lcl9fMTV5Y2RcIixcblx0XCJpbnB1dF9sYWJlbFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbnB1dF9sYWJlbF9fMVoxdU9cIixcblx0XCJpbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbnB1dF9fMUxKMmRcIixcblx0XCJjaGVja2JveFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9jaGVja2JveF9fMzdLS2xcIixcblx0XCJuYW1lX2lucHV0c1wiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9uYW1lX2lucHV0c19fMUJTaVJcIixcblx0XCJuYW1lX2luZm9cIjogXCJJbmZvcm1hdGlvblBheW1lbnRfbmFtZV9pbmZvX18xUWxmSFwiLFxuXHRcInBob25lX2lucHV0XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X3Bob25lX2lucHV0X18zUE1JUFwiLFxuXHRcImVtYWlsX2lucHV0XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2VtYWlsX2lucHV0X18xT1ZyV1wiLFxuXHRcImhvd0hlYXJkQWJvdXRVc19pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9ob3dIZWFyZEFib3V0VXNfaW5wdXRfXzN2bFhNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZpZ2F0aW9uQmFyX2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbkJhcl9jb250YWluZXJfXzNjLTJIXCIsXG5cdFwid3JhcHBlclwiOiBcIk5hdmlnYXRpb25CYXJfd3JhcHBlcl9fYVpLb3NcIixcblx0XCJuYXZpZ2F0aW9uX2JhclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl9iYXJfX1k4NVVaXCIsXG5cdFwibmF2aWdhdGlvbl9saW5rc1wiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl9saW5rc19fcWRKLVNcIixcblx0XCJidXR0b25fY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9idXR0b25fY29udGFpbmVyX18xa1JCM1wiLFxuXHRcIm5hdmlnYXRpb25MaW5rX2J1dHRvblwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbkxpbmtfYnV0dG9uX18xMTdMRFwiLFxuXHRcImJsYW5rUGFyYV9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX2JsYW5rUGFyYV9jb250YWluZXJfX3lUWXU0XCIsXG5cdFwibmF2aWdhdGlvblRleHRfY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uVGV4dF9jb250YWluZXJfXzJMV2NSXCIsXG5cdFwibmF2aWdhdGlvbl90ZXh0XCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uX3RleHRfXzJfcU41XCIsXG5cdFwidGV4dFwiOiBcIk5hdmlnYXRpb25CYXJfdGV4dF9fM3dhVmlcIixcblx0XCJ0ZXh0X2NvbnRlbnRcIjogXCJOYXZpZ2F0aW9uQmFyX3RleHRfY29udGVudF9fMldKRlVcIixcblx0XCJ0ZXh0X2JsYW5rRGl2XCI6IFwiTmF2aWdhdGlvbkJhcl90ZXh0X2JsYW5rRGl2X18yV2hEVVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbV9oZWFkZXJcIjogXCJDbGllbnRHbG9iYWxzX2l0ZW1faGVhZGVyX18zZ1hUS1wiLFxuXHRcIml0ZW1IZWFkZXJfY29udGVudFwiOiBcIkNsaWVudEdsb2JhbHNfaXRlbUhlYWRlcl9jb250ZW50X18zUS14QVwiLFxuXHRcImV2ZW50SGFuZGxlcl9kaXZcIjogXCJDbGllbnRHbG9iYWxzX2V2ZW50SGFuZGxlcl9kaXZfX3VTbzUxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NhdGlvbnNcIjogXCJMb2NhdGlvbl9sb2NhdGlvbnNfXzJqU09pXCIsXG5cdFwic2VsZWN0X2xvY2F0aW9uXCI6IFwiTG9jYXRpb25fc2VsZWN0X2xvY2F0aW9uX18yeDdwSVwiLFxuXHRcImxvY2F0aW9uX2xpc3RcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9saXN0X18xczUyclwiLFxuXHRcIndyYXBwZXJcIjogXCJMb2NhdGlvbl93cmFwcGVyX18yeXBJVVwiLFxuXHRcImxvY2F0aW9uX2hpZGRlbkRpdlwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2hpZGRlbkRpdl9fMVdVSmFcIixcblx0XCJsb2NhdGlvbkluZm9fY29udGFpbmVyXCI6IFwiTG9jYXRpb25fbG9jYXRpb25JbmZvX2NvbnRhaW5lcl9fMTYwd0NcIixcblx0XCJsb2NhdGlvbl9pbmZvXCI6IFwiTG9jYXRpb25fbG9jYXRpb25faW5mb19fMlMxb2xcIixcblx0XCJsb2NhdGlvbl9jb250ZW50XCI6IFwiTG9jYXRpb25fbG9jYXRpb25fY29udGVudF9fY1VnMDdcIixcblx0XCJsb2NhdGlvbl90YWJsZVwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX3RhYmxlX18zcWVYdlwiLFxuXHRcImxvY2F0aW9uQWRkX2Zvcm1cIjogXCJMb2NhdGlvbl9sb2NhdGlvbkFkZF9mb3JtX18xbkFtelwiLFxuXHRcImxvY2F0aW9uX2lucHV0XCI6IFwiTG9jYXRpb25fbG9jYXRpb25faW5wdXRfX05YSHJqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZUF4aW9zIiwic3R5bGVzIiwiQ2F0ZWdvcnkiLCJUcmVhdG1lbnQiLCJJdGVtSGVhZGVyIiwiQ2F0ZWdvcnlUcmVhdG1lbnQiLCJhY3RpdmVQYWdlIiwiYWN0aXZlQ2F0ZWdvcnkiLCJjaGFuZ2VBY3RpdmVDYXRlZ29yeSIsInNlbGVjdGVkVHJlYXRtZW50cyIsInNlbGVjdFRyZWF0bWVudCIsImRhdGEiLCJjYXRlZ29yeURhdGEiLCJlcnJvciIsImNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IiLCJsb2FkaW5nIiwiY2F0ZWdvcnlEYXRhTG9hZGluZyIsInRyZWF0bWVudERhdGEiLCJ0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvciIsInRyZWF0bWVudERhdGFMb2FkaW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0cmVhdG1lbnRzIiwic2V0VHJlYXRtZW50cyIsImNhdGVnb3J5X3RyZWF0bWVudCIsImRpc3BsYXkiLCJjYXRlZ29yeSIsImNhdGVnb3J5SXRlbV9saXN0IiwibWFwIiwiaXRlbSIsImluZGV4IiwidHJlYXRtZW50IiwidHJlYXRtZW50SXRlbV9saXN0IiwiY2xpZW50R2xvYmFsU3R5bGVzIiwiRXZlbnRIYW5kbGVyRGl2IiwidHJlYXRtZW50SXRlbV9jb250YWluZXIiLCJldmVudEhhbmRsZXJfZGl2IiwiZXZlbnQiLCJ0aXRsZSIsInRyZWF0bWVudF9pdGVtIiwiYmFja2dyb3VuZEltYWdlIiwic29tZSIsIngiLCJ0cmVhdG1lbnRJdGVtX2NvbnRlbnQiLCJkdXJhdGlvbiIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJ0cmVhdG1lbnRfY29udGVudCIsIkNhdGVnb3J5U2VyaWFsIiwiYmx1ZUdyYWRpZW50IiwicmVkR3JhZGllbnQiLCJjb25kaXRpb24xIiwiY29uZGl0aW9uMiIsInN0eWxlIiwiY2F0ZWdvcnlJdGVtX2NvbnRhaW5lciIsImNhdGVnb3J5X2l0ZW0iLCJjYXRlZ29yeUl0ZW1fY29udGVudCIsImNvbG9yIiwiY29udGVudCIsImJhY2tncm91bmRDb2xvciIsImNsaWNrRXZlbnRIYW5kbGVyIiwiaXRlbV9oZWFkZXIiLCJpdGVtSGVhZGVyX2NvbnRlbnQiLCJTY3JpcHQiLCJJbWFnZSIsIkxvZ2luQmdJbWFnZSIsIkxvZ28iLCJnZXREYXRlcyIsIkNvbmZpcm1hdGlvbiIsImNsaWVudEV2ZW50cyIsImNvbnNvbGUiLCJsb2ciLCJkYXRlcyIsInNldERhdGVzIiwiZXZlbnREdXJhdGlvbiIsInN0YXJ0VGltZSIsInN1YnN0cmluZyIsImluZGV4T2YiLCJsZW5ndGgiLCJfaWQiLCJ0b1N0cmluZyIsIkRhdGVDYXJkIiwiZGF0ZVRpbWUiLCJzZWxlY3RlZERhdGUiLCJzZXRTZWxlY3RlZERhdGUiLCJzZWxlY3RlZFRpbWUiLCJkYXRlQ2FyZF9jb250YWluZXIiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImRhdGVIaWRkZW5fZGl2IiwiZGF0ZUluRGF0ZUZvcm1hdCIsImRhdGVfY2FyZCIsImluY2x1ZGVzIiwid2Vla0RheV90ZXh0IiwiZGF0ZSIsIndlZWtEYXkiLCJkYXRlX3RleHQiLCJtb250aF90ZXh0IiwibW9udGgiLCJjbG9ja0ljb25fY29udGFpbmVyIiwiYm9yZGVyIiwiQ2hvb3NlU3R5bGlzdHMiLCJTdHlsaXN0cyIsIlRpbWVzIiwiRGF0ZVRpbWUiLCJzdGF0ZSIsInNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyIsImxvY2F0aW9uIiwic2V0U2VsZWN0ZWRUaW1lIiwiZGF0ZVRpbWVzIiwic2V0RGF0ZVRpbWVzIiwiZGF0ZUluZGV4Iiwic2V0RGF0ZUluZGV4IiwiZGF0ZV90aW1lIiwiZGF0ZVRpbWVfY29udGVudCIsImNvbnRlbnRfSW1hZ2UiLCJkYXRlc19jb250YWluZXIiLCJwcmV2IiwibmV4dCIsImF2YWlsYWJsZV90aW1lX2xpc3QiLCJ0aW1lIiwidGltZXMiLCJwb3NpdGlvbiIsImluZGl2aWR1YWxfdGltZSIsIkJlYXV0aWNpYW4iLCJCZWF1dGljaWFuMiIsInN0eWxpc3RzX2NvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsInN0eWxpc3QiLCJpbWFnZUhpZGRlbl9kaXYiLCJ0ZXh0QWxpZ24iLCJ0aW1lc19jb250YWluZXIiLCJ0aW1lX3RleHQiLCJmaW5kVGltZVNsb3RzIiwid2lkdGgiLCJtYXJnaW4iLCJqdXN0aWZ5Q29udGVudCIsImZpbmFsaXplVHJlYXRtZW50cyIsInZhbHVlIiwibmV3VHJlYXRtZW50VGl0bGUiLCJkb2VzRXhpc3QiLCJuZXdJdGVtIiwidHJlYXRtZW50VGl0bGUiLCJmaWx0ZXJlZFRyZWF0bWVudHMiLCJmaWx0ZXIiLCJuZXd0cmVhdG1lbnQiLCJjaG9vc2VuU3R5bGlzdCIsInRyZWF0bWVudER1cmF0aW9uIiwidHJlYXRtZW50UHJpY2UiLCJjdXJyZW50VmFsdWUiLCJmaW5kVGltZXMiLCJuZXdUcmVhdG1lbnRzIiwiZm9yRWFjaCIsInNlbGVjdGVkVHJlYXRtZW50IiwicHVzaCIsImFsZXJ0Iiwic3R5bGlzdHMiLCJJbnB1dCIsIkluZm9ybWF0aW9uUGF5bWVudCIsImNsaWVudEluZm8iLCJjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyIiwidmFsaWRhdGlvbkVycm9yIiwiY3JlYXRlQm9va2luZyIsImluZm9fcGF5bWVudCIsImluZm9QYXltZW50X2NvbnRlbnQiLCJpbWFnZV9jb250YWluZXIiLCJuYW1lX2lucHV0cyIsImlucHV0X2xhYmVsIiwibmFtZV9pbmZvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaG9uZV9pbnB1dCIsInBob25lIiwiZW1haWxfaW5wdXQiLCJlbWFpbCIsImNoZWNrYm94IiwiaG93SGVhcmRBYm91dFVzX2lucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsImlucHV0IiwidG9Mb3dlckNhc2UiLCJ1cmwiLCJzZXREYXRhIiwic2V0TG9hZGluZyIsInNldEVycm9yIiwiZmV0Y2hEYXRhIiwiZW5kUG9pbnQiLCJyZXNwb25zZSIsImdldCIsIkxvY2F0aW9uSWNvbiIsIkxvY2F0aW9uIiwidXBkYXRlU3RhdGUiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJzZWxlY3RfbG9jYXRpb24iLCJsb2NhdGlvbl9saXN0Iiwid3JhcHBlciIsImxvY2F0aW9uSW5mb19jb250YWluZXIiLCJsb2NhdGlvbl9pbmZvIiwibG9jYXRpb25fY29udGVudCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJ6aXBDb2RlIiwiY2l0eSIsImNvdW50cnkiLCJsb2NhdGlvbl9pY29uIiwiZm9udFNpemUiLCJOYXZpZ2F0aW9uQnV0dG9uIiwiTmF2aWdhdGlvblRleHQiLCJOYXZpZ2F0aW9uQmFyIiwic2V0QWN0aXZlUGFnZSIsIml0ZW1zIiwiaWQiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVyV2lkdGgiLCJuYXZpZ2F0aW9uQmFyX2NvbnRhaW5lciIsIm5hdmlnYXRpb25fYmFyIiwibmF2aWdhdGlvblRleHRfY29udGFpbmVyIiwiY2hhbmdlQWN0aXZlUGFnZSIsIm5ld1ZhbHVlIiwiTnVtYmVyIiwibmF2aWdhdGlvbl9saW5rcyIsImJ1dHRvbl9jb250YWluZXIiLCJuYXZpZ2F0aW9uTGlua19idXR0b24iLCJibGFua1BhcmFfY29udGFpbmVyIiwidGV4dCIsIm5hdmlnYXRpb25fdGV4dCIsInRleHRfY29udGVudCIsInRleHRfYmxhbmtEaXYiLCJBbGVydCIsIm1lc3NhZ2UiLCJmZXRjaEV2ZW50cyIsImdldFN0eWxpc3RzIiwiZ2V0V29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWVzQXJyYXkiLCJkYXRlc0FycmF5IiwiYWxsU3R5bGlzdHMiLCJjYWxlbmRhckV2ZW50cyIsInN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyIsInN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyIsIndvcmtpbmdUaW1lIiwieHh4Iiwic3R5bGlzdFdvcmtpbmdUaW1lcyIsImJ1c3lUaW1lcyIsImV2ZW50RGF0ZSIsInN0YXJ0aW5nVGltZSIsInN0YXJ0aW5nSG91ciIsInN0YXJ0aW5nTWludXRlIiwic3RhdHVzIiwiZXZlbnRMb2NhdGlvbiIsImsiLCJNYXRoIiwiY2VpbCIsImludGVydmFsIiwiaG91ciIsImhvdXJJbmNyZW1lbnQiLCJmbG9vciIsIm5ld1dvcmtpbmdUaW1lcyIsIndvcmtpbmdUaW1lcyIsImZyZWVUaW1lcyIsInN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXMiLCJjb3VudE9mVGltZXNUb09tbWl0IiwicmVkdWNlIiwidG90YWwiLCJxcXEiLCJhdmFpbGFibGVUaW1lc0J5RGF0ZSIsImkiLCJ0b3RhbFRpbWVDb3VudCIsInRlbXAiLCJqIiwiY291bnQiLCJ5IiwibWludXRlcyIsImRhdGVUaW1lc0FycmF5IiwibmV3RGF0ZSIsIkRhdGUiLCJnZXREYXRlIiwieWVhciIsImdldEZ1bGxZZWFyIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwiZXZlbnRzIiwiZXJyIiwibXNnIiwiZ2V0VGltZSIsImdldE1vbnRoIiwiZGF5Iiwic3R5bGlzdEZ1bGxOYW1lIiwiZGF5TmFtZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsInAiLCJ3b3JrU2NoZWR1bGUiLCJzY2hlZHVsZSIsInN0YXJ0VGltZUluZGV4IiwiZW5kVGltZUluZGV4IiwiZW5kVGltZSIsInEiLCJtZXRob2QiLCJib2R5IiwiaGFwcGVuaW5nIiwidG90YWxEYXRhQ291bnQiLCJzZXRUb3RhbERhdGFDb3VudCIsIm5ld0RhdGEiLCJBcnJheSIsImlzQXJyYXkiLCJ0b3RhbEl0ZW1Db3VudCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMiLCJleGNsdWRlZCIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlIiwic291cmNlU3ltYm9sS2V5cyIsInByb3RvdHlwZSIsInByb3BlcnR5SXNFbnVtZXJhYmxlIiwiY2FsbCIsInNvdXJjZUtleXMiLCJsb2FkZWRJbWFnZVVSTHMiLCJTZXQiLCJnbG9iYWwiLCJfX05FWFRfSU1BR0VfSU1QT1JURUQiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsInVuZGVmaW5lZCIsImxvYWRlcnMiLCJNYXAiLCJkZWZhdWx0TG9hZGVyIiwiaW1naXhMb2FkZXIiLCJjbG91ZGluYXJ5TG9hZGVyIiwiYWthbWFpTG9hZGVyIiwiY3VzdG9tTG9hZGVyIiwiVkFMSURfTEFZT1VUX1ZBTFVFUyIsImlzU3RhdGljUmVxdWlyZSIsInNyYyIsImlzU3RhdGljSW1hZ2VEYXRhIiwiaXNTdGF0aWNJbXBvcnQiLCJkZXZpY2VTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiaW1hZ2VTaXplcyIsImNvbmZpZ0ltYWdlU2l6ZXMiLCJsb2FkZXIiLCJjb25maWdMb2FkZXIiLCJwYXRoIiwiY29uZmlnUGF0aCIsImRvbWFpbnMiLCJjb25maWdEb21haW5zIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9JTUFHRV9PUFRTIiwiaW1hZ2VDb25maWdEZWZhdWx0IiwiYWxsU2l6ZXMiLCJzb3J0IiwiYSIsImIiLCJnZXRXaWR0aHMiLCJsYXlvdXQiLCJzaXplcyIsInZpZXdwb3J0V2lkdGhSZSIsInBlcmNlbnRTaXplcyIsIm1hdGNoIiwiZXhlYyIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJnZW5lcmF0ZUltZ0F0dHJzIiwidW5vcHRpbWl6ZWQiLCJxdWFsaXR5Iiwic3JjU2V0IiwibGFzdCIsImpvaW4iLCJnZXRJbnQiLCJkZWZhdWx0SW1hZ2VMb2FkZXIiLCJsb2FkZXJQcm9wcyIsImxvYWQiLCJyb290IiwiRXJyb3IiLCJWQUxJRF9MT0FERVJTIiwiaGFuZGxlTG9hZGluZyIsImltZyIsIm9uTG9hZGluZ0NvbXBsZXRlIiwiaGFuZGxlTG9hZCIsInN0YXJ0c1dpdGgiLCJkZWNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsImNhdGNoIiwidGhlbiIsImJhY2tncm91bmRTaXplIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwid2FybiIsImNvbXBsZXRlIiwib25sb2FkIiwiX3BhcmFtIiwicHJpb3JpdHkiLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJTdHJpbmciLCJpc05hTiIsIlZBTElEX0JMVVJfRVhUIiwicmFuZCIsInJhbmRvbSIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiSG9tZSIsInNldENsaWVudEV2ZW50cyIsInNldFNlbGVjdGVkVHJlYXRtZW50cyIsInNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyIsInNldFZhbGlkYXRpb25FcnJvciIsInNldENsaWVudEluZm8iLCJob3dIZWFyZEFib3V0VXMiLCJvdGhlcnMiLCJzZXRTdGF0ZSIsInNlc3Npb24iLCJjb3Vwb24iLCJwYWlkIiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJlIiwiZmlsdGVyZWRTZWxlY3RlZFRyZWF0bWVudHMiLCJwb3N0IiwiaG9tZSJdLCJzb3VyY2VSb290IjoiIn0=
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
  activeTreatment,
  changeActiveTreatment,
  selectedTreatments,
  addTreatment,
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
  }, [categoryData, treatmentData]);

  function addNewTreatment(stylist, treatment) {
    console.log(stylist);
    console.log(treatment);
  } // if(categoryDataLoading || treatmentDataLoading) {
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
        lineNumber: 66,
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
            lineNumber: 71,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().treatment),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_5__.default, {
        content: "Select treatment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_7___default().treatmentItem_list),
        children: treatments.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_Treatment__WEBPACK_IMPORTED_MODULE_4__.default, {
            item: item,
            activeCategory: activeCategory,
            activeTreatment: activeTreatment,
            changeActiveTreatment: changeActiveTreatment,
            selectedTreatments: selectedTreatments,
            addTreatment: addTreatment,
            treatments: treatments,
            selectTreatment: selectTreatment
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
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
  activeTreatment,
  changeActiveTreatment,
  selectedTreatments,
  addTreatment,
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
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatment_item),
      style: {
        backgroundImage: activeTreatment === item.title ? "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" : selectedTreatments.some(x => x.title === item.title) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatmentItem_content),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: [item.title, " (", item.duration, " minutes)"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
        style: {
          display: !item.description && "none"
        },
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_3___default().treatment_content),
        children: item.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
  activePage
}) {
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
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_6__.default, {
      content: "Confirmation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
  date,
  activeDate,
  setActiveDate,
  choosenTime
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateCard_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      onClick: event => setActiveDate(event.target.textContent),
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateHidden_div),
      children: [date.date, "-", date.month.toLowerCase()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_card),
      style: {
        backgroundImage: activeDate === `${date.date}-${date.month.toLowerCase()}` ? "linear-gradient(to left, green, rgba(0, 0, 139, 0.4))" : choosenTime === `${date.date}-${date.month.toLowerCase()}` && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().weekDay_text),
        children: date.weekDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_text),
        children: date.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().month_text),
        children: date.month
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().clockIcon_container),
        style: {
          border: date.weekDay === "Today" && "1px solid blue"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
          style: {
            color: date.weekDay === "Today" && "blue"
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
  location
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
    0: activeDate,
    1: setActiveDate
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  const {
    0: dateIndex,
    1: setDateIndex
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
  const {
    0: choosenTime,
    1: setChoosenTime
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setDates((0,_lib_getDates__WEBPACK_IMPORTED_MODULE_5__.getDates)());
  }, []);
  console.log(choosenTime);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().date_time),
    style: {
      display: activePage === 3 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_choose_stylists_ChooseStylists__WEBPACK_IMPORTED_MODULE_6__.default, {
      selectedTreatments: selectedTreatments,
      location: location,
      setDateTimes: setDateTimes,
      setActiveDate: setActiveDate
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
      content: "Select date/time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
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
          lineNumber: 54,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().prev),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().next),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates),
          children: dateTimes.map((dateTime, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DateCard__WEBPACK_IMPORTED_MODULE_7__.default, {
              date: dateTime.date,
              activeDate: activeDate,
              setActiveDate: setActiveDate,
              choosenTime: choosenTime.substring(0, 6)
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().available_time_list),
          children: dateTimes.map((dateTime, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().time),
              style: {
                display: activeDate === `${dateTime.date.date}-${dateTime.date.month.toLowerCase()}` ? "flex" : "none"
              },
              children: dateTime.times.map(time => {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                  style: {
                    position: "relative"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                    onClick: event => setChoosenTime(event.target.textContent),
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dateHidden_div),
                    children: `${dateTime.date.date}-${dateTime.date.month.toLowerCase()}-${time}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 93,
                    columnNumber: 49
                  }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                    style: {
                      backgroundImage: choosenTime === `${dateTime.date.date}-${dateTime.date.month.toLowerCase()}-${time}` && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                    },
                    children: time
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 49
                  }, this)]
                }, time, true, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 45
                }, this);
              })
            }, `${dateTime.date.date}-${dateTime.date.weekDay}`, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 41,
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
  setDateTimes,
  setActiveDate
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
    // event.target.value contains the stylist
    const stylist = event.target.value; // Find the treatment from the selectedTreatments list using index

    const treatment = selectedTreatments[index];
    const newTreatmentTitle = selectedTreatments[index].title; // Every treatment has multiple stylists and user has the flexibility to choose stylist from the stylists of a 
    // specific treatment. If user is trying to change the stylist then previous treatment must be ommitted.  

    const doesExist = treatments.some(newItem => newItem.treatmentTitle === newTreatmentTitle);

    if (doesExist) {
      const filteredTreatments = treatments.filter(item => item.treatmentTitle !== newTreatmentTitle);
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
    const dateTimes = await (0,_lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_2__.findTimeSlots)(newTreatments);
    setDateTimes(dateTimes);
    const firstDate = dateTimes[0].date.date + "-" + dateTimes[0].date.month.toLowerCase();
    console.log(firstDate);
    setActiveDate(firstDate);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: "choose_stylists",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_1__.default, {
      content: "Choose stylists"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }, this), selectedTreatments.map((treatment, index) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: "chooseStylists_content",
        style: styles,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: treatment.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 29
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
          children: treatment.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
            lineNumber: 130,
            columnNumber: 33
          }, this), treatment.stylists.map(stylist => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("option", {
              value: stylist,
              children: stylist
            }, stylist, false, {
              fileName: _jsxFileName,
              lineNumber: 133,
              columnNumber: 41
            }, this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 29
        }, this)]
      }, treatment.title, true, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
        lineNumber: 157,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 113,
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
  validationError
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
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
            value: "Friends",
            children: "Friends"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
            value: "others",
            children: "Friends"
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
  setActivePage
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
            value: item.id
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
            lineNumber: 65,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
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
  value
}) {
  function changeActivePage(event) {
    const newValue = Number(event.target.textContent);
    if (newValue === 2 && !state.location) return alert("Please select a location");
    if (newValue === 3 && !selectedTreatments.length) return alert("Please select at least one treatment");
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
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().blankPara_container),
      style: {
        display: value === 5 && "none"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
        month
      },
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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_reusable_components_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/reusable-components/Alert */ "./components/reusable-components/Alert.js");
/* harmony import */ var _components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/clients/navigation-bar/NavigationBar */ "./components/clients/navigation-bar/NavigationBar.js");
/* harmony import */ var _components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clients/category-treatment/CategoryTreatment */ "./components/clients/category-treatment/CategoryTreatment.js");
/* harmony import */ var _components_clients_location_Location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clients/location/Location */ "./components/clients/location/Location.js");
/* harmony import */ var _components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clients/date-time/DateTime */ "./components/clients/date-time/DateTime.js");
/* harmony import */ var _components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/clients/information-payment/InformationPayment */ "./components/clients/information-payment/InformationPayment.js");
/* harmony import */ var _components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/clients/confirmation-page/Confirmation */ "./components/clients/confirmation-page/Confirmation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
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
    0: selectedTreatments,
    1: setSelectedTreatments
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
    0: activeTreatment,
    1: setActiveTreatment
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: activePage,
    1: setActivePage
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1); // update the state with values of the non input fields such as location, stylist, date, time etc. 

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
    setActiveTreatment("");
    setActiveCategory(text);
  }

  function changeActiveTreatment(event) {
    const text = event.target.textContent;
    const treatment = text.substring(0, text.indexOf(",")); // console.log(treatment);

    if (treatment === activeTreatment) return setActiveTreatment("");
    return setActiveTreatment(treatment);
  }

  function addTreatment(stylist, item) {
    // loop through the already selected treatments to see if clicked one exists or not. It returns either true or false
    const doesExist = selectedTreatments.some(newItem => newItem.treatmentTitle === item.title); // If clicked treatment exists update the selectedTreatments array by removing the clicked treatment

    if (doesExist) {
      const temp = [];
      selectedTreatments.forEach(newItem => {
        if (newItem.treatmentTitle !== item.title) {
          temp.push(newItem);
        }
      });
      setSelectedTreatments(temp);

      if (stylist) {
        setSelectedTreatments(currentValue => [...currentValue, {
          category: item.category,
          treatmentTitle: item.title,
          treatmentDuration: item.duration,
          treatmentPrice: item.price,
          choosenStylist: stylist,
          location: state.location
        }]);
      } else {
        return setActiveTreatment("");
      }

      return setActiveTreatment("");
    } // If clicked treatment doesn't exist then add it in the selectedTreatments array


    setSelectedTreatments(currentValue => [...currentValue, {
      category: item.category,
      treatmentTitle: item.title,
      treatmentDuration: item.duration,
      treatmentPrice: item.price,
      choosenStylist: stylist,
      location: state.location
    }]);
    return setActiveTreatment("");
  }

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
  } // console.log(locationData);
  // if(locationDataLoading || categoryDataLoading || treatmentDataLoading) {
  //     return (<div>Loading....</div>);
  // }


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_10___default().home),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_3__.default, {
      state: state,
      selectedTreatments: selectedTreatments,
      activePage: activePage,
      setActivePage: setActivePage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_location_Location__WEBPACK_IMPORTED_MODULE_5__.default, {
      activePage: activePage,
      state: state,
      updateState: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 208,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_4__.default, {
      selectedTreatments: selectedTreatments,
      addTreatment: addTreatment,
      activePage: activePage,
      activeCategory: activeCategory,
      activeTreatment: activeTreatment,
      changeActiveTreatment: changeActiveTreatment,
      changeActiveCategory: changeActiveCategory,
      selectTreatment: selectTreatment
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_6__.default, {
      state: state,
      activePage: activePage,
      updateState: updateState,
      location: state.location,
      selectedTreatments: selectedTreatments
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_7__.default, {
      activePage: activePage,
      clientInfo: clientInfo,
      clientInfoOnChangeHandler: clientInfoOnChangeHandler,
      validationError: validationError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_8__.default, {
      activePage: activePage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ2JBLDJHQUErQzs7Ozs7Ozs7Ozs7O0FDQS9DOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9DYXRlZ29yeVRyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L1RyZWF0bWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L2NhdGVnb3J5L0NhdGVnb3J5LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvY2F0ZWdvcnkvQ2F0ZWdvcnlTZXJpYWwuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY29uZmlybWF0aW9uLXBhZ2UvQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL1N0eWxpc3RzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L0lucHV0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvbG9jYXRpb24vTG9jYXRpb25JY29uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uVGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZmV0Y2hFdmVudHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0RGF0ZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0V29ya2luZ1RpbWVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2ltYWdlLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JlcXVlc3QtaWRsZS1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L2ltYWdlcy82LnN2ZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvNS5zdmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tIFwiLi9jYXRlZ29yeS9DYXRlZ29yeVwiO1xyXG5pbXBvcnQgVHJlYXRtZW50IGZyb20gXCIuL1RyZWF0bWVudFwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlUcmVhdG1lbnQgKHsgXHJcbiAgICBhY3RpdmVQYWdlLCBcclxuICAgIGFjdGl2ZUNhdGVnb3J5LCBcclxuICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBcclxuICAgIGFjdGl2ZVRyZWF0bWVudCwgXHJcbiAgICBjaGFuZ2VBY3RpdmVUcmVhdG1lbnQsIFxyXG4gICAgc2VsZWN0ZWRUcmVhdG1lbnRzLFxyXG4gICAgYWRkVHJlYXRtZW50LFxyXG4gICAgc2VsZWN0VHJlYXRtZW50IFxyXG59KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IGNhdGVnb3J5RGF0YSwgZXJyb3I6IGNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IsIGxvYWRpbmc6IGNhdGVnb3J5RGF0YUxvYWRpbmdcclxuICAgIH0gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiLCB7fSk7XHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogdHJlYXRtZW50RGF0YSwgZXJyb3I6IHRyZWF0bWVudERhdGFGZXRjaGluZ0Vycm9yLCBsb2FkaW5nOiB0cmVhdG1lbnREYXRhTG9hZGluZ1xyXG4gICAgfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS90cmVhdG1lbnRzXCIsIHt9KVxyXG5cclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFt0cmVhdG1lbnRzLCBzZXRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBpZihjYXRlZ29yeURhdGEgIT09IG51bGwpIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlEYXRhKTtcclxuICAgICAgICBpZih0cmVhdG1lbnREYXRhICE9PSBudWxsKSBzZXRUcmVhdG1lbnRzKHRyZWF0bWVudERhdGEpO1xyXG5cclxuICAgIH0sIFtjYXRlZ29yeURhdGEsIHRyZWF0bWVudERhdGFdKVxyXG5cclxuXHJcblxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBmdW5jdGlvbiBhZGROZXdUcmVhdG1lbnQoc3R5bGlzdCwgdHJlYXRtZW50KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coc3R5bGlzdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codHJlYXRtZW50KVxyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICAvLyBpZihjYXRlZ29yeURhdGFMb2FkaW5nIHx8IHRyZWF0bWVudERhdGFMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PkxvYWRpbmcuLi4uPC9kaXY+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBpZihjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yIHx8IHRyZWF0bWVudERhdGFGZXRjaGluZ0Vycm9yKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+KTtcclxuICAgIC8vIH1cclxuICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlfdHJlYXRtZW50fSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMiA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAgey8qIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlNlbGVjdCB0aGUgQ2F0ZWdvcnk8L2g0PiAqL31cclxuICAgICAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBjYXRlZ29yeVwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnR9PlxyXG4gICAgICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IHRyZWF0bWVudFwiLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudEl0ZW1fbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudHMubWFwKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRyZWF0bWVudCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0ge2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVRyZWF0bWVudCA9IHthY3RpdmVUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlVHJlYXRtZW50ID0ge2NoYW5nZUFjdGl2ZVRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZFRyZWF0bWVudCA9IHthZGRUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50cyA9IHt0cmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFRyZWF0bWVudCA9IHtzZWxlY3RUcmVhdG1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICk7XHJcbiAgICBcclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGNsaWVudEdsb2JhbFN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9DbGllbnRHbG9iYWxzLm1vZHVsZS5jc3NcIlxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHJlYXRtZW50ICh7IFxyXG4gICAgaXRlbSwgXHJcbiAgICBhY3RpdmVDYXRlZ29yeSwgXHJcbiAgICBhY3RpdmVUcmVhdG1lbnQsIFxyXG4gICAgY2hhbmdlQWN0aXZlVHJlYXRtZW50LCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cywgXHJcbiAgICBhZGRUcmVhdG1lbnQsXHJcbiAgICBzZWxlY3RUcmVhdG1lbnQsXHJcbiAgICB0cmVhdG1lbnRzIFxyXG59KSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoeHh4ID0+IHh4eC5kZXNjcmlwdGlvbiA9PT0gXCJhYmNcIiAmJiB4eHguY2F0ZWdvcnkgPT09IFwiYmJjXCIpKTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLmNhdGVnb3J5ID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPEV2ZW50SGFuZGxlckRpdiBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7YCR7aXRlbS50aXRsZX0sICR7aXRlbS5kdXJhdGlvbn0sICR7aXRlbS5wcmljZX1gfSBcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyID0ge2NoYW5nZUFjdGl2ZVRyZWF0bWVudH0gXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xpZW50R2xvYmFsU3R5bGVzLmV2ZW50SGFuZGxlcl9kaXZ9IG9uQ2xpY2sgPSB7ZXZlbnQgPT4gc2VsZWN0VHJlYXRtZW50KGV2ZW50LCB0cmVhdG1lbnRzKX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RzfSBzdHlsZSA9IHt7ZGlzcGxheTogaXRlbS50aXRsZSA9PT0gYWN0aXZlVHJlYXRtZW50ID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBhIHN0eWxpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdF9saXN0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RMaXN0X2l0ZW19IG9uQ2xpY2sgPSB7ZSA9PiBhZGRUcmVhdG1lbnQoZS50YXJnZXQudGV4dENvbnRlbnQsIGl0ZW0pfT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0eWxpc3RzLm1hcCgoc3R5bGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdExpc3RfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbSA9PiBuZXdJdGVtLmNob29zZW5TdHlsaXN0ID09PSBzdHlsaXN0ICYmIG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgPT09IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiYgXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiBhZGRUcmVhdG1lbnQoZS50YXJnZXQudGV4dENvbnRlbnQsIGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHlsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudF9pdGVtfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGFjdGl2ZVRyZWF0bWVudCA9PT0gaXRlbS50aXRsZSBcclxuICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGRhcmtibHVlLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIiBcclxuICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHggPT4geC50aXRsZSA9PT0gaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICkgJiYgXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmVkLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntpdGVtLnRpdGxlfSAoe2l0ZW0uZHVyYXRpb259IG1pbnV0ZXMpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6ICFpdGVtLmRlc2NyaXB0aW9uICYmIFwibm9uZVwifX0gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50X2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi8uLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi8uLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuaW1wb3J0IENhdGVnb3J5U2VyaWFsIGZyb20gXCIuL0NhdGVnb3J5U2VyaWFsXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSAoeyBpdGVtLCBpbmRleCwgYWN0aXZlQ2F0ZWdvcnksIGNoYW5nZUFjdGl2ZUNhdGVnb3J5LCBzZWxlY3RlZFRyZWF0bWVudHMgfSkge1xyXG5cclxuICAgIC8vIEdyYWRpZW50cyBmb3IgYmFja2dyb3VuZFxyXG4gICAgY29uc3QgYmx1ZUdyYWRpZW50ID0gXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZGFya2JsdWUsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiO1xyXG4gICAgY29uc3QgcmVkR3JhZGllbnQgPSBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCByZWQsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiO1xyXG5cclxuICAgIC8vIFN0eWxpbmcgQ29uZGl0aW9uc1xyXG4gICAgY29uc3QgY29uZGl0aW9uMSA9IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLnRpdGxlXHJcbiAgICBjb25zdCBjb25kaXRpb24yID0gc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUodHJlYXRtZW50ID0+IHRyZWF0bWVudC5jYXRlZ29yeSA9PT0gaXRlbS50aXRsZSk7XHJcblxyXG4gICAgLy8gSW5saW5lIHN0eWxlXHJcbiAgICBjb25zdCBzdHlsZSA9IHsgYmFja2dyb3VuZEltYWdlOiBjb25kaXRpb24xID8gYmx1ZUdyYWRpZW50IDogY29uZGl0aW9uMiAmJiByZWRHcmFkaWVudCB9XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtX2NvbnRhaW5lcn0+XHJcbiAgICBcclxuICAgICAgICAgICAgPEV2ZW50SGFuZGxlckRpdiBjb250ZW50ID0ge2l0ZW0udGl0bGV9IGNsaWNrRXZlbnRIYW5kbGVyID0ge2NoYW5nZUFjdGl2ZUNhdGVnb3J5fSAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeV9pdGVtfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtX2NvbnRlbnR9IHN0eWxlID0ge3N0eWxlfSA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeVNlcmlhbCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSB7aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50ID0ge2l0ZW0udGl0bGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7eyBjb2xvcjogYWN0aXZlQ2F0ZWdvcnkgPT09IGl0ZW0udGl0bGUgJiYgXCJ3aGl0ZVwiIH19PntpdGVtLnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5U2VyaWFsICh7IGluZGV4LCBjb250ZW50LCBhY3RpdmVDYXRlZ29yeSB9KSB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGUgPSB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhY3RpdmVDYXRlZ29yeSA9PT0gY29udGVudCAmJiBcIndoaXRlXCIsXHJcbiAgICAgICAgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBjb250ZW50ICYmIFwiYmxhY2tcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzcGFuIHN0eWxlID0ge3N0eWxlfT57aW5kZXggKyAxfTwvc3Bhbj5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFdmVudEhhbmRsZXJEaXYoeyBjb250ZW50LCBjbGlja0V2ZW50SGFuZGxlciB9KSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudEhhbmRsZXJfZGl2fSBvbkNsaWNrID0ge2NsaWNrRXZlbnRIYW5kbGVyfT5cclxuICAgICAgICAgICAge2NvbnRlbnR9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxuXHJcblxyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY2xpZW50LXVpL0NsaWVudEdsb2JhbHMubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtSGVhZGVyKHsgY29udGVudCB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuaXRlbV9oZWFkZXJ9PlxyXG5cclxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZSA9IHtzdHlsZXMuaXRlbUhlYWRlcl9jb250ZW50fT57Y29udGVudH08L2g0PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuLy9pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb25maXJtYXRpb24gKHsgYWN0aXZlUGFnZSB9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDUgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiQ29uZmlybWF0aW9uXCIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZUNhcmQgKHsgZGF0ZSwgIGFjdGl2ZURhdGUsIHNldEFjdGl2ZURhdGUsIGNob29zZW5UaW1lIH0pIHtcclxuXHJcbiAgICBcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlQ2FyZF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHNldEFjdGl2ZURhdGUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KX0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlSGlkZGVuX2Rpdn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGUuZGF0ZX0te2RhdGUubW9udGgudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9jYXJkfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID17e1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYWN0aXZlRGF0ZSA9PT0gYCR7ZGF0ZS5kYXRlfS0ke2RhdGUubW9udGgudG9Mb3dlckNhc2UoKX1gIFxyXG4gICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZ3JlZW4sIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIGNob29zZW5UaW1lID09PSBgJHtkYXRlLmRhdGV9LSR7ZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgJiYgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwwLDAsIDAuNCksIHJnYigwLDAsMjU1LCAwLjkpLCBkYXJrYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMud2Vla0RheV90ZXh0fT57ZGF0ZS53ZWVrRGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGV4dH0+e2RhdGUuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF90ZXh0fT57ZGF0ZS5tb250aH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvY2tJY29uX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JvcmRlcjogZGF0ZS53ZWVrRGF5ID09PSBcIlRvZGF5XCIgJiYgXCIxcHggc29saWQgYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZSA9IHt7Y29sb3I6IGRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwiYmx1ZVwifX0gY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENob29zZVN0eWxpc3RzIGZyb20gXCIuL2Nob29zZS1zdHlsaXN0cy9DaG9vc2VTdHlsaXN0c1wiO1xyXG5pbXBvcnQgRGF0ZUNhcmQgZnJvbSBcIi4vRGF0ZUNhcmRcIjtcclxuaW1wb3J0IFN0eWxpc3RzIGZyb20gXCIuL1N0eWxpc3RzXCI7XHJcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9UaW1lc1wiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSAoeyBzdGF0ZSwgYWN0aXZlUGFnZSwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBsb2NhdGlvbiB9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0ZVRpbWVzLCBzZXREYXRlVGltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZURhdGUsIHNldEFjdGl2ZURhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGF0ZUluZGV4LCBzZXREYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hvb3NlblRpbWUsIHNldENob29zZW5UaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coY2hvb3NlblRpbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPENob29zZVN0eWxpc3RzIFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHtsb2NhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRlVGltZXMgPSB7c2V0RGF0ZVRpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNGFiOGIxMjZkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgZGF0ZS90aW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVRpbWVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc19jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHtkYXRlVGltZS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXRlID0ge2FjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURhdGUgPSB7c2V0QWN0aXZlRGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNob29zZW5UaW1lID0ge2Nob29zZW5UaW1lLnN1YnN0cmluZygwLCA2KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhaWxhYmxlX3RpbWVfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVEYXRlID09PSBgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgPyBcImZsZXhcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS50aW1lcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge3RpbWV9IHN0eWxlPXt7cG9zaXRpb246IFwicmVsYXRpdmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBzZXRDaG9vc2VuVGltZShldmVudC50YXJnZXQudGV4dENvbnRlbnQpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIaWRkZW5fZGl2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUubW9udGgudG9Mb3dlckNhc2UoKX0tJHt0aW1lfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmRpdmlkdWFsX3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGNob29zZW5UaW1lID09PSBgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfS0ke3RpbWV9YCAmJiBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0eWxpc3RzX3RpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxTdHlsaXN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVzIC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQmVhdXRpY2lhbiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQucG5nXCJcclxuaW1wb3J0IEJlYXV0aWNpYW4yIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvQ29tcG9uZW50IDE0MyDigJMgMi5wbmdcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdHlsaXN0cyAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0c19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8aDQgc3R5bGUgPSB7e21hcmdpbkJvdHRvbTogXCIxMHB4XCJ9fT5TdHlsaXN0PC9oND5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcInBpbmtcIn19PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcblxyXG4gICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgPEltYWdlIHNyYz17QmVhdXRpY2lhbn0gLz5cclxuICAgICAgICAgICAgICAgPHAgc3R5bGUgPSB7e3RleHRBbGlnbjogXCJjZW50ZXJcIn19PkF0aGVuYTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5Tb3VkaTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3R9PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlSGlkZGVuX2Rpdn0+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5UaW5hPC9wPlxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbXBvcnQgQmVhdXRpY2lhbiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQucG5nXCJcclxuaW1wb3J0IEJlYXV0aWNpYW4yIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvQ29tcG9uZW50IDE0MyDigJMgMi5wbmdcIlxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUaW1lcyAoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc19jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiYmx1ZVwifX0gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBDb21wb25lbnRzIFxyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5pbXBvcnQgeyBmaW5kVGltZVNsb3RzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9maW5kVGltZVNsb3RzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaG9vc2VTdHlsaXN0cyAoeyBsb2NhdGlvbiwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBzZXREYXRlVGltZXMsIHNldEFjdGl2ZURhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvIDEwcHggYXV0b1wiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW3RyZWF0bWVudHMsIHNldFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIC8vIE9uQ2hhbmdlIGhhbmRsZXIgZm9yIHN0eWxpc3RcclxuICAgIGZ1bmN0aW9uIGZpbmFsaXplVHJlYXRtZW50cyhldmVudCwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgLy8gZXZlbnQudGFyZ2V0LnZhbHVlIGNvbnRhaW5zIHRoZSBzdHlsaXN0XHJcbiAgICAgICAgY29uc3Qgc3R5bGlzdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgdHJlYXRtZW50IGZyb20gdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBsaXN0IHVzaW5nIGluZGV4XHJcbiAgICAgICAgY29uc3QgdHJlYXRtZW50ID0gc2VsZWN0ZWRUcmVhdG1lbnRzW2luZGV4XTtcclxuICAgICAgICBjb25zdCBuZXdUcmVhdG1lbnRUaXRsZSA9IHNlbGVjdGVkVHJlYXRtZW50c1tpbmRleF0udGl0bGU7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIEV2ZXJ5IHRyZWF0bWVudCBoYXMgbXVsdGlwbGUgc3R5bGlzdHMgYW5kIHVzZXIgaGFzIHRoZSBmbGV4aWJpbGl0eSB0byBjaG9vc2Ugc3R5bGlzdCBmcm9tIHRoZSBzdHlsaXN0cyBvZiBhIFxyXG4gICAgICAgIC8vIHNwZWNpZmljIHRyZWF0bWVudC4gSWYgdXNlciBpcyB0cnlpbmcgdG8gY2hhbmdlIHRoZSBzdHlsaXN0IHRoZW4gcHJldmlvdXMgdHJlYXRtZW50IG11c3QgYmUgb21taXR0ZWQuICBcclxuICAgICAgICBjb25zdCBkb2VzRXhpc3QgPSB0cmVhdG1lbnRzLnNvbWUobmV3SXRlbSA9PiBuZXdJdGVtLnRyZWF0bWVudFRpdGxlID09PSBuZXdUcmVhdG1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgIGlmKGRvZXNFeGlzdCkge1xyXG5cclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFRyZWF0bWVudHMgPSB0cmVhdG1lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0udHJlYXRtZW50VGl0bGUgIT09IG5ld1RyZWF0bWVudFRpdGxlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3RyZWF0bWVudCA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdHJlYXRtZW50LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiB0cmVhdG1lbnQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogdHJlYXRtZW50LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IHRyZWF0bWVudC50aXRsZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldFRyZWF0bWVudHMoWy4uLmZpbHRlcmVkVHJlYXRtZW50cywgbmV3dHJlYXRtZW50XSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXd0cmVhdG1lbnQgPSB7XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeTogdHJlYXRtZW50LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiB0cmVhdG1lbnQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiB0cmVhdG1lbnQucHJpY2UsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiB0cmVhdG1lbnQudGl0bGVcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiB7IHJldHVybiBbLi4uY3VycmVudFZhbHVlLCBuZXd0cmVhdG1lbnRdfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kVGltZXMoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyBOZWVkIHRvIHNvcnQgdGhlIHRyZWF0bWVudHMgYXMgcGVyIHRoZSBjbGllbnQncyBzZWxlY3Rpb24gb3JkZXIuIFxyXG4gICAgICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLmZvckVhY2goc2VsZWN0ZWRUcmVhdG1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgdHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodHJlYXRtZW50LnRyZWF0bWVudFRpdGxlID09PSBzZWxlY3RlZFRyZWF0bWVudC50aXRsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdUcmVhdG1lbnRzLnB1c2godHJlYXRtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGVUaW1lcyA9IGF3YWl0IGZpbmRUaW1lU2xvdHMobmV3VHJlYXRtZW50cyk7XHJcblxyXG4gICAgICAgIHNldERhdGVUaW1lcyhkYXRlVGltZXMpO1xyXG5cclxuICAgICAgICBjb25zdCBmaXJzdERhdGUgPSBkYXRlVGltZXNbMF0uZGF0ZS5kYXRlICsgXCItXCIgKyBkYXRlVGltZXNbMF0uZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGZpcnN0RGF0ZSk7XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZURhdGUoZmlyc3REYXRlKTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob29zZV9zdHlsaXN0c1wiPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJDaG9vc2Ugc3R5bGlzdHNcIiAvPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLm1hcCgodHJlYXRtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfSBrZXkgPSB7dHJlYXRtZW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJlYXRtZW50LmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmVhdG1lbnQudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0cmVhdG1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmRleCB3aWxsIGZpbmQgdGhlIHRyZWF0bWVudCBmcm9tIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IGZpbmFsaXplVHJlYXRtZW50cyhldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlwiPkNob29zZSBzdHlsaXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudC5zdHlsaXN0cy5tYXAoc3R5bGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleSA9IHtzdHlsaXN0fSB2YWx1ZSA9IHtzdHlsaXN0fT57c3R5bGlzdH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfT5cclxuICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UcmVhdG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkF0aGVuYSBHb3JnZW91c1wiPkF0aGVuYSBHb3JnZW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlNvdWRpIEdvcmdlb3VzXCI+U291ZGkgR29yZ2VvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJKZW5uaWZlciBHb3JnZW91c1wiPkplbm5pZmVyIEdvcmdlb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc3Nzc1wiIHN0eWxlID0ge3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaW5kVGltZXN9PkZpbmQgQXZhaWxhYmxlIFN0YXJ0aW5nIFRpbWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1hZ2VzLzYuc3ZnXCI7XHJcblxyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb3JtYXRpb25QYXltZW50ICh7IGFjdGl2ZVBhZ2UsIGNsaWVudEluZm8sIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIsIHZhbGlkYXRpb25FcnJvciB9KSB7XHJcblxyXG4gICAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgLy8gfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19wYXltZW50fSAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIHsvKiA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1BheW1lbnRfaGVhZGVyfT5JbmZvcm1hdGlvbiAvIFBheW1lbnQ8L2g0PiAqL31cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiSW5mb3JtYXRpb24gLyBwYXltZW50XCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb1BheW1lbnRfY29udGVudH0+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZV9pbnB1dHN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5OYW1lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZV9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiRmlyc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwibGFzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5waG9uZV9pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9PlBob25lPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwaG9uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCIrMzEgMjM1IDU2MzJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLnBob25lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVtYWlsX2lucHV0fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+RW1haWw8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiYWJjZEBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtjbGllbnRJbmZvLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGVja2JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5QbGVhc2Uga2VlcCBtZSBpbmZvcm1lZCBvZiB0aGUgb2ZmZXJzIGFuZCBwcm9tb3Rpb25zPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ob3dIZWFyZEFib3V0VXNfaW5wdXR9IHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5Ib3cgZGlkIHlvdSBoZWFyIGFib3V0IGF0aGVuYSBiZWF1dHkgY2FyZT88L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgbmFtZSA9IFwiaG93SGVhcmRBYm91dFVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkZyaWVuZHNcIj5GcmllbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIm90aGVyc1wiPkZyaWVuZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJob3dIZWFyZEFib3V0VXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5ob3dIZWFyZEFib3V0VXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIDxwPlBob25lPC9wPiAqL31cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0luZm9ybWF0aW9uUGF5bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXQgKHsgdHlwZSwgbmFtZSwgcGxhY2Vob2xkZXIsIHZhbHVlLCBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyLCB2YWxpZGF0aW9uRXJyb3IgfSkge1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cclxuXHJcbiAgICAgICAgICAgIDxpbnB1dCBcclxuICAgICAgICAgICAgICAgIHR5cGUgPSB7dHlwZX0gXHJcbiAgICAgICAgICAgICAgICBuYW1lID0ge25hbWV9IFxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSB7cGxhY2Vob2xkZXJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB7dmFsdWV9IFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxwIFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHZhbGlkYXRpb25FcnJvciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJlZFwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgIHtwbGFjZWhvbGRlci50b0xvd2VyQ2FzZSgpfSBjYW4ndCBiZSBibGFua1xyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXhpb3ModXJsKSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGVuZFBvaW50ID0gYGh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zLyR7dXJsfWA7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChlbmRQb2ludCk7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW3VybF0pO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIi8vIE5leHQgTW9kdWxlc1xyXG4vLyBpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vLi4vLi4vbGlicy91c2VBeGlvc1wiO1xyXG4vLyBpbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG4vLyBpbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9jYXRpb25JY29uIGZyb20gXCIuL0xvY2F0aW9uSWNvblwiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5pbXBvcnQgRXZlbnRIYW5kbGVyRGl2IGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudEhhbmRsZXJEaXZcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24gKHsgYWN0aXZlUGFnZSwgc3RhdGUsIHVwZGF0ZVN0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3IsIGxvYWRpbmd9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2xvY2F0aW9uc1wiLCB7fSk7XHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHNldExvY2F0aW9ucyhkYXRhKTtcclxuICAgICAgICAvLyBpZihjYXRlZ29yeURhdGEgIT09IG51bGwpIHNldENhdGVnb3JpZXMoY2F0ZWdvcnlEYXRhKTtcclxuICAgICAgICAvLyBpZih0cmVhdG1lbnREYXRhICE9PSBudWxsKSBzZXRUcmVhdG1lbnRzKHRyZWF0bWVudERhdGEpO1xyXG5cclxuICAgIH0sIFtkYXRhXSlcclxuXHJcblxyXG4gICAgaWYobG9hZGluZykgcmV0dXJuIDxkaXY+TG9hZGluZy4uLi48L2Rpdj5cclxuICAgIGlmKGVycm9yKSByZXR1cm4gPGRpdj5Tb21ldGhpbmcgd2VudCB3cm9uZzwvZGl2PlxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VsZWN0X2xvY2F0aW9ufSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgbG9jYXRpb25cIiAvPlxyXG4gICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9saXN0fT5cclxuICAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChsb2NhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge2luZGV4ICsgMX0gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmVudEhhbmRsZXJEaXYgY29udGVudCA9IHtsb2NhdGlvbi50aXRsZX0gY2xpY2tFdmVudEhhbmRsZXIgPSB7dXBkYXRlU3RhdGV9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25JbmZvX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9pbmZvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHN0YXRlLmxvY2F0aW9uID09PSBsb2NhdGlvbi50aXRsZSAmJiBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2xvY2F0aW9uLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9uLmFkZHJlc3MxfSwge2xvY2F0aW9uLmFkZHJlc3MyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5aaXAgQ29kZToge2xvY2F0aW9uLnppcENvZGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlBob25lOiB7bG9jYXRpb24ucGhvbmV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbi5jaXR5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uY291bnRyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2NhdGlvbkljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb25JY29uKCkge1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25faWNvbn0+XHJcbiAgICAgICAgICAgIDxpIHN0eWxlID0ge3tjb2xvcjogXCJkYXJrYmx1ZVwiLCBmb250U2l6ZTogXCIyNHB4XCJ9fSBjbGFzc05hbWU9XCJmYXMgZmEtbWFwLW1hcmtlci1hbHRcIj48L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25CdXR0b24gZnJvbSBcIi4vTmF2aWdhdGlvbkJ1dHRvblwiO1xyXG5pbXBvcnQgTmF2aWdhdGlvblRleHQgZnJvbSBcIi4vTmF2aWdhdGlvblRleHRcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25CYXIgKHsgc3RhdGUsIHNlbGVjdGVkVHJlYXRtZW50cywgYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZX0pIHtcclxuXHJcbiAgICBjb25zdCBpdGVtcyA9IFtcclxuICAgICAgICB7aWQ6IDEsIGNvbnRlbnQ6IFwiU2VsZWN0IExvY2F0aW9uXCJ9LFxyXG4gICAgICAgIHtpZDogMiwgY29udGVudDogXCJDYXRlZ29yeSBhbmQgVHJlYXRtZW50XCJ9LFxyXG4gICAgICAgIHtpZDogMywgY29udGVudDogXCJTZWxlY3QgVGltZSAvIERhdGVcIn0sXHJcbiAgICAgICAge2lkOiA0LCBjb250ZW50OiBcIkluZm9ybWF0aW9uIC8gUGF5bWVudFwifSxcclxuICAgICAgICB7aWQ6IDUsIGNvbnRlbnQ6IFwiQ29uZmlybWF0aW9uXCJ9XHJcbiAgICBdO1xyXG5cclxuICAgIC8vIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgLy8gICAgIHtpZDogMSwgY29udGVudDogXCJDYXRlZ29yeSBhbmQgVHJlYXRtZW50XCJ9LFxyXG4gICAgLy8gICAgIHtpZDogMiwgY29udGVudDogXCJTZWxlY3QgTG9jYXRpb25cIn0sXHJcbiAgICAvLyAgICAge2lkOiAzLCBjb250ZW50OiBcIlNlbGVjdCBUaW1lIC8gRGF0ZVwifSxcclxuICAgIC8vICAgICB7aWQ6IDQsIGNvbnRlbnQ6IFwiSW5mb3JtYXRpb24gLyBQYXltZW50XCJ9LFxyXG4gICAgLy8gICAgIHtpZDogNSwgY29udGVudDogXCJDb25maXJtYXRpb25cIn1cclxuICAgIC8vIF07XHJcbiAgICBcclxuICAgIFxyXG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25CYXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHt3aW5kb3dXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IHtzdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlID0ge3NldEFjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7aXRlbS5pZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uVGV4dF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvblRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHt3aW5kb3dXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0ge2l0ZW0uY29udGVudH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCIvLyAvL1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQnV0dG9uICh7IHdpbmRvd1dpZHRoLCBzdGF0ZSwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBhY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlLCB2YWx1ZSB9KSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVBhZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYobmV3VmFsdWUgPT09IDIgJiYgIXN0YXRlLmxvY2F0aW9uKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgbG9jYXRpb25cIik7XHJcblxyXG4gICAgICAgIGlmKG5ld1ZhbHVlID09PSAzICYmICFzZWxlY3RlZFRyZWF0bWVudHMubGVuZ3RoKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSB0cmVhdG1lbnRcIik7XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZVBhZ2UobmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX2xpbmtzfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmICh3aW5kb3dXaWR0aCA8PSA2MDAgPyBcIjUwcHhcIiA6IFwiMTAwcHhcIil9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmIFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogYWN0aXZlUGFnZSA9PT0gdmFsdWUgJiYgXCJkYXJrYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtzdHlsZXMubmF2aWdhdGlvbkxpbmtfYnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHthY3RpdmVQYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICAvLyBvbkNsaWNrPSB7ZXZlbnQgPT4gc2V0QWN0aXZlUGFnZShOdW1iZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSl9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz0ge2NoYW5nZUFjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5ibGFua1BhcmFfY29udGFpbmVyfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiB2YWx1ZSA9PT0gNSAmJiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuIiwiLy8gLy9cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvblRleHQgKHsgd2luZG93V2lkdGgsIHRleHQgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX3RleHR9IHN0eWxlID0ge3t3aWR0aDogdGV4dCA9PT0gXCJDb25maXJtYXRpb25cIiAmJiAod2luZG93V2lkdGggPD0gNjAwID8gXCI1MHB4XCIgOiBcIjEwMHB4XCIpfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dH0gc3R5bGUgPSB7e3dpZHRoOiB0ZXh0ID09PSBcIkNvbmZpcm1hdGlvblwiICYmIFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2NvbnRlbnR9ID57dGV4dH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHRfYmxhbmtEaXZ9PjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgICAgICBcclxuICAgIFxyXG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0XCI+XHJcbiAgICAgICAgICAgIDxwPnttZXNzYWdlfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyBNb2R1bGVzIG5lZWRlZCB0byBmZXRjaCBldmVudHNcclxuaW1wb3J0IHsgZmV0Y2hFdmVudHMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2ZldGNoRXZlbnRzXCI7XHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlc1wiO1xyXG5pbXBvcnQgeyBnZXRTdHlsaXN0cyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNcIjtcclxuaW1wb3J0IHsgZ2V0V29ya2luZ1RpbWVzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXNcIjtcclxuXHJcbmNvbnN0IGRlZmF1bHRUaW1lc0FycmF5ID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBmaW5kVGltZVNsb3RzID0gYXN5bmMgKG5ld1RyZWF0bWVudHMpID0+IHtcclxuXHJcbiAgICAvKlxyXG4gICAgY29uc3QgbmV3VHJlYXRtZW50cyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlBlcm1hbmVudCBNYWtldXBcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiSmVubmlmZXIgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDg1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogMjMsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlBlcm1hbmVudCBNYWtldXAgd2l0aCBsaWdodCBtYXNzYWdlXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiTWFzc2FnZVwiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBbmRyZWEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDc1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIk1hc3NhZ2UgZm9yIDMwIG1pbnNcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJCcm93c1wiLFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogXCJBdGhlbmEgR29yZ2VvdXNcIixcclxuICAgICAgICAgICAgbG9jYXRpb246IFwiQXRoZW5hIEJlYXV0eSBDYXJlIC0gQm9ndXJcIixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IDM1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogNDUsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBcIlNoYXBpbmcgYnJvd3NcIlxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdO1xyXG4gICAgKi9cclxuXHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHRvdGFsIDMwIGRhdGVzIGluIHRoZSBmb3JtYXQgJ3llYXItbW9udGgtZGF0ZScgZm9ybWF0IHN0YXJ0aW5nIGZyb20gdG9kYXlcclxuICAgIGNvbnN0IGRhdGVzQXJyYXkgPSBnZXREYXRlcygpO1xyXG5cclxuICAgIC8vIFB1dHRpbmcgdGhlIGxvY2F0aW9uIGluZm8gaW4gYSB2YXJpYWJsZVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBuZXdUcmVhdG1lbnRzWzBdLmxvY2F0aW9uO1xyXG4gICAgXHJcbiAgICAvLyBGZXRjaGluZyBpbmZvcm1hdGlvbiBvZiBhbGwgc3R5bGlzdHMgYXMgcGVyIGFsbCB0cmVhdG1lbnRzXHJcbiAgICBjb25zdCBhbGxTdHlsaXN0cyA9IGF3YWl0IGdldFN0eWxpc3RzKG5ld1RyZWF0bWVudHMpO1xyXG4gICAgY29uc29sZS5sb2coYWxsU3R5bGlzdHMpO1xyXG5cclxuICAgIC8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIGNvbnN0IGNhbGVuZGFyRXZlbnRzID0gYXdhaXQgZmV0Y2hFdmVudHMoKTtcclxuICAgIC8vY29uc29sZS5sb2coXCJDYWxlbmRhciBldmVudHM6IFwiLCBjYWxlbmRhckV2ZW50cyk7XHJcblxyXG5cclxuXHJcbiAgICAvLyBGaW5kIHRoZSBkYXRlcyB3aGVuIGFsbCBzdHlsaXN0cyBhcmUgYXZhaWxhYmxlIGF0IHRoZSByZXF1ZXN0ZWQgbG9jYXRpb24uIEFsc28gZmluZCBhbGwgdGhlIHdvcmtpbmdUaW1lcyBvZiBhbGwgc3R5bGlzdHNcclxuICAgIC8vIG9uIHRob3NlIGRhdGVzXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBnZXRXb3JraW5nVGltZXMoZGF0ZXNBcnJheSwgYWxsU3R5bGlzdHMsIG5ld1RyZWF0bWVudHMsIGxvY2F0aW9uKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG4gICAgLy8gY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZmluZEZyZWVUaW1lcyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMsIGNhbGVuZGFyRXZlbnRzKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyk7XHJcblxyXG5cclxuICAgIFxyXG4gICAgY29uc3Qgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzID0gW107XHJcblxyXG4gICAgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLmZvckVhY2god29ya2luZ1RpbWUgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB4eHggPSBbXTtcclxuXHJcbiAgICAgICAgd29ya2luZ1RpbWUuc3R5bGlzdFdvcmtpbmdUaW1lcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYnVzeVRpbWVzID0gW107XHJcblxyXG4gICAgICAgICAgICBjYWxlbmRhckV2ZW50cy5mb3JFYWNoKGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBldmVudERhdGUgPSBldmVudC5zdGFydFRpbWUuc3Vic3RyaW5nKDAsIGV2ZW50LnN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdUaW1lID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZyhldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBldmVudC5zdGFydFRpbWUubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nSG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nTWludXRlID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuc3RhdHVzID09PSBcIkFjdGl2ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGV2ZW50RGF0ZSA9PT0gd29ya2luZ1RpbWUuZGF0ZSAmJiBldmVudC5zdHlsaXN0ID09PSBpdGVtLnN0eWxpc3QgJiYgZXZlbnQuZXZlbnRMb2NhdGlvbiA9PT0gbG9jYXRpb24pIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgayA9IDA7IGsgPCBNYXRoLmNlaWwoZXZlbnQuZXZlbnREdXJhdGlvbiAvIDE1KTsgaysrKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSAoMTUgKiBrKSArIHN0YXJ0aW5nTWludXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXIgPSBzdGFydGluZ0hvdXI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJ2YWwgLyA2MCBnaXZlcyB1cyB0aGUgdmFsdWUgd2hpY2ggc2hvdWxkIGJlIGFkZGVkIHRvIGhvdXIuIEZvciBleGFtcGxlIC0gaWYgaW50ZXJ2YWwgaXMgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA3NSB0aGVuIHdlIG11c3QgYWRkIDEgd2l0aCBob3VyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKGludGVydmFsIC8gNjApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZGluZyBob3VyIGluY3JlbWVudCB3aXRoIGhvdXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VySW5jcmVtZW50IGlzIG1vcmUgdGhhbiBvciBlcXVhbCB0byAxIHRoZW4gaW50ZXJ2YWwgdmFsdWUgbXVzdCBiZSByZS1jYWxjdWxhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbCA9IGludGVydmFsIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaW50ZXJ2YWwgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXJ2YWwgPT09IDApIGludGVydmFsICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVzeVRpbWVzLnB1c2goYDAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAke2hvdXJ9OiR7aW50ZXJ2YWx9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld1dvcmtpbmdUaW1lcyA9IGl0ZW0ud29ya2luZ1RpbWVzLmZpbHRlcih0aW1lID0+ICFidXN5VGltZXMuaW5jbHVkZXModGltZSkpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgeHh4LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgc3R5bGlzdDogaXRlbS5zdHlsaXN0LFxyXG4gICAgICAgICAgICAgICAgZnJlZVRpbWVzOiBuZXdXb3JraW5nVGltZXNcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGU6IHdvcmtpbmdUaW1lLmRhdGUsIHN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXM6IHh4eH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG4gICAgXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gUmVkdWNlIGZ1bmN0aW9uIGFjY2VwdHMgdHdvIGFyZ3VtZW50cy4gRmlyc3Qgb25lIGlzIGEgZnVuY3Rpb24gd2l0aCB0d28gcGFyYW1ldGVycyBhbmQgdGhlIHNlY29uZCBpcyBpbml0aWFsIHZhbHVlXHJcbiAgICAvLyBJZiBpbml0aWFsIHZhbHVlIGlzIG5vdCBleHBsaWNpdGx5IGRlZmluZWQgKGZvciBmb2xsb3dpbmcgY2FzZSwgMCkgdGhlbiByZWR1Y2UgZnVuY3Rpb24gd2lsbCBieSBkZWZhdWx0IHRha2UgdGhlXHJcbiAgICAvLyBmaXJzdCBpdGVtIG9mIHRoZSBhcnJheSBhcyB0aGUgaW5pdGlhbCB2YWx1ZS4gICBcclxuICAgIGNvbnN0IGNvdW50T2ZUaW1lc1RvT21taXQgPSBuZXdUcmVhdG1lbnRzLnJlZHVjZSgodG90YWwsIHRyZWF0bWVudCkgPT4gdG90YWwgKyAoTWF0aC5jZWlsKHRyZWF0bWVudC50cmVhdG1lbnREdXJhdGlvbiAvIDE1KSksIDApO1xyXG4gIFxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCk7XHJcbiAgICBjb25zb2xlLmxvZyhjb3VudE9mVGltZXNUb09tbWl0KTtcclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRUaW1lc0FycmF5Lmxlbmd0aCAtIGNvdW50T2ZUaW1lc1RvT21taXQpO1xyXG5cclxuICAgIGNvbnN0IHFxcSA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKChkYXRlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAvLyAyMDIxLTExLTE1XHJcblxyXG4gICAgICAgIC8vIFRoaXMgYXJyYXkgd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBhbGwgdGhlIHN0YXJ0aW5nIGZyZWUgdGltZXMgb2YgZWFjaCBkYXRlXHJcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlVGltZXNCeURhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IChkZWZhdWx0VGltZXNBcnJheS5sZW5ndGggKyAxKSAtIGNvdW50T2ZUaW1lc1RvT21taXQ7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgLy8gMTA6MDBcclxuXHJcbiAgICAgICAgICAgIC8vIHRvdGFsVGltZUNvdW50IHZhbHVlIHdpbGwgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IGluIHRoZSBmb2xsb3dpbmcgbG9vcC4gXHJcbiAgICAgICAgICAgIC8vIEZvciBleGFtcGxlLCBpZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgaGFzIHRocmVlIGl0ZW1zIChzYXkgZmlyc3QgaXRlbSdzIGR1cmF0aW9uIGlzIDQ1LCBzZWNvbmQgaXMgNTUgXHJcbiAgICAgICAgICAgIC8vIGFuZCB0aGlyZCBpcyAyNSkgdGhlbiBhdCB0aGUgZW5kIG9mIHRoZSBsb29wIHRvdGFsVGltZUNvdW50IHdpbGwgYmUgKE1hdGguY2VpbCg0NSAvIDE1KSArICBNYXRoLmNlaWwoNTUgLyAxNSlcclxuICAgICAgICAgICAgLy8gKyBNYXRoLmNlaWwoMjUgLyAxNSkpIDMgKyA0ICsgMiA9IDlcclxuICAgICAgICAgICAgbGV0IHRvdGFsVGltZUNvdW50ID0gMDtcclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgYSB0ZW1wb3JhcnkgYXJyYXkgd2hpY2ggd2lsbCBiZSBwb3B1bGF0ZWQgd2l0aCBmcmVlIHRpbWVzIG9mIGVhY2ggc3R5bGlzdCBieSBsb29waW5nIHRocm91Z2ggdGhlIFxyXG4gICAgICAgICAgICAvLyBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGRhdGUuc3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcy5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXNbal07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENvdW50IHdpbGwgZGV0ZXJtaW5lIGhvdyBtYW55IGZyZWUgdGltZXMgc2hvdWxkIGJlIGxvb2tlZCBmb3IuIEZvciBleGFtcGxlIGlmIGNvdW50IGlzIDMgYW5kIHN0YXJ0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyB0aW1lIGlzIDA5OjMwIHRoZW4gMDk6MzAsIDA5OjQ1ICYgMTA6MDAgc2hvdWxkIGJlIGxvb2tlZCBmb3JcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gTWF0aC5jZWlsKG5ld1RyZWF0bWVudHNbal0udHJlYXRtZW50RHVyYXRpb24gLyAxNSk7IFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBBcyBzYWlkIGFib3ZlIHRvdGFsVGltZUNvdW50IG11c3QgYmUgdXBkYXRlZCBvbiBlYWNoIGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgICAgICB0b3RhbFRpbWVDb3VudCArPSBjb3VudDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUaGlzIGlzIHZlcnkgY3J1Y2lhbC4gT24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSB0aGlzIHN0YXJ0aW5nVGltZSB3aWxsIGJlIHVwZGF0ZWQsXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgZXhhbXBsZSAtIHNheSB3ZSBhcmUgYXQgMDk6MDAgb24gZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXksIGNvdW50IGlzIDNcclxuICAgICAgICAgICAgICAgIC8vIGFuZCBzdHlsaXN0IG9mIHRoaXMgaXRlbSBpcyBhdmFpbGFibGUgb24gYWxsIHRocmVlIHRpbWVzIDA5OjAwLCAwOToxNSAmIDk6MzAuIFNvIHN0YXJ0aW5nVGltZSBtdXN0IGJlIFxyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSAwOTo0NSBmb3IgdGhlIDJuZCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheS4gU2F5IGZvciB0aGUgc2Vjb25kIGl0ZW0gY291bnQgaXMgNCBhbmQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgLy8gaXMgYXZhaWxhYmxlIG9uIGFsbCBmb3VyIHRpbWVzIDA5OjQ1LCAxMDowMCwgMTA6MTUgJiAxMDozMCwgc28gc3RhcnRpbmdUaW1lIGZvciB0aGUgdGhpcmQgaXRlbSBvZiB0aGUgXHJcbiAgICAgICAgICAgICAgICAvLyAgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IDEwOjQ1LiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydGluZ1RpbWUgPSBcIlwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0ZW1wIGxlbmd0aCBpcyB6ZXJvIHRoZW4gd2UgYXJlIGF0IHRoZSBmaXJzdCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgaWYoIXRlbXAubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbaV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBlYWNoIGNvbnNlY3V0aXZlIGl0ZW0gYWZ0ZXIgdGhlIGZpcnN0IG9uZSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgc3RhcnRpbmdUaW1lIHdpbGwgYmUgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIG5leHQgdGltZSBhZnRlciB0aGUgdGltZSBvZiBsYXN0IGl0ZW0gb2YgdGVtcCBhcnJheS4gXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeSA9IGRlZmF1bHRUaW1lc0FycmF5LmluZGV4T2YodGVtcFt0ZW1wLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICBzdGFydGluZ1RpbWUgPSBkZWZhdWx0VGltZXNBcnJheVt5ICsgMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIGxldCBob3VyID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMCwgMikpOyAvLyAxMVxyXG4gICAgICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygzLCA1KSk7IC8vIDMwXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAxOyBrIDw9IGNvdW50OyBrKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhvdXJJbmNyZW1lbnQgPSBNYXRoLmZsb29yKG1pbnV0ZXMgLyA2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaG91ciArPSBob3VySW5jcmVtZW50O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihob3VySW5jcmVtZW50ID49IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IG1pbnV0ZXMgLSAoNjAgKiBob3VySW5jcmVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIG1pbnV0ZXMgaXMgMCB0aGVuIGFkZCBleHRyYSBvbmUgMCB0byBrZWVwIHRoZSBtaW51dGUgdmFsdWUgaW4gdHdvIGRpZ2l0c1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG1pbnV0ZXMgPT09IDApIG1pbnV0ZXMgKz0gXCIwXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ciBpcyBsZXNzIHRoYW4gMTAgdGhlbiBhZGQgYSAwIGJlZm9yZSBpdCB0byBtYWtlIGl0IGNvbnNpc3RlbnQgd2l0aCBjYWxlbmRhciBob3VyL21pbnV0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGhvdXIgPCAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lID0gKGAwJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgJHtob3VyfToke21pbnV0ZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IGZyZWVUaW1lcyA9IGl0ZW0uZnJlZVRpbWVzQXJyYXlbaW5kZXhdLmZyZWVUaW1lcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lcztcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGZyZWVUaW1lcy5pbmNsdWRlcyh0aW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2godGltZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyA9IE51bWJlcihtaW51dGVzKTtcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGVzICs9IDE1O1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBTYXkgc3RhcnRpbmdUaW1lIGlzIDA5OjAwICYgY291bnQgaXMgMy4gU28gdG90YWxUaW1lQ291bnQgaXMgYWxzbyAzLiBBZnRlciBmaXJzdCBpdGVyYXRpb24gdGVtcC5sZW5ndGggXHJcbiAgICAgICAgICAgICAgICAvLyBtdXN0IGJlIGVxdWFscyB0byAzIG90aGVyd2lzZSBpdCBtZWFucyB0aGF0IHN0eWxpc3QgaXMgbm90IGF2YWlsYWJsZSBhdCBhbGwgdGhyZWUgdGltZXMgKDA5OjAwLiAwOToxNSAmIDA5OjMwKVxyXG4gICAgICAgICAgICAgICAgLy8gSW4gc3VjaCBjYXNlIGZ1cnRoZXIgaXRlcmF0aW9uIGlzIG5vdCBuZWNlc3NhcnkuIFxyXG4gICAgICAgICAgICAgICAgaWYodGVtcC5sZW5ndGggPCB0b3RhbFRpbWVDb3VudCkgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRvdGFsVGltZUNvdW50ID09PSB0ZW1wLmxlbmd0aCkgYXZhaWxhYmxlVGltZXNCeURhdGUucHVzaChkZWZhdWx0VGltZXNBcnJheVtpXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBxcXEucHVzaCh7ZGF0ZTogZGF0ZS5kYXRlLCB0aW1lczogYXZhaWxhYmxlVGltZXNCeURhdGV9KTtcclxuICAgICAgIFxyXG5cclxuICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHFxcSk7XHJcblxyXG4gICAgY29uc3QgZGF0ZVRpbWVzQXJyYXkgPSBbXTtcclxuXHJcbiAgICBxcXEuZm9yRWFjaCgoZGF0ZVRpbWVzLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZVRpbWVzLmRhdGUpO1xyXG5cclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7ICB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0pO1xyXG5cclxuICAgICAgICBkYXRlVGltZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZToge2RhdGUsIHdlZWtEYXksIG1vbnRofSxcclxuICAgICAgICAgICAgdGltZXM6IGRhdGVUaW1lcy50aW1lc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBkYXRlVGltZXNBcnJheTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG4vLyBGZXRjaGluZyBjYWxlbmRhciBldmVudHMgb2YgYWxsIHN0eWxpc3RzXHJcbi8vIGZvciBsb29wIGlzIHRoZSB3YXkgdG8gZ28gZm9yIGZldGNoaW5nIGRhdGEgdGhyb3VnaCBhcGkgY2FsbHMuIGZvckVhY2ggc3Vja3MuXHJcbmV4cG9ydCBjb25zdCBmZXRjaEV2ZW50cyA9IGFzeW5jICgpID0+IHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvZXZlbnRzXCIpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5ldmVudHM7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImV4cG9ydCBjb25zdCBnZXREYXRlcyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBkYXRlcyA9IFtdO1xyXG5cclxuICAgIC8vIFBvcHVsYXRpbmcgZGF0ZVRpbWVBcnJheSB3aXRoIDMwIGRhdGVzIGZyb20gdG9kYXlcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPD0gMzA7IGkrKykge1xyXG5cclxuICAgICAgICAvLyBPbmUgZGF5IGVxdWFscyA4NjQwMDAwMCBtaWxsaXNlY29uZHMuIEZvciBlYWNoIGl0ZXJhdGlvbiB3ZSBuZWVkIHRvIGFkZCAoODY0MDAwMDAgKiBpKSBtaWxsaXNlY29uZHMgd2l0aCB0b2RheS4gVGhpcyB3YXlcclxuICAgICAgICAvLyB3ZSBjYW4gY2FsY3VsYXRlIGRhdGVzIGFzIG1hbnkgYXMgd2Ugd2FudC4gICBcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgbW9udGggPSAoZGF0ZS5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcclxuICAgICAgICBsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgaWYgKG1vbnRoIDwgMTApIG1vbnRoID0gYDAke21vbnRofWA7XHJcbiAgICAgICAgaWYgKGRheSA8IDEwKSBkYXkgPSBgMCR7ZGF5fWA7XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcclxuICAgICAgICBkYXRlcy5wdXNoKG5ld0RhdGUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZGF0ZXM7XHJcblxyXG59IiwiLy8gQXhpb3NcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbi8vIEZldGNoaW5nIGNhbGVuZGFyIGV2ZW50cyBvZiBhbGwgc3R5bGlzdHNcclxuLy8gZm9yIGxvb3AgaXMgdGhlIHdheSB0byBnbyBmb3IgZmV0Y2hpbmcgZGF0YSB0aHJvdWdoIGFwaSBjYWxscy4gZm9yRWFjaCBzdWNrcy5cclxuZXhwb3J0IGNvbnN0IGdldFN0eWxpc3RzID0gYXN5bmMgKG5ld1RyZWF0bWVudHMpID0+IHtcclxuXHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHNcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHN0eWxpc3RzID0gW107XHJcblxyXG4gICAgICAgIG5ld1RyZWF0bWVudHMuZm9yRWFjaCh0cmVhdG1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmVzcG9uc2UuZGF0YS5mb3JFYWNoKHN0eWxpc3QgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxpc3RGdWxsTmFtZSA9IHN0eWxpc3QuZmlyc3ROYW1lICsgXCIgXCIgKyBzdHlsaXN0Lmxhc3ROYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRyZWF0bWVudC5jaG9vc2VuU3R5bGlzdCA9PT0gc3R5bGlzdEZ1bGxOYW1lKSBzdHlsaXN0cy5wdXNoKHN0eWxpc3QpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gc3R5bGlzdHM7XHJcblxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5yZXNwb25zZS5kYXRhLm1zZyk7XHJcblxyXG4gICAgfVxyXG5cclxufSIsImNvbnN0IHRpbWVzID0gW1xyXG4gICAgXCIxMDowMFwiLCBcIjEwOjE1XCIsIFwiMTA6MzBcIiwgXCIxMDo0NVwiLCBcIjExOjAwXCIsIFwiMTE6MTVcIiwgXCIxMTozMFwiLCBcIjExOjQ1XCIsIFwiMTI6MDBcIiwgXCIxMjoxNVwiLCBcIjEyOjMwXCIsIFwiMTI6NDVcIiwgXHJcbiAgICBcIjEzOjAwXCIsIFwiMTM6MTVcIiwgXCIxMzozMFwiLCBcIjEzOjQ1XCIsIFwiMTQ6MDBcIiwgXCIxNDoxNVwiLCBcIjE0OjMwXCIsIFwiMTQ6NDVcIiwgXCIxNTowMFwiLCBcIjE1OjE1XCIsIFwiMTU6MzBcIiwgXCIxNTo0NVwiLCBcclxuICAgIFwiMTY6MDBcIiwgXCIxNjoxNVwiLCBcIjE2OjMwXCIsIFwiMTY6NDVcIiwgXCIxNzowMFwiXHJcbl07XHJcblxyXG4vLyAyMDIxLTExLTE1XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V29ya2luZ1RpbWVzID0gKGRhdGVzQXJyYXksIGFsbFN0eWxpc3RzLCBuZXdUcmVhdG1lbnRzLCBsb2NhdGlvbikgPT4ge1xyXG5cclxuICAgIGNvbnN0IHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyA9IFtdO1xyXG5cclxuICAgIC8vIEZvciBlYWNoIGRhdGUgb2YgdGhlIGRhdGVUaW1lQXJyYXkgbG9vcCB0aHJvdWdoIHRoZSBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZHVsZSB0byBmaW5kIGRheSBtYXRjaC5cclxuICAgIGRhdGVzQXJyYXkuZm9yRWFjaChkYXRlID0+IHtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIC8vIGdldCB0aGUgZGF5IG5hbWUgKGV4YW1wbGUgLSBNb25kYXkpIGZyb20gdGhlIGRhdGUgdG8gY2hlY2sgYWdhaW5zdCBlYWNoIHN0eWxpc3QncyB3b3JrU2NoZWR1bGUncyBkYXkgTmFtZVxyXG4gICAgICAgIGNvbnN0IGRheU5hbWUgPSBuZXdEYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVTXCIsIHsgd2Vla2RheTogXCJsb25nXCIgfSk7XHJcblxyXG4gICAgICAgIC8vIE5vIHN0eWxpc3QgaGFzIHdvcmtTY2hlZHVsZSBvbiBTYXR1cmRheSBhbmQgU3VuZGF5IHNvIGVuZCB0aGUgY3VycmVudCBpdGVyYXRpb24gaGVyZVxyXG4gICAgICAgIGlmKGRheU5hbWUgPT09IFwiU2F0dXJkYXlcIiB8fCBkYXlOYW1lID09PSBcIlN1bmRheVwiKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gTG9vdCB0aHJvdWdoIGFsbCBzdHlsaXN0cyB0byBiZSBhYmxlIHRvIGxvb3AgdGhyb3VnaCB0aGVpciB3b3JrU2NoZWR1bGUgXHJcbiAgICAgICAgYWxsU3R5bGlzdHMuZm9yRWFjaChzdHlsaXN0ID0+IHtcclxuXHJcbiAgICAgICAgICAgIC8vIE9ubHkgb25lIGZyb20gdGhlIHN0eWxpc3Qgd29ya1NjaGVkdWxlIGFycmF5IHdpbGwgbWF0Y2ggd2l0aCB0aGUgY3VycmVudCBkYXRlIGl0ZXJhdGlvbiwgaWYgaXQncyBmb3VuZCBubyBuZWVkIHRvXHJcbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgcmVzdCBvZiB0aGUgc2NoZWR1bGVzXHJcbiAgICAgICAgICAgIGZvcihsZXQgcCA9IDA7IHAgPCBzdHlsaXN0LndvcmtTY2hlZHVsZS5sZW5ndGg7IHArKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHNjaGVkdWxlID0gc3R5bGlzdC53b3JrU2NoZWR1bGVbcF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc2NoZWR1bGUubG9jYXRpb24gPT09IGxvY2F0aW9uICYmIHNjaGVkdWxlLmRheSA9PT0gZGF5TmFtZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBBcnJheSBvZiB0aW1lcyBhYm92ZSBoYXMgYWxsIHRoZSBwb3NzaWJsZSB3b3JraW5nIHRpbWVzLiBzdGFydFRpbWVJbmRleCBpcyB0aGUgaW5kZXggb2YgdGltZSBmcm9tIHRoZSB0aW1lc1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGFycmF5LCBlbmRUaW1lSW5kZXggaXMgdGhlIFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayB3aGljaCB0aW1lcyBmcm9tIHRoZSB0aW1lcyBhcnJheSBhYm92ZSBtYXRjaCB3aXRoIHRoZSB3b3JraW5nIHN0YXJ0IGFuZCBlbmQgdGltZSBvZiB0aGUgY3VycmVudCBzdHlsaXN0XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb24gY3VycmVudCBkYXRlLiBXZSBuZWVkIHRvIHB1dCBhbGwgdGhlIHRpbWVzIHN0YXJ0aW5nIGZyb20gc3RhcnRUaW1lIGFuZCBlbmRpbmcgYXQgZW5kVGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzY2hlZHVsZS5zdGFydFRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWVJbmRleCA9IHRpbWVzLmluZGV4T2Yoc2NoZWR1bGUuZW5kVGltZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHdvcmtpbmdUaW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHEgPSBzdGFydFRpbWVJbmRleDsgcSA8PSBlbmRUaW1lSW5kZXg7IHErKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JraW5nVGltZXMucHVzaCh0aW1lc1txXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0ZW1wLnB1c2goeyBzdHlsaXN0OiBzdHlsaXN0LmZpcnN0TmFtZSArIFwiIFwiICsgc3R5bGlzdC5sYXN0TmFtZSwgd29ya2luZ1RpbWVzfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBTYXkgZGF5IG9mIGN1cnJlbnQgZGF0ZSBpdGVyYXRpb24gaXMgTW9uZGF5IGFuZCBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBvbiB0aGlzIGRheSBhdCB0aGUgcmVxdWVzdGVkIGxvY2F0aW9uLiBJdFxyXG4gICAgICAgIC8vIG1lYW5zIGEgXHJcbiAgICAgICAgaWYodGVtcC5sZW5ndGggPT09IG5ld1RyZWF0bWVudHMubGVuZ3RoKSBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMucHVzaCh7IGRhdGUsIHN0eWxpc3RXb3JraW5nVGltZXM6IHRlbXB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzO1xyXG5cclxufSIsIlxyXG5leHBvcnQgY29uc3QgZ2V0RGF0ZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgbGV0IGRhdGVzQXJyYXkgPSBbXTtcclxuXHJcblxyXG4gICAgZGF0ZXNBcnJheS5wdXNoKHtcclxuICAgICAgICBkYXRlOiBuZXcgRGF0ZSgpLmdldERhdGUoKSxcclxuICAgICAgICB3ZWVrRGF5OiBcIlRvZGF5XCIsXHJcbiAgICAgICAgbW9udGg6IG5ldyBEYXRlKCkudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSApXHJcbiAgICB9KVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg4NjQwMDAwMCAqIGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHdlZWtEYXkgPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyAgd2Vla2RheTogXCJzaG9ydFwiIH0pO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgbW9udGg6IFwic2hvcnRcIiB9KVxyXG5cclxuICAgICAgICBkYXRlc0FycmF5LnB1c2goe2RhdGUsIHdlZWtEYXksIG1vbnRofSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGVzQXJyYXk7XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBeGlvcyhtZXRob2QsIHVybCwgYm9keSwgaGFwcGVuaW5nKSB7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyh1cmwpO1xyXG5cclxuICAgIC8vIC8vIE5lZWQgdG8gcHV0IGZvbGxvd2luZyB0aHJlZSBpbiB0aGUgdXNlRWZmZWN0J3MgZGVwZW5kZWN5IGFycmF5IHRvIGFsbG93IGZvciBkeW5hbWljIGRhdGEgZmV0Y2hpbmcgYmFzZWQgb24gdXNlcidzIFxyXG4gICAgLy8gLy8gc2VhcmNoIGlucHV0LCBuYXZpZ2F0aW9uIHRvIHByZXZpb3VzIGFuZCBuZXh0IGl0ZW1zLlxyXG4gICAgLy8gbGV0IHNlYXJjaFRleHQgPSBcIlwiO1xyXG4gICAgLy8gbGV0IHNraXAgPSAwO1xyXG4gICAgLy8gbGV0IGxpbWl0ID0gMDtcclxuXHJcbiAgICAvLyAvLyBJZiBpdCdzIGEgcG9zdCByZXF1ZXN0IHRoZW4gYm9keSB3aWxsIGNvbnRhaW4gc2VhcmNoVGV4dCwgc2tpcCBhbmQgbGltaXQuIFVwZGF0ZSB0aGUgYWJvdmUgdGhyZWUgd2l0aCB0aGUgYm9keSdzIHZhbHVlc1xyXG4gICAgLy8gaWYoYm9keSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgLy8gICAgIHNlYXJjaFRleHQgPSBib2R5LnNlYXJjaFRleHQ7XHJcbiAgICAvLyAgICAgc2tpcCA9IGJvZHkuc2tpcDtcclxuICAgIC8vICAgICBsaW1pdCA9IGJvZHkubGltaXRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXh0LCBza2lwLCBsaW1pdCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhtZXRob2QsIHVybCwgYm9keSk7XHJcblxyXG5cclxuICAgIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW3RvdGFsRGF0YUNvdW50LCBzZXRUb3RhbERhdGFDb3VudF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MoeyBtZXRob2QsIHVybCwgZGF0YTogYm9keSB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSBhd2FpdCByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhuZXdEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBnZXQgbWV0aG9kIHRoZW4gYW4gYXJyYXkgb2YganNvbiBvYmplY3RzIGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kXHJcbiAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkobmV3RGF0YSkpIHJldHVybiBzZXREYXRhKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2UuZGF0YS5pdGVtcyA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVsc2UsIGRhdGEgYXJlIGJlaW5nIGZldGNoZWQgd2l0aCBwb3N0IG1ldGhvZC4gU28gYW4gb2JqZWN0IGhhcyBiZWVuIHNlbnQgZnJvbSBiYWNrZW5kIHdoaWNoIGNvbnRhaW5zIGRhdGEgYW5kXHJcbiAgICAgICAgICAgIC8vIHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgIGNvbnN0IHsgaXRlbXMsIHRvdGFsSXRlbUNvdW50IH0gPSByZXNwb25zZS5kYXRhO1xyXG5cclxuICAgICAgICAgICAgc2V0RGF0YShpdGVtcyk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRUb3RhbERhdGFDb3VudCh0b3RhbEl0ZW1Db3VudCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgICAgIGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcblxyXG4gICAgfSwgW3VybCwgaGFwcGVuaW5nXSk7IFxyXG5cclxuICAgIC8vY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gSW1hZ2UxO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfaGVhZCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvaGVhZFwiKSk7XG52YXIgX3RvQmFzZTY0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvdG8tYmFzZS02NFwiKTtcbnZhciBfaW1hZ2VDb25maWcgPSByZXF1aXJlKFwiLi4vc2VydmVyL2ltYWdlLWNvbmZpZ1wiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgICBpZiAoa2V5IGluIG9iaikge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICB3cml0YWJsZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge1xuICAgICAgICB9O1xuICAgICAgICB2YXIgb3duS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIGlmICh0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBvd25LZXlzID0gb3duS2V5cy5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpLmZpbHRlcihmdW5jdGlvbihzeW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIHN5bSkuZW51bWVyYWJsZTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBvd25LZXlzLmZvckVhY2goZnVuY3Rpb24oa2V5KSB7XG4gICAgICAgICAgICBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoc291cmNlLCBleGNsdWRlZCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHtcbiAgICB9O1xuICAgIHZhciB0YXJnZXQgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuICAgICAgICBmb3IoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbn1cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0ge1xuICAgIH07XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5jb25zdCBsb2FkZWRJbWFnZVVSTHMgPSBuZXcgU2V0KCk7XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuX19ORVhUX0lNQUdFX0lNUE9SVEVEID0gdHJ1ZTtcbn1cbmNvbnN0IFZBTElEX0xPQURJTkdfVkFMVUVTID0gW1xuICAgICdsYXp5JyxcbiAgICAnZWFnZXInLFxuICAgIHVuZGVmaW5lZFxuXTtcbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwKFtcbiAgICBbXG4gICAgICAgICdkZWZhdWx0JyxcbiAgICAgICAgZGVmYXVsdExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnaW1naXgnLFxuICAgICAgICBpbWdpeExvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY2xvdWRpbmFyeScsXG4gICAgICAgIGNsb3VkaW5hcnlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2FrYW1haScsXG4gICAgICAgIGFrYW1haUxvYWRlclxuICAgIF0sXG4gICAgW1xuICAgICAgICAnY3VzdG9tJyxcbiAgICAgICAgY3VzdG9tTG9hZGVyXG4gICAgXSwgXG5dKTtcbmNvbnN0IFZBTElEX0xBWU9VVF9WQUxVRVMgPSBbXG4gICAgJ2ZpbGwnLFxuICAgICdmaXhlZCcsXG4gICAgJ2ludHJpbnNpYycsXG4gICAgJ3Jlc3BvbnNpdmUnLFxuICAgIHVuZGVmaW5lZCwgXG5dO1xuZnVuY3Rpb24gaXNTdGF0aWNSZXF1aXJlKHNyYykge1xuICAgIHJldHVybiBzcmMuZGVmYXVsdCAhPT0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gaXNTdGF0aWNJbWFnZURhdGEoc3JjKSB7XG4gICAgcmV0dXJuIHNyYy5zcmMgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1wb3J0KHNyYykge1xuICAgIHJldHVybiB0eXBlb2Ygc3JjID09PSAnb2JqZWN0JyAmJiAoaXNTdGF0aWNSZXF1aXJlKHNyYykgfHwgaXNTdGF0aWNJbWFnZURhdGEoc3JjKSk7XG59XG5jb25zdCB7IGRldmljZVNpemVzOiBjb25maWdEZXZpY2VTaXplcyAsIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMgLCBsb2FkZXI6IGNvbmZpZ0xvYWRlciAsIHBhdGg6IGNvbmZpZ1BhdGggLCBkb21haW5zOiBjb25maWdEb21haW5zICwgIH0gPSBwcm9jZXNzLmVudi5fX05FWFRfSU1BR0VfT1BUUyB8fCBfaW1hZ2VDb25maWcuaW1hZ2VDb25maWdEZWZhdWx0O1xuLy8gc29ydCBzbWFsbGVzdCB0byBsYXJnZXN0XG5jb25zdCBhbGxTaXplcyA9IFtcbiAgICAuLi5jb25maWdEZXZpY2VTaXplcyxcbiAgICAuLi5jb25maWdJbWFnZVNpemVzXG5dO1xuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuYWxsU2l6ZXMuc29ydCgoYSwgYik9PmEgLSBiXG4pO1xuZnVuY3Rpb24gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKSB7XG4gICAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAgICAgLy8gRmluZCBhbGwgdGhlIFwidndcIiBwZXJjZW50IHNpemVzIHVzZWQgaW4gdGhlIHNpemVzIHByb3BcbiAgICAgICAgY29uc3Qgdmlld3BvcnRXaWR0aFJlID0gLyhefFxccykoMT9cXGQ/XFxkKXZ3L2c7XG4gICAgICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFtdO1xuICAgICAgICBmb3IobGV0IG1hdGNoOyBtYXRjaCA9IHZpZXdwb3J0V2lkdGhSZS5leGVjKHNpemVzKTsgbWF0Y2gpe1xuICAgICAgICAgICAgcGVyY2VudFNpemVzLnB1c2gocGFyc2VJbnQobWF0Y2hbMl0pKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGVyY2VudFNpemVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3Qgc21hbGxlc3RSYXRpbyA9IE1hdGgubWluKC4uLnBlcmNlbnRTaXplcykgKiAwLjAxO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLmZpbHRlcigocyk9PnMgPj0gY29uZmlnRGV2aWNlU2l6ZXNbMF0gKiBzbWFsbGVzdFJhdGlvXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogYWxsU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHwgbGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgICAgICAgICBraW5kOiAndydcbiAgICAgICAgfTtcbiAgICB9XG4gICAgY29uc3Qgd2lkdGhzID0gW1xuICAgICAgICAuLi5uZXcgU2V0KC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAgIC8vID4gYXJlIGFjdHVhbGx5IDN4IGluIHRoZSBncmVlbiBjb2xvciwgYnV0IG9ubHkgMS41eCBpbiB0aGUgcmVkIGFuZFxuICAgICAgICAvLyA+IGJsdWUgY29sb3JzLiBTaG93aW5nIGEgM3ggcmVzb2x1dGlvbiBpbWFnZSBpbiB0aGUgYXBwIHZzIGEgMnhcbiAgICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgICAgLy8gPiB0YWtlcyBzaWduaWZpY2FudGx5IG1vcmUgZGF0YS4gRXZlbiB0cnVlIDN4IHJlc29sdXRpb24gc2NyZWVucyBhcmVcbiAgICAgICAgLy8gPiB3YXN0ZWZ1bCBhcyB0aGUgaHVtYW4gZXllIGNhbm5vdCBzZWUgdGhhdCBsZXZlbCBvZiBkZXRhaWwgd2l0aG91dFxuICAgICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgICAgLy8gaHR0cHM6Ly9ibG9nLnR3aXR0ZXIuY29tL2VuZ2luZWVyaW5nL2VuX3VzL3RvcGljcy9pbmZyYXN0cnVjdHVyZS8yMDE5L2NhcHBpbmctaW1hZ2UtZmlkZWxpdHktb24tdWx0cmEtaGlnaC1yZXNvbHV0aW9uLWRldmljZXMuaHRtbFxuICAgICAgICBbXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIHdpZHRoICogMiAvKiwgd2lkdGggKiAzKi8gXG4gICAgICAgIF0ubWFwKCh3KT0+YWxsU2l6ZXMuZmluZCgocCk9PnAgPj0gd1xuICAgICAgICAgICAgKSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgICApKSwgXG4gICAgXTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aHMsXG4gICAgICAgIGtpbmQ6ICd4J1xuICAgIH07XG59XG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHsgc3JjICwgdW5vcHRpbWl6ZWQgLCBsYXlvdXQgLCB3aWR0aCAsIHF1YWxpdHkgLCBzaXplcyAsIGxvYWRlciAgfSkge1xuICAgIGlmICh1bm9wdGltaXplZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHsgd2lkdGhzICwga2luZCAgfSA9IGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcyk7XG4gICAgY29uc3QgbGFzdCA9IHdpZHRocy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgICAgICBzcmNTZXQ6IHdpZHRocy5tYXAoKHcsIGkpPT5gJHtsb2FkZXIoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3XG4gICAgICAgICAgICB9KX0gJHtraW5kID09PSAndycgPyB3IDogaSArIDF9JHtraW5kfWBcbiAgICAgICAgKS5qb2luKCcsICcpLFxuICAgICAgICAvLyBJdCdzIGludGVuZGVkIHRvIGtlZXAgYHNyY2AgdGhlIGxhc3QgYXR0cmlidXRlIGJlY2F1c2UgUmVhY3QgdXBkYXRlc1xuICAgICAgICAvLyBhdHRyaWJ1dGVzIGluIG9yZGVyLiBJZiB3ZSBrZWVwIGBzcmNgIHRoZSBmaXJzdCBvbmUsIFNhZmFyaSB3aWxsXG4gICAgICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAgICAgLy8gdXBkYXRlZCBieSBSZWFjdC4gVGhhdCBjYXVzZXMgbXVsdGlwbGUgdW5uZWNlc3NhcnkgcmVxdWVzdHMgaWYgYHNyY1NldGBcbiAgICAgICAgLy8gYW5kIGBzaXplc2AgYXJlIGRlZmluZWQuXG4gICAgICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgICAgICBzcmM6IGxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICBxdWFsaXR5LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1tsYXN0XVxuICAgICAgICB9KVxuICAgIH07XG59XG5mdW5jdGlvbiBnZXRJbnQoeCkge1xuICAgIGlmICh0eXBlb2YgeCA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHg7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgeCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHgsIDEwKTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wcykge1xuICAgIGNvbnN0IGxvYWQgPSBsb2FkZXJzLmdldChjb25maWdMb2FkZXIpO1xuICAgIGlmIChsb2FkKSB7XG4gICAgICAgIHJldHVybiBsb2FkKF9vYmplY3RTcHJlYWQoe1xuICAgICAgICAgICAgcm9vdDogY29uZmlnUGF0aFxuICAgICAgICB9LCBsb2FkZXJQcm9wcykpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke19pbWFnZUNvbmZpZy5WQUxJRF9MT0FERVJTLmpvaW4oJywgJyl9LiBSZWNlaXZlZDogJHtjb25maWdMb2FkZXJ9YCk7XG59XG4vLyBTZWUgaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xLzM5Nzc3ODMzLzI2NjUzNSBmb3Igd2h5IHdlIHVzZSB0aGlzIHJlZlxuLy8gaGFuZGxlciBpbnN0ZWFkIG9mIHRoZSBpbWcncyBvbkxvYWQgYXR0cmlidXRlLlxuZnVuY3Rpb24gaGFuZGxlTG9hZGluZyhpbWcsIHNyYywgbGF5b3V0LCBwbGFjZWhvbGRlciwgb25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICBpZiAoIWltZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZUxvYWQgPSAoKT0+e1xuICAgICAgICBpZiAoIWltZy5zcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgICAgICAgICAgY29uc3QgcCA9ICdkZWNvZGUnIGluIGltZyA/IGltZy5kZWNvZGUoKSA6IFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgcC5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgfSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgIGlmIChwbGFjZWhvbGRlciA9PT0gJ2JsdXInKSB7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICAgICAgaW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICdub25lJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbG9hZGVkSW1hZ2VVUkxzLmFkZChzcmMpO1xuICAgICAgICAgICAgICAgIGlmIChvbkxvYWRpbmdDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IG5hdHVyYWxXaWR0aCAsIG5hdHVyYWxIZWlnaHQgIH0gPSBpbWc7XG4gICAgICAgICAgICAgICAgICAgIC8vIFBhc3MgYmFjayByZWFkLW9ubHkgcHJpbWl0aXZlIHZhbHVlcyBidXQgbm90IHRoZVxuICAgICAgICAgICAgICAgICAgICAvLyB1bmRlcmx5aW5nIERPTSBlbGVtZW50IGJlY2F1c2UgaXQgY291bGQgYmUgbWlzdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgb25Mb2FkaW5nQ29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbFdpZHRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmF0dXJhbEhlaWdodFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlZjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChyZWYgPSBpbWcucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYucGFyZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZ2V0Q29tcHV0ZWRTdHlsZShpbWcucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJyAmJiBwYXJlbnQuZGlzcGxheSA9PT0gJ2ZsZXgnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IGFzIGEgY2hpbGQgb2YgYSBmbGV4IGNvbnRhaW5lci4gQ29uc2lkZXIgd3JhcHBpbmcgdGhlIGltYWdlIHdpdGggYSBkaXYgdG8gY29uZmlndXJlIHRoZSB3aWR0aC5gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgcGFyZW50LnBvc2l0aW9uICE9PSAncmVsYXRpdmUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG1heSBub3QgcmVuZGVyIHByb3Blcmx5IHdpdGggYSBwYXJlbnQgdXNpbmcgcG9zaXRpb246XCIke3BhcmVudC5wb3NpdGlvbn1cIi4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHBhcmVudCBzdHlsZSB0byBwb3NpdGlvbjpcInJlbGF0aXZlXCIgd2l0aCBhIHdpZHRoIGFuZCBoZWlnaHQuYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGltZy5jb21wbGV0ZSkge1xuICAgICAgICAvLyBJZiB0aGUgcmVhbCBpbWFnZSBmYWlscyB0byBsb2FkLCB0aGlzIHdpbGwgc3RpbGwgcmVtb3ZlIHRoZSBwbGFjZWhvbGRlci5cbiAgICAgICAgLy8gVGhpcyBpcyB0aGUgZGVzaXJlZCBiZWhhdmlvciBmb3Igbm93LCBhbmQgd2lsbCBiZSByZXZpc2l0ZWQgd2hlbiBlcnJvclxuICAgICAgICAvLyBoYW5kbGluZyBpcyB3b3JrZWQgb24gZm9yIHRoZSBpbWFnZSBjb21wb25lbnQgaXRzZWxmLlxuICAgICAgICBoYW5kbGVMb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaW1nLm9ubG9hZCA9IGhhbmRsZUxvYWQ7XG4gICAgfVxufVxuZnVuY3Rpb24gSW1hZ2UxKF9wYXJhbSkge1xuICAgIHZhciB7IHNyYyAsIHNpemVzICwgdW5vcHRpbWl6ZWQgPWZhbHNlICwgcHJpb3JpdHkgPWZhbHNlICwgbG9hZGluZyAsIGxhenlCb3VuZGFyeSA9JzIwMHB4JyAsIGNsYXNzTmFtZSAsIHF1YWxpdHkgLCB3aWR0aCAsIGhlaWdodCAsIG9iamVjdEZpdCAsIG9iamVjdFBvc2l0aW9uICwgb25Mb2FkaW5nQ29tcGxldGUgLCBsb2FkZXIgPWRlZmF1bHRJbWFnZUxvYWRlciAsIHBsYWNlaG9sZGVyID0nZW1wdHknICwgYmx1ckRhdGFVUkwgIH0gPSBfcGFyYW0sIGFsbCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcGFyYW0sIFtcInNyY1wiLCBcInNpemVzXCIsIFwidW5vcHRpbWl6ZWRcIiwgXCJwcmlvcml0eVwiLCBcImxvYWRpbmdcIiwgXCJsYXp5Qm91bmRhcnlcIiwgXCJjbGFzc05hbWVcIiwgXCJxdWFsaXR5XCIsIFwid2lkdGhcIiwgXCJoZWlnaHRcIiwgXCJvYmplY3RGaXRcIiwgXCJvYmplY3RQb3NpdGlvblwiLCBcIm9uTG9hZGluZ0NvbXBsZXRlXCIsIFwibG9hZGVyXCIsIFwicGxhY2Vob2xkZXJcIiwgXCJibHVyRGF0YVVSTFwiXSk7XG4gICAgbGV0IHJlc3QgPSBhbGw7XG4gICAgbGV0IGxheW91dCA9IHNpemVzID8gJ3Jlc3BvbnNpdmUnIDogJ2ludHJpbnNpYyc7XG4gICAgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAgICAgLy8gT3ZlcnJpZGUgZGVmYXVsdCBsYXlvdXQgaWYgdGhlIHVzZXIgc3BlY2lmaWVkIG9uZTpcbiAgICAgICAgaWYgKHJlc3QubGF5b3V0KSBsYXlvdXQgPSByZXN0LmxheW91dDtcbiAgICAgICAgLy8gUmVtb3ZlIHByb3BlcnR5IHNvIGl0J3Mgbm90IHNwcmVhZCBpbnRvIGltYWdlOlxuICAgICAgICBkZWxldGUgcmVzdFsnbGF5b3V0J107XG4gICAgfVxuICAgIGxldCBzdGF0aWNTcmMgPSAnJztcbiAgICBpZiAoaXNTdGF0aWNJbXBvcnQoc3JjKSkge1xuICAgICAgICBjb25zdCBzdGF0aWNJbWFnZURhdGEgPSBpc1N0YXRpY1JlcXVpcmUoc3JjKSA/IHNyYy5kZWZhdWx0IDogc3JjO1xuICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5zcmMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBzcmMuIFJlY2VpdmVkICR7SlNPTi5zdHJpbmdpZnkoc3RhdGljSW1hZ2VEYXRhKX1gKTtcbiAgICAgICAgfVxuICAgICAgICBibHVyRGF0YVVSTCA9IGJsdXJEYXRhVVJMIHx8IHN0YXRpY0ltYWdlRGF0YS5ibHVyRGF0YVVSTDtcbiAgICAgICAgc3RhdGljU3JjID0gc3RhdGljSW1hZ2VEYXRhLnNyYztcbiAgICAgICAgaWYgKCFsYXlvdXQgfHwgbGF5b3V0ICE9PSAnZmlsbCcpIHtcbiAgICAgICAgICAgIGhlaWdodCA9IGhlaWdodCB8fCBzdGF0aWNJbWFnZURhdGEuaGVpZ2h0O1xuICAgICAgICAgICAgd2lkdGggPSB3aWR0aCB8fCBzdGF0aWNJbWFnZURhdGEud2lkdGg7XG4gICAgICAgICAgICBpZiAoIXN0YXRpY0ltYWdlRGF0YS5oZWlnaHQgfHwgIXN0YXRpY0ltYWdlRGF0YS53aWR0aCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQW4gb2JqZWN0IHNob3VsZCBvbmx5IGJlIHBhc3NlZCB0byB0aGUgaW1hZ2UgY29tcG9uZW50IHNyYyBwYXJhbWV0ZXIgaWYgaXQgY29tZXMgZnJvbSBhIHN0YXRpYyBpbWFnZSBpbXBvcnQuIEl0IG11c3QgaW5jbHVkZSBoZWlnaHQgYW5kIHdpZHRoLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3JjID0gdHlwZW9mIHNyYyA9PT0gJ3N0cmluZycgPyBzcmMgOiBzdGF0aWNTcmM7XG4gICAgY29uc3Qgd2lkdGhJbnQgPSBnZXRJbnQod2lkdGgpO1xuICAgIGNvbnN0IGhlaWdodEludCA9IGdldEludChoZWlnaHQpO1xuICAgIGNvbnN0IHF1YWxpdHlJbnQgPSBnZXRJbnQocXVhbGl0eSk7XG4gICAgbGV0IGlzTGF6eSA9ICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJyk7XG4gICAgaWYgKHNyYy5zdGFydHNXaXRoKCdkYXRhOicpIHx8IHNyYy5zdGFydHNXaXRoKCdibG9iOicpKSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgICAgIHVub3B0aW1pemVkID0gdHJ1ZTtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2FkZWRJbWFnZVVSTHMuaGFzKHNyYykpIHtcbiAgICAgICAgaXNMYXp5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHF1YWxpdHlcbiAgICAgICAgICAgIH0pfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghVkFMSURfTEFZT1VUX1ZBTFVFUy5pbmNsdWRlcyhsYXlvdXQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIGlzTmFOKHdpZHRoSW50KSB8fCB0eXBlb2YgaGVpZ2h0SW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTihoZWlnaHRJbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJ3aWR0aFwiIG9yIFwiaGVpZ2h0XCIgcHJvcGVydHkuIFRoZXNlIHNob3VsZCBiZSBudW1lcmljIHZhbHVlcy5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcgJiYgKHdpZHRoIHx8IGhlaWdodCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBhbmQgXCJsYXlvdXQ9J2ZpbGwnXCIgaGFzIHVudXNlZCBwcm9wZXJ0aWVzIGFzc2lnbmVkLiBQbGVhc2UgcmVtb3ZlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIi5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xPQURJTkdfVkFMVUVTLmluY2x1ZGVzKGxvYWRpbmcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoU3RyaW5nKS5qb2luKCcsJyl9LmApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYm90aCBcInByaW9yaXR5XCIgYW5kIFwibG9hZGluZz0nbGF6eSdcIiBwcm9wZXJ0aWVzLiBPbmx5IG9uZSBzaG91bGQgYmUgdXNlZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgaWYgKGxheW91dCAhPT0gJ2ZpbGwnICYmICh3aWR0aEludCB8fCAwKSAqIChoZWlnaHRJbnQgfHwgMCkgPCAxNjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHNtYWxsZXIgdGhhbiA0MHg0MC4gQ29uc2lkZXIgcmVtb3ZpbmcgdGhlIFwicGxhY2Vob2xkZXI9J2JsdXInXCIgcHJvcGVydHkgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZS5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghYmx1ckRhdGFVUkwpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBWQUxJRF9CTFVSX0VYVCA9IFtcbiAgICAgICAgICAgICAgICAgICAgJ2pwZWcnLFxuICAgICAgICAgICAgICAgICAgICAncG5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3dlYnAnXG4gICAgICAgICAgICAgICAgXSAvLyBzaG91bGQgbWF0Y2ggbmV4dC1pbWFnZS1sb2FkZXJcbiAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IGJ1dCBpcyBtaXNzaW5nIHRoZSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHkuXG4gICAgICAgICAgUG9zc2libGUgc29sdXRpb25zOlxuICAgICAgICAgICAgLSBBZGQgYSBcImJsdXJEYXRhVVJMXCIgcHJvcGVydHksIHRoZSBjb250ZW50cyBzaG91bGQgYmUgYSBzbWFsbCBEYXRhIFVSTCB0byByZXByZXNlbnQgdGhlIGltYWdlXG4gICAgICAgICAgICAtIENoYW5nZSB0aGUgXCJzcmNcIiBwcm9wZXJ0eSB0byBhIHN0YXRpYyBpbXBvcnQgd2l0aCBvbmUgb2YgdGhlIHN1cHBvcnRlZCBmaWxlIHR5cGVzOiAke1ZBTElEX0JMVVJfRVhULmpvaW4oJywnKX1cbiAgICAgICAgICAgIC0gUmVtb3ZlIHRoZSBcInBsYWNlaG9sZGVyXCIgcHJvcGVydHksIGVmZmVjdGl2ZWx5IG5vIGJsdXIgZWZmZWN0XG4gICAgICAgICAgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wbGFjZWhvbGRlci1ibHVyLWRhdGEtdXJsYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdyZWYnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInJlZlwiIHByb3BlcnR5LiBDb25zaWRlciB1c2luZyB0aGUgXCJvbkxvYWRpbmdDb21wbGV0ZVwiIHByb3BlcnR5IGluc3RlYWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCdzdHlsZScgaW4gcmVzdCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIHVzaW5nIHVuc3VwcG9ydGVkIFwic3R5bGVcIiBwcm9wZXJ0eS4gUGxlYXNlIHVzZSB0aGUgXCJjbGFzc05hbWVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJhbmQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKSArIDEwMDtcbiAgICAgICAgaWYgKCF1bm9wdGltaXplZCAmJiAhbG9hZGVyKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHdpZHRoOiByYW5kLFxuICAgICAgICAgICAgcXVhbGl0eTogNzVcbiAgICAgICAgfSkuaW5jbHVkZXMocmFuZC50b1N0cmluZygpKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBhIFwibG9hZGVyXCIgcHJvcGVydHkgdGhhdCBkb2VzIG5vdCBpbXBsZW1lbnQgd2lkdGguIFBsZWFzZSBpbXBsZW1lbnQgaXQgb3IgdXNlIHRoZSBcInVub3B0aW1pemVkXCIgcHJvcGVydHkgaW5zdGVhZC5gICsgYFxcblJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS1taXNzaW5nLWxvYWRlci13aWR0aGApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gKDAsIF91c2VJbnRlcnNlY3Rpb24pLnVzZUludGVyc2VjdGlvbih7XG4gICAgICAgIHJvb3RNYXJnaW46IGxhenlCb3VuZGFyeSxcbiAgICAgICAgZGlzYWJsZWQ6ICFpc0xhenlcbiAgICB9KTtcbiAgICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWQ7XG4gICAgbGV0IHdyYXBwZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdHlsZTtcbiAgICBsZXQgc2l6ZXJTdmc7XG4gICAgbGV0IGltZ1N0eWxlID0ge1xuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgdG9wOiAwLFxuICAgICAgICBsZWZ0OiAwLFxuICAgICAgICBib3R0b206IDAsXG4gICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICB3aWR0aDogMCxcbiAgICAgICAgaGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogJzEwMCUnLFxuICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICAgICAgbWF4SGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG9iamVjdEZpdCxcbiAgICAgICAgb2JqZWN0UG9zaXRpb25cbiAgICB9O1xuICAgIGNvbnN0IGJsdXJTdHlsZSA9IHBsYWNlaG9sZGVyID09PSAnYmx1cicgPyB7XG4gICAgICAgIGZpbHRlcjogJ2JsdXIoMjBweCknLFxuICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogb2JqZWN0Rml0IHx8ICdjb3ZlcicsXG4gICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybChcIiR7Ymx1ckRhdGFVUkx9XCIpYCxcbiAgICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiBvYmplY3RQb3NpdGlvbiB8fCAnMCUgMCUnXG4gICAgfSA6IHtcbiAgICB9O1xuICAgIGlmIChsYXlvdXQgPT09ICdmaWxsJykge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiBsYXlvdXQ9XCJmaWxsXCIgLz5cbiAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICAgIGJvdHRvbTogMCxcbiAgICAgICAgICAgIHJpZ2h0OiAwLFxuICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiB3aWR0aEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgICAgICBjb25zdCBxdW90aWVudCA9IGhlaWdodEludCAvIHdpZHRoSW50O1xuICAgICAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWA7XG4gICAgICAgIGlmIChsYXlvdXQgPT09ICdyZXNwb25zaXZlJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJyZXNwb25zaXZlXCIgLz5cbiAgICAgICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgcGFkZGluZ1RvcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdpbnRyaW5zaWMnKSB7XG4gICAgICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIGxheW91dD1cImludHJpbnNpY1wiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzaXplclN2ZyA9IGA8c3ZnIHdpZHRoPVwiJHt3aWR0aEludH1cIiBoZWlnaHQ9XCIke2hlaWdodEludH1cIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmVyc2lvbj1cIjEuMVwiLz5gO1xuICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodEludFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIC8+XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgbXVzdCB1c2UgXCJ3aWR0aFwiIGFuZCBcImhlaWdodFwiIHByb3BlcnRpZXMgb3IgXCJsYXlvdXQ9J2ZpbGwnXCIgcHJvcGVydHkuYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IGltZ0F0dHJpYnV0ZXMgPSB7XG4gICAgICAgIHNyYzogJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICBzaXplczogdW5kZWZpbmVkXG4gICAgfTtcbiAgICBpZiAoaXNWaXNpYmxlKSB7XG4gICAgICAgIGltZ0F0dHJpYnV0ZXMgPSBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICAgICAgbGF5b3V0LFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgICAgIHNpemVzLFxuICAgICAgICAgICAgbG9hZGVyXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsZXQgc3JjU3RyaW5nID0gc3JjO1xuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogd3JhcHBlclN0eWxlXG4gICAgfSwgc2l6ZXJTdHlsZSA/IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIHN0eWxlOiBzaXplclN0eWxlXG4gICAgfSwgc2l6ZXJTdmcgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1xuICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICBib3JkZXI6ICdub25lJyxcbiAgICAgICAgICAgIHBhZGRpbmc6IDBcbiAgICAgICAgfSxcbiAgICAgICAgYWx0OiBcIlwiLFxuICAgICAgICBcImFyaWEtaGlkZGVuXCI6IHRydWUsXG4gICAgICAgIHNyYzogYGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsJHsoMCwgX3RvQmFzZTY0KS50b0Jhc2U2NChzaXplclN2Zyl9YFxuICAgIH0pIDogbnVsbCkgOiBudWxsLCAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgfSwgcmVzdCwgaW1nQXR0cmlidXRlcywge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICByZWY6IChpbWcpPT57XG4gICAgICAgICAgICBzZXRSZWYoaW1nKTtcbiAgICAgICAgICAgIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmNTdHJpbmcsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3R5bGU6IF9vYmplY3RTcHJlYWQoe1xuICAgICAgICB9LCBpbWdTdHlsZSwgYmx1clN0eWxlKVxuICAgIH0pKSwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibm9zY3JpcHRcIiwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGdlbmVyYXRlSW1nQXR0cnMoe1xuICAgICAgICBzcmMsXG4gICAgICAgIHVub3B0aW1pemVkLFxuICAgICAgICBsYXlvdXQsXG4gICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgcXVhbGl0eTogcXVhbGl0eUludCxcbiAgICAgICAgc2l6ZXMsXG4gICAgICAgIGxvYWRlclxuICAgIH0pLCB7XG4gICAgICAgIGRlY29kaW5nOiBcImFzeW5jXCIsXG4gICAgICAgIFwiZGF0YS1uaW1nXCI6IGxheW91dCxcbiAgICAgICAgc3R5bGU6IGltZ1N0eWxlLFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgbG9hZGluZzogbG9hZGluZyB8fCAnbGF6eSdcbiAgICB9KSkpLCBwcmlvcml0eSA/IC8vIE5vdGUgaG93IHdlIG9taXQgdGhlIGBocmVmYCBhdHRyaWJ1dGUsIGFzIGl0IHdvdWxkIG9ubHkgYmUgcmVsZXZhbnRcbiAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAvLyBpdCB3b3VsZCBsaWtlbHkgY2F1c2UgdGhlIGluY29ycmVjdCBpbWFnZSB0byBiZSBwcmVsb2FkZWQuXG4gICAgLy9cbiAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX2hlYWQuZGVmYXVsdCwgbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIGtleTogJ19fbmltZy0nICsgaW1nQXR0cmlidXRlcy5zcmMgKyBpbWdBdHRyaWJ1dGVzLnNyY1NldCArIGltZ0F0dHJpYnV0ZXMuc2l6ZXMsXG4gICAgICAgIHJlbDogXCJwcmVsb2FkXCIsXG4gICAgICAgIGFzOiBcImltYWdlXCIsXG4gICAgICAgIGhyZWY6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0ID8gdW5kZWZpbmVkIDogaW1nQXR0cmlidXRlcy5zcmMsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNyY3NldDogaW1nQXR0cmlidXRlcy5zcmNTZXQsXG4gICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc2l6ZXMgaXMgbm90IHlldCBpbiB0aGUgbGluayBlbGVtZW50IHR5cGUuXG4gICAgICAgIGltYWdlc2l6ZXM6IGltZ0F0dHJpYnV0ZXMuc2l6ZXNcbiAgICB9KSkgOiBudWxsKSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjKSB7XG4gICAgcmV0dXJuIHNyY1swXSA9PT0gJy8nID8gc3JjLnNsaWNlKDEpIDogc3JjO1xufVxuZnVuY3Rpb24gaW1naXhMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgLy8gRGVtbzogaHR0cHM6Ly9zdGF0aWMuaW1naXgubmV0L2RhaXN5LnBuZz9hdXRvPWZvcm1hdCZmaXQ9bWF4Jnc9MzAwXG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9YCk7XG4gICAgY29uc3QgcGFyYW1zID0gdXJsLnNlYXJjaFBhcmFtcztcbiAgICBwYXJhbXMuc2V0KCdhdXRvJywgcGFyYW1zLmdldCgnYXV0bycpIHx8ICdmb3JtYXQnKTtcbiAgICBwYXJhbXMuc2V0KCdmaXQnLCBwYXJhbXMuZ2V0KCdmaXQnKSB8fCAnbWF4Jyk7XG4gICAgcGFyYW1zLnNldCgndycsIHBhcmFtcy5nZXQoJ3cnKSB8fCB3aWR0aC50b1N0cmluZygpKTtcbiAgICBpZiAocXVhbGl0eSkge1xuICAgICAgICBwYXJhbXMuc2V0KCdxJywgcXVhbGl0eS50b1N0cmluZygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybC5ocmVmO1xufVxuZnVuY3Rpb24gYWthbWFpTG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICB9KSB7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWA7XG59XG5mdW5jdGlvbiBjbG91ZGluYXJ5TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gICAgY29uc3QgcGFyYW1zID0gW1xuICAgICAgICAnZl9hdXRvJyxcbiAgICAgICAgJ2NfbGltaXQnLFxuICAgICAgICAnd18nICsgd2lkdGgsXG4gICAgICAgICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXG4gICAgXTtcbiAgICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJztcbiAgICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWA7XG59XG5mdW5jdGlvbiBjdXN0b21Mb2FkZXIoeyBzcmMgIH0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgbWlzc2luZyBcImxvYWRlclwiIHByb3AuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXJgKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRMb2FkZXIoeyByb290ICwgc3JjICwgd2lkdGggLCBxdWFsaXR5ICB9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdO1xuICAgICAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICAgICAgaWYgKCFzcmMpIG1pc3NpbmdWYWx1ZXMucHVzaCgnc3JjJyk7XG4gICAgICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKTtcbiAgICAgICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBOZXh0IEltYWdlIE9wdGltaXphdGlvbiByZXF1aXJlcyAke21pc3NpbmdWYWx1ZXMuam9pbignLCAnKX0gdG8gYmUgcHJvdmlkZWQuIE1ha2Ugc3VyZSB5b3UgcGFzcyB0aGVtIGFzIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIHBhcnNlIHNyYyBcIiR7c3JjfVwiIG9uIFxcYG5leHQvaW1hZ2VcXGAsIHByb3RvY29sLXJlbGF0aXZlIFVSTCAoLy8pIG11c3QgYmUgY2hhbmdlZCB0byBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzcmMuc3RhcnRzV2l0aCgnLycpICYmIGNvbmZpZ0RvbWFpbnMpIHtcbiAgICAgICAgICAgIGxldCBwYXJzZWRTcmM7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIHBhcnNlZFNyYyA9IG5ldyBVUkwoc3JjKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBpZiB1c2luZyByZWxhdGl2ZSBpbWFnZSBpdCBtdXN0IHN0YXJ0IHdpdGggYSBsZWFkaW5nIHNsYXNoIFwiL1wiIG9yIGJlIGFuIGFic29sdXRlIFVSTCAoaHR0cDovLyBvciBodHRwczovLylgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Rlc3QnICYmICFjb25maWdEb21haW5zLmluY2x1ZGVzKHBhcnNlZFNyYy5ob3N0bmFtZSkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc3JjIHByb3AgKCR7c3JjfSkgb24gXFxgbmV4dC9pbWFnZVxcYCwgaG9zdG5hbWUgXCIke3BhcnNlZFNyYy5ob3N0bmFtZX1cIiBpcyBub3QgY29uZmlndXJlZCB1bmRlciBpbWFnZXMgaW4geW91ciBcXGBuZXh0LmNvbmZpZy5qc1xcYFxcbmAgKyBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbWFnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCIvLyBSZWFjdFxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VBeGlvcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2xpYnMvdXNlQXhpb3NcIjtcclxuXHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIFJldXNhYmxlIENvbXBvbmVudHNcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQWxlcnRcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyXCI7XHJcbmltcG9ydCBDYXRlZ29yeVRyZWF0bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9DYXRlZ29yeVRyZWF0bWVudFwiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvblwiO1xyXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWVcIjtcclxuaW1wb3J0IEluZm9ybWF0aW9uUGF5bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50XCI7XHJcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9jb25maXJtYXRpb24tcGFnZS9Db25maXJtYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcclxuXHJcblxyXG4gICAgLy8gT3RoZXIgc3RhdGVzXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUcmVhdG1lbnRzLCBzZXRTZWxlY3RlZFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRJbmZvLCBzZXRDbGllbnRJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaG93SGVhcmRBYm91dFVzOiBcIlwiLFxyXG4gICAgICAgIG90aGVyczogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdHJlYXRtZW50OiBcIlwiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgIHNlc3Npb246IFwiXCIsXHJcbiAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICBzdHlsaXN0OiBcIlwiLFxyXG4gICAgICAgIGNvdXBvbjogXCJcIixcclxuICAgICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW2FjdGl2ZUNhdGVnb3J5LCBzZXRBY3RpdmVDYXRlZ29yeV0gPSB1c2VTdGF0ZShcIkJyb3dzXCIpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVRyZWF0bWVudCwgc2V0QWN0aXZlVHJlYXRtZW50XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2FjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2VdID0gdXNlU3RhdGUoMSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgd2l0aCB2YWx1ZXMgb2YgdGhlIG5vbiBpbnB1dCBmaWVsZHMgc3VjaCBhcyBsb2NhdGlvbiwgc3R5bGlzdCwgZGF0ZSwgdGltZSBldGMuIFxyXG4gICAgZnVuY3Rpb24gdXBkYXRlU3RhdGUgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIGlmKHRleHQuaW5jbHVkZXMoXCJBdGhlbmEgQmVhdXR5IENhcmVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogdGV4dFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZUNhdGVnb3J5IChlKSB7XHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGUudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcbiAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlVHJlYXRtZW50IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCB0ZXh0ID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG4gICAgICAgIGNvbnN0IHRyZWF0bWVudCA9IHRleHQuc3Vic3RyaW5nKDAsIHRleHQuaW5kZXhPZihcIixcIikpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRyZWF0bWVudCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodHJlYXRtZW50ID09PSBhY3RpdmVUcmVhdG1lbnQpIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcbiAgICAgICAgcmV0dXJuIHNldEFjdGl2ZVRyZWF0bWVudCh0cmVhdG1lbnQpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRUcmVhdG1lbnQgKHN0eWxpc3QsIGl0ZW0pIHtcclxuICAgICAgIFxyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYWxyZWFkeSBzZWxlY3RlZCB0cmVhdG1lbnRzIHRvIHNlZSBpZiBjbGlja2VkIG9uZSBleGlzdHMgb3Igbm90LiBJdCByZXR1cm5zIGVpdGhlciB0cnVlIG9yIGZhbHNlXHJcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUobmV3SXRlbSA9PiBuZXdJdGVtLnRyZWF0bWVudFRpdGxlID09PSBpdGVtLnRpdGxlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgY2xpY2tlZCB0cmVhdG1lbnQgZXhpc3RzIHVwZGF0ZSB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGFycmF5IGJ5IHJlbW92aW5nIHRoZSBjbGlja2VkIHRyZWF0bWVudFxyXG4gICAgICAgIGlmKGRvZXNFeGlzdCkge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGVtcCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLmZvckVhY2gobmV3SXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihuZXdJdGVtLnRyZWF0bWVudFRpdGxlICE9PSBpdGVtLnRpdGxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKG5ld0l0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKHRlbXApO1xyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGlzdCkge1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4gXHJcbiAgICAgICAgICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IGl0ZW0udGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IGl0ZW0uZHVyYXRpb24sIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBzdGF0ZS5sb2NhdGlvbiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQoXCJcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBJZiBjbGlja2VkIHRyZWF0bWVudCBkb2Vzbid0IGV4aXN0IHRoZW4gYWRkIGl0IGluIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgYXJyYXlcclxuICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsIFxyXG4gICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogaXRlbS5jYXRlZ29yeSwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IGl0ZW0udGl0bGUsIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiBpdGVtLmR1cmF0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogaXRlbS5wcmljZSxcclxuICAgICAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24gXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldENsaWVudEluZm8oY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gc2VsZWN0VHJlYXRtZW50KGV2ZW50LCB0cmVhdG1lbnRzKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyZWF0bWVudFRpdGxlID0gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGFscmVhZHkgc2VsZWN0ZWQgdHJlYXRtZW50cyB0byBzZWUgaWYgY2xpY2tlZCBvbmUgZXhpc3RzIG9yIG5vdC4gSXQgcmV0dXJucyBlaXRoZXIgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKG5ld0l0ZW0gPT4gbmV3SXRlbS50aXRsZSA9PT0gdHJlYXRtZW50VGl0bGUpO1xyXG5cclxuXHJcbiAgICAgICAgaWYoZG9lc0V4aXN0KSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJlZFNlbGVjdGVkVHJlYXRtZW50cyA9IHNlbGVjdGVkVHJlYXRtZW50cy5maWx0ZXIodHJlYXRtZW50ID0+IHRyZWF0bWVudC50aXRsZSAhPT0gdHJlYXRtZW50VGl0bGUpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoZmlsdGVyZWRTZWxlY3RlZFRyZWF0bWVudHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgdHJlYXRtZW50cy5sZW5ndGg7IHgrKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRyZWF0bWVudHNbeF0udGl0bGUgPT09IHRyZWF0bWVudFRpdGxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhjdXJyZW50VmFsdWUgPT4geyByZXR1cm4gWy4uLmN1cnJlbnRWYWx1ZSwgdHJlYXRtZW50c1t4XV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGxvY2F0aW9uRGF0YSk7XHJcblxyXG4gICAgLy8gaWYobG9jYXRpb25EYXRhTG9hZGluZyB8fCBjYXRlZ29yeURhdGFMb2FkaW5nIHx8IHRyZWF0bWVudERhdGFMb2FkaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICg8ZGl2PkxvYWRpbmcuLi4uPC9kaXY+KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG9tZX0+XHJcbiAgICAgICAgICAgIDxOYXZpZ2F0aW9uQmFyIFxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX0gXHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVQYWdlID0ge3NldEFjdGl2ZVBhZ2V9IFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TG9jYXRpb25cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPENhdGVnb3J5VHJlYXRtZW50XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgYWRkVHJlYXRtZW50ID0ge2FkZFRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlVHJlYXRtZW50ID0ge2FjdGl2ZVRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUFjdGl2ZVRyZWF0bWVudCA9IHtjaGFuZ2VBY3RpdmVUcmVhdG1lbnR9IFxyXG4gICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlQ2F0ZWdvcnkgPSB7Y2hhbmdlQWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RUcmVhdG1lbnQgPSB7c2VsZWN0VHJlYXRtZW50fVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICBcclxuXHJcblxyXG4gICAgICAgICAgICA8RGF0ZVRpbWVcclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIHVwZGF0ZVN0YXRlID0ge3VwZGF0ZVN0YXRlfSBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge3N0YXRlLmxvY2F0aW9ufVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxJbmZvcm1hdGlvblBheW1lbnQgXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmZvID0ge2NsaWVudEluZm99XHJcbiAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9IFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbkVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Q29uZmlybWF0aW9uIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX0gLz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBtZXNzYWdlPVwiXCIgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L2ltYWdlcy82LmM2NWU0YTE2ZjViZjBiMGMwNGQyMGRkNTEyNWFmYmYxLnN2Z1wiLFwiaGVpZ2h0XCI6MjQwLFwid2lkdGhcIjozMjh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvNS5jMWJhODg1NTUyODBhZTg2MmI0YTc2ODUzZWYwYTU0MS5zdmdcIixcImhlaWdodFwiOjE4OSxcIndpZHRoXCI6MjQyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIuZDQ4YjE5OTFlYTE0YTkzMmUzYTkxZmFlNGIzYTQyNjUucG5nXCIsXCJoZWlnaHRcIjoxMjgsXCJ3aWR0aFwiOjc3LFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmltYWdlcyUyRkNvbXBvbmVudCsxNDMrJUUyJTgwJTkzKzIuZDQ4YjE5OTFlYTE0YTkzMmUzYTkxZmFlNGIzYTQyNjUucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcGVyc29uLWdpcmwtZmxhdC41M2EzYmQxMTVlMDg2N2I4ZTUwOGEyY2ZlNWY2ZGY2Yy5wbmdcIixcImhlaWdodFwiOjEwMCxcIndpZHRoXCI6MTAwLFwiYmx1ckRhdGFVUkxcIjpcIi9fbmV4dC9pbWFnZT91cmw9JTJGX25leHQlMkZzdGF0aWMlMkZpbWFnZSUyRmltYWdlcyUyRnBlcnNvbi1naXJsLWZsYXQuNTNhM2JkMTE1ZTA4NjdiOGU1MDhhMmNmZTVmNmRmNmMucG5nJnc9OCZxPTcwXCJ9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZ1wiLFwiaGVpZ2h0XCI6NDAwMCxcIndpZHRoXCI6NjAwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZyYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guZWNiOGNjNDcyMjEzNzkwNGQ3MDIyYzU5MTgzNDlhNmYuanBnJnc9OCZxPTcwXCJ9OyIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNhdGVnb3J5X3RyZWF0bWVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X3RyZWF0bWVudF9fM1NZekZcIixcblx0XCJjYXRlZ29yeVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X18ydEYyZlwiLFxuXHRcInRyZWF0bWVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9fMnd6bnVcIixcblx0XCJoZWFkZXJcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9oZWFkZXJfXzFLcXpiXCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2xpc3RcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeUl0ZW1fbGlzdF9fNXBvZnZcIixcblx0XCJjYXRlZ29yeUl0ZW1fY29udGFpbmVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlJdGVtX2NvbnRhaW5lcl9fM2R3YzdcIixcblx0XCJjYXRlZ29yeV9pdGVtXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlfaXRlbV9fUnJPWGhcIixcblx0XCJjYXRlZ29yeUl0ZW1fY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5SXRlbV9jb250ZW50X18yaW1ic1wiLFxuXHRcInRyZWF0bWVudEl0ZW1fY29udGFpbmVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50SXRlbV9jb250YWluZXJfX0VzVDdjXCIsXG5cdFwiY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2X18xeENsc1wiLFxuXHRcInRyZWF0bWVudF9pdGVtXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50X2l0ZW1fXzFSeVB0XCIsXG5cdFwidHJlYXRtZW50SXRlbV9jb250ZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50SXRlbV9jb250ZW50X19Pa2xlaVwiLFxuXHRcInRyZWF0bWVudF9jb250ZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50X2NvbnRlbnRfX0wtNlJlXCIsXG5cdFwic3R5bGlzdHNcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0c19fM3p5b0ZcIixcblx0XCJzdHlsaXN0X2xpc3RcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0X2xpc3RfXzJQazJLXCIsXG5cdFwic3R5bGlzdExpc3RfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3N0eWxpc3RMaXN0X2l0ZW1fXzJQcGhiXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJkYXRlSGlkZGVuX2RpdlwiOiBcIkRhdGVUaW1lX2RhdGVIaWRkZW5fZGl2X18xNVlpeFwiLFxuXHRcImF2YWlsYWJsZV90aW1lX2xpc3RcIjogXCJEYXRlVGltZV9hdmFpbGFibGVfdGltZV9saXN0X18xVzZfOFwiLFxuXHRcInRpbWVcIjogXCJEYXRlVGltZV90aW1lX18ydE11VlwiLFxuXHRcImluZGl2aWR1YWxfdGltZVwiOiBcIkRhdGVUaW1lX2luZGl2aWR1YWxfdGltZV9fMTJzVF9cIixcblx0XCJkYXRlX3RpbWVcIjogXCJEYXRlVGltZV9kYXRlX3RpbWVfXzFXbDNGXCIsXG5cdFwiaGVhZGVyXCI6IFwiRGF0ZVRpbWVfaGVhZGVyX18tTmZ4T1wiLFxuXHRcImRhdGVUaW1lX2NvbnRlbnRcIjogXCJEYXRlVGltZV9kYXRlVGltZV9jb250ZW50X19aT3dBS1wiLFxuXHRcImNvbnRlbnRfSW1hZ2VcIjogXCJEYXRlVGltZV9jb250ZW50X0ltYWdlX19Ob3d6MlwiLFxuXHRcImRhdGVzX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2RhdGVzX2NvbnRhaW5lcl9fclgtV2RcIixcblx0XCJkYXRlc1wiOiBcIkRhdGVUaW1lX2RhdGVzX18yMVVraVwiLFxuXHRcInByZXZcIjogXCJEYXRlVGltZV9wcmV2X19BeTlsZlwiLFxuXHRcIm5leHRcIjogXCJEYXRlVGltZV9uZXh0X18yWlV4VFwiLFxuXHRcImRhdGVDYXJkX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2RhdGVDYXJkX2NvbnRhaW5lcl9fMl8wVWlcIixcblx0XCJkYXRlX2NhcmRcIjogXCJEYXRlVGltZV9kYXRlX2NhcmRfXzJZVlBuXCIsXG5cdFwid2Vla0RheV90ZXh0XCI6IFwiRGF0ZVRpbWVfd2Vla0RheV90ZXh0X18xU2p6c1wiLFxuXHRcImRhdGVfdGV4dFwiOiBcIkRhdGVUaW1lX2RhdGVfdGV4dF9fMW1pM2VcIixcblx0XCJtb250aF90ZXh0XCI6IFwiRGF0ZVRpbWVfbW9udGhfdGV4dF9fMXJVUVRcIixcblx0XCJjbG9ja0ljb25fY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfY2xvY2tJY29uX2NvbnRhaW5lcl9fMk5BdGZcIixcblx0XCJzdHlsaXN0c190aW1lc1wiOiBcIkRhdGVUaW1lX3N0eWxpc3RzX3RpbWVzX18xQk9JTVwiLFxuXHRcInN0eWxpc3RzX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX3N0eWxpc3RzX2NvbnRhaW5lcl9fMTQ0UzNcIixcblx0XCJ0aW1lc19jb250YWluZXJcIjogXCJEYXRlVGltZV90aW1lc19jb250YWluZXJfXzNxWWFqXCIsXG5cdFwidGltZXNcIjogXCJEYXRlVGltZV90aW1lc19fMTFfOXFcIixcblx0XCJ0aW1lX3RleHRcIjogXCJEYXRlVGltZV90aW1lX3RleHRfXzFqTTFFXCIsXG5cdFwic3R5bGlzdFwiOiBcIkRhdGVUaW1lX3N0eWxpc3RfXzI4WnE0XCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJob21lXCI6IFwiSG9tZV9ob21lX18xN3liNlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5mb1BheW1lbnRfaGVhZGVyXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2luZm9QYXltZW50X2hlYWRlcl9fUHJYNXhcIixcblx0XCJpbmZvUGF5bWVudF9jb250ZW50XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2luZm9QYXltZW50X2NvbnRlbnRfXzFNeHZwXCIsXG5cdFwiaW1hZ2VfY29udGFpbmVyXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2ltYWdlX2NvbnRhaW5lcl9fMTV5Y2RcIixcblx0XCJpbnB1dF9sYWJlbFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbnB1dF9sYWJlbF9fMVoxdU9cIixcblx0XCJpbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbnB1dF9fMUxKMmRcIixcblx0XCJjaGVja2JveFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9jaGVja2JveF9fMzdLS2xcIixcblx0XCJuYW1lX2lucHV0c1wiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9uYW1lX2lucHV0c19fMUJTaVJcIixcblx0XCJuYW1lX2luZm9cIjogXCJJbmZvcm1hdGlvblBheW1lbnRfbmFtZV9pbmZvX18xUWxmSFwiLFxuXHRcInBob25lX2lucHV0XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X3Bob25lX2lucHV0X18zUE1JUFwiLFxuXHRcImVtYWlsX2lucHV0XCI6IFwiSW5mb3JtYXRpb25QYXltZW50X2VtYWlsX2lucHV0X18xT1ZyV1wiLFxuXHRcImhvd0hlYXJkQWJvdXRVc19pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9ob3dIZWFyZEFib3V0VXNfaW5wdXRfXzN2bFhNXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJuYXZpZ2F0aW9uQmFyX2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbkJhcl9jb250YWluZXJfXzNjLTJIXCIsXG5cdFwid3JhcHBlclwiOiBcIk5hdmlnYXRpb25CYXJfd3JhcHBlcl9fYVpLb3NcIixcblx0XCJuYXZpZ2F0aW9uX2JhclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl9iYXJfX1k4NVVaXCIsXG5cdFwibmF2aWdhdGlvbl9saW5rc1wiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl9saW5rc19fcWRKLVNcIixcblx0XCJidXR0b25fY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9idXR0b25fY29udGFpbmVyX18xa1JCM1wiLFxuXHRcIm5hdmlnYXRpb25MaW5rX2J1dHRvblwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbkxpbmtfYnV0dG9uX18xMTdMRFwiLFxuXHRcImJsYW5rUGFyYV9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX2JsYW5rUGFyYV9jb250YWluZXJfX3lUWXU0XCIsXG5cdFwibmF2aWdhdGlvblRleHRfY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uVGV4dF9jb250YWluZXJfXzJMV2NSXCIsXG5cdFwibmF2aWdhdGlvbl90ZXh0XCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uX3RleHRfXzJfcU41XCIsXG5cdFwidGV4dFwiOiBcIk5hdmlnYXRpb25CYXJfdGV4dF9fM3dhVmlcIixcblx0XCJ0ZXh0X2NvbnRlbnRcIjogXCJOYXZpZ2F0aW9uQmFyX3RleHRfY29udGVudF9fMldKRlVcIixcblx0XCJ0ZXh0X2JsYW5rRGl2XCI6IFwiTmF2aWdhdGlvbkJhcl90ZXh0X2JsYW5rRGl2X18yV2hEVVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaXRlbV9oZWFkZXJcIjogXCJDbGllbnRHbG9iYWxzX2l0ZW1faGVhZGVyX18zZ1hUS1wiLFxuXHRcIml0ZW1IZWFkZXJfY29udGVudFwiOiBcIkNsaWVudEdsb2JhbHNfaXRlbUhlYWRlcl9jb250ZW50X18zUS14QVwiLFxuXHRcImV2ZW50SGFuZGxlcl9kaXZcIjogXCJDbGllbnRHbG9iYWxzX2V2ZW50SGFuZGxlcl9kaXZfX3VTbzUxXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJsb2NhdGlvbnNcIjogXCJMb2NhdGlvbl9sb2NhdGlvbnNfXzJqU09pXCIsXG5cdFwic2VsZWN0X2xvY2F0aW9uXCI6IFwiTG9jYXRpb25fc2VsZWN0X2xvY2F0aW9uX18yeDdwSVwiLFxuXHRcImxvY2F0aW9uX2xpc3RcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9saXN0X18xczUyclwiLFxuXHRcIndyYXBwZXJcIjogXCJMb2NhdGlvbl93cmFwcGVyX18yeXBJVVwiLFxuXHRcImxvY2F0aW9uX2hpZGRlbkRpdlwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2hpZGRlbkRpdl9fMVdVSmFcIixcblx0XCJsb2NhdGlvbkluZm9fY29udGFpbmVyXCI6IFwiTG9jYXRpb25fbG9jYXRpb25JbmZvX2NvbnRhaW5lcl9fMTYwd0NcIixcblx0XCJsb2NhdGlvbl9pbmZvXCI6IFwiTG9jYXRpb25fbG9jYXRpb25faW5mb19fMlMxb2xcIixcblx0XCJsb2NhdGlvbl9jb250ZW50XCI6IFwiTG9jYXRpb25fbG9jYXRpb25fY29udGVudF9fY1VnMDdcIixcblx0XCJsb2NhdGlvbl90YWJsZVwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX3RhYmxlX18zcWVYdlwiLFxuXHRcImxvY2F0aW9uQWRkX2Zvcm1cIjogXCJMb2NhdGlvbl9sb2NhdGlvbkFkZF9mb3JtX18xbkFtelwiLFxuXHRcImxvY2F0aW9uX2lucHV0XCI6IFwiTG9jYXRpb25fbG9jYXRpb25faW5wdXRfX05YSHJqXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZUF4aW9zIiwic3R5bGVzIiwiQ2F0ZWdvcnkiLCJUcmVhdG1lbnQiLCJJdGVtSGVhZGVyIiwiQ2F0ZWdvcnlUcmVhdG1lbnQiLCJhY3RpdmVQYWdlIiwiYWN0aXZlQ2F0ZWdvcnkiLCJjaGFuZ2VBY3RpdmVDYXRlZ29yeSIsImFjdGl2ZVRyZWF0bWVudCIsImNoYW5nZUFjdGl2ZVRyZWF0bWVudCIsInNlbGVjdGVkVHJlYXRtZW50cyIsImFkZFRyZWF0bWVudCIsInNlbGVjdFRyZWF0bWVudCIsImRhdGEiLCJjYXRlZ29yeURhdGEiLCJlcnJvciIsImNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IiLCJsb2FkaW5nIiwiY2F0ZWdvcnlEYXRhTG9hZGluZyIsInRyZWF0bWVudERhdGEiLCJ0cmVhdG1lbnREYXRhRmV0Y2hpbmdFcnJvciIsInRyZWF0bWVudERhdGFMb2FkaW5nIiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJ0cmVhdG1lbnRzIiwic2V0VHJlYXRtZW50cyIsImFkZE5ld1RyZWF0bWVudCIsInN0eWxpc3QiLCJ0cmVhdG1lbnQiLCJjb25zb2xlIiwibG9nIiwiY2F0ZWdvcnlfdHJlYXRtZW50IiwiZGlzcGxheSIsImNhdGVnb3J5IiwiY2F0ZWdvcnlJdGVtX2xpc3QiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJ0cmVhdG1lbnRJdGVtX2xpc3QiLCJjbGllbnRHbG9iYWxTdHlsZXMiLCJFdmVudEhhbmRsZXJEaXYiLCJ0cmVhdG1lbnRJdGVtX2NvbnRhaW5lciIsImV2ZW50SGFuZGxlcl9kaXYiLCJldmVudCIsInRpdGxlIiwidHJlYXRtZW50X2l0ZW0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzb21lIiwieCIsInRyZWF0bWVudEl0ZW1fY29udGVudCIsImR1cmF0aW9uIiwicHJpY2UiLCJkZXNjcmlwdGlvbiIsInRyZWF0bWVudF9jb250ZW50IiwiQ2F0ZWdvcnlTZXJpYWwiLCJibHVlR3JhZGllbnQiLCJyZWRHcmFkaWVudCIsImNvbmRpdGlvbjEiLCJjb25kaXRpb24yIiwic3R5bGUiLCJjYXRlZ29yeUl0ZW1fY29udGFpbmVyIiwiY2F0ZWdvcnlfaXRlbSIsImNhdGVnb3J5SXRlbV9jb250ZW50IiwiY29sb3IiLCJjb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiY2xpY2tFdmVudEhhbmRsZXIiLCJpdGVtX2hlYWRlciIsIml0ZW1IZWFkZXJfY29udGVudCIsIlNjcmlwdCIsIkltYWdlIiwiTG9naW5CZ0ltYWdlIiwiTG9nbyIsImdldERhdGVzIiwiQ29uZmlybWF0aW9uIiwiZGF0ZXMiLCJzZXREYXRlcyIsIkRhdGVDYXJkIiwiZGF0ZSIsImFjdGl2ZURhdGUiLCJzZXRBY3RpdmVEYXRlIiwiY2hvb3NlblRpbWUiLCJkYXRlQ2FyZF9jb250YWluZXIiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImRhdGVIaWRkZW5fZGl2IiwibW9udGgiLCJ0b0xvd2VyQ2FzZSIsImRhdGVfY2FyZCIsIndlZWtEYXlfdGV4dCIsIndlZWtEYXkiLCJkYXRlX3RleHQiLCJtb250aF90ZXh0IiwiY2xvY2tJY29uX2NvbnRhaW5lciIsImJvcmRlciIsIkNob29zZVN0eWxpc3RzIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkRhdGVUaW1lIiwic3RhdGUiLCJsb2NhdGlvbiIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImRhdGVJbmRleCIsInNldERhdGVJbmRleCIsInNldENob29zZW5UaW1lIiwiZGF0ZV90aW1lIiwiZGF0ZVRpbWVfY29udGVudCIsImNvbnRlbnRfSW1hZ2UiLCJkYXRlc19jb250YWluZXIiLCJwcmV2IiwibmV4dCIsImRhdGVUaW1lIiwic3Vic3RyaW5nIiwiYXZhaWxhYmxlX3RpbWVfbGlzdCIsInRpbWUiLCJ0aW1lcyIsInBvc2l0aW9uIiwiaW5kaXZpZHVhbF90aW1lIiwiQmVhdXRpY2lhbiIsIkJlYXV0aWNpYW4yIiwic3R5bGlzdHNfY29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwiaW1hZ2VIaWRkZW5fZGl2IiwidGV4dEFsaWduIiwidGltZXNfY29udGFpbmVyIiwidGltZV90ZXh0IiwiZmluZFRpbWVTbG90cyIsIndpZHRoIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJmaW5hbGl6ZVRyZWF0bWVudHMiLCJ2YWx1ZSIsIm5ld1RyZWF0bWVudFRpdGxlIiwiZG9lc0V4aXN0IiwibmV3SXRlbSIsInRyZWF0bWVudFRpdGxlIiwiZmlsdGVyZWRUcmVhdG1lbnRzIiwiZmlsdGVyIiwibmV3dHJlYXRtZW50IiwiY2hvb3NlblN0eWxpc3QiLCJ0cmVhdG1lbnREdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwiY3VycmVudFZhbHVlIiwiZmluZFRpbWVzIiwibmV3VHJlYXRtZW50cyIsImZvckVhY2giLCJzZWxlY3RlZFRyZWF0bWVudCIsInB1c2giLCJmaXJzdERhdGUiLCJzdHlsaXN0cyIsIklucHV0IiwiSW5mb3JtYXRpb25QYXltZW50IiwiY2xpZW50SW5mbyIsImNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIiLCJ2YWxpZGF0aW9uRXJyb3IiLCJpbmZvX3BheW1lbnQiLCJpbmZvUGF5bWVudF9jb250ZW50IiwiaW1hZ2VfY29udGFpbmVyIiwibmFtZV9pbnB1dHMiLCJpbnB1dF9sYWJlbCIsIm5hbWVfaW5mbyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVfaW5wdXQiLCJwaG9uZSIsImVtYWlsX2lucHV0IiwiZW1haWwiLCJjaGVja2JveCIsImhvd0hlYXJkQWJvdXRVc19pbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsInVybCIsInNldERhdGEiLCJzZXRMb2FkaW5nIiwic2V0RXJyb3IiLCJmZXRjaERhdGEiLCJlbmRQb2ludCIsInJlc3BvbnNlIiwiZ2V0IiwiTG9jYXRpb25JY29uIiwiTG9jYXRpb24iLCJ1cGRhdGVTdGF0ZSIsImxvY2F0aW9ucyIsInNldExvY2F0aW9ucyIsInNlbGVjdF9sb2NhdGlvbiIsImxvY2F0aW9uX2xpc3QiLCJ3cmFwcGVyIiwibG9jYXRpb25JbmZvX2NvbnRhaW5lciIsImxvY2F0aW9uX2luZm8iLCJsb2NhdGlvbl9jb250ZW50IiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsInppcENvZGUiLCJjaXR5IiwiY291bnRyeSIsImxvY2F0aW9uX2ljb24iLCJmb250U2l6ZSIsIk5hdmlnYXRpb25CdXR0b24iLCJOYXZpZ2F0aW9uVGV4dCIsIk5hdmlnYXRpb25CYXIiLCJzZXRBY3RpdmVQYWdlIiwiaXRlbXMiLCJpZCIsIndpbmRvd1dpZHRoIiwic2V0V2luZG93V2lkdGgiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaW5uZXJXaWR0aCIsIm5hdmlnYXRpb25CYXJfY29udGFpbmVyIiwibmF2aWdhdGlvbl9iYXIiLCJuYXZpZ2F0aW9uVGV4dF9jb250YWluZXIiLCJjaGFuZ2VBY3RpdmVQYWdlIiwibmV3VmFsdWUiLCJOdW1iZXIiLCJhbGVydCIsImxlbmd0aCIsIm5hdmlnYXRpb25fbGlua3MiLCJidXR0b25fY29udGFpbmVyIiwibmF2aWdhdGlvbkxpbmtfYnV0dG9uIiwiYmxhbmtQYXJhX2NvbnRhaW5lciIsInRleHQiLCJuYXZpZ2F0aW9uX3RleHQiLCJ0ZXh0X2NvbnRlbnQiLCJ0ZXh0X2JsYW5rRGl2IiwiQWxlcnQiLCJtZXNzYWdlIiwiZmV0Y2hFdmVudHMiLCJnZXRTdHlsaXN0cyIsImdldFdvcmtpbmdUaW1lcyIsImRlZmF1bHRUaW1lc0FycmF5IiwiZGF0ZXNBcnJheSIsImFsbFN0eWxpc3RzIiwiY2FsZW5kYXJFdmVudHMiLCJzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMiLCJ3b3JraW5nVGltZSIsInh4eCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJidXN5VGltZXMiLCJldmVudERhdGUiLCJzdGFydFRpbWUiLCJpbmRleE9mIiwic3RhcnRpbmdUaW1lIiwic3RhcnRpbmdIb3VyIiwic3RhcnRpbmdNaW51dGUiLCJzdGF0dXMiLCJldmVudExvY2F0aW9uIiwiayIsIk1hdGgiLCJjZWlsIiwiZXZlbnREdXJhdGlvbiIsImludGVydmFsIiwiaG91ciIsImhvdXJJbmNyZW1lbnQiLCJmbG9vciIsIm5ld1dvcmtpbmdUaW1lcyIsIndvcmtpbmdUaW1lcyIsImluY2x1ZGVzIiwiZnJlZVRpbWVzIiwic3R5bGlzdHNBbmRUaGVpckZyZWVUaW1lcyIsImNvdW50T2ZUaW1lc1RvT21taXQiLCJyZWR1Y2UiLCJ0b3RhbCIsInFxcSIsImF2YWlsYWJsZVRpbWVzQnlEYXRlIiwiaSIsInRvdGFsVGltZUNvdW50IiwidGVtcCIsImoiLCJjb3VudCIsInkiLCJtaW51dGVzIiwiZGF0ZVRpbWVzQXJyYXkiLCJuZXdEYXRlIiwiRGF0ZSIsImdldERhdGUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJldmVudHMiLCJlcnIiLCJtc2ciLCJnZXRUaW1lIiwieWVhciIsImdldEZ1bGxZZWFyIiwidG9TdHJpbmciLCJnZXRNb250aCIsImRheSIsInN0eWxpc3RGdWxsTmFtZSIsImRheU5hbWUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJwIiwid29ya1NjaGVkdWxlIiwic2NoZWR1bGUiLCJzdGFydFRpbWVJbmRleCIsImVuZFRpbWVJbmRleCIsImVuZFRpbWUiLCJxIiwibWV0aG9kIiwiYm9keSIsImhhcHBlbmluZyIsInRvdGFsRGF0YUNvdW50Iiwic2V0VG90YWxEYXRhQ291bnQiLCJuZXdEYXRhIiwiQXJyYXkiLCJpc0FycmF5IiwidG90YWxJdGVtQ291bnQiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJkZWZhdWx0IiwiSW1hZ2UxIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfaGVhZCIsIl90b0Jhc2U2NCIsIl9pbWFnZUNvbmZpZyIsIl91c2VJbnRlcnNlY3Rpb24iLCJfZGVmaW5lUHJvcGVydHkiLCJvYmoiLCJrZXkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJfX2VzTW9kdWxlIiwiX29iamVjdFNwcmVhZCIsImFyZ3VtZW50cyIsInNvdXJjZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwiY29uY2F0Iiwic3ltIiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJwcm90b3R5cGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsImNhbGwiLCJzb3VyY2VLZXlzIiwibG9hZGVkSW1hZ2VVUkxzIiwiU2V0IiwiZ2xvYmFsIiwiX19ORVhUX0lNQUdFX0lNUE9SVEVEIiwiVkFMSURfTE9BRElOR19WQUxVRVMiLCJ1bmRlZmluZWQiLCJsb2FkZXJzIiwiTWFwIiwiZGVmYXVsdExvYWRlciIsImltZ2l4TG9hZGVyIiwiY2xvdWRpbmFyeUxvYWRlciIsImFrYW1haUxvYWRlciIsImN1c3RvbUxvYWRlciIsIlZBTElEX0xBWU9VVF9WQUxVRVMiLCJpc1N0YXRpY1JlcXVpcmUiLCJzcmMiLCJpc1N0YXRpY0ltYWdlRGF0YSIsImlzU3RhdGljSW1wb3J0IiwiZGV2aWNlU2l6ZXMiLCJjb25maWdEZXZpY2VTaXplcyIsImltYWdlU2l6ZXMiLCJjb25maWdJbWFnZVNpemVzIiwibG9hZGVyIiwiY29uZmlnTG9hZGVyIiwicGF0aCIsImNvbmZpZ1BhdGgiLCJkb21haW5zIiwiY29uZmlnRG9tYWlucyIsInByb2Nlc3MiLCJlbnYiLCJfX05FWFRfSU1BR0VfT1BUUyIsImltYWdlQ29uZmlnRGVmYXVsdCIsImFsbFNpemVzIiwic29ydCIsImEiLCJiIiwiZ2V0V2lkdGhzIiwibGF5b3V0Iiwic2l6ZXMiLCJ2aWV3cG9ydFdpZHRoUmUiLCJwZXJjZW50U2l6ZXMiLCJtYXRjaCIsImV4ZWMiLCJwYXJzZUludCIsInNtYWxsZXN0UmF0aW8iLCJtaW4iLCJ3aWR0aHMiLCJzIiwia2luZCIsInciLCJmaW5kIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJiYWNrZ3JvdW5kU2l6ZSIsImFkZCIsIm5hdHVyYWxXaWR0aCIsIm5hdHVyYWxIZWlnaHQiLCJyZWYiLCJwYXJlbnRFbGVtZW50IiwicGFyZW50IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIndhcm4iLCJjb21wbGV0ZSIsIm9ubG9hZCIsIl9wYXJhbSIsInByaW9yaXR5IiwibGF6eUJvdW5kYXJ5IiwiY2xhc3NOYW1lIiwiaGVpZ2h0Iiwib2JqZWN0Rml0Iiwib2JqZWN0UG9zaXRpb24iLCJibHVyRGF0YVVSTCIsImFsbCIsInJlc3QiLCJzdGF0aWNTcmMiLCJzdGF0aWNJbWFnZURhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwid2lkdGhJbnQiLCJoZWlnaHRJbnQiLCJxdWFsaXR5SW50IiwiaXNMYXp5IiwiaGFzIiwiU3RyaW5nIiwiaXNOYU4iLCJWQUxJRF9CTFVSX0VYVCIsInJhbmQiLCJyYW5kb20iLCJzZXRSZWYiLCJpc0ludGVyc2VjdGVkIiwidXNlSW50ZXJzZWN0aW9uIiwicm9vdE1hcmdpbiIsImRpc2FibGVkIiwiaXNWaXNpYmxlIiwid3JhcHBlclN0eWxlIiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nU3R5bGUiLCJ0b3AiLCJsZWZ0IiwiYm90dG9tIiwicmlnaHQiLCJib3hTaXppbmciLCJwYWRkaW5nIiwibWluV2lkdGgiLCJtYXhXaWR0aCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsImJsdXJTdHlsZSIsImJhY2tncm91bmRQb3NpdGlvbiIsIm92ZXJmbG93IiwicXVvdGllbnQiLCJwYWRkaW5nVG9wIiwiaW1nQXR0cmlidXRlcyIsInNyY1N0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJhbHQiLCJ0b0Jhc2U2NCIsImFzc2lnbiIsImRlY29kaW5nIiwicmVsIiwiYXMiLCJocmVmIiwiaW1hZ2VzcmNzZXQiLCJpbWFnZXNpemVzIiwibm9ybWFsaXplU3JjIiwic2xpY2UiLCJVUkwiLCJwYXJhbXMiLCJzZWFyY2hQYXJhbXMiLCJzZXQiLCJwYXJhbXNTdHJpbmciLCJtaXNzaW5nVmFsdWVzIiwicGFyc2VkU3JjIiwiaG9zdG5hbWUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJjYiIsInN0YXJ0Iiwibm93Iiwic2V0VGltZW91dCIsImRpZFRpbWVvdXQiLCJ0aW1lUmVtYWluaW5nIiwibWF4IiwiY2xlYXJUaW1lb3V0IiwiX3JlcXVlc3RJZGxlQ2FsbGJhY2siLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsInVub2JzZXJ2ZSIsInVzZVJlZiIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwidXNlQ2FsbGJhY2siLCJlbCIsImN1cnJlbnQiLCJ0YWdOYW1lIiwib2JzZXJ2ZSIsImlkbGVDYWxsYmFjayIsImVsZW1lbnQiLCJjYWxsYmFjayIsIm9wdGlvbnMiLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIkhvbWUiLCJzZXRTZWxlY3RlZFRyZWF0bWVudHMiLCJzZXRWYWxpZGF0aW9uRXJyb3IiLCJzZXRDbGllbnRJbmZvIiwiaG93SGVhcmRBYm91dFVzIiwib3RoZXJzIiwic2V0U3RhdGUiLCJzZXNzaW9uIiwiY291cG9uIiwicGFpZCIsInNldEFjdGl2ZUNhdGVnb3J5Iiwic2V0QWN0aXZlVHJlYXRtZW50IiwiZSIsImZpbHRlcmVkU2VsZWN0ZWRUcmVhdG1lbnRzIiwiaG9tZSJdLCJzb3VyY2VSb290IjoiIn0=
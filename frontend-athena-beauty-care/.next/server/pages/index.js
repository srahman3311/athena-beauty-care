(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/clients/category-treatment/Category.js":
/*!***********************************************************!*\
  !*** ./components/clients/category-treatment/Category.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\Category.js";
 // Stylesheet

 // Components


function Category({
  item,
  index,
  activeCategory,
  changeActiveCategory,
  selectedTreatments
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryItem_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryTreatment_hiddenDiv),
      onClick: changeActiveCategory,
      children: item.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().category_item),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryItem_content),
        style: {
          backgroundImage: activeCategory === item.title ? "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" : selectedTreatments.some(x => x.category === item.title) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          style: {
            backgroundColor: activeCategory === item.title && "white",
            color: activeCategory === item.title && "black"
          },
          children: index + 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          style: {
            color: activeCategory === item.title && "white"
          },
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 9
  }, this);
}

/***/ }),

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
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Category */ "./components/clients/category-treatment/Category.js");
/* harmony import */ var _Treatment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Treatment */ "./components/clients/category-treatment/Treatment.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
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
  addTreatment
}) {
  const {
    0: categories,
    1: setCategories
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: treatments,
    1: setTreatments
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:7070/api/categories");
      setCategories(response.data.categories);

      try {
        const newResponse = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:7070/api/treatments");
        setTreatments(newResponse.data.treatments);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }, []); // console.log(activeTreatment);

  function addNewTreatment(stylist, treatment) {
    console.log(stylist);
    console.log(treatment);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().category_treatment),
    style: {
      display: activePage === 1 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().category),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: "Select the Category"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().categoryItem_list),
        children: categories.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Category__WEBPACK_IMPORTED_MODULE_2__.default, {
            item: item,
            index: index,
            activeCategory: activeCategory,
            changeActiveCategory: changeActiveCategory,
            selectedTreatments: selectedTreatments
          }, index + 1, false, {
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
      lineNumber: 59,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().treatment),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("h4", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: "Select the Treatment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_5___default().treatmentItem_list),
        children: treatments.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_Treatment__WEBPACK_IMPORTED_MODULE_3__.default, {
            item: item,
            activeCategory: activeCategory,
            activeTreatment: activeTreatment,
            changeActiveTreatment: changeActiveTreatment,
            selectedTreatments: selectedTreatments,
            addTreatment: addTreatment
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 58,
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
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/CategoryTreatment.module.css */ "./styles/CategoryTreatment.module.css");
/* harmony import */ var _styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\category-treatment\\Treatment.js";
 // Stylesheet

 // Components


function Treatment({
  item,
  activeCategory,
  activeTreatment,
  changeActiveTreatment,
  selectedTreatments,
  addTreatment
}) {
  // console.log(selectedTreatments.some(xxx => xxx.description === "abc" && xxx.category === "bbc"));
  // console.log(activeTreatment);
  // console.log(item.title)
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().treatmentItem_container),
    style: {
      display: activeCategory === item.category ? "block" : "none" // zIndex: activeTreatment !== item.title && "-1",

    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().categoryTreatment_hiddenDiv),
      onClick: changeActiveTreatment,
      children: [item.title, ", ", item.duration, ", ", item.price]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().stylists),
      style: {
        display: item.title === activeTreatment ? "block" : "none"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: "Select a stylist"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("ul", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().stylist_list),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
          className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().stylistList_item),
          onClick: e => addTreatment(e.target.textContent, item)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 21
        }, this), item.stylists.map((stylist, index) => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("li", {
            className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().stylistList_item),
            style: {
              backgroundColor: selectedTreatments.some(newItem => newItem.choosenStylist === stylist && newItem.treatmentTitle === item.title) && "blue"
            },
            onClick: e => addTreatment(e.target.textContent, item),
            children: stylist
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, this);
        })]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().treatment_item),
      style: {
        backgroundImage: activeTreatment === item.title ? "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" : selectedTreatments.some(x => x.treatmentTitle === item.title) && "linear-gradient(to left, red, rgba(0, 0, 139, 0.4))"
      } // style = {{
      //     backgroundImage: activeTreatment === item.title && "linear-gradient(to left, darkblue, rgba(0, 0, 139, 0.4))" 
      // }}
      ,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().treatmentItem_content),
        style: {
          marginBottom: !item.description && "0",
          paddingBottom: !item.description && "4px"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: item.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        style: {
          display: !item.description && "none"
        },
        className: (_styles_CategoryTreatment_module_css__WEBPACK_IMPORTED_MODULE_2___default().treatment_content),
        children: item.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    style: {
      display: activePage === 5 ? "block" : "none"
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("h1", {
      children: "Confirmation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
  date
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateCard_container),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_card),
      style: {
        backgroundImage: date.weekDay === "Today" && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().weekDay_text),
        children: date.weekDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_text),
        children: date.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().month_text),
        children: date.month
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
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
          lineNumber: 26,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
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
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_getDates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../lib/getDates */ "./lib/getDates.js");
/* harmony import */ var _DateCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DateCard */ "./components/clients/date-time/DateCard.js");
/* harmony import */ var _Stylists__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stylists */ "./components/clients/date-time/Stylists.js");
/* harmony import */ var _Times__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Times */ "./components/clients/date-time/Times.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\DateTime.js";
// Next Modules




 // Stylesheet

 // libs

 // components





function DateTime({
  state,
  activePage
}) {
  const {
    0: dates,
    1: setDates
  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    setDates((0,_lib_getDates__WEBPACK_IMPORTED_MODULE_5__.getDates)());
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().date_time),
    style: {
      display: activePage === 3 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("h3", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().header),
      children: "Select The Time / Date"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().dateTime_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().content_Image),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()) // layout and objecFit properties must be set to fill to make the image fit to it's container.  
        // layout="fill"
        // objectFit="fill"
        , {
          src: _images_5_svg__WEBPACK_IMPORTED_MODULE_4__.default,
          alt: "Login Background Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().dates_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().prev),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
            className: "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().next),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("i", {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().dates),
          children: dates.map((date, index) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_DateCard__WEBPACK_IMPORTED_MODULE_6__.default, {
              date: date
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 33
            }, this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_10___default().stylists_times),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Stylists__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxDEV)(_Times__WEBPACK_IMPORTED_MODULE_8__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/InformationPayment.module.css */ "./styles/InformationPayment.module.css");
/* harmony import */ var _styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Input */ "./components/clients/information-payment/Input.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
    className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().info_payment),
    style: {
      display: activePage === 4 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("h4", {
      className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoPayment_header),
      children: "Information / Payment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
      className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().infoPayment_content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().image_container),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          src: _images_6_svg__WEBPACK_IMPORTED_MODULE_3__.default,
          alt: "Login Background Image"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().name_inputs),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().input_label),
          children: "Name"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().name_info),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
            type: "text",
            name: "firstName",
            placeholder: "First Name",
            value: clientInfo.firstName,
            clientInfoOnChangeHandler: clientInfoOnChangeHandler,
            validationError: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
            type: "text",
            name: "lastName",
            placeholder: "Last Name",
            value: clientInfo.lastName,
            clientInfoOnChangeHandler: clientInfoOnChangeHandler,
            validationError: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().phone_input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().input_label),
          children: "Phone"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: "number",
          name: "phone",
          placeholder: "+31 235 5632",
          value: clientInfo.phone,
          clientInfoOnChangeHandler: clientInfoOnChangeHandler,
          validationError: validationError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().email_input),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().input_label),
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_Input__WEBPACK_IMPORTED_MODULE_4__.default, {
          type: "email",
          name: "email",
          placeholder: "abcd@gmail.com",
          value: clientInfo.email,
          clientInfoOnChangeHandler: clientInfoOnChangeHandler,
          validationError: validationError
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().checkbox),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("input", {
            type: "checkbox"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
            children: "Please keep me informed of the offers and promotions"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("div", {
        className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().howHeardAboutUs_input),
        style: {
          backgroundColor: "green"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("p", {
          className: (_styles_InformationPayment_module_css__WEBPACK_IMPORTED_MODULE_6___default().input_label),
          children: "How did you hear about athena beauty care?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("select", {
          name: "howHeardAboutUs",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
            value: "Friends",
            children: "Friends"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)("option", {
            value: "others",
            children: "Friends"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
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
/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../styles/Location.module.css */ "./styles/Location.module.css");
/* harmony import */ var _styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
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
    0: locations,
    1: setLocations
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(async () => {
    try {
      const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("http://localhost:7070/api/locations");
      setLocations(response.data.locations);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().select_location),
    style: {
      display: activePage === 2 ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h4", {
      children: "Select the Location"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_list),
      children: locations.map((location, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
          className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().wrapper),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_hiddenDiv),
            onClick: updateState,
            children: location.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 29
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
            className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().locationInfo_container),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
              className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_info),
              style: {
                backgroundColor: state.location === location.name && "blue"
              },
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_content),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("h5", {
                  children: location.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 61,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: [location.address1, ", ", location.address2]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 62,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: ["Zip Code: ", location.zipCode]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 63,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: ["Phone: ", location.phone]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: location.city
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 41
                }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("p", {
                  children: location.country
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 41
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 60,
                columnNumber: 37
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
                className: (_styles_Location_module_css__WEBPACK_IMPORTED_MODULE_3___default().location_icon),
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("i", {
                  style: {
                    color: "darkblue",
                    fontSize: "24px"
                  },
                  className: "fas fa-map-marker-alt"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 41
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 37
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 33
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 29
          }, this)]
        }, index + 1, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 25
        }, this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 12
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
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
  activePage,
  setActivePage
}) {
  const items = [{
    id: 1,
    content: "Category and Treatment"
  }, {
    id: 2,
    content: "Select Location"
  }, {
    id: 3,
    content: "Select Time / Date"
  }, {
    id: 4,
    content: "Information / Payment"
  }, {
    id: 5,
    content: "Confirmation"
  }];
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
            activePage: activePage,
            setActivePage: setActivePage,
            value: item.id
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
        className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_4___default().navigationText_container),
        children: items.map(item => {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_NavigationText__WEBPACK_IMPORTED_MODULE_2__.default, {
            windowWidth: windowWidth,
            text: item.content
          }, item.id, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 34,
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
  activePage,
  setActivePage,
  value
}) {
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
        value: activePage,
        onClick: event => setActivePage(Number(event.target.textContent)),
        children: value
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
      className: (_styles_NavigationBar_module_css__WEBPACK_IMPORTED_MODULE_1___default().blankPara_container),
      style: {
        display: value === 5 && "none"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
} //style = {{visibility: value === "5" && "hidden"}}

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
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/clients/navigation-bar/NavigationBar */ "./components/clients/navigation-bar/NavigationBar.js");
/* harmony import */ var _components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/clients/category-treatment/CategoryTreatment */ "./components/clients/category-treatment/CategoryTreatment.js");
/* harmony import */ var _components_clients_location_Location__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/clients/location/Location */ "./components/clients/location/Location.js");
/* harmony import */ var _components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/clients/date-time/DateTime */ "./components/clients/date-time/DateTime.js");
/* harmony import */ var _components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/clients/information-payment/InformationPayment */ "./components/clients/information-payment/InformationPayment.js");
/* harmony import */ var _components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/clients/confirmation-page/Confirmation */ "./components/clients/confirmation-page/Confirmation.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// React
 // Stylesheet

 // components








function Home() {
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
    return setActiveTreatment(treatment); //return activeTreatment ? setActiveTreatment("") : setActiveTreatment(treatment);
  }

  function addTreatment(stylist, item) {
    // console.log(stylist, item);
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
          choosenStylist: stylist
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
      choosenStylist: stylist
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

  console.log(selectedTreatments);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().home),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_navigation_bar_NavigationBar__WEBPACK_IMPORTED_MODULE_1__.default, {
      activePage: activePage,
      setActivePage: setActivePage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_category_treatment_CategoryTreatment__WEBPACK_IMPORTED_MODULE_2__.default, {
      selectedTreatments: selectedTreatments,
      addTreatment: addTreatment,
      activePage: activePage,
      activeCategory: activeCategory,
      activeTreatment: activeTreatment,
      changeActiveTreatment: changeActiveTreatment,
      changeActiveCategory: changeActiveCategory
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 171,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_location_Location__WEBPACK_IMPORTED_MODULE_3__.default, {
      activePage: activePage,
      state: state,
      updateState: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_date_time_DateTime__WEBPACK_IMPORTED_MODULE_4__.default, {
      state: state,
      activePage: activePage,
      updateState: updateState
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_5__.default, {
      activePage: activePage,
      clientInfo: clientInfo,
      clientInfoOnChangeHandler: clientInfoOnChangeHandler,
      validationError: validationError
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_6__.default, {
      activePage: activePage
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 167,
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
	"time": "DateTime_time__2tMuV",
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

/***/ "./styles/Location.module.css":
/*!************************************!*\
  !*** ./styles/Location.module.css ***!
  \************************************/
/***/ ((module) => {

// Exports
module.exports = {
	"select_location": "Location_select_location__nJpNW",
	"location_list": "Location_location_list__3fl1w",
	"wrapper": "Location_wrapper__RJn-e",
	"location_hiddenDiv": "Location_location_hiddenDiv__3hNv4",
	"locationInfo_container": "Location_locationInfo_container__2vUsK",
	"location_info": "Location_location_info__3JfPw",
	"location_content": "Location_location_content__2O_q3"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVDSDs7Ozs7Ozs7Ozs7Ozs7O0FDNU1ELGlFQUFlLENBQUMsMElBQTBJOzs7Ozs7Ozs7Ozs7Ozs7QUNBMUosaUVBQWUsQ0FBQyxtR0FBbUc7Ozs7Ozs7Ozs7Ozs7OztBQ0FuSCxpRUFBZSxDQUFDLGdRQUFnUTs7Ozs7Ozs7Ozs7Ozs7O0FDQWhSLGlFQUFlLENBQUMsdVBBQXVQOzs7Ozs7Ozs7Ozs7Ozs7QUNBdlEsaUVBQWUsQ0FBQyxpU0FBaVM7Ozs7Ozs7Ozs7QUNBalQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDZEEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L0NhdGVnb3J5LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvQ2F0ZWdvcnlUcmVhdG1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9UcmVhdG1lbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NvbmZpcm1hdGlvbi1wYWdlL0NvbmZpcm1hdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVDYXJkLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWUuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9TdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL1RpbWVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L0luZm9ybWF0aW9uUGF5bWVudC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9JbnB1dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvbG9jYXRpb24vTG9jYXRpb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25CYXIuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25CdXR0b24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL25hdmlnYXRpb24tYmFyL05hdmlnYXRpb25UZXh0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYi9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9pbWFnZXMvNi5zdmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzLzUuc3ZnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLnBuZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvcGVyc29uLWdpcmwtZmxhdC5wbmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0xvY2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3RvLWJhc2UtNjQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L3NjcmlwdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKHsgaXRlbSwgaW5kZXgsIGFjdGl2ZUNhdGVnb3J5LCBjaGFuZ2VBY3RpdmVDYXRlZ29yeSwgc2VsZWN0ZWRUcmVhdG1lbnRzIH0pIHtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW1fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeVRyZWF0bWVudF9oaWRkZW5EaXZ9IG9uQ2xpY2sgPSB7Y2hhbmdlQWN0aXZlQ2F0ZWdvcnl9PlxyXG4gICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5X2l0ZW19PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeUl0ZW1fY29udGVudH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYWN0aXZlQ2F0ZWdvcnkgPT09IGl0ZW0udGl0bGUgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGRhcmtibHVlLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMuc29tZSh4ID0+IHguY2F0ZWdvcnkgPT09IGl0ZW0udGl0bGUpICYmIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCJcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLnRpdGxlICYmIFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBhY3RpdmVDYXRlZ29yeSA9PT0gaXRlbS50aXRsZSAmJiBcImJsYWNrXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3sgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLnRpdGxlICYmIFwid2hpdGVcIiB9fT57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IENhdGVnb3J5IGZyb20gXCIuL0NhdGVnb3J5XCI7XHJcbmltcG9ydCBUcmVhdG1lbnQgZnJvbSBcIi4vVHJlYXRtZW50XCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVRyZWF0bWVudCAoeyBcclxuICAgIGFjdGl2ZVBhZ2UsIGFjdGl2ZUNhdGVnb3J5LCBjaGFuZ2VBY3RpdmVDYXRlZ29yeSwgYWN0aXZlVHJlYXRtZW50LCBjaGFuZ2VBY3RpdmVUcmVhdG1lbnQsIHNlbGVjdGVkVHJlYXRtZW50cywgYWRkVHJlYXRtZW50IFxyXG59KSB7XHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyZWF0bWVudHMsIHNldFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvY2F0ZWdvcmllc1wiKTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMocmVzcG9uc2UuZGF0YS5jYXRlZ29yaWVzKTtcclxuXHJcbiAgICAgICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3RyZWF0bWVudHNcIik7XHJcbiAgICAgICAgICAgICAgICBzZXRUcmVhdG1lbnRzKG5ld1Jlc3BvbnNlLmRhdGEudHJlYXRtZW50cyk7XHJcblxyXG5cclxuICAgICAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGFjdGl2ZVRyZWF0bWVudCk7XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkTmV3VHJlYXRtZW50KHN0eWxpc3QsIHRyZWF0bWVudCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0eWxpc3QpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRyZWF0bWVudClcclxuICAgIH1cclxuXHJcbiAgIFxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeV90cmVhdG1lbnR9IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAxID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5TZWxlY3QgdGhlIENhdGVnb3J5PC9oND5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0ZWdvcmllcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IHtpdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9IHtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnR9PlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+U2VsZWN0IHRoZSBUcmVhdG1lbnQ8L2g0PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50SXRlbV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlYXRtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlVHJlYXRtZW50ID0ge2FjdGl2ZVRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVUcmVhdG1lbnQgPSB7Y2hhbmdlQWN0aXZlVHJlYXRtZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkVHJlYXRtZW50ID0ge2FkZFRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGgxPkhlbGxvPC9oMT5cclxuICAgICAgICAgICAgPGgxPkhlbGxvPC9oMT5cclxuICAgICAgICAgICAgPGgxPkhlbGxvPC9oMT5cclxuICAgICAgICAgICAgPGgxPkhlbGxvPC9oMT5cclxuICAgICAgICAgICAgPGgxPkhlbGxvPC9oMT48aDE+SGVsbG88L2gxPlxyXG4gICAgICAgICAgICA8aDE+SGVsbG88L2gxPiAqL31cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9DYXRlZ29yeVRyZWF0bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmVhdG1lbnQgKHsgaXRlbSwgYWN0aXZlQ2F0ZWdvcnksIGFjdGl2ZVRyZWF0bWVudCwgY2hhbmdlQWN0aXZlVHJlYXRtZW50LCBzZWxlY3RlZFRyZWF0bWVudHMsIGFkZFRyZWF0bWVudCB9KSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoeHh4ID0+IHh4eC5kZXNjcmlwdGlvbiA9PT0gXCJhYmNcIiAmJiB4eHguY2F0ZWdvcnkgPT09IFwiYmJjXCIpKTtcclxuXHJcbiAgICBcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyhhY3RpdmVUcmVhdG1lbnQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coaXRlbS50aXRsZSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLmNhdGVnb3J5ID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAvLyB6SW5kZXg6IGFjdGl2ZVRyZWF0bWVudCAhPT0gaXRlbS50aXRsZSAmJiBcIi0xXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2fSBcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7Y2hhbmdlQWN0aXZlVHJlYXRtZW50fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpdGVtLnRpdGxlfSwge2l0ZW0uZHVyYXRpb259LCB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdHN9IHN0eWxlID0ge3tkaXNwbGF5OiBpdGVtLnRpdGxlID09PSBhY3RpdmVUcmVhdG1lbnQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgPHA+U2VsZWN0IGEgc3R5bGlzdDwvcD5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0X2xpc3R9ID5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdExpc3RfaXRlbX0gb25DbGljayA9IHtlID0+IGFkZFRyZWF0bWVudChlLnRhcmdldC50ZXh0Q29udGVudCwgaXRlbSl9PjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0uc3R5bGlzdHMubWFwKChzdHlsaXN0LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0TGlzdF9pdGVtfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXdJdGVtID0+IG5ld0l0ZW0uY2hvb3NlblN0eWxpc3QgPT09IHN0eWxpc3QgJiYgbmV3SXRlbS50cmVhdG1lbnRUaXRsZSA9PT0gaXRlbS50aXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSAmJiBcImJsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHtlID0+IGFkZFRyZWF0bWVudChlLnRhcmdldC50ZXh0Q29udGVudCwgaXRlbSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3N0eWxpc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBhY3RpdmVUcmVhdG1lbnQgPT09IGl0ZW0udGl0bGUgXHJcbiAgICAgICAgICAgICAgICAgICAgPyBcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCBkYXJrYmx1ZSwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgudHJlYXRtZW50VGl0bGUgPT09IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICApICYmIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAvLyBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgYmFja2dyb3VuZEltYWdlOiBhY3RpdmVUcmVhdG1lbnQgPT09IGl0ZW0udGl0bGUgJiYgXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgZGFya2JsdWUsIHJnYmEoMCwgMCwgMTM5LCAwLjQpKVwiIFxyXG4gICAgICAgICAgICAgICAgLy8gfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAhaXRlbS5kZXNjcmlwdGlvbiAmJiBcIjBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogIWl0ZW0uZGVzY3JpcHRpb24gJiYgXCI0cHhcIixcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+JHtpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogIWl0ZW0uZGVzY3JpcHRpb24gJiYgXCJub25lXCJ9fSBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRfY29udGVudH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbiAoeyBhY3RpdmVQYWdlIH0pIHtcclxuXHJcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXREYXRlcyhnZXREYXRlcygpKTtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gNSA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcbiAgICAgICAgICAgIDxoMT5Db25maXJtYXRpb248L2gxPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlQ2FyZCAoeyBkYXRlIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVDYXJkX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxkaXYgXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX2NhcmR9IFxyXG4gICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBkYXRlLndlZWtEYXkgPT09IFwiVG9kYXlcIiAmJiBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy53ZWVrRGF5X3RleHR9PntkYXRlLndlZWtEYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90ZXh0fT57ZGF0ZS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRoX3RleHR9PntkYXRlLm1vbnRofTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja0ljb25fY29udGFpbmVyfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7Ym9yZGVyOiBkYXRlLndlZWtEYXkgPT09IFwiVG9kYXlcIiAmJiBcIjFweCBzb2xpZCBibHVlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlID0ge3tjb2xvcjogZGF0ZS53ZWVrRGF5ID09PSBcIlRvZGF5XCIgJiYgXCJibHVlXCJ9fSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9nZXREYXRlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgRGF0ZUNhcmQgZnJvbSBcIi4vRGF0ZUNhcmRcIjtcclxuaW1wb3J0IFN0eWxpc3RzIGZyb20gXCIuL1N0eWxpc3RzXCI7XHJcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9UaW1lc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSAoeyBzdGF0ZSwgYWN0aXZlUGFnZSB9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RpbWV9IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAzID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMTRhYjhiMTI2ZC5qc1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+U2VsZWN0IFRoZSBUaW1lIC8gRGF0ZTwvaDM+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVUaW1lX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X0ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0IGFuZCBvYmplY0ZpdCBwcm9wZXJ0aWVzIG11c3QgYmUgc2V0IHRvIGZpbGwgdG8gbWFrZSB0aGUgaW1hZ2UgZml0IHRvIGl0J3MgY29udGFpbmVyLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXNfY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZXMubWFwKChkYXRlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNhcmQga2V5ID0ge2luZGV4ICsgMX0gZGF0ZSA9IHtkYXRlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3R5bGlzdHNfdGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxpc3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGltZXMgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEJlYXV0aWNpYW4gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZ1wiXHJcbmltcG9ydCBCZWF1dGljaWFuMiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R5bGlzdHMgKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdHNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGg0IHN0eWxlID0ge3ttYXJnaW5Cb3R0b206IFwiMTBweFwifX0+U3R5bGlzdDwvaDQ+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJwaW5rXCJ9fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5BdGhlbmE8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCZWF1dGljaWFufSAvPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+U291ZGk8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCZWF1dGljaWFufSAvPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+VGluYTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEJlYXV0aWNpYW4gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZ1wiXHJcbmltcG9ydCBCZWF1dGljaWFuMiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXMgKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn19IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4vaW1hZ2VzLzYuc3ZnXCI7XHJcblxyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9JbnB1dFwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5mb3JtYXRpb25QYXltZW50ICh7IGFjdGl2ZVBhZ2UsIGNsaWVudEluZm8sIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIsIHZhbGlkYXRpb25FcnJvciB9KSB7XHJcblxyXG4gICAgLy8gY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgLy8gfSwgW10pXHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5mb19wYXltZW50fSAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9e3N0eWxlcy5pbmZvUGF5bWVudF9oZWFkZXJ9PkluZm9ybWF0aW9uIC8gUGF5bWVudDwvaDQ+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9QYXltZW50X2NvbnRlbnR9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVfaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+TmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVfaW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5QaG9uZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiKzMxIDIzNSA1NjMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbF9pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9PkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImFiY2RAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIGtlZXAgbWUgaW5mb3JtZWQgb2YgdGhlIG9mZmVycyBhbmQgcHJvbW90aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93SGVhcmRBYm91dFVzX2lucHV0fSBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+SG93IGRpZCB5b3UgaGVhciBhYm91dCBhdGhlbmEgYmVhdXR5IGNhcmU/PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWUgPSBcImhvd0hlYXJkQWJvdXRVc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJGcmllbmRzXCI+RnJpZW5kczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJvdGhlcnNcIj5GcmllbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiaG93SGVhcmRBYm91dFVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8uaG93SGVhcmRBYm91dFVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiA8cD5QaG9uZTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0ICh7IHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCB2YWx1ZSwgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciwgdmFsaWRhdGlvbkVycm9yIH0pIHtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XHJcblxyXG4gICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICB0eXBlID0ge3R5cGV9IFxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHtuYW1lfSBcclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0ge3BsYWNlaG9sZGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlfSBcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8cCBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiB2YWxpZGF0aW9uRXJyb3IgPyBcImJsb2NrXCIgOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZWRcIlxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7cGxhY2Vob2xkZXIudG9Mb3dlckNhc2UoKX0gY2FuJ3QgYmUgYmxhbmtcclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG4vLyBpbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG4vLyBpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbi8vIGltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbi8vIGltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0xvY2F0aW9uLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9jYXRpb24gKHsgYWN0aXZlUGFnZSwgc3RhdGUsIHVwZGF0ZVN0YXRlIH0pIHtcclxuXHJcbiAgICBjb25zdCBbbG9jYXRpb25zLCBzZXRMb2NhdGlvbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldChcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zXCIpO1xyXG5cclxuICAgICAgICAgICAgc2V0TG9jYXRpb25zKHJlc3BvbnNlLmRhdGEubG9jYXRpb25zKTtcclxuXHJcbiAgICAgICAgfSBcclxuICAgICAgICBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlbGVjdF9sb2NhdGlvbn0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDIgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICA8aDQ+U2VsZWN0IHRoZSBMb2NhdGlvbjwvaDQ+XHJcblxyXG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25fbGlzdH0+XHJcbiAgICAgICAgICAgICAgIHtsb2NhdGlvbnMubWFwKChsb2NhdGlvbiwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5ID0ge2luZGV4ICsgMX0gY2xhc3NOYW1lPXtzdHlsZXMud3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2hpZGRlbkRpdn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljayA9IHt1cGRhdGVTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9jYXRpb24ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25JbmZvX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25faW5mb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUubG9jYXRpb24gPT09IGxvY2F0aW9uLm5hbWUgJiYgXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9jYXRpb25fY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2xvY2F0aW9uLm5hbWV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbi5hZGRyZXNzMX0sIHtsb2NhdGlvbi5hZGRyZXNzMn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5aaXAgQ29kZToge2xvY2F0aW9uLnppcENvZGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGhvbmU6IHtsb2NhdGlvbi5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uY2l0eX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uY291bnRyeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2ljb259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGUgPSB7e2NvbG9yOiBcImRhcmtibHVlXCIsIGZvbnRTaXplOiBcIjI0cHhcIn19IGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBOYXZpZ2F0aW9uQnV0dG9uIGZyb20gXCIuL05hdmlnYXRpb25CdXR0b25cIjtcclxuaW1wb3J0IE5hdmlnYXRpb25UZXh0IGZyb20gXCIuL05hdmlnYXRpb25UZXh0XCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uQmFyICh7IGFjdGl2ZVBhZ2UsIHNldEFjdGl2ZVBhZ2V9KSB7XHJcblxyXG4gICAgY29uc3QgaXRlbXMgPSBbXHJcbiAgICAgICAge2lkOiAxLCBjb250ZW50OiBcIkNhdGVnb3J5IGFuZCBUcmVhdG1lbnRcIn0sXHJcbiAgICAgICAge2lkOiAyLCBjb250ZW50OiBcIlNlbGVjdCBMb2NhdGlvblwifSxcclxuICAgICAgICB7aWQ6IDMsIGNvbnRlbnQ6IFwiU2VsZWN0IFRpbWUgLyBEYXRlXCJ9LFxyXG4gICAgICAgIHtpZDogNCwgY29udGVudDogXCJJbmZvcm1hdGlvbiAvIFBheW1lbnRcIn0sXHJcbiAgICAgICAge2lkOiA1LCBjb250ZW50OiBcIkNvbmZpcm1hdGlvblwifVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgY29uc3QgW3dpbmRvd1dpZHRoLCBzZXRXaW5kb3dXaWR0aF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICBpZih0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCkpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0V2luZG93V2lkdGgod2luZG93LmlubmVyV2lkdGgpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25CYXJfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fYmFyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dXaWR0aCA9IHt3aW5kb3dXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlUGFnZSA9IHtzZXRBY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2l0ZW0uaWR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvblRleHRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB7d2luZG93V2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHtpdGVtLmNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiLy8gLy9cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbiAoeyB3aW5kb3dXaWR0aCwgYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZSwgdmFsdWUgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZpZ2F0aW9uX2xpbmtzfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmICh3aW5kb3dXaWR0aCA8PSA2MDAgPyBcIjUwcHhcIiA6IFwiMTAwcHhcIil9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fY29udGFpbmVyfSBzdHlsZSA9IHt7d2lkdGg6IHZhbHVlID09PSA1ICYmIFwiMTAwJVwifX0+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JhY2tncm91bmRDb2xvcjogYWN0aXZlUGFnZSA9PT0gdmFsdWUgJiYgXCJkYXJrYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9IHtzdHlsZXMubmF2aWdhdGlvbkxpbmtfYnV0dG9ufSBcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHthY3RpdmVQYWdlfSBcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPSB7ZXZlbnQgPT4gc2V0QWN0aXZlUGFnZShOdW1iZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KSl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lID0ge3N0eWxlcy5ibGFua1BhcmFfY29udGFpbmVyfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiB2YWx1ZSA9PT0gNSAmJiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi8vc3R5bGUgPSB7e3Zpc2liaWxpdHk6IHZhbHVlID09PSBcIjVcIiAmJiBcImhpZGRlblwifX0iLCIvLyAvL1xyXG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZpZ2F0aW9uVGV4dCAoeyB3aW5kb3dXaWR0aCwgdGV4dCB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmlnYXRpb25fdGV4dH0gc3R5bGUgPSB7e3dpZHRoOiB0ZXh0ID09PSBcIkNvbmZpcm1hdGlvblwiICYmICh3aW5kb3dXaWR0aCA8PSA2MDAgPyBcIjUwcHhcIiA6IFwiMTAwcHhcIil9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0fSBzdHlsZSA9IHt7d2lkdGg6IHRleHQgPT09IFwiQ29uZmlybWF0aW9uXCIgJiYgXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnRleHRfY29udGVudH0gPnt0ZXh0fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9ibGFua0Rpdn0+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IGdldERhdGVzID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBkYXRlc0FycmF5ID0gW107XHJcblxyXG5cclxuICAgIGRhdGVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS5nZXREYXRlKCksXHJcbiAgICAgICAgd2Vla0RheTogXCJUb2RheVwiLFxyXG4gICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0gKVxyXG4gICAgfSlcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCB3ZWVrRGF5ID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgIHdlZWtkYXk6IFwic2hvcnRcIiB9KTtcclxuICAgICAgICBjb25zdCBtb250aCA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSlcclxuXHJcbiAgICAgICAgZGF0ZXNBcnJheS5wdXNoKHtkYXRlLCB3ZWVrRGF5LCBtb250aH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlc0FycmF5O1xyXG5cclxuXHJcbn0iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiLy8gUmVhY3RcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyXCI7XHJcbmltcG9ydCBDYXRlZ29yeVRyZWF0bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9DYXRlZ29yeVRyZWF0bWVudFwiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvblwiO1xyXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWVcIjtcclxuaW1wb3J0IEluZm9ybWF0aW9uUGF5bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50XCI7XHJcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9jb25maXJtYXRpb24tcGFnZS9Db25maXJtYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0ZWRUcmVhdG1lbnRzLCBzZXRTZWxlY3RlZFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3ZhbGlkYXRpb25FcnJvciwgc2V0VmFsaWRhdGlvbkVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IFtjbGllbnRJbmZvLCBzZXRDbGllbnRJbmZvXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBmaXJzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgaG93SGVhcmRBYm91dFVzOiBcIlwiLFxyXG4gICAgICAgIG90aGVyczogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiXCIsXHJcbiAgICAgICAgdHJlYXRtZW50OiBcIlwiLFxyXG4gICAgICAgIGxvY2F0aW9uOiBcIlwiLFxyXG4gICAgICAgIHNlc3Npb246IFwiXCIsXHJcbiAgICAgICAgZGF0ZTogXCJcIixcclxuICAgICAgICBzdHlsaXN0OiBcIlwiLFxyXG4gICAgICAgIGNvdXBvbjogXCJcIixcclxuICAgICAgICBwYWlkOiBmYWxzZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFthY3RpdmVDYXRlZ29yeSwgc2V0QWN0aXZlQ2F0ZWdvcnldID0gdXNlU3RhdGUoXCJCcm93c1wiKTtcclxuICAgIGNvbnN0IFthY3RpdmVUcmVhdG1lbnQsIHNldEFjdGl2ZVRyZWF0bWVudF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFthY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgXHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHZhbHVlcyBvZiB0aGUgbm9uIGlucHV0IGZpZWxkcyBzdWNoIGFzIGxvY2F0aW9uLCBzdHlsaXN0LCBkYXRlLCB0aW1lIGV0Yy4gXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYodGV4dC5pbmNsdWRlcyhcIkF0aGVuYSBCZWF1dHkgQ2FyZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQ2F0ZWdvcnkgKGUpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZVRyZWF0bWVudChcIlwiKTtcclxuICAgICAgICBzZXRBY3RpdmVDYXRlZ29yeSh0ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVUcmVhdG1lbnQgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRleHQgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgY29uc3QgdHJlYXRtZW50ID0gdGV4dC5zdWJzdHJpbmcoMCwgdGV4dC5pbmRleE9mKFwiLFwiKSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codHJlYXRtZW50KTtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGlmKHRyZWF0bWVudCA9PT0gYWN0aXZlVHJlYXRtZW50KSByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBzZXRBY3RpdmVUcmVhdG1lbnQodHJlYXRtZW50KTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4gYWN0aXZlVHJlYXRtZW50ID8gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpIDogc2V0QWN0aXZlVHJlYXRtZW50KHRyZWF0bWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gYWRkVHJlYXRtZW50IChzdHlsaXN0LCBpdGVtKSB7XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0eWxpc3QsIGl0ZW0pO1xyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAgICBcclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGFscmVhZHkgc2VsZWN0ZWQgdHJlYXRtZW50cyB0byBzZWUgaWYgY2xpY2tlZCBvbmUgZXhpc3RzIG9yIG5vdC4gSXQgcmV0dXJucyBlaXRoZXIgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKG5ld0l0ZW0gPT4gbmV3SXRlbS50cmVhdG1lbnRUaXRsZSA9PT0gaXRlbS50aXRsZSk7XHJcblxyXG4gICAgICAgIC8vIElmIGNsaWNrZWQgdHJlYXRtZW50IGV4aXN0cyB1cGRhdGUgdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBhcnJheSBieSByZW1vdmluZyB0aGUgY2xpY2tlZCB0cmVhdG1lbnRcclxuICAgICAgICBpZihkb2VzRXhpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5mb3JFYWNoKG5ld0l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYobmV3SXRlbS50cmVhdG1lbnRUaXRsZSAhPT0gaXRlbS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHN0eWxpc3QpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBpdGVtLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiBpdGVtLmR1cmF0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEFjdGl2ZVRyZWF0bWVudChcIlwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgY2xpY2tlZCB0cmVhdG1lbnQgZG9lc24ndCBleGlzdCB0aGVuIGFkZCBpdCBpbiB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGFycmF5XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLCBcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBpdGVtLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogaXRlbS5kdXJhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyIChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBuYW1lID0gZXZlbnQudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQudmFsdWVcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldENsaWVudEluZm8oY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIFtuYW1lXTogdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFRyZWF0bWVudHMpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9IHNldEFjdGl2ZVBhZ2UgPSB7c2V0QWN0aXZlUGFnZX0gLz5cclxuXHJcblxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlUcmVhdG1lbnRcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICBhZGRUcmVhdG1lbnQgPSB7YWRkVHJlYXRtZW50fVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVUcmVhdG1lbnQgPSB7YWN0aXZlVHJlYXRtZW50fVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlQWN0aXZlVHJlYXRtZW50ID0ge2NoYW5nZUFjdGl2ZVRyZWF0bWVudH0gXHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxMb2NhdGlvbiBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxEYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPEluZm9ybWF0aW9uUGF5bWVudCBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudEluZm8gPSB7Y2xpZW50SW5mb31cclxuICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn0gXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuXHJcbiAgICAgICAgICAgIDxDb25maXJtYXRpb24gYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9jb21wb25lbnRzL2NsaWVudHMvaW5mb3JtYXRpb24tcGF5bWVudC9pbWFnZXMvNi5jNjVlNGExNmY1YmYwYjBjMDRkMjBkZDUxMjVhZmJmMS5zdmdcIixcImhlaWdodFwiOjI0MCxcIndpZHRoXCI6MzI4fTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzLzUuYzFiYTg4NTU1MjgwYWU4NjJiNGE3Njg1M2VmMGE1NDEuc3ZnXCIsXCJoZWlnaHRcIjoxODksXCJ3aWR0aFwiOjI0Mn07IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZ1wiLFwiaGVpZ2h0XCI6MTI4LFwid2lkdGhcIjo3NyxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZDb21wb25lbnQrMTQzKyVFMiU4MCU5MysyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQuNTNhM2JkMTE1ZTA4NjdiOGU1MDhhMmNmZTVmNmRmNmMucG5nXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZwZXJzb24tZ2lybC1mbGF0LjUzYTNiZDExNWUwODY3YjhlNTA4YTJjZmU1ZjZkZjZjLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5lY2I4Y2M0NzIyMTM3OTA0ZDcwMjJjNTkxODM0OWE2Zi5qcGdcIixcImhlaWdodFwiOjQwMDAsXCJ3aWR0aFwiOjYwMDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGaW1hZ2VzJTJGcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZyZ3PTgmcT03MFwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjYXRlZ29yeV90cmVhdG1lbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeV90cmVhdG1lbnRfXzNTWXpGXCIsXG5cdFwiY2F0ZWdvcnlcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeV9fMnRGMmZcIixcblx0XCJ0cmVhdG1lbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRfXzJ3em51XCIsXG5cdFwiaGVhZGVyXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfaGVhZGVyX18xS3F6YlwiLFxuXHRcImNhdGVnb3J5SXRlbV9saXN0XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlJdGVtX2xpc3RfXzVwb2Z2XCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2NvbnRhaW5lclwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5SXRlbV9jb250YWluZXJfXzNkd2M3XCIsXG5cdFwiY2F0ZWdvcnlfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5X2l0ZW1fX1JyT1hoXCIsXG5cdFwiY2F0ZWdvcnlJdGVtX2NvbnRlbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeUl0ZW1fY29udGVudF9fMmltYnNcIixcblx0XCJ0cmVhdG1lbnRJdGVtX2NvbnRhaW5lclwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudEl0ZW1fY29udGFpbmVyX19Fc1Q3Y1wiLFxuXHRcImNhdGVnb3J5VHJlYXRtZW50X2hpZGRlbkRpdlwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5VHJlYXRtZW50X2hpZGRlbkRpdl9fMXhDbHNcIixcblx0XCJ0cmVhdG1lbnRfaXRlbVwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9pdGVtX18xUnlQdFwiLFxuXHRcInRyZWF0bWVudEl0ZW1fY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudEl0ZW1fY29udGVudF9fT2tsZWlcIixcblx0XCJ0cmVhdG1lbnRfY29udGVudFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3RyZWF0bWVudF9jb250ZW50X19MLTZSZVwiLFxuXHRcInN0eWxpc3RzXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfc3R5bGlzdHNfXzN6eW9GXCIsXG5cdFwic3R5bGlzdF9saXN0XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfc3R5bGlzdF9saXN0X18yUGsyS1wiLFxuXHRcInN0eWxpc3RMaXN0X2l0ZW1cIjogXCJDYXRlZ29yeVRyZWF0bWVudF9zdHlsaXN0TGlzdF9pdGVtX18yUHBoYlwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZGF0ZV90aW1lXCI6IFwiRGF0ZVRpbWVfZGF0ZV90aW1lX18xV2wzRlwiLFxuXHRcImhlYWRlclwiOiBcIkRhdGVUaW1lX2hlYWRlcl9fLU5meE9cIixcblx0XCJkYXRlVGltZV9jb250ZW50XCI6IFwiRGF0ZVRpbWVfZGF0ZVRpbWVfY29udGVudF9fWk93QUtcIixcblx0XCJjb250ZW50X0ltYWdlXCI6IFwiRGF0ZVRpbWVfY29udGVudF9JbWFnZV9fTm93ejJcIixcblx0XCJkYXRlc19jb250YWluZXJcIjogXCJEYXRlVGltZV9kYXRlc19jb250YWluZXJfX3JYLVdkXCIsXG5cdFwiZGF0ZXNcIjogXCJEYXRlVGltZV9kYXRlc19fMjFVa2lcIixcblx0XCJwcmV2XCI6IFwiRGF0ZVRpbWVfcHJldl9fQXk5bGZcIixcblx0XCJuZXh0XCI6IFwiRGF0ZVRpbWVfbmV4dF9fMlpVeFRcIixcblx0XCJkYXRlQ2FyZF9jb250YWluZXJcIjogXCJEYXRlVGltZV9kYXRlQ2FyZF9jb250YWluZXJfXzJfMFVpXCIsXG5cdFwiZGF0ZV9jYXJkXCI6IFwiRGF0ZVRpbWVfZGF0ZV9jYXJkX18yWVZQblwiLFxuXHRcIndlZWtEYXlfdGV4dFwiOiBcIkRhdGVUaW1lX3dlZWtEYXlfdGV4dF9fMVNqenNcIixcblx0XCJkYXRlX3RleHRcIjogXCJEYXRlVGltZV9kYXRlX3RleHRfXzFtaTNlXCIsXG5cdFwibW9udGhfdGV4dFwiOiBcIkRhdGVUaW1lX21vbnRoX3RleHRfXzFyVVFUXCIsXG5cdFwiY2xvY2tJY29uX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX2Nsb2NrSWNvbl9jb250YWluZXJfXzJOQXRmXCIsXG5cdFwic3R5bGlzdHNfdGltZXNcIjogXCJEYXRlVGltZV9zdHlsaXN0c190aW1lc19fMUJPSU1cIixcblx0XCJzdHlsaXN0c19jb250YWluZXJcIjogXCJEYXRlVGltZV9zdHlsaXN0c19jb250YWluZXJfXzE0NFMzXCIsXG5cdFwidGltZXNfY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfdGltZXNfY29udGFpbmVyX18zcVlhalwiLFxuXHRcInRpbWVzXCI6IFwiRGF0ZVRpbWVfdGltZXNfXzExXzlxXCIsXG5cdFwidGltZVwiOiBcIkRhdGVUaW1lX3RpbWVfXzJ0TXVWXCIsXG5cdFwidGltZV90ZXh0XCI6IFwiRGF0ZVRpbWVfdGltZV90ZXh0X18xak0xRVwiLFxuXHRcInN0eWxpc3RcIjogXCJEYXRlVGltZV9zdHlsaXN0X18yOFpxNFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fMTd5YjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluZm9QYXltZW50X2hlYWRlclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9oZWFkZXJfX1ByWDV4XCIsXG5cdFwiaW5mb1BheW1lbnRfY29udGVudFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9jb250ZW50X18xTXh2cFwiLFxuXHRcImltYWdlX2NvbnRhaW5lclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbWFnZV9jb250YWluZXJfXzE1eWNkXCIsXG5cdFwiaW5wdXRfbGFiZWxcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfbGFiZWxfXzFaMXVPXCIsXG5cdFwiaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfXzFMSjJkXCIsXG5cdFwiY2hlY2tib3hcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfY2hlY2tib3hfXzM3S0tsXCIsXG5cdFwibmFtZV9pbnB1dHNcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfbmFtZV9pbnB1dHNfXzFCU2lSXCIsXG5cdFwibmFtZV9pbmZvXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X25hbWVfaW5mb19fMVFsZkhcIixcblx0XCJwaG9uZV9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9waG9uZV9pbnB1dF9fM1BNSVBcIixcblx0XCJlbWFpbF9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9lbWFpbF9pbnB1dF9fMU9WcldcIixcblx0XCJob3dIZWFyZEFib3V0VXNfaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaG93SGVhcmRBYm91dFVzX2lucHV0X18zdmxYTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VsZWN0X2xvY2F0aW9uXCI6IFwiTG9jYXRpb25fc2VsZWN0X2xvY2F0aW9uX19uSnBOV1wiLFxuXHRcImxvY2F0aW9uX2xpc3RcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9saXN0X18zZmwxd1wiLFxuXHRcIndyYXBwZXJcIjogXCJMb2NhdGlvbl93cmFwcGVyX19SSm4tZVwiLFxuXHRcImxvY2F0aW9uX2hpZGRlbkRpdlwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2hpZGRlbkRpdl9fM2hOdjRcIixcblx0XCJsb2NhdGlvbkluZm9fY29udGFpbmVyXCI6IFwiTG9jYXRpb25fbG9jYXRpb25JbmZvX2NvbnRhaW5lcl9fMnZVc0tcIixcblx0XCJsb2NhdGlvbl9pbmZvXCI6IFwiTG9jYXRpb25fbG9jYXRpb25faW5mb19fM0pmUHdcIixcblx0XCJsb2NhdGlvbl9jb250ZW50XCI6IFwiTG9jYXRpb25fbG9jYXRpb25fY29udGVudF9fMk9fcTNcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm5hdmlnYXRpb25CYXJfY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uQmFyX2NvbnRhaW5lcl9fM2MtMkhcIixcblx0XCJ3cmFwcGVyXCI6IFwiTmF2aWdhdGlvbkJhcl93cmFwcGVyX19hWktvc1wiLFxuXHRcIm5hdmlnYXRpb25fYmFyXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uX2Jhcl9fWTg1VVpcIixcblx0XCJuYXZpZ2F0aW9uX2xpbmtzXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uX2xpbmtzX19xZEotU1wiLFxuXHRcImJ1dHRvbl9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX2J1dHRvbl9jb250YWluZXJfXzFrUkIzXCIsXG5cdFwibmF2aWdhdGlvbkxpbmtfYnV0dG9uXCI6IFwiTmF2aWdhdGlvbkJhcl9uYXZpZ2F0aW9uTGlua19idXR0b25fXzExN0xEXCIsXG5cdFwiYmxhbmtQYXJhX2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfYmxhbmtQYXJhX2NvbnRhaW5lcl9feVRZdTRcIixcblx0XCJuYXZpZ2F0aW9uVGV4dF9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25UZXh0X2NvbnRhaW5lcl9fMkxXY1JcIixcblx0XCJuYXZpZ2F0aW9uX3RleHRcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25fdGV4dF9fMl9xTjVcIixcblx0XCJ0ZXh0XCI6IFwiTmF2aWdhdGlvbkJhcl90ZXh0X18zd2FWaVwiLFxuXHRcInRleHRfY29udGVudFwiOiBcIk5hdmlnYXRpb25CYXJfdGV4dF9jb250ZW50X18yV0pGVVwiLFxuXHRcInRleHRfYmxhbmtEaXZcIjogXCJOYXZpZ2F0aW9uQmFyX3RleHRfYmxhbmtEaXZfXzJXaERVXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvaW1hZ2UnKVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9pbWFnZS1jb25maWcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaGVhZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvc2NyaXB0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJzdHlsZXMiLCJDYXRlZ29yeSIsIml0ZW0iLCJpbmRleCIsImFjdGl2ZUNhdGVnb3J5IiwiY2hhbmdlQWN0aXZlQ2F0ZWdvcnkiLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJjYXRlZ29yeUl0ZW1fY29udGFpbmVyIiwiY2F0ZWdvcnlUcmVhdG1lbnRfaGlkZGVuRGl2IiwidGl0bGUiLCJjYXRlZ29yeV9pdGVtIiwiY2F0ZWdvcnlJdGVtX2NvbnRlbnQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzb21lIiwieCIsImNhdGVnb3J5IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJheGlvcyIsIlRyZWF0bWVudCIsIkNhdGVnb3J5VHJlYXRtZW50IiwiYWN0aXZlUGFnZSIsImFjdGl2ZVRyZWF0bWVudCIsImNoYW5nZUFjdGl2ZVRyZWF0bWVudCIsImFkZFRyZWF0bWVudCIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidHJlYXRtZW50cyIsInNldFRyZWF0bWVudHMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJuZXdSZXNwb25zZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsIm1zZyIsImFkZE5ld1RyZWF0bWVudCIsInN0eWxpc3QiLCJ0cmVhdG1lbnQiLCJjYXRlZ29yeV90cmVhdG1lbnQiLCJkaXNwbGF5IiwiaGVhZGVyIiwiY2F0ZWdvcnlJdGVtX2xpc3QiLCJtYXAiLCJ0cmVhdG1lbnRJdGVtX2xpc3QiLCJ0cmVhdG1lbnRJdGVtX2NvbnRhaW5lciIsImR1cmF0aW9uIiwicHJpY2UiLCJzdHlsaXN0cyIsInN0eWxpc3RfbGlzdCIsInN0eWxpc3RMaXN0X2l0ZW0iLCJlIiwidGFyZ2V0IiwidGV4dENvbnRlbnQiLCJuZXdJdGVtIiwiY2hvb3NlblN0eWxpc3QiLCJ0cmVhdG1lbnRUaXRsZSIsInRyZWF0bWVudF9pdGVtIiwidHJlYXRtZW50SXRlbV9jb250ZW50IiwibWFyZ2luQm90dG9tIiwiZGVzY3JpcHRpb24iLCJwYWRkaW5nQm90dG9tIiwidHJlYXRtZW50X2NvbnRlbnQiLCJTY3JpcHQiLCJJbWFnZSIsIkxvZ2luQmdJbWFnZSIsIkxvZ28iLCJnZXREYXRlcyIsIkNvbmZpcm1hdGlvbiIsImRhdGVzIiwic2V0RGF0ZXMiLCJEYXRlQ2FyZCIsImRhdGUiLCJkYXRlQ2FyZF9jb250YWluZXIiLCJkYXRlX2NhcmQiLCJ3ZWVrRGF5Iiwid2Vla0RheV90ZXh0IiwiZGF0ZV90ZXh0IiwibW9udGhfdGV4dCIsIm1vbnRoIiwiY2xvY2tJY29uX2NvbnRhaW5lciIsImJvcmRlciIsIlN0eWxpc3RzIiwiVGltZXMiLCJEYXRlVGltZSIsInN0YXRlIiwiZGF0ZV90aW1lIiwiZGF0ZVRpbWVfY29udGVudCIsImNvbnRlbnRfSW1hZ2UiLCJkYXRlc19jb250YWluZXIiLCJwcmV2IiwibmV4dCIsInN0eWxpc3RzX3RpbWVzIiwiQmVhdXRpY2lhbiIsIkJlYXV0aWNpYW4yIiwic3R5bGlzdHNfY29udGFpbmVyIiwiaW1hZ2VIaWRkZW5fZGl2IiwidGV4dEFsaWduIiwidGltZXNfY29udGFpbmVyIiwidGltZXMiLCJ0aW1lIiwidGltZV90ZXh0IiwiSW5wdXQiLCJJbmZvcm1hdGlvblBheW1lbnQiLCJjbGllbnRJbmZvIiwiY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciIsInZhbGlkYXRpb25FcnJvciIsImluZm9fcGF5bWVudCIsImluZm9QYXltZW50X2hlYWRlciIsImluZm9QYXltZW50X2NvbnRlbnQiLCJpbWFnZV9jb250YWluZXIiLCJuYW1lX2lucHV0cyIsImlucHV0X2xhYmVsIiwibmFtZV9pbmZvIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJwaG9uZV9pbnB1dCIsInBob25lIiwiZW1haWxfaW5wdXQiLCJlbWFpbCIsImNoZWNrYm94IiwiaG93SGVhcmRBYm91dFVzX2lucHV0IiwidHlwZSIsIm5hbWUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwiaW5wdXQiLCJ0b0xvd2VyQ2FzZSIsIkxvY2F0aW9uIiwidXBkYXRlU3RhdGUiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJzZWxlY3RfbG9jYXRpb24iLCJsb2NhdGlvbl9saXN0IiwibG9jYXRpb24iLCJ3cmFwcGVyIiwibG9jYXRpb25faGlkZGVuRGl2IiwibG9jYXRpb25JbmZvX2NvbnRhaW5lciIsImxvY2F0aW9uX2luZm8iLCJsb2NhdGlvbl9jb250ZW50IiwiYWRkcmVzczEiLCJhZGRyZXNzMiIsInppcENvZGUiLCJjaXR5IiwiY291bnRyeSIsImxvY2F0aW9uX2ljb24iLCJmb250U2l6ZSIsIk5hdmlnYXRpb25CdXR0b24iLCJOYXZpZ2F0aW9uVGV4dCIsIk5hdmlnYXRpb25CYXIiLCJzZXRBY3RpdmVQYWdlIiwiaXRlbXMiLCJpZCIsImNvbnRlbnQiLCJ3aW5kb3dXaWR0aCIsInNldFdpbmRvd1dpZHRoIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImlubmVyV2lkdGgiLCJuYXZpZ2F0aW9uQmFyX2NvbnRhaW5lciIsIm5hdmlnYXRpb25fYmFyIiwibmF2aWdhdGlvblRleHRfY29udGFpbmVyIiwibmF2aWdhdGlvbl9saW5rcyIsIndpZHRoIiwiYnV0dG9uX2NvbnRhaW5lciIsIm5hdmlnYXRpb25MaW5rX2J1dHRvbiIsImV2ZW50IiwiTnVtYmVyIiwiYmxhbmtQYXJhX2NvbnRhaW5lciIsInRleHQiLCJuYXZpZ2F0aW9uX3RleHQiLCJ0ZXh0X2NvbnRlbnQiLCJ0ZXh0X2JsYW5rRGl2IiwiZGF0ZXNBcnJheSIsInB1c2giLCJEYXRlIiwiZ2V0RGF0ZSIsInRvTG9jYWxlU3RyaW5nIiwiaSIsIm5ld0RhdGUiLCJnZXRUaW1lIiwid2Vla2RheSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJJbWFnZTEiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9oZWFkIiwiX3RvQmFzZTY0IiwiX2ltYWdlQ29uZmlnIiwiX3VzZUludGVyc2VjdGlvbiIsIl9kZWZpbmVQcm9wZXJ0eSIsIm9iaiIsImtleSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIl9fZXNNb2R1bGUiLCJfb2JqZWN0U3ByZWFkIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwic291cmNlIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJjb25jYXQiLCJmaWx0ZXIiLCJzeW0iLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJmb3JFYWNoIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIiwiZXhjbHVkZWQiLCJfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSIsInNvdXJjZVN5bWJvbEtleXMiLCJpbmRleE9mIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwiTWF0aCIsIm1pbiIsIndpZHRocyIsInMiLCJraW5kIiwidyIsImZpbmQiLCJwIiwiZ2VuZXJhdGVJbWdBdHRycyIsInVub3B0aW1pemVkIiwicXVhbGl0eSIsInNyY1NldCIsImxhc3QiLCJqb2luIiwiZ2V0SW50IiwiZGVmYXVsdEltYWdlTG9hZGVyIiwibG9hZGVyUHJvcHMiLCJsb2FkIiwicm9vdCIsIkVycm9yIiwiVkFMSURfTE9BREVSUyIsImhhbmRsZUxvYWRpbmciLCJpbWciLCJvbkxvYWRpbmdDb21wbGV0ZSIsImhhbmRsZUxvYWQiLCJzdGFydHNXaXRoIiwiZGVjb2RlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJjYXRjaCIsInRoZW4iLCJzdHlsZSIsImJhY2tncm91bmRTaXplIiwiYWRkIiwibmF0dXJhbFdpZHRoIiwibmF0dXJhbEhlaWdodCIsInJlZiIsInBhcmVudEVsZW1lbnQiLCJwYXJlbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwid2FybiIsInBvc2l0aW9uIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxvYWRpbmciLCJsYXp5Qm91bmRhcnkiLCJjbGFzc05hbWUiLCJoZWlnaHQiLCJvYmplY3RGaXQiLCJvYmplY3RQb3NpdGlvbiIsImJsdXJEYXRhVVJMIiwiYWxsIiwicmVzdCIsInN0YXRpY1NyYyIsInN0YXRpY0ltYWdlRGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ3aWR0aEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpc0xhenkiLCJoYXMiLCJpbmNsdWRlcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwiZmxvb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsInNldFJlZiIsImlzSW50ZXJzZWN0ZWQiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3cmFwcGVyU3R5bGUiLCJzaXplclN0eWxlIiwic2l6ZXJTdmciLCJpbWdTdHlsZSIsInRvcCIsImxlZnQiLCJib3R0b20iLCJyaWdodCIsImJveFNpemluZyIsInBhZGRpbmciLCJtYXJnaW4iLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYmx1clN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwib3ZlcmZsb3ciLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpbWdBdHRyaWJ1dGVzIiwic3JjU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImFsdCIsInRvQmFzZTY0IiwiYXNzaWduIiwiZGVjb2RpbmciLCJyZWwiLCJhcyIsImhyZWYiLCJpbWFnZXNyY3NldCIsImltYWdlc2l6ZXMiLCJub3JtYWxpemVTcmMiLCJzbGljZSIsInVybCIsIlVSTCIsInBhcmFtcyIsInNlYXJjaFBhcmFtcyIsInNldCIsInBhcmFtc1N0cmluZyIsIm1pc3NpbmdWYWx1ZXMiLCJwYXJzZWRTcmMiLCJlcnIiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsImNiIiwic3RhcnQiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJtYXgiLCJjbGVhclRpbWVvdXQiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidXNlUmVmIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VDYWxsYmFjayIsImVsIiwiY3VycmVudCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib3B0aW9ucyIsIm9ic2VydmVyIiwiZWxlbWVudHMiLCJjcmVhdGVPYnNlcnZlciIsImRlbGV0ZSIsInNpemUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZXJzIiwiaW5zdGFuY2UiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwiSG9tZSIsInNldFNlbGVjdGVkVHJlYXRtZW50cyIsInNldFZhbGlkYXRpb25FcnJvciIsInNldENsaWVudEluZm8iLCJob3dIZWFyZEFib3V0VXMiLCJvdGhlcnMiLCJzZXRTdGF0ZSIsInNlc3Npb24iLCJjb3Vwb24iLCJwYWlkIiwic2V0QWN0aXZlQ2F0ZWdvcnkiLCJzZXRBY3RpdmVUcmVhdG1lbnQiLCJjdXJyZW50VmFsdWUiLCJzdWJzdHJpbmciLCJkb2VzRXhpc3QiLCJ0ZW1wIiwidHJlYXRtZW50RHVyYXRpb24iLCJ0cmVhdG1lbnRQcmljZSIsImhvbWUiXSwic291cmNlUm9vdCI6IiJ9
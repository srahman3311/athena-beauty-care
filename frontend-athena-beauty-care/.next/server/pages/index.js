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

/***/ "./components/clients/client-reusable-components/Event.js":
/*!****************************************************************!*\
  !*** ./components/clients/client-reusable-components/Event.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/Event.module.css */ "./styles/Event.module.css");
/* harmony import */ var _styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_7_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../images/7.svg */ "./images/7.svg");
/* harmony import */ var _reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../reusable-components/Button */ "./components/reusable-components/Button.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\client-reusable-components\\Event.js";






function Event({
  event
}) {
  const {
    startTime
  } = event;
  const eventDate = new Date(startTime.substring(0, startTime.indexOf("T")));
  const eventStartTime = startTime.substring(startTime.indexOf("T") + 1, startTime.length);
  const date = eventDate.getDate();
  const weekDay = eventDate.toLocaleString("en-us", {
    weekday: "long"
  });
  const month = eventDate.toLocaleString("en-us", {
    month: "long"
  });
  const year = eventDate.getFullYear();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event_image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_0___default()), {
        src: _images_7_svg__WEBPACK_IMPORTED_MODULE_1__.default,
        alt: "Login Background Image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event_title),
      children: event.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event_date),
      children: [weekDay, ", ", month, " ", date, ", ", year]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("h2", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().event_time),
      children: eventStartTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().button_div),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: `Pay $${event.eventPrice}.00`,
        customClassName: "cancel_button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "Cancel",
        customClassName: "cancel_button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "Re-schedule",
        customClassName: "cancel_button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "Edit forms",
        customClassName: "cancel_button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().message_to_client),
      children: "Your appointment is confirmed, we can't wait to see you..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().message_to_client),
      children: "Make sure you read the confirmation email and don't miss out on any important information regarding your appointment"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
      className: (_styles_Event_module_css__WEBPACK_IMPORTED_MODULE_4___default().button_div),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "Register for an account"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_reusable_components_Button__WEBPACK_IMPORTED_MODULE_2__.default, {
        text: "Schedule another appointment"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Event);

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
/* harmony import */ var _client_reusable_components_Event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../client-reusable-components/Event */ "./components/clients/client-reusable-components/Event.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)("div", {
    style: {
      display: activePage === 5 ? "block" : "none",
      textAlign: "center"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_6__.default, {
      content: "Confirmation"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, this), clientEvents.length && clientEvents.map(event => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_client_reusable_components_Event__WEBPACK_IMPORTED_MODULE_7__.default, {
        event: event
      }, event._id.toString(), false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }, this);
    })]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
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

/***/ "./components/reusable-components/Button.js":
/*!**************************************************!*\
  !*** ./components/reusable-components/Button.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Button.module.css */ "./styles/Button.module.css");
/* harmony import */ var _styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Button.js";



function Button({
  text,
  customClassName
}) {
  // Dynamic style of button based on className provided from parent component
  let buttonStyle = {
    backgroundImage: "linear-gradient(rgba(0, 0, 139, 0.678), rgb(0, 0, 139), rgba(0, 0, 139, 0.664))"
  };

  if (customClassName === "cancel_button") {
    buttonStyle.backgroundImage = "linear-gradient(#f05454b2, #F05454, #f05454b2)";
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    className: (_styles_Button_module_css__WEBPACK_IMPORTED_MODULE_1___default().button),
    style: buttonStyle,
    children: text
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

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
      lineNumber: 267,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_information_payment_InformationPayment__WEBPACK_IMPORTED_MODULE_8__.default, {
      activePage: activePage,
      clientInfo: clientInfo,
      clientInfoOnChangeHandler: clientInfoOnChangeHandler,
      validationError: validationError,
      createBooking: createBooking
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 280,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_clients_confirmation_page_Confirmation__WEBPACK_IMPORTED_MODULE_9__.default, {
      activePage: activePage,
      clientEvents: clientEvents
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 289,
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

/***/ "./images/7.svg":
/*!**********************!*\
  !*** ./images/7.svg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/images/7.60aefd4a55b8a073b31407ce42c14a97.svg","height":195,"width":297});

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

/***/ "./styles/Button.module.css":
/*!**********************************!*\
  !*** ./styles/Button.module.css ***!
  \**********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Button_button__1rPei"
};


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

/***/ "./styles/Event.module.css":
/*!*********************************!*\
  !*** ./styles/Event.module.css ***!
  \*********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"event": "Event_event__1D2r-",
	"event_image": "Event_event_image__Npqet",
	"event_title": "Event_event_title__k83MB",
	"event_date": "Event_event_date__3yaup",
	"event_time": "Event_event_time__usO2V",
	"message_to_client": "Event_message_to_client__3rlY8",
	"button_div": "Event_button_div__2GxcT",
	"abc": "Event_abc__2GyG0"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDYkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0M7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2F0ZWdvcnktdHJlYXRtZW50L0NhdGVnb3J5VHJlYXRtZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvVHJlYXRtZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9jYXRlZ29yeS10cmVhdG1lbnQvY2F0ZWdvcnkvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9jYXRlZ29yeS9DYXRlZ29yeVNlcmlhbC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvRXZlbnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlci5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvY29uZmlybWF0aW9uLXBhZ2UvQ29uZmlybWF0aW9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZUNhcmQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZS5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL1N0eWxpc3RzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L0lucHV0LmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9saWJzL3VzZUF4aW9zLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL2NsaWVudHMvbG9jYXRpb24vTG9jYXRpb25JY29uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQnV0dG9uLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uVGV4dC5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQWxlcnQuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9mZXRjaEV2ZW50cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRTdHlsaXN0cy5qcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvaGVscGVyLWZ1bmN0aW9ucy9nZXRXb3JraW5nVGltZXMuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbGliL2dldERhdGVzLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2xpYnMvdXNlQXhpb3MuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvaW1hZ2VzLzYuc3ZnIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy81LnN2ZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvNy5zdmciLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS8uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvQnV0dG9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0V2ZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvY2xpZW50LXVpL0NsaWVudEdsb2JhbHMubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvLi9zdHlsZXMvY2xpZW50LXVpL0xvY2F0aW9uLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlLy4vbm9kZV9tb2R1bGVzL25leHQvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi90by1iYXNlLTY0LmpzXCIiLCJ3ZWJwYWNrOi8vZnJvbnRlbmQtYXRoZW5hLWJlYXV0eS1jYXJlL2V4dGVybmFsIFwibmV4dC9zY3JpcHRcIiIsIndlYnBhY2s6Ly9mcm9udGVuZC1hdGhlbmEtYmVhdXR5LWNhcmUvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2Zyb250ZW5kLWF0aGVuYS1iZWF1dHktY2FyZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uLy4uLy4uL2xpYnMvdXNlQXhpb3NcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ2F0ZWdvcnkgZnJvbSBcIi4vY2F0ZWdvcnkvQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IFRyZWF0bWVudCBmcm9tIFwiLi9UcmVhdG1lbnRcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5VHJlYXRtZW50ICh7IFxyXG4gICAgYWN0aXZlUGFnZSwgXHJcbiAgICBhY3RpdmVDYXRlZ29yeSwgXHJcbiAgICBjaGFuZ2VBY3RpdmVDYXRlZ29yeSwgXHJcbiAgICBzZWxlY3RlZFRyZWF0bWVudHMsXHJcbiAgICBzZWxlY3RUcmVhdG1lbnQgXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCB7XHJcbiAgICAgICAgZGF0YTogY2F0ZWdvcnlEYXRhLCBlcnJvcjogY2F0ZWdvcnlEYXRhRmV0Y2hpbmdFcnJvciwgbG9hZGluZzogY2F0ZWdvcnlEYXRhTG9hZGluZ1xyXG4gICAgfSA9IHVzZUF4aW9zKFwiZ2V0XCIsIFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCIsIHt9KTtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiB0cmVhdG1lbnREYXRhLCBlcnJvcjogdHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IsIGxvYWRpbmc6IHRyZWF0bWVudERhdGFMb2FkaW5nXHJcbiAgICB9ID0gdXNlQXhpb3MoXCJnZXRcIiwgXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3RyZWF0bWVudHNcIiwge30pXHJcblxyXG4gICAgY29uc3QgW2NhdGVnb3JpZXMsIHNldENhdGVnb3JpZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3RyZWF0bWVudHMsIHNldFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGNhdGVnb3J5RGF0YSAhPT0gbnVsbCkgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeURhdGEpO1xyXG4gICAgICAgIGlmKHRyZWF0bWVudERhdGEgIT09IG51bGwpIHNldFRyZWF0bWVudHModHJlYXRtZW50RGF0YSk7XHJcblxyXG4gICAgfSwgW2NhdGVnb3J5RGF0YSwgdHJlYXRtZW50RGF0YV0pXHJcblxyXG5cclxuXHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIC8vIGZ1bmN0aW9uIGFkZE5ld1RyZWF0bWVudChzdHlsaXN0LCB0cmVhdG1lbnQpIHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhzdHlsaXN0KTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0cmVhdG1lbnQpXHJcbiAgICAvLyB9XHJcblxyXG4gICBcclxuICAgIC8vIGlmKGNhdGVnb3J5RGF0YUxvYWRpbmcgfHwgdHJlYXRtZW50RGF0YUxvYWRpbmcpIHtcclxuICAgIC8vICAgICByZXR1cm4gKDxkaXY+TG9hZGluZy4uLi48L2Rpdj4pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIGlmKGNhdGVnb3J5RGF0YUZldGNoaW5nRXJyb3IgfHwgdHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IpIHtcclxuICAgIC8vICAgICByZXR1cm4gKDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4pO1xyXG4gICAgLy8gfVxyXG4gICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeV90cmVhdG1lbnR9IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAyID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yeX0+XHJcbiAgICAgICAgICAgICAgICB7LyogPGg0IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+U2VsZWN0IHRoZSBDYXRlZ29yeTwvaDQ+ICovfVxyXG4gICAgICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IGNhdGVnb3J5XCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlJdGVtX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjYXRlZ29yaWVzLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXRlZ29yeSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0ge2l0ZW19IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZUNhdGVnb3J5ID0ge2FjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5ID0ge2NoYW5nZUFjdGl2ZUNhdGVnb3J5fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudH0+XHJcbiAgICAgICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgdHJlYXRtZW50XCIvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50SXRlbV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICB7dHJlYXRtZW50cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VHJlYXRtZW50IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSB7aXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnRzID0ge3RyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0VHJlYXRtZW50ID0ge3NlbGVjdFRyZWF0bWVudH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ2F0ZWdvcnlUcmVhdG1lbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgY2xpZW50R2xvYmFsU3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvY2xpZW50LXVpL0NsaWVudEdsb2JhbHMubW9kdWxlLmNzc1wiXHJcblxyXG4vLyBDb21wb25lbnRzXHJcbmltcG9ydCBFdmVudEhhbmRsZXJEaXYgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdlwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUcmVhdG1lbnQgKHsgXHJcbiAgICBpdGVtLCBcclxuICAgIGFjdGl2ZUNhdGVnb3J5LCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cywgXHJcbiAgICBzZWxlY3RUcmVhdG1lbnQsXHJcbiAgICB0cmVhdG1lbnRzIFxyXG59KSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUoeHh4ID0+IHh4eC5kZXNjcmlwdGlvbiA9PT0gXCJhYmNcIiAmJiB4eHguY2F0ZWdvcnkgPT09IFwiYmJjXCIpKTtcclxuXHJcbiAgICBcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50cmVhdG1lbnRJdGVtX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLmNhdGVnb3J5ID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogPEV2ZW50SGFuZGxlckRpdiBcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSB7YCR7aXRlbS50aXRsZX0sICR7aXRlbS5kdXJhdGlvbn0sICR7aXRlbS5wcmljZX1gfSBcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyID0ge2NoYW5nZUFjdGl2ZVRyZWF0bWVudH0gXHJcbiAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xpZW50R2xvYmFsU3R5bGVzLmV2ZW50SGFuZGxlcl9kaXZ9IG9uQ2xpY2sgPSB7ZXZlbnQgPT4gc2VsZWN0VHJlYXRtZW50KGV2ZW50LCB0cmVhdG1lbnRzKX0+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RzfSBzdHlsZSA9IHt7ZGlzcGxheTogaXRlbS50aXRsZSA9PT0gYWN0aXZlVHJlYXRtZW50ID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBhIHN0eWxpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdF9saXN0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLnN0eWxpc3RMaXN0X2l0ZW19IG9uQ2xpY2sgPSB7ZSA9PiBhZGRUcmVhdG1lbnQoZS50YXJnZXQudGV4dENvbnRlbnQsIGl0ZW0pfT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLnN0eWxpc3RzLm1hcCgoc3R5bGlzdCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdExpc3RfaXRlbX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3SXRlbSA9PiBuZXdJdGVtLmNob29zZW5TdHlsaXN0ID09PSBzdHlsaXN0ICYmIG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgPT09IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgJiYgXCJibHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZSA9PiBhZGRUcmVhdG1lbnQoZS50YXJnZXQudGV4dENvbnRlbnQsIGl0ZW0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzdHlsaXN0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudF9pdGVtfSBcclxuICAgICAgICAgICAgICAgIHN0eWxlID0ge3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4ID0+IHgudGl0bGUgPT09IGl0ZW0udGl0bGVcclxuICAgICAgICAgICAgICAgICAgICApICYmIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJlZCwgcmdiYSgwLCAwLCAxMzksIDAuNCkpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudHJlYXRtZW50SXRlbV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX0gKHtpdGVtLmR1cmF0aW9ufSBtaW51dGVzKTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD4ke2l0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiAhaXRlbS5kZXNjcmlwdGlvbiAmJiBcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRyZWF0bWVudF9jb250ZW50fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICBcclxufSIsIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vLi4vc3R5bGVzL0NhdGVnb3J5VHJlYXRtZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEV2ZW50SGFuZGxlckRpdiBmcm9tIFwiLi4vLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvRXZlbnRIYW5kbGVyRGl2XCI7XHJcbmltcG9ydCBDYXRlZ29yeVNlcmlhbCBmcm9tIFwiLi9DYXRlZ29yeVNlcmlhbFwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKHsgaXRlbSwgaW5kZXgsIGFjdGl2ZUNhdGVnb3J5LCBjaGFuZ2VBY3RpdmVDYXRlZ29yeSwgc2VsZWN0ZWRUcmVhdG1lbnRzIH0pIHtcclxuXHJcbiAgICAvLyBHcmFkaWVudHMgZm9yIGJhY2tncm91bmRcclxuICAgIGNvbnN0IGJsdWVHcmFkaWVudCA9IFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGRhcmtibHVlLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIjtcclxuICAgIGNvbnN0IHJlZEdyYWRpZW50ID0gXCJsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmVkLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIjtcclxuXHJcbiAgICAvLyBTdHlsaW5nIENvbmRpdGlvbnNcclxuICAgIGNvbnN0IGNvbmRpdGlvbjEgPSBhY3RpdmVDYXRlZ29yeSA9PT0gaXRlbS50aXRsZVxyXG4gICAgY29uc3QgY29uZGl0aW9uMiA9IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKHRyZWF0bWVudCA9PiB0cmVhdG1lbnQuY2F0ZWdvcnkgPT09IGl0ZW0udGl0bGUpO1xyXG5cclxuICAgIC8vIElubGluZSBzdHlsZVxyXG4gICAgY29uc3Qgc3R5bGUgPSB7IGJhY2tncm91bmRJbWFnZTogY29uZGl0aW9uMSA/IGJsdWVHcmFkaWVudCA6IGNvbmRpdGlvbjIgJiYgcmVkR3JhZGllbnQgfVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbV9jb250YWluZXJ9PlxyXG4gICAgXHJcbiAgICAgICAgICAgIDxFdmVudEhhbmRsZXJEaXYgY29udGVudCA9IHtpdGVtLnRpdGxlfSBjbGlja0V2ZW50SGFuZGxlciA9IHtjaGFuZ2VBY3RpdmVDYXRlZ29yeX0gLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2F0ZWdvcnlfaXRlbX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3J5SXRlbV9jb250ZW50fSBzdHlsZSA9IHtzdHlsZX0gPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8Q2F0ZWdvcnlTZXJpYWwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4ID0ge2luZGV4fSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudCA9IHtpdGVtLnRpdGxlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlQ2F0ZWdvcnkgPSB7YWN0aXZlQ2F0ZWdvcnl9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3sgY29sb3I6IGFjdGl2ZUNhdGVnb3J5ID09PSBpdGVtLnRpdGxlICYmIFwid2hpdGVcIiB9fT57aXRlbS50aXRsZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gICAgXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeVNlcmlhbCAoeyBpbmRleCwgY29udGVudCwgYWN0aXZlQ2F0ZWdvcnkgfSkge1xyXG5cclxuICAgIGNvbnN0IHN0eWxlID0ge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYWN0aXZlQ2F0ZWdvcnkgPT09IGNvbnRlbnQgJiYgXCJ3aGl0ZVwiLFxyXG4gICAgICAgIGNvbG9yOiBhY3RpdmVDYXRlZ29yeSA9PT0gY29udGVudCAmJiBcImJsYWNrXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3BhbiBzdHlsZSA9IHtzdHlsZX0+e2luZGV4ICsgMX08L3NwYW4+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRXZlbnQubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzcuc3ZnXCI7XHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi8uLi9yZXVzYWJsZS1jb21wb25lbnRzL0J1dHRvblwiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIEV2ZW50KHsgZXZlbnQgfSkge1xyXG5cclxuICAgIGNvbnN0IHsgc3RhcnRUaW1lIH0gPSBldmVudDtcclxuXHJcbiAgICBjb25zdCBldmVudERhdGUgPSBuZXcgRGF0ZShzdGFydFRpbWUuc3Vic3RyaW5nKDAsIHN0YXJ0VGltZS5pbmRleE9mKFwiVFwiKSkpO1xyXG5cclxuICAgIGNvbnN0IGV2ZW50U3RhcnRUaW1lID0gc3RhcnRUaW1lLnN1YnN0cmluZyhzdGFydFRpbWUuaW5kZXhPZihcIlRcIikgKyAxLCBzdGFydFRpbWUubGVuZ3RoKTtcclxuICAgIGNvbnN0IGRhdGUgPSBldmVudERhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgY29uc3Qgd2Vla0RheSA9IGV2ZW50RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgIHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xyXG4gICAgY29uc3QgbW9udGggPSBldmVudERhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcImxvbmdcIiB9KTtcclxuICAgIGNvbnN0IHllYXIgPSBldmVudERhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHJcbiAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ldmVudH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfaW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X3RpdGxlfT57ZXZlbnQudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtzdHlsZXMuZXZlbnRfZGF0ZX0+e3dlZWtEYXl9LCB7bW9udGh9IHtkYXRlfSwge3llYXJ9PC9oMj5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50X3RpbWV9PntldmVudFN0YXJ0VGltZX08L2gyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0ID0ge2BQYXkgJCR7ZXZlbnQuZXZlbnRQcmljZX0uMDBgfSBjdXN0b21DbGFzc05hbWUgPSBcImNhbmNlbF9idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0ID0gXCJDYW5jZWxcIiBjdXN0b21DbGFzc05hbWUgPSBcImNhbmNlbF9idXR0b25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0ZXh0ID0gXCJSZS1zY2hlZHVsZVwiIGN1c3RvbUNsYXNzTmFtZSA9IFwiY2FuY2VsX2J1dHRvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQgPSBcIkVkaXQgZm9ybXNcIiBjdXN0b21DbGFzc05hbWUgPSBcImNhbmNlbF9idXR0b25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubWVzc2FnZV90b19jbGllbnR9PllvdXIgYXBwb2ludG1lbnQgaXMgY29uZmlybWVkLCB3ZSBjYW4ndCB3YWl0IHRvIHNlZSB5b3UuLi48L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1lc3NhZ2VfdG9fY2xpZW50fT5NYWtlIHN1cmUgeW91IHJlYWQgdGhlIGNvbmZpcm1hdGlvbiBlbWFpbCBhbmQgZG9uJ3QgbWlzcyBvdXQgb24gYW55IGltcG9ydGFudCBpbmZvcm1hdGlvbiByZWdhcmRpbmcgeW91ciBhcHBvaW50bWVudDwvcD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fZGl2fSA+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHRleHQgPSBcIlJlZ2lzdGVyIGZvciBhbiBhY2NvdW50XCIgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gdGV4dCA9IFwiU2NoZWR1bGUgYW5vdGhlciBhcHBvaW50bWVudFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEV2ZW50OyIsIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9DbGllbnRHbG9iYWxzLm1vZHVsZS5jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV2ZW50SGFuZGxlckRpdih7IGNvbnRlbnQsIGNsaWNrRXZlbnRIYW5kbGVyIH0pIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV2ZW50SGFuZGxlcl9kaXZ9IG9uQ2xpY2sgPSB7Y2xpY2tFdmVudEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICB7Y29udGVudH1cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG5cclxuXHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9jbGllbnQtdWkvQ2xpZW50R2xvYmFscy5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW1IZWFkZXIoeyBjb250ZW50IH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5pdGVtX2hlYWRlcn0+XHJcblxyXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lID0ge3N0eWxlcy5pdGVtSGVhZGVyX2NvbnRlbnR9Pntjb250ZW50fTwvaDQ+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9JbmZvcm1hdGlvblBheW1lbnQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuaW1wb3J0IEV2ZW50IGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9FdmVudFwiO1xyXG5cclxuXHJcbi8vIGNvbXBvbmVudHNcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbmZpcm1hdGlvbiAoeyBhY3RpdmVQYWdlLCBjbGllbnRFdmVudHMgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNsaWVudEV2ZW50cyk7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2ICBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gNSA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIkNvbmZpcm1hdGlvblwiIC8+XHJcblxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjbGllbnRFdmVudHMubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAmJlxyXG4gICAgICAgICAgICAgICAgY2xpZW50RXZlbnRzLm1hcChldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50IGtleSA9IHtldmVudC5faWQudG9TdHJpbmcoKX0gZXZlbnQgPSB7ZXZlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKTsgXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlQ2FyZCAoeyBkYXRlVGltZSwgIHNlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlLCBzZWxlY3RlZFRpbWUgfSkge1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkVGltZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUNhcmRfY29udGFpbmVyfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA+XHJcblxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBzZXRTZWxlY3RlZERhdGUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KX0gXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlSGlkZGVuX2Rpdn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2RhdGVUaW1lLmRhdGVJbkRhdGVGb3JtYXR9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfY2FyZH0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IHNlbGVjdGVkRGF0ZSA9PT0gZGF0ZVRpbWUuZGF0ZUluRGF0ZUZvcm1hdCBcclxuICAgICAgICAgICAgICAgICAgICA/IFxyXG4gICAgICAgICAgICAgICAgICAgIFwibGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIGdyZWVuLCByZ2JhKDAsIDAsIDEzOSwgMC40KSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUuaW5jbHVkZXMoZGF0ZVRpbWUuZGF0ZUluRGF0ZUZvcm1hdCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy53ZWVrRGF5X3RleHR9PntkYXRlVGltZS5kYXRlLndlZWtEYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90ZXh0fT57ZGF0ZVRpbWUuZGF0ZS5kYXRlfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLm1vbnRoX3RleHR9PntkYXRlVGltZS5kYXRlLm1vbnRofTwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3BhbiBcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jbG9ja0ljb25fY29udGFpbmVyfSBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7Ym9yZGVyOiBkYXRlVGltZS5kYXRlLndlZWtEYXkgPT09IFwiVG9kYXlcIiAmJiBcIjFweCBzb2xpZCBibHVlXCJ9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpIHN0eWxlID0ge3tjb2xvcjogZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5ID09PSBcIlRvZGF5XCIgJiYgXCJibHVlXCJ9fSBjbGFzc05hbWU9XCJmYXIgZmEtY2xvY2tcIj48L2k+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgKTtcclxufSIsIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9nZXREYXRlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2hvb3NlU3R5bGlzdHMgZnJvbSBcIi4vY2hvb3NlLXN0eWxpc3RzL0Nob29zZVN0eWxpc3RzXCI7XHJcbmltcG9ydCBEYXRlQ2FyZCBmcm9tIFwiLi9EYXRlQ2FyZFwiO1xyXG5pbXBvcnQgU3R5bGlzdHMgZnJvbSBcIi4vU3R5bGlzdHNcIjtcclxuaW1wb3J0IFRpbWVzIGZyb20gXCIuL1RpbWVzXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lICh7IFxyXG4gICAgc3RhdGUsIFxyXG4gICAgYWN0aXZlUGFnZSwgXHJcbiAgICBzZWxlY3RlZFRyZWF0bWVudHMsIFxyXG4gICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzLFxyXG4gICAgbG9jYXRpb24sXHJcbiAgICBzZWxlY3RlZERhdGUsXHJcbiAgICBzZXRTZWxlY3RlZERhdGUsXHJcbiAgICBzZWxlY3RlZFRpbWUsXHJcbiAgICBzZXRTZWxlY3RlZFRpbWUgXHJcbn0pIHtcclxuXHJcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRlVGltZXMsIHNldERhdGVUaW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtkYXRlSW5kZXgsIHNldERhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgXHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXREYXRlcyhnZXREYXRlcygpKTtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgXHJcbiAgICBjb25zb2xlLmxvZyhkYXRlVGltZXMpO1xyXG4gICAgY29uc29sZS5sb2coc2VsZWN0ZWRUaW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RpbWV9IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAzID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxDaG9vc2VTdHlsaXN0cyBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9IFxyXG4gICAgICAgICAgICAgICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge2xvY2F0aW9ufSBcclxuICAgICAgICAgICAgICAgIHNldERhdGVUaW1lcyA9IHtzZXREYXRlVGltZXN9XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUgPSB7c2V0U2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNGFiOGIxMjZkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgZGF0ZS90aW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVRpbWVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc19jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWUgPSB7ZGF0ZVRpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZSA9IHtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZSA9IHtzZXRTZWxlY3RlZERhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUgPSB7c2VsZWN0ZWRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFpbGFibGVfdGltZV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2Ake2RhdGVUaW1lLmRhdGUuZGF0ZX0tJHtkYXRlVGltZS5kYXRlLndlZWtEYXl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IHNlbGVjdGVkRGF0ZSA9PT0gZGF0ZVRpbWUuZGF0ZUluRGF0ZUZvcm1hdCA/IFwiZmxleFwiIDogXCJub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lLnRpbWVzLm1hcCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXkgPSB7dGltZX0gc3R5bGU9e3twb3NpdGlvbjogXCJyZWxhdGl2ZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPT4gc2VsZWN0ZWRUaW1lID09PSBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPyBzZXRTZWxlY3RlZFRpbWUoXCJcIikgOiBzZXRTZWxlY3RlZFRpbWUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIaWRkZW5fZGl2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCR7c2VsZWN0ZWREYXRlfVQke3RpbWV9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmluZGl2aWR1YWxfdGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogc2VsZWN0ZWRUaW1lID09PSBgJHtzZWxlY3RlZERhdGV9VCR7dGltZX1gICYmIFwibGluZWFyLWdyYWRpZW50KHJnYigyNTUsMCwwLCAwLjQpLCByZ2IoMCwwLDI1NSwgMC45KSwgZGFya2JsdWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0eWxpc3RzX3RpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxTdHlsaXN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVzIC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICovfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEJlYXV0aWNpYW4gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZ1wiXHJcbmltcG9ydCBCZWF1dGljaWFuMiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3R5bGlzdHMgKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdHNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGg0IHN0eWxlID0ge3ttYXJnaW5Cb3R0b206IFwiMTBweFwifX0+U3R5bGlzdDwvaDQ+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJwaW5rXCJ9fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e0JlYXV0aWNpYW59IC8+XHJcbiAgICAgICAgICAgICAgIDxwIHN0eWxlID0ge3t0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5BdGhlbmE8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCZWF1dGljaWFufSAvPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+U291ZGk8L3A+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0fT5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZUhpZGRlbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtCZWF1dGljaWFufSAvPlxyXG4gICAgICAgICAgICAgICA8cCBzdHlsZSA9IHt7dGV4dEFsaWduOiBcImNlbnRlclwifX0+VGluYTwvcD5cclxuICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuaW1wb3J0IEJlYXV0aWNpYW4gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9wZXJzb24tZ2lybC1mbGF0LnBuZ1wiXHJcbmltcG9ydCBCZWF1dGljaWFuMiBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL0NvbXBvbmVudCAxNDMg4oCTIDIucG5nXCJcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGltZXMgKCkge1xyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXNfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOiBcImJsdWVcIn19IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAgY2xhc3NOYW1lPXtzdHlsZXMudGltZV90ZXh0fT4xMy4zMCBQTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aW1lfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy50aW1lX3RleHR9PjEzLjMwIFBNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnRpbWVfdGV4dH0+MTMuMzAgUE08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuLy8gQ29tcG9uZW50cyBcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uLy4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuaW1wb3J0IHsgZmluZFRpbWVTbG90cyB9IGZyb20gXCIuLi8uLi8uLi8uLi9saWIvZmluZC10aW1lLXNsb3RzLWNvcHkvZmluZFRpbWVTbG90c1wiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hvb3NlU3R5bGlzdHMgKHsgXHJcbiAgICBsb2NhdGlvbiwgXHJcbiAgICBzZWxlY3RlZFRyZWF0bWVudHMsIFxyXG4gICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzLFxyXG4gICAgc2V0RGF0ZVRpbWVzLCBcclxuICAgIHNldFNlbGVjdGVkRGF0ZSBcclxufSkge1xyXG5cclxuICAgIGNvbnN0IHN0eWxlcyA9IHtcclxuICAgICAgICB3aWR0aDogXCI2MCVcIixcclxuICAgICAgICBtYXJnaW46IFwiMCBhdXRvIDEwcHggYXV0b1wiLFxyXG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWV2ZW5seVwiLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjY2NjXCJcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW3RyZWF0bWVudHMsIHNldFRyZWF0bWVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcblxyXG5cclxuICAgIC8vIE9uQ2hhbmdlIGhhbmRsZXIgZm9yIHN0eWxpc3RcclxuICAgIGZ1bmN0aW9uIGZpbmFsaXplVHJlYXRtZW50cyhldmVudCwgaW5kZXgpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzdHlsaXN0OiBcIiArIGV2ZW50LnRhcmdldC52YWx1ZSk7XHJcblxyXG4gICAgICAgIC8vIGV2ZW50LnRhcmdldC52YWx1ZSBjb250YWlucyB0aGUgc3R5bGlzdFxyXG4gICAgICAgIGNvbnN0IHN0eWxpc3QgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIC8vIEZpbmQgdGhlIHRyZWF0bWVudCBmcm9tIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgbGlzdCB1c2luZyBpbmRleFxyXG4gICAgICAgIGNvbnN0IHRyZWF0bWVudCA9IHNlbGVjdGVkVHJlYXRtZW50c1tpbmRleF07XHJcbiAgICAgICAgY29uc3QgbmV3VHJlYXRtZW50VGl0bGUgPSBzZWxlY3RlZFRyZWF0bWVudHNbaW5kZXhdLnRpdGxlO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAvLyBFdmVyeSB0cmVhdG1lbnQgaGFzIG11bHRpcGxlIHN0eWxpc3RzIGFuZCB1c2VyIGhhcyB0aGUgZmxleGliaWxpdHkgdG8gY2hvb3NlIHN0eWxpc3QgZnJvbSB0aGUgc3R5bGlzdHMgb2YgYSBcclxuICAgICAgICAvLyBzcGVjaWZpYyB0cmVhdG1lbnQuIElmIHVzZXIgaXMgdHJ5aW5nIHRvIGNoYW5nZSB0aGUgc3R5bGlzdCB0aGVuIHByZXZpb3VzIHRyZWF0bWVudCBtdXN0IGJlIG9tbWl0dGVkLiAgXHJcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gdHJlYXRtZW50cy5zb21lKG5ld0l0ZW0gPT4gbmV3SXRlbS50cmVhdG1lbnRUaXRsZSA9PT0gbmV3VHJlYXRtZW50VGl0bGUpO1xyXG5cclxuICAgICAgICBpZihkb2VzRXhpc3QgfHwgIXN0eWxpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRUcmVhdG1lbnRzID0gdHJlYXRtZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtLnRyZWF0bWVudFRpdGxlICE9PSBuZXdUcmVhdG1lbnRUaXRsZSk7XHJcblxyXG4gICAgICAgICAgICBpZighc3R5bGlzdCkgcmV0dXJuIHNldFRyZWF0bWVudHMoZmlsdGVyZWRUcmVhdG1lbnRzKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5ld3RyZWF0bWVudCA9IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeTogdHJlYXRtZW50LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiB0cmVhdG1lbnQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRQcmljZTogdHJlYXRtZW50LnByaWNlLFxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IHRyZWF0bWVudC50aXRsZVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHNldFRyZWF0bWVudHMoWy4uLmZpbHRlcmVkVHJlYXRtZW50cywgbmV3dHJlYXRtZW50XSlcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBuZXd0cmVhdG1lbnQgPSB7XHJcblxyXG4gICAgICAgICAgICBjYXRlZ29yeTogdHJlYXRtZW50LmNhdGVnb3J5LFxyXG4gICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgbG9jYXRpb24sXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiB0cmVhdG1lbnQuZHVyYXRpb24sXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiB0cmVhdG1lbnQucHJpY2UsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiB0cmVhdG1lbnQudGl0bGVcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiB7IHJldHVybiBbLi4uY3VycmVudFZhbHVlLCBuZXd0cmVhdG1lbnRdfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBmaW5kVGltZXMoKSB7XHJcblxyXG5cclxuICAgICAgICAvLyBOZWVkIHRvIHNvcnQgdGhlIHRyZWF0bWVudHMgYXMgcGVyIHRoZSBjbGllbnQncyBzZWxlY3Rpb24gb3JkZXIuIFxyXG4gICAgICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXTtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLmZvckVhY2goc2VsZWN0ZWRUcmVhdG1lbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgdHJlYXRtZW50cy5mb3JFYWNoKHRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodHJlYXRtZW50LnRyZWF0bWVudFRpdGxlID09PSBzZWxlY3RlZFRyZWF0bWVudC50aXRsZSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBuZXdUcmVhdG1lbnRzLnB1c2godHJlYXRtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihuZXdUcmVhdG1lbnRzLmxlbmd0aCAhPT0gc2VsZWN0ZWRUcmVhdG1lbnRzLmxlbmd0aCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHNlbGVjdCBhIHN0eWxpc3QgZm9yIGFsbCB0cmVhdG1lbnRzXCIpO1xyXG5cclxuICAgICAgICBzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMobmV3VHJlYXRtZW50cyk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVzID0gYXdhaXQgZmluZFRpbWVTbG90cyhuZXdUcmVhdG1lbnRzKTtcclxuXHJcbiAgICAgICAgc2V0RGF0ZVRpbWVzKGRhdGVUaW1lcyk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGVUaW1lc1swXS5kYXRlSW5EYXRlRm9ybWF0KTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc29sZS5sb2codHJlYXRtZW50cyk7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2Vfc3R5bGlzdHNcIj5cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiQ2hvb3NlIHN0eWxpc3RzXCIgLz5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5tYXAoKHRyZWF0bWVudCwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hvb3NlU3R5bGlzdHNfY29udGVudFwiIHN0eWxlID0ge3N0eWxlc30ga2V5ID0ge3RyZWF0bWVudC50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3RyZWF0bWVudC5jYXRlZ29yeX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJlYXRtZW50LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwidHJlYXRtZW50XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSW5kZXggd2lsbCBmaW5kIHRoZSB0cmVhdG1lbnQgZnJvbSB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGxpc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtldmVudCA9PiBmaW5hbGl6ZVRyZWF0bWVudHMoZXZlbnQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJcIj5DaG9vc2Ugc3R5bGlzdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0cmVhdG1lbnQuc3R5bGlzdHMubWFwKHN0eWxpc3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXkgPSB7c3R5bGlzdH0gdmFsdWUgPSB7c3R5bGlzdH0+e3N0eWxpc3R9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2hvb3NlU3R5bGlzdHNfY29udGVudFwiIHN0eWxlID0ge3N0eWxlc30+XHJcbiAgICAgICAgICAgICAgICA8cD5Mb2NhdGlvbjwvcD5cclxuICAgICAgICAgICAgICAgIDxwPkNhdGVnb3J5PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+VHJlYXRtZW50PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJBdGhlbmEgR29yZ2VvdXNcIj5BdGhlbmEgR29yZ2VvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJTb3VkaSBHb3JnZW91c1wiPlNvdWRpIEdvcmdlb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiSmVubmlmZXIgR29yZ2VvdXNcIj5KZW5uaWZlciBHb3JnZW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbnNzc3NcIiBzdHlsZSA9IHt7d2lkdGg6IFwiMTAwJVwiLCB0ZXh0QWxpZ246IFwiY2VudGVyXCJ9fT5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZmluZFRpbWVzfT5GaW5kIEF2YWlsYWJsZSBTdGFydGluZyBUaW1lczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuL2ltYWdlcy82LnN2Z1wiO1xyXG5cclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0luZm9ybWF0aW9uUGF5bWVudC5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcblxyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZm9ybWF0aW9uUGF5bWVudCAoeyBhY3RpdmVQYWdlLCBjbGllbnRJbmZvLCBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyLCB2YWxpZGF0aW9uRXJyb3IsIGNyZWF0ZUJvb2tpbmcgfSkge1xyXG5cclxuICAgIC8vIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICAgIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIC8vIH0sIFtdKVxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9fcGF5bWVudH0gIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSA0ID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHJcbiAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB7LyogPGg0IGNsYXNzTmFtZT17c3R5bGVzLmluZm9QYXltZW50X2hlYWRlcn0+SW5mb3JtYXRpb24gLyBQYXltZW50PC9oND4gKi99XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIkluZm9ybWF0aW9uIC8gcGF5bWVudFwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmluZm9QYXltZW50X2NvbnRlbnR9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVfaW5wdXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+TmFtZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hbWVfaW5mb30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJmaXJzdE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkZpcnN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyID0gXCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgPSB7Y2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGhvbmVfaW5wdXR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0X2xhYmVsfT5QaG9uZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwicGhvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiKzMxIDIzNSA1NjMyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5waG9uZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5lbWFpbF9pbnB1dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRfbGFiZWx9PkVtYWlsPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImFiY2RAZ21haWwuY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7Y2xpZW50SW5mby5lbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uRXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tib3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGxlYXNlIGtlZXAgbWUgaW5mb3JtZWQgb2YgdGhlIG9mZmVycyBhbmQgcHJvbW90aW9uczwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaG93SGVhcmRBYm91dFVzX2lucHV0fSBzdHlsZSA9IHt7YmFja2dyb3VuZENvbG9yOiBcImdyZWVuXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dF9sYWJlbH0+SG93IGRpZCB5b3UgaGVhciBhYm91dCBhdGhlbmEgYmVhdXR5IGNhcmU/PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWUgPSBcImhvd0hlYXJkQWJvdXRVc1wiIG9uQ2hhbmdlPXtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwiRnJpZW5kc1wiPkZyaWVuZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZSA9IFwib3RoZXJzXCI+T3RoZXJzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IFwiaG93SGVhcmRBYm91dFVzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge2NsaWVudEluZm8uaG93SGVhcmRBYm91dFVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyID0ge2NsaWVudEluZm9PbkNoYW5nZUhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiA8cD5QaG9uZTwvcD4gKi99XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gc3R5bGUgPSB7e2Rpc3BsYXk6IGNsaWVudEluZm8uZW1haWwgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19IG9uQ2xpY2sgPSB7Y3JlYXRlQm9va2luZ30+Q29uZmlybTwvYnV0dG9uPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iLCIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW5mb3JtYXRpb25QYXltZW50Lm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuXHJcblxyXG4vLyBjb21wb25lbnRzXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCAoeyB0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgdmFsdWUsIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIsIHZhbGlkYXRpb25FcnJvciB9KSB7XHJcblxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9PlxyXG5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IHt0eXBlfSBcclxuICAgICAgICAgICAgICAgIG5hbWUgPSB7bmFtZX0gXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IHtwbGFjZWhvbGRlcn0gXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZX0gXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgPHAgXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdmFsaWRhdGlvbkVycm9yID8gXCJibG9ja1wiIDogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmVkXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAge3BsYWNlaG9sZGVyLnRvTG93ZXJDYXNlKCl9IGNhbid0IGJlIGJsYW5rXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iLCJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VBeGlvcyh1cmwpIHtcclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbClcclxuXHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZW5kUG9pbnQgPSBgaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9sb2NhdGlvbnMvJHt1cmx9YDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGVuZFBvaW50KTtcclxuXHJcbiAgICAgICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICB9LCBbdXJsXSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSwgZXJyb3IsIGxvYWRpbmcgfTtcclxuXHJcbn1cclxuIiwiLy8gTmV4dCBNb2R1bGVzXHJcbi8vIGltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbi8vIGltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcbi8vIGltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbi8vIGltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9Mb2NhdGlvbi5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2NhdGlvbkljb24gZnJvbSBcIi4vTG9jYXRpb25JY29uXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcbmltcG9ydCBFdmVudEhhbmRsZXJEaXYgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0V2ZW50SGFuZGxlckRpdlwiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbiAoeyBhY3RpdmVQYWdlLCBzdGF0ZSwgdXBkYXRlU3RhdGUgfSkge1xyXG5cclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvciwgbG9hZGluZ30gPSB1c2VBeGlvcyhcImdldFwiLCBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvbG9jYXRpb25zXCIsIHt9KTtcclxuICAgIGNvbnN0IFtsb2NhdGlvbnMsIHNldExvY2F0aW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgaWYoZGF0YSAhPT0gbnVsbCkgc2V0TG9jYXRpb25zKGRhdGEpO1xyXG4gICAgICAgIC8vIGlmKGNhdGVnb3J5RGF0YSAhPT0gbnVsbCkgc2V0Q2F0ZWdvcmllcyhjYXRlZ29yeURhdGEpO1xyXG4gICAgICAgIC8vIGlmKHRyZWF0bWVudERhdGEgIT09IG51bGwpIHNldFRyZWF0bWVudHModHJlYXRtZW50RGF0YSk7XHJcblxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PlxyXG4gICAgaWYoZXJyb3IpIHJldHVybiA8ZGl2PlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWxlY3RfbG9jYXRpb259IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAxID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBsb2NhdGlvblwiIC8+XHJcbiAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAge2xvY2F0aW9ucy5tYXAoKGxvY2F0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXkgPSB7aW5kZXggKyAxfSBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEV2ZW50SGFuZGxlckRpdiBjb250ZW50ID0ge2xvY2F0aW9uLnRpdGxlfSBjbGlja0V2ZW50SGFuZGxlciA9IHt1cGRhdGVTdGF0ZX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbkluZm9fY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2luZm99IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc3RhdGUubG9jYXRpb24gPT09IGxvY2F0aW9uLnRpdGxlICYmIFwiYmx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvY2F0aW9uX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57bG9jYXRpb24udGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57bG9jYXRpb24uYWRkcmVzczF9LCB7bG9jYXRpb24uYWRkcmVzczJ9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlppcCBDb2RlOiB7bG9jYXRpb24uemlwQ29kZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UGhvbmU6IHtsb2NhdGlvbi5waG9uZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2xvY2F0aW9uLmNpdHl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbi5jb3VudHJ5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvY2F0aW9uSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSIsIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL2NsaWVudC11aS9Mb2NhdGlvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2NhdGlvbkljb24oKSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2NhdGlvbl9pY29ufT5cclxuICAgICAgICAgICAgPGkgc3R5bGUgPSB7e2NvbG9yOiBcImRhcmtibHVlXCIsIGZvbnRTaXplOiBcIjI0cHhcIn19IGNsYXNzTmFtZT1cImZhcyBmYS1tYXAtbWFya2VyLWFsdFwiPjwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG5cclxufSIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL05hdmlnYXRpb25CYXIubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgTmF2aWdhdGlvbkJ1dHRvbiBmcm9tIFwiLi9OYXZpZ2F0aW9uQnV0dG9uXCI7XHJcbmltcG9ydCBOYXZpZ2F0aW9uVGV4dCBmcm9tIFwiLi9OYXZpZ2F0aW9uVGV4dFwiO1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJhciAoeyBzdGF0ZSwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBhY3RpdmVQYWdlLCBzZXRBY3RpdmVQYWdlLCBzZWxlY3RlZFRpbWUgfSkge1xyXG5cclxuICAgIGNvbnN0IGl0ZW1zID0gW1xyXG4gICAgICAgIHtpZDogMSwgY29udGVudDogXCJTZWxlY3QgTG9jYXRpb25cIn0sXHJcbiAgICAgICAge2lkOiAyLCBjb250ZW50OiBcIkNhdGVnb3J5IGFuZCBUcmVhdG1lbnRcIn0sXHJcbiAgICAgICAge2lkOiAzLCBjb250ZW50OiBcIlNlbGVjdCBUaW1lIC8gRGF0ZVwifSxcclxuICAgICAgICB7aWQ6IDQsIGNvbnRlbnQ6IFwiSW5mb3JtYXRpb24gLyBQYXltZW50XCJ9LFxyXG4gICAgICAgIHtpZDogNSwgY29udGVudDogXCJDb25maXJtYXRpb25cIn1cclxuICAgIF07XHJcblxyXG4gICAgLy8gY29uc3QgaXRlbXMgPSBbXHJcbiAgICAvLyAgICAge2lkOiAxLCBjb250ZW50OiBcIkNhdGVnb3J5IGFuZCBUcmVhdG1lbnRcIn0sXHJcbiAgICAvLyAgICAge2lkOiAyLCBjb250ZW50OiBcIlNlbGVjdCBMb2NhdGlvblwifSxcclxuICAgIC8vICAgICB7aWQ6IDMsIGNvbnRlbnQ6IFwiU2VsZWN0IFRpbWUgLyBEYXRlXCJ9LFxyXG4gICAgLy8gICAgIHtpZDogNCwgY29udGVudDogXCJJbmZvcm1hdGlvbiAvIFBheW1lbnRcIn0sXHJcbiAgICAvLyAgICAge2lkOiA1LCBjb250ZW50OiBcIkNvbmZpcm1hdGlvblwifVxyXG4gICAgLy8gXTtcclxuICAgIFxyXG4gICAgXHJcbiAgICBjb25zdCBbd2luZG93V2lkdGgsIHNldFdpbmRvd1dpZHRoXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIGlmKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHNldFdpbmRvd1dpZHRoKHdpbmRvdy5pbm5lcldpZHRoKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBzZXRXaW5kb3dXaWR0aCh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcblxyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbkJhcl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9iYXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2aWdhdGlvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1dpZHRoID0ge3dpbmRvd1dpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UgPSB7c2V0QWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtpdGVtLmlkfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZFRpbWUgPSB7c2VsZWN0ZWRUaW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvblRleHRfY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdmlnYXRpb25UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93V2lkdGggPSB7d2luZG93V2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dCA9IHtpdGVtLmNvbnRlbnR9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgKTtcclxuICAgIFxyXG59IiwiLy8gLy9cclxuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9OYXZpZ2F0aW9uQmFyLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2aWdhdGlvbkJ1dHRvbiAoeyBcclxuICAgIHdpbmRvd1dpZHRoLCBcclxuICAgIHN0YXRlLCBcclxuICAgIHNlbGVjdGVkVHJlYXRtZW50cywgXHJcbiAgICBhY3RpdmVQYWdlLCBcclxuICAgIHNldEFjdGl2ZVBhZ2UsIFxyXG4gICAgdmFsdWUsIFxyXG4gICAgc2VsZWN0ZWRUaW1lIFxyXG59KSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVBhZ2UoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBOdW1iZXIoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KTtcclxuXHJcbiAgICAgICAgaWYobmV3VmFsdWUgPT09IDIgJiYgIXN0YXRlLmxvY2F0aW9uKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGEgbG9jYXRpb25cIik7XHJcblxyXG4gICAgICAgIGlmKG5ld1ZhbHVlID09PSAzICYmICFzZWxlY3RlZFRyZWF0bWVudHMubGVuZ3RoKSByZXR1cm4gYWxlcnQoXCJQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSB0cmVhdG1lbnRcIik7XHJcbiAgICAgICAgaWYobmV3VmFsdWUgPT09IDQgJiYgIXNlbGVjdGVkVGltZSkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIHBpY2sgYSBzdGFydGluZyB0aW1lXCIpO1xyXG5cclxuICAgICAgICBzZXRBY3RpdmVQYWdlKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl9saW5rc30gc3R5bGUgPSB7e3dpZHRoOiB2YWx1ZSA9PT0gNSAmJiAod2luZG93V2lkdGggPD0gNjAwID8gXCI1MHB4XCIgOiBcIjEwMHB4XCIpfX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2NvbnRhaW5lcn0gc3R5bGUgPSB7e3dpZHRoOiB2YWx1ZSA9PT0gNSAmJiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tiYWNrZ3JvdW5kQ29sb3I6IGFjdGl2ZVBhZ2UgPT09IHZhbHVlICYmIFwiZGFya2JsdWVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSB7c3R5bGVzLm5hdmlnYXRpb25MaW5rX2J1dHRvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7YWN0aXZlUGFnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gb25DbGljaz0ge2V2ZW50ID0+IHNldEFjdGl2ZVBhZ2UoTnVtYmVyKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCkpfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9IHtjaGFuZ2VBY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZSA9IHtzdHlsZXMuYmxhbmtQYXJhX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogdmFsdWUgPT09IDUgJiYgXCJub25lXCJ9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICAgICAgICBcclxuICAgIFxyXG59XHJcbiIsIi8vIC8vXHJcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvTmF2aWdhdGlvbkJhci5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmlnYXRpb25UZXh0ICh7IHdpbmRvd1dpZHRoLCB0ZXh0IH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2aWdhdGlvbl90ZXh0fSBzdHlsZSA9IHt7d2lkdGg6IHRleHQgPT09IFwiQ29uZmlybWF0aW9uXCIgJiYgKHdpbmRvd1dpZHRoIDw9IDYwMCA/IFwiNTBweFwiIDogXCIxMDBweFwiKX19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRleHR9IHN0eWxlID0ge3t3aWR0aDogdGV4dCA9PT0gXCJDb25maXJtYXRpb25cIiAmJiBcIjEwMCVcIn19PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9jb250ZW50fSA+e3RleHR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50ZXh0X2JsYW5rRGl2fT48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgICAgICAgXHJcbiAgICBcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgbWVzc2FnZSB9KSB7XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydFwiPlxyXG4gICAgICAgICAgICA8cD57bWVzc2FnZX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0J1dHRvbi5tb2R1bGUuY3NzXCI7XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyB0ZXh0LCBjdXN0b21DbGFzc05hbWUgfSkge1xyXG5cclxuICAgIC8vIER5bmFtaWMgc3R5bGUgb2YgYnV0dG9uIGJhc2VkIG9uIGNsYXNzTmFtZSBwcm92aWRlZCBmcm9tIHBhcmVudCBjb21wb25lbnRcclxuICAgIGxldCBidXR0b25TdHlsZSA9IHtcclxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwibGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMTM5LCAwLjY3OCksIHJnYigwLCAwLCAxMzkpLCByZ2JhKDAsIDAsIDEzOSwgMC42NjQpKVwiXHJcbiAgICB9O1xyXG5cclxuICAgIGlmKGN1c3RvbUNsYXNzTmFtZSA9PT0gXCJjYW5jZWxfYnV0dG9uXCIpIHtcclxuICAgICAgICBidXR0b25TdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcImxpbmVhci1ncmFkaWVudCgjZjA1NDU0YjIsICNGMDU0NTQsICNmMDU0NTRiMilcIlxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWUgPSB7c3R5bGVzLmJ1dHRvbn0gc3R5bGUgPSB7YnV0dG9uU3R5bGV9PlxyXG4gICAgICAgICAgICB7dGV4dH1cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCdXR0b247IiwiLy8gTW9kdWxlcyBuZWVkZWQgdG8gZmV0Y2ggZXZlbnRzXHJcbmltcG9ydCB7IGZldGNoRXZlbnRzIH0gZnJvbSBcIi4vaGVscGVyLWZ1bmN0aW9ucy9mZXRjaEV2ZW50c1wiO1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0RGF0ZXNcIjtcclxuaW1wb3J0IHsgZ2V0U3R5bGlzdHMgfSBmcm9tIFwiLi9oZWxwZXItZnVuY3Rpb25zL2dldFN0eWxpc3RzXCI7XHJcbmltcG9ydCB7IGdldFdvcmtpbmdUaW1lcyB9IGZyb20gXCIuL2hlbHBlci1mdW5jdGlvbnMvZ2V0V29ya2luZ1RpbWVzXCI7XHJcblxyXG5jb25zdCBkZWZhdWx0VGltZXNBcnJheSA9IFtcclxuICAgIFwiMTA6MDBcIiwgXCIxMDoxNVwiLCBcIjEwOjMwXCIsIFwiMTA6NDVcIiwgXCIxMTowMFwiLCBcIjExOjE1XCIsIFwiMTE6MzBcIiwgXCIxMTo0NVwiLCBcIjEyOjAwXCIsIFwiMTI6MTVcIiwgXCIxMjozMFwiLCBcIjEyOjQ1XCIsIFxyXG4gICAgXCIxMzowMFwiLCBcIjEzOjE1XCIsIFwiMTM6MzBcIiwgXCIxMzo0NVwiLCBcIjE0OjAwXCIsIFwiMTQ6MTVcIiwgXCIxNDozMFwiLCBcIjE0OjQ1XCIsIFwiMTU6MDBcIiwgXCIxNToxNVwiLCBcIjE1OjMwXCIsIFwiMTU6NDVcIiwgXHJcbiAgICBcIjE2OjAwXCIsIFwiMTY6MTVcIiwgXCIxNjozMFwiLCBcIjE2OjQ1XCIsIFwiMTc6MDBcIlxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgZmluZFRpbWVTbG90cyA9IGFzeW5jIChuZXdUcmVhdG1lbnRzKSA9PiB7XHJcblxyXG4gICAgLypcclxuICAgIGNvbnN0IG5ld1RyZWF0bWVudHMgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQZXJtYW5lbnQgTWFrZXVwXCIsXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBcIkplbm5pZmVyIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA4NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDIzLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJQZXJtYW5lbnQgTWFrZXVwIHdpdGggbGlnaHQgbWFzc2FnZVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIk1hc3NhZ2VcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQW5kcmVhIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiA3NSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQyLFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJNYXNzYWdlIGZvciAzMCBtaW5zXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IFwiQnJvd3NcIixcclxuICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IFwiQXRoZW5hIEdvcmdlb3VzXCIsXHJcbiAgICAgICAgICAgIGxvY2F0aW9uOiBcIkF0aGVuYSBCZWF1dHkgQ2FyZSAtIEJvZ3VyXCIsXHJcbiAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiAzNSxcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IDQ1LFxyXG4gICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogXCJTaGFwaW5nIGJyb3dzXCJcclxuICAgICAgICB9XHJcblxyXG4gICAgXTtcclxuICAgICovXHJcblxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0b3RhbCAzMCBkYXRlcyBpbiB0aGUgZm9ybWF0ICd5ZWFyLW1vbnRoLWRhdGUnIGZvcm1hdCBzdGFydGluZyBmcm9tIHRvZGF5XHJcbiAgICBjb25zdCBkYXRlc0FycmF5ID0gZ2V0RGF0ZXMoKTtcclxuXHJcbiAgICAvLyBQdXR0aW5nIHRoZSBsb2NhdGlvbiBpbmZvIGluIGEgdmFyaWFibGVcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3VHJlYXRtZW50c1swXS5sb2NhdGlvbjtcclxuICAgIFxyXG4gICAgLy8gRmV0Y2hpbmcgaW5mb3JtYXRpb24gb2YgYWxsIHN0eWxpc3RzIGFzIHBlciBhbGwgdHJlYXRtZW50c1xyXG4gICAgY29uc3QgYWxsU3R5bGlzdHMgPSBhd2FpdCBnZXRTdHlsaXN0cyhuZXdUcmVhdG1lbnRzKTtcclxuICAgIGNvbnNvbGUubG9nKGFsbFN0eWxpc3RzKTtcclxuXHJcbiAgICAvLyBGZXRjaGluZyBjYWxlbmRhciBldmVudHMgb2YgYWxsIHN0eWxpc3RzXHJcbiAgICBjb25zdCBjYWxlbmRhckV2ZW50cyA9IGF3YWl0IGZldGNoRXZlbnRzKCk7XHJcbiAgICAvL2NvbnNvbGUubG9nKFwiQ2FsZW5kYXIgZXZlbnRzOiBcIiwgY2FsZW5kYXJFdmVudHMpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gRmluZCB0aGUgZGF0ZXMgd2hlbiBhbGwgc3R5bGlzdHMgYXJlIGF2YWlsYWJsZSBhdCB0aGUgcmVxdWVzdGVkIGxvY2F0aW9uLiBBbHNvIGZpbmQgYWxsIHRoZSB3b3JraW5nVGltZXMgb2YgYWxsIHN0eWxpc3RzXHJcbiAgICAvLyBvbiB0aG9zZSBkYXRlc1xyXG4gICAgY29uc3Qgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzID0gZ2V0V29ya2luZ1RpbWVzKGRhdGVzQXJyYXksIGFsbFN0eWxpc3RzLCBuZXdUcmVhdG1lbnRzLCBsb2NhdGlvbik7XHJcblxyXG4gICBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG5cclxuICAgIC8vIGNvbnN0IHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyA9IGZpbmRGcmVlVGltZXMoc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLCBjYWxlbmRhckV2ZW50cyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMpO1xyXG5cclxuXHJcbiAgICBcclxuICAgIGNvbnN0IHN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyA9IFtdO1xyXG5cclxuICAgIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcy5mb3JFYWNoKHdvcmtpbmdUaW1lID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeHh4ID0gW107XHJcblxyXG4gICAgICAgIHdvcmtpbmdUaW1lLnN0eWxpc3RXb3JraW5nVGltZXMuZm9yRWFjaChpdGVtID0+IHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJ1c3lUaW1lcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY2FsZW5kYXJFdmVudHMuZm9yRWFjaChldmVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgZXZlbnREYXRlID0gZXZlbnQuc3RhcnRUaW1lLnN1YnN0cmluZygwLCBldmVudC5zdGFydFRpbWUuaW5kZXhPZihcIlRcIikpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0aW5nVGltZSA9IGV2ZW50LnN0YXJ0VGltZS5zdWJzdHJpbmcoZXZlbnQuc3RhcnRUaW1lLmluZGV4T2YoXCJUXCIpICsgMSwgZXZlbnQuc3RhcnRUaW1lLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ0hvdXIgPSBOdW1iZXIoc3RhcnRpbmdUaW1lLnN1YnN0cmluZygwLCAyKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydGluZ01pbnV0ZSA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDMsIDUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LnN0YXR1cyA9PT0gXCJBY3RpdmVcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihldmVudERhdGUgPT09IHdvcmtpbmdUaW1lLmRhdGUgJiYgZXZlbnQuc3R5bGlzdCA9PT0gaXRlbS5zdHlsaXN0ICYmIGV2ZW50LmV2ZW50TG9jYXRpb24gPT09IGxvY2F0aW9uKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGsgPSAwOyBrIDwgTWF0aC5jZWlsKGV2ZW50LmV2ZW50RHVyYXRpb24gLyAxNSk7IGsrKykge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVydmFsID0gKDE1ICogaykgKyBzdGFydGluZ01pbnV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VyID0gc3RhcnRpbmdIb3VyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGludGVydmFsIC8gNjAgZ2l2ZXMgdXMgdGhlIHZhbHVlIHdoaWNoIHNob3VsZCBiZSBhZGRlZCB0byBob3VyLiBGb3IgZXhhbXBsZSAtIGlmIGludGVydmFsIGlzIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gNzUgdGhlbiB3ZSBtdXN0IGFkZCAxIHdpdGggaG91ciBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBob3VySW5jcmVtZW50ID0gTWF0aC5mbG9vcihpbnRlcnZhbCAvIDYwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBBZGRpbmcgaG91ciBpbmNyZW1lbnQgd2l0aCBob3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyICs9IGhvdXJJbmNyZW1lbnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgaG91ckluY3JlbWVudCBpcyBtb3JlIHRoYW4gb3IgZXF1YWwgdG8gMSB0aGVuIGludGVydmFsIHZhbHVlIG11c3QgYmUgcmUtY2FsY3VsYXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWwgPSBpbnRlcnZhbCAtICg2MCAqIGhvdXJJbmNyZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGludGVydmFsIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludGVydmFsID09PSAwKSBpbnRlcnZhbCArPSBcIjBcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZiBob3VyIGlzIGxlc3MgdGhhbiAxMCB0aGVuIGFkZCBhIDAgYmVmb3JlIGl0IHRvIG1ha2UgaXQgY29uc2lzdGVudCB3aXRoIGNhbGVuZGFyIGhvdXIvbWludXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihob3VyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1c3lUaW1lcy5wdXNoKGAwJHtob3VyfToke2ludGVydmFsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXN5VGltZXMucHVzaChgJHtob3VyfToke2ludGVydmFsfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdXb3JraW5nVGltZXMgPSBpdGVtLndvcmtpbmdUaW1lcy5maWx0ZXIodGltZSA9PiAhYnVzeVRpbWVzLmluY2x1ZGVzKHRpbWUpKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHh4eC5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHN0eWxpc3Q6IGl0ZW0uc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgIGZyZWVUaW1lczogbmV3V29ya2luZ1RpbWVzXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzLnB1c2goeyBkYXRlOiB3b3JraW5nVGltZS5kYXRlLCBzdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzOiB4eHh9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coc3R5bGlzdHNGcmVlVGltZXNPbkF2YWlsYWJsZURhdGVzKTtcclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIFJlZHVjZSBmdW5jdGlvbiBhY2NlcHRzIHR3byBhcmd1bWVudHMuIEZpcnN0IG9uZSBpcyBhIGZ1bmN0aW9uIHdpdGggdHdvIHBhcmFtZXRlcnMgYW5kIHRoZSBzZWNvbmQgaXMgaW5pdGlhbCB2YWx1ZVxyXG4gICAgLy8gSWYgaW5pdGlhbCB2YWx1ZSBpcyBub3QgZXhwbGljaXRseSBkZWZpbmVkIChmb3IgZm9sbG93aW5nIGNhc2UsIDApIHRoZW4gcmVkdWNlIGZ1bmN0aW9uIHdpbGwgYnkgZGVmYXVsdCB0YWtlIHRoZVxyXG4gICAgLy8gZmlyc3QgaXRlbSBvZiB0aGUgYXJyYXkgYXMgdGhlIGluaXRpYWwgdmFsdWUuICAgXHJcbiAgICBjb25zdCBjb3VudE9mVGltZXNUb09tbWl0ID0gbmV3VHJlYXRtZW50cy5yZWR1Y2UoKHRvdGFsLCB0cmVhdG1lbnQpID0+IHRvdGFsICsgKE1hdGguY2VpbCh0cmVhdG1lbnQudHJlYXRtZW50RHVyYXRpb24gLyAxNSkpLCAwKTtcclxuICBcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0VGltZXNBcnJheS5sZW5ndGgpO1xyXG4gICAgY29uc29sZS5sb2coY291bnRPZlRpbWVzVG9PbW1pdCk7XHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0VGltZXNBcnJheS5sZW5ndGggLSBjb3VudE9mVGltZXNUb09tbWl0KTtcclxuXHJcbiAgICBjb25zdCBxcXEgPSBbXTtcclxuXHJcbiAgICBzdHlsaXN0c0ZyZWVUaW1lc09uQXZhaWxhYmxlRGF0ZXMuZm9yRWFjaCgoZGF0ZSwgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgLy8gMjAyMS0xMS0xNVxyXG5cclxuICAgICAgICAvLyBUaGlzIGFycmF5IHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggYWxsIHRoZSBzdGFydGluZyBmcmVlIHRpbWVzIG9mIGVhY2ggZGF0ZVxyXG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZVRpbWVzQnlEYXRlID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCAoZGVmYXVsdFRpbWVzQXJyYXkubGVuZ3RoICsgMSkgLSBjb3VudE9mVGltZXNUb09tbWl0OyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIC8vIDEwOjAwXHJcblxyXG4gICAgICAgICAgICAvLyB0b3RhbFRpbWVDb3VudCB2YWx1ZSB3aWxsIGJlIHVwZGF0ZWQgb24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSBpbiB0aGUgZm9sbG93aW5nIGxvb3AuIFxyXG4gICAgICAgICAgICAvLyBGb3IgZXhhbXBsZSwgaWYgc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGhhcyB0aHJlZSBpdGVtcyAoc2F5IGZpcnN0IGl0ZW0ncyBkdXJhdGlvbiBpcyA0NSwgc2Vjb25kIGlzIDU1IFxyXG4gICAgICAgICAgICAvLyBhbmQgdGhpcmQgaXMgMjUpIHRoZW4gYXQgdGhlIGVuZCBvZiB0aGUgbG9vcCB0b3RhbFRpbWVDb3VudCB3aWxsIGJlIChNYXRoLmNlaWwoNDUgLyAxNSkgKyAgTWF0aC5jZWlsKDU1IC8gMTUpXHJcbiAgICAgICAgICAgIC8vICsgTWF0aC5jZWlsKDI1IC8gMTUpKSAzICsgNCArIDIgPSA5XHJcbiAgICAgICAgICAgIGxldCB0b3RhbFRpbWVDb3VudCA9IDA7XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIGEgdGVtcG9yYXJ5IGFycmF5IHdoaWNoIHdpbGwgYmUgcG9wdWxhdGVkIHdpdGggZnJlZSB0aW1lcyBvZiBlYWNoIHN0eWxpc3QgYnkgbG9vcGluZyB0aHJvdWdoIHRoZSBcclxuICAgICAgICAgICAgLy8gc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5XHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBkYXRlLnN0eWxpc3RzQW5kVGhlaXJGcmVlVGltZXMubGVuZ3RoOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpdGVtID0gZGF0ZS5zdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzW2pdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBDb3VudCB3aWxsIGRldGVybWluZSBob3cgbWFueSBmcmVlIHRpbWVzIHNob3VsZCBiZSBsb29rZWQgZm9yLiBGb3IgZXhhbXBsZSBpZiBjb3VudCBpcyAzIGFuZCBzdGFydGluZ1xyXG4gICAgICAgICAgICAgICAgLy8gdGltZSBpcyAwOTozMCB0aGVuIDA5OjMwLCAwOTo0NSAmIDEwOjAwIHNob3VsZCBiZSBsb29rZWQgZm9yXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudCA9IE1hdGguY2VpbChuZXdUcmVhdG1lbnRzW2pdLnRyZWF0bWVudER1cmF0aW9uIC8gMTUpOyBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQXMgc2FpZCBhYm92ZSB0b3RhbFRpbWVDb3VudCBtdXN0IGJlIHVwZGF0ZWQgb24gZWFjaCBpdGVtIG9mIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdG90YWxUaW1lQ291bnQgKz0gY291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVGhpcyBpcyB2ZXJ5IGNydWNpYWwuIE9uIGVhY2ggaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkgdGhpcyBzdGFydGluZ1RpbWUgd2lsbCBiZSB1cGRhdGVkLFxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIGV4YW1wbGUgLSBzYXkgd2UgYXJlIGF0IDA5OjAwIG9uIGZpcnN0IGl0ZW0gb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5LCBjb3VudCBpcyAzXHJcbiAgICAgICAgICAgICAgICAvLyBhbmQgc3R5bGlzdCBvZiB0aGlzIGl0ZW0gaXMgYXZhaWxhYmxlIG9uIGFsbCB0aHJlZSB0aW1lcyAwOTowMCwgMDk6MTUgJiA5OjMwLiBTbyBzdGFydGluZ1RpbWUgbXVzdCBiZSBcclxuICAgICAgICAgICAgICAgIC8vIGZyb20gMDk6NDUgZm9yIHRoZSAybmQgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXkuIFNheSBmb3IgdGhlIHNlY29uZCBpdGVtIGNvdW50IGlzIDQgYW5kIHN0eWxpc3RcclxuICAgICAgICAgICAgICAgIC8vIGlzIGF2YWlsYWJsZSBvbiBhbGwgZm91ciB0aW1lcyAwOTo0NSwgMTA6MDAsIDEwOjE1ICYgMTA6MzAsIHNvIHN0YXJ0aW5nVGltZSBmb3IgdGhlIHRoaXJkIGl0ZW0gb2YgdGhlIFxyXG4gICAgICAgICAgICAgICAgLy8gIHN0eWxpc3RzV2l0aEZyZWVUaW1lcyBhcnJheSAxMDo0NS4gXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhcnRpbmdUaW1lID0gXCJcIjtcclxuXHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGVtcCBsZW5ndGggaXMgemVybyB0aGVuIHdlIGFyZSBhdCB0aGUgZmlyc3QgaXRlbSBvZiBzdHlsaXN0c1dpdGhGcmVlVGltZXMgYXJyYXlcclxuICAgICAgICAgICAgICAgIGlmKCF0ZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0aW5nVGltZSA9IGRlZmF1bHRUaW1lc0FycmF5W2ldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgZWFjaCBjb25zZWN1dGl2ZSBpdGVtIGFmdGVyIHRoZSBmaXJzdCBvbmUgb2Ygc3R5bGlzdHNXaXRoRnJlZVRpbWVzIGFycmF5IHN0YXJ0aW5nVGltZSB3aWxsIGJlIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBuZXh0IHRpbWUgYWZ0ZXIgdGhlIHRpbWUgb2YgbGFzdCBpdGVtIG9mIHRlbXAgYXJyYXkuIFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBkZWZhdWx0VGltZXNBcnJheS5pbmRleE9mKHRlbXBbdGVtcC5sZW5ndGggLSAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdUaW1lID0gZGVmYXVsdFRpbWVzQXJyYXlbeSArIDFdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICBsZXQgaG91ciA9IE51bWJlcihzdGFydGluZ1RpbWUuc3Vic3RyaW5nKDAsIDIpKTsgLy8gMTFcclxuICAgICAgICAgICAgICAgIGxldCBtaW51dGVzID0gTnVtYmVyKHN0YXJ0aW5nVGltZS5zdWJzdHJpbmcoMywgNSkpOyAvLyAzMFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgZm9yKGxldCBrID0gMTsgayA8PSBjb3VudDsgaysrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBob3VySW5jcmVtZW50ID0gTWF0aC5mbG9vcihtaW51dGVzIC8gNjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gaG91ckluY3JlbWVudDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoaG91ckluY3JlbWVudCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBtaW51dGVzIC0gKDYwICogaG91ckluY3JlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiBtaW51dGVzIGlzIDAgdGhlbiBhZGQgZXh0cmEgb25lIDAgdG8ga2VlcCB0aGUgbWludXRlIHZhbHVlIGluIHR3byBkaWdpdHNcclxuICAgICAgICAgICAgICAgICAgICBpZihtaW51dGVzID09PSAwKSBtaW51dGVzICs9IFwiMFwiO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IFwiXCI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIGhvdXIgaXMgbGVzcyB0aGFuIDEwIHRoZW4gYWRkIGEgMCBiZWZvcmUgaXQgdG8gbWFrZSBpdCBjb25zaXN0ZW50IHdpdGggY2FsZW5kYXIgaG91ci9taW51dGVcclxuICAgICAgICAgICAgICAgICAgICBpZihob3VyIDwgMTApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZSA9IChgMCR7aG91cn06JHttaW51dGVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWUgPSAoYCR7aG91cn06JHttaW51dGVzfWApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zdCBmcmVlVGltZXMgPSBpdGVtLmZyZWVUaW1lc0FycmF5W2luZGV4XS5mcmVlVGltZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZnJlZVRpbWVzID0gaXRlbS5mcmVlVGltZXM7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihmcmVlVGltZXMuaW5jbHVkZXModGltZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZXMgPSBOdW1iZXIobWludXRlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWludXRlcyArPSAxNTtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2F5IHN0YXJ0aW5nVGltZSBpcyAwOTowMCAmIGNvdW50IGlzIDMuIFNvIHRvdGFsVGltZUNvdW50IGlzIGFsc28gMy4gQWZ0ZXIgZmlyc3QgaXRlcmF0aW9uIHRlbXAubGVuZ3RoIFxyXG4gICAgICAgICAgICAgICAgLy8gbXVzdCBiZSBlcXVhbHMgdG8gMyBvdGhlcndpc2UgaXQgbWVhbnMgdGhhdCBzdHlsaXN0IGlzIG5vdCBhdmFpbGFibGUgYXQgYWxsIHRocmVlIHRpbWVzICgwOTowMC4gMDk6MTUgJiAwOTozMClcclxuICAgICAgICAgICAgICAgIC8vIEluIHN1Y2ggY2FzZSBmdXJ0aGVyIGl0ZXJhdGlvbiBpcyBub3QgbmVjZXNzYXJ5LiBcclxuICAgICAgICAgICAgICAgIGlmKHRlbXAubGVuZ3RoIDwgdG90YWxUaW1lQ291bnQpIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0b3RhbFRpbWVDb3VudCA9PT0gdGVtcC5sZW5ndGgpIGF2YWlsYWJsZVRpbWVzQnlEYXRlLnB1c2goZGVmYXVsdFRpbWVzQXJyYXlbaV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcXFxLnB1c2goe2RhdGU6IGRhdGUuZGF0ZSwgdGltZXM6IGF2YWlsYWJsZVRpbWVzQnlEYXRlfSk7XHJcbiAgICAgICBcclxuXHJcbiAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgICBjb25zb2xlLmxvZyhxcXEpO1xyXG5cclxuICAgIGNvbnN0IGRhdGVUaW1lc0FycmF5ID0gW107XHJcblxyXG4gICAgcXFxLmZvckVhY2goKGRhdGVUaW1lcywgaW5kZXgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGVUaW1lcy5kYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHllYXIgPSBuZXdEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgY29uc3Qgd2Vla0RheSA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7ICB3ZWVrZGF5OiBcInNob3J0XCIgfSk7XHJcbiAgICAgICAgY29uc3QgbW9udGggPSBuZXdEYXRlLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0pO1xyXG5cclxuICAgICAgICBkYXRlVGltZXNBcnJheS5wdXNoKHtcclxuICAgICAgICAgICAgZGF0ZToge2RhdGUsIHdlZWtEYXksIG1vbnRoLCB5ZWFyfSxcclxuICAgICAgICAgICAgZGF0ZUluRGF0ZUZvcm1hdDogZGF0ZVRpbWVzLmRhdGUsXHJcbiAgICAgICAgICAgIHRpbWVzOiBkYXRlVGltZXMudGltZXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGF0ZVRpbWVzQXJyYXk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyBBeGlvc1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuLy8gRmV0Y2hpbmcgY2FsZW5kYXIgZXZlbnRzIG9mIGFsbCBzdHlsaXN0c1xyXG4vLyBmb3IgbG9vcCBpcyB0aGUgd2F5IHRvIGdvIGZvciBmZXRjaGluZyBkYXRhIHRocm91Z2ggYXBpIGNhbGxzLiBmb3JFYWNoIHN1Y2tzLlxyXG5leHBvcnQgY29uc3QgZmV0Y2hFdmVudHMgPSBhc3luYyAoKSA9PiB7XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50c1wiKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGEuZXZlbnRzO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJleHBvcnQgY29uc3QgZ2V0RGF0ZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvLyBQb3B1bGF0aW5nIGRhdGVUaW1lQXJyYXkgd2l0aCAzMCBkYXRlcyBmcm9tIHRvZGF5XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDw9IDMwOyBpKyspIHtcclxuXHJcbiAgICAgICAgLy8gT25lIGRheSBlcXVhbHMgODY0MDAwMDAgbWlsbGlzZWNvbmRzLiBGb3IgZWFjaCBpdGVyYXRpb24gd2UgbmVlZCB0byBhZGQgKDg2NDAwMDAwICogaSkgbWlsbGlzZWNvbmRzIHdpdGggdG9kYXkuIFRoaXMgd2F5XHJcbiAgICAgICAgLy8gd2UgY2FuIGNhbGN1bGF0ZSBkYXRlcyBhcyBtYW55IGFzIHdlIHdhbnQuICAgXHJcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgKDg2NDAwMDAwICogaSkpO1xyXG5cclxuICAgICAgICBjb25zdCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gKGRhdGUuZ2V0TW9udGgoKSArIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgbGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGlmIChtb250aCA8IDEwKSBtb250aCA9IGAwJHttb250aH1gO1xyXG4gICAgICAgIGlmIChkYXkgPCAxMCkgZGF5ID0gYDAke2RheX1gO1xyXG5cclxuXHJcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XHJcbiAgICAgICAgZGF0ZXMucHVzaChuZXdEYXRlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGVzO1xyXG5cclxufSIsIi8vIEF4aW9zXHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG4vLyBGZXRjaGluZyBjYWxlbmRhciBldmVudHMgb2YgYWxsIHN0eWxpc3RzXHJcbi8vIGZvciBsb29wIGlzIHRoZSB3YXkgdG8gZ28gZm9yIGZldGNoaW5nIGRhdGEgdGhyb3VnaCBhcGkgY2FsbHMuIGZvckVhY2ggc3Vja3MuXHJcbmV4cG9ydCBjb25zdCBnZXRTdHlsaXN0cyA9IGFzeW5jIChuZXdUcmVhdG1lbnRzKSA9PiB7XHJcblxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzXCIpO1xyXG5cclxuICAgICAgICBjb25zdCBzdHlsaXN0cyA9IFtdO1xyXG5cclxuICAgICAgICBuZXdUcmVhdG1lbnRzLmZvckVhY2godHJlYXRtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEuZm9yRWFjaChzdHlsaXN0ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdHlsaXN0RnVsbE5hbWUgPSBzdHlsaXN0LmZpcnN0TmFtZSArIFwiIFwiICsgc3R5bGlzdC5sYXN0TmFtZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnQuY2hvb3NlblN0eWxpc3QgPT09IHN0eWxpc3RGdWxsTmFtZSkgc3R5bGlzdHMucHVzaChzdHlsaXN0KTtcclxuXHJcblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHN0eWxpc3RzO1xyXG5cclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIucmVzcG9uc2UuZGF0YS5tc2cpO1xyXG5cclxuICAgIH1cclxuXHJcbn0iLCJjb25zdCB0aW1lcyA9IFtcclxuICAgIFwiMTA6MDBcIiwgXCIxMDoxNVwiLCBcIjEwOjMwXCIsIFwiMTA6NDVcIiwgXCIxMTowMFwiLCBcIjExOjE1XCIsIFwiMTE6MzBcIiwgXCIxMTo0NVwiLCBcIjEyOjAwXCIsIFwiMTI6MTVcIiwgXCIxMjozMFwiLCBcIjEyOjQ1XCIsIFxyXG4gICAgXCIxMzowMFwiLCBcIjEzOjE1XCIsIFwiMTM6MzBcIiwgXCIxMzo0NVwiLCBcIjE0OjAwXCIsIFwiMTQ6MTVcIiwgXCIxNDozMFwiLCBcIjE0OjQ1XCIsIFwiMTU6MDBcIiwgXCIxNToxNVwiLCBcIjE1OjMwXCIsIFwiMTU6NDVcIiwgXHJcbiAgICBcIjE2OjAwXCIsIFwiMTY6MTVcIiwgXCIxNjozMFwiLCBcIjE2OjQ1XCIsIFwiMTc6MDBcIlxyXG5dO1xyXG5cclxuLy8gMjAyMS0xMS0xNVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdvcmtpbmdUaW1lcyA9IChkYXRlc0FycmF5LCBhbGxTdHlsaXN0cywgbmV3VHJlYXRtZW50cywgbG9jYXRpb24pID0+IHtcclxuXHJcbiAgICBjb25zdCBzdHlsaXN0c1dvcmtpbmdUaW1lc09uQXZhaWxhYmxlRGF0ZXMgPSBbXTtcclxuXHJcbiAgICAvLyBGb3IgZWFjaCBkYXRlIG9mIHRoZSBkYXRlVGltZUFycmF5IGxvb3AgdGhyb3VnaCB0aGUgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGR1bGUgdG8gZmluZCBkYXkgbWF0Y2guXHJcbiAgICBkYXRlc0FycmF5LmZvckVhY2goZGF0ZSA9PiB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgbmV3RGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgICAgICAvLyBnZXQgdGhlIGRheSBuYW1lIChleGFtcGxlIC0gTW9uZGF5KSBmcm9tIHRoZSBkYXRlIHRvIGNoZWNrIGFnYWluc3QgZWFjaCBzdHlsaXN0J3Mgd29ya1NjaGVkdWxlJ3MgZGF5IE5hbWVcclxuICAgICAgICBjb25zdCBkYXlOYW1lID0gbmV3RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1VU1wiLCB7IHdlZWtkYXk6IFwibG9uZ1wiIH0pO1xyXG5cclxuICAgICAgICAvLyBObyBzdHlsaXN0IGhhcyB3b3JrU2NoZWR1bGUgb24gU2F0dXJkYXkgYW5kIFN1bmRheSBzbyBlbmQgdGhlIGN1cnJlbnQgaXRlcmF0aW9uIGhlcmVcclxuICAgICAgICBpZihkYXlOYW1lID09PSBcIlNhdHVyZGF5XCIgfHwgZGF5TmFtZSA9PT0gXCJTdW5kYXlcIikgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB0ZW1wID0gW107XHJcblxyXG4gICAgICAgIC8vIExvb3QgdGhyb3VnaCBhbGwgc3R5bGlzdHMgdG8gYmUgYWJsZSB0byBsb29wIHRocm91Z2ggdGhlaXIgd29ya1NjaGVkdWxlIFxyXG4gICAgICAgIGFsbFN0eWxpc3RzLmZvckVhY2goc3R5bGlzdCA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBPbmx5IG9uZSBmcm9tIHRoZSBzdHlsaXN0IHdvcmtTY2hlZHVsZSBhcnJheSB3aWxsIG1hdGNoIHdpdGggdGhlIGN1cnJlbnQgZGF0ZSBpdGVyYXRpb24sIGlmIGl0J3MgZm91bmQgbm8gbmVlZCB0b1xyXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIHJlc3Qgb2YgdGhlIHNjaGVkdWxlc1xyXG4gICAgICAgICAgICBmb3IobGV0IHAgPSAwOyBwIDwgc3R5bGlzdC53b3JrU2NoZWR1bGUubGVuZ3RoOyBwKyspIHtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzY2hlZHVsZSA9IHN0eWxpc3Qud29ya1NjaGVkdWxlW3BdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHNjaGVkdWxlLmxvY2F0aW9uID09PSBsb2NhdGlvbiAmJiBzY2hlZHVsZS5kYXkgPT09IGRheU5hbWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQXJyYXkgb2YgdGltZXMgYWJvdmUgaGFzIGFsbCB0aGUgcG9zc2libGUgd29ya2luZyB0aW1lcy4gc3RhcnRUaW1lSW5kZXggaXMgdGhlIGluZGV4IG9mIHRpbWUgZnJvbSB0aGUgdGltZXNcclxuICAgICAgICAgICAgICAgICAgICAvLyBhcnJheSwgZW5kVGltZUluZGV4IGlzIHRoZSBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgd2hpY2ggdGltZXMgZnJvbSB0aGUgdGltZXMgYXJyYXkgYWJvdmUgbWF0Y2ggd2l0aCB0aGUgd29ya2luZyBzdGFydCBhbmQgZW5kIHRpbWUgb2YgdGhlIGN1cnJlbnQgc3R5bGlzdFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9uIGN1cnJlbnQgZGF0ZS4gV2UgbmVlZCB0byBwdXQgYWxsIHRoZSB0aW1lcyBzdGFydGluZyBmcm9tIHN0YXJ0VGltZSBhbmQgZW5kaW5nIGF0IGVuZFRpbWVcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWVJbmRleCA9IHRpbWVzLmluZGV4T2Yoc2NoZWR1bGUuc3RhcnRUaW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRUaW1lSW5kZXggPSB0aW1lcy5pbmRleE9mKHNjaGVkdWxlLmVuZFRpbWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB3b3JraW5nVGltZXMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBxID0gc3RhcnRUaW1lSW5kZXg7IHEgPD0gZW5kVGltZUluZGV4OyBxKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29ya2luZ1RpbWVzLnB1c2godGltZXNbcV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGVtcC5wdXNoKHsgc3R5bGlzdDogc3R5bGlzdC5maXJzdE5hbWUgKyBcIiBcIiArIHN0eWxpc3QubGFzdE5hbWUsIHdvcmtpbmdUaW1lc30pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2F5IGRheSBvZiBjdXJyZW50IGRhdGUgaXRlcmF0aW9uIGlzIE1vbmRheSBhbmQgYWxsIHN0eWxpc3RzIGFyZSBhdmFpbGFibGUgb24gdGhpcyBkYXkgYXQgdGhlIHJlcXVlc3RlZCBsb2NhdGlvbi4gSXRcclxuICAgICAgICAvLyBtZWFucyBhIFxyXG4gICAgICAgIGlmKHRlbXAubGVuZ3RoID09PSBuZXdUcmVhdG1lbnRzLmxlbmd0aCkgc3R5bGlzdHNXb3JraW5nVGltZXNPbkF2YWlsYWJsZURhdGVzLnB1c2goeyBkYXRlLCBzdHlsaXN0V29ya2luZ1RpbWVzOiB0ZW1wfSk7XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcztcclxuXHJcbn0iLCJcclxuZXhwb3J0IGNvbnN0IGdldERhdGVzID0gKCkgPT4ge1xyXG5cclxuICAgIGxldCBkYXRlc0FycmF5ID0gW107XHJcblxyXG5cclxuICAgIGRhdGVzQXJyYXkucHVzaCh7XHJcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoKS5nZXREYXRlKCksXHJcbiAgICAgICAgd2Vla0RheTogXCJUb2RheVwiLFxyXG4gICAgICAgIG1vbnRoOiBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiZW4tdXNcIiwgeyBtb250aDogXCJzaG9ydFwiIH0gKVxyXG4gICAgfSlcclxuXHJcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xyXG5cclxuICAgICAgICBjb25zdCBuZXdEYXRlID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAoODY0MDAwMDAgKiBpKSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcclxuICAgICAgICBjb25zdCB3ZWVrRGF5ID0gbmV3RGF0ZS50b0xvY2FsZVN0cmluZyhcImVuLXVzXCIsIHsgIHdlZWtkYXk6IFwic2hvcnRcIiB9KTtcclxuICAgICAgICBjb25zdCBtb250aCA9IG5ld0RhdGUudG9Mb2NhbGVTdHJpbmcoXCJlbi11c1wiLCB7IG1vbnRoOiBcInNob3J0XCIgfSlcclxuXHJcbiAgICAgICAgZGF0ZXNBcnJheS5wdXNoKHtkYXRlLCB3ZWVrRGF5LCBtb250aH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkYXRlc0FycmF5O1xyXG59IiwiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQXhpb3MobWV0aG9kLCB1cmwsIGJvZHksIGhhcHBlbmluZykge1xyXG5cclxuICAgIC8vY29uc29sZS5sb2codXJsKTtcclxuXHJcbiAgICAvLyAvLyBOZWVkIHRvIHB1dCBmb2xsb3dpbmcgdGhyZWUgaW4gdGhlIHVzZUVmZmVjdCdzIGRlcGVuZGVjeSBhcnJheSB0byBhbGxvdyBmb3IgZHluYW1pYyBkYXRhIGZldGNoaW5nIGJhc2VkIG9uIHVzZXIncyBcclxuICAgIC8vIC8vIHNlYXJjaCBpbnB1dCwgbmF2aWdhdGlvbiB0byBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcy5cclxuICAgIC8vIGxldCBzZWFyY2hUZXh0ID0gXCJcIjtcclxuICAgIC8vIGxldCBza2lwID0gMDtcclxuICAgIC8vIGxldCBsaW1pdCA9IDA7XHJcblxyXG4gICAgLy8gLy8gSWYgaXQncyBhIHBvc3QgcmVxdWVzdCB0aGVuIGJvZHkgd2lsbCBjb250YWluIHNlYXJjaFRleHQsIHNraXAgYW5kIGxpbWl0LiBVcGRhdGUgdGhlIGFib3ZlIHRocmVlIHdpdGggdGhlIGJvZHkncyB2YWx1ZXNcclxuICAgIC8vIGlmKGJvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vICAgICBzZWFyY2hUZXh0ID0gYm9keS5zZWFyY2hUZXh0O1xyXG4gICAgLy8gICAgIHNraXAgPSBib2R5LnNraXA7XHJcbiAgICAvLyAgICAgbGltaXQgPSBib2R5LmxpbWl0XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGV4dCwgc2tpcCwgbGltaXQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWV0aG9kLCB1cmwsIGJvZHkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0b3RhbERhdGFDb3VudCwgc2V0VG90YWxEYXRhQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgbWV0aG9kLCB1cmwsIGRhdGE6IGJvZHkgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cobmV3RGF0YSk7XHJcblxyXG4gICAgICAgICAgICAvLyBJZiBkYXRhIGFyZSBiZWluZyBmZXRjaGVkIHdpdGggZ2V0IG1ldGhvZCB0aGVuIGFuIGFycmF5IG9mIGpzb24gb2JqZWN0cyBoYXMgYmVlbiBzZW50IGZyb20gYmFja2VuZFxyXG4gICAgICAgICAgICBpZihBcnJheS5pc0FycmF5KG5ld0RhdGEpKSByZXR1cm4gc2V0RGF0YShuZXdEYXRhKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuaXRlbXMgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZXREYXRhKG5ld0RhdGEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBFbHNlLCBkYXRhIGFyZSBiZWluZyBmZXRjaGVkIHdpdGggcG9zdCBtZXRob2QuIFNvIGFuIG9iamVjdCBoYXMgYmVlbiBzZW50IGZyb20gYmFja2VuZCB3aGljaCBjb250YWlucyBkYXRhIGFuZFxyXG4gICAgICAgICAgICAvLyB0b3RhbERhdGFDb3VudFxyXG4gICAgICAgICAgICBjb25zdCB7IGl0ZW1zLCB0b3RhbEl0ZW1Db3VudCB9ID0gcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNldERhdGEoaXRlbXMpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgc2V0VG90YWxEYXRhQ291bnQodG90YWxJdGVtQ291bnQpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yKTtcclxuXHJcbiAgICAgICAgfSBcclxuICAgICAgICBmaW5hbGx5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG5cclxuICAgIH0sIFt1cmwsIGhhcHBlbmluZ10pOyBcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGRhdGEpO1xyXG5cclxuICAgIHJldHVybiB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9O1xyXG5cclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IEltYWdlMTtcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XG52YXIgX2hlYWQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL2hlYWRcIikpO1xudmFyIF90b0Jhc2U2NCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3RvLWJhc2UtNjRcIik7XG52YXIgX2ltYWdlQ29uZmlnID0gcmVxdWlyZShcIi4uL3NlcnZlci9pbWFnZS1jb25maWdcIik7XG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgaWYgKGtleSBpbiBvYmopIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7XG4gICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHtcbiAgICAgICAgfTtcbiAgICAgICAgdmFyIG93bktleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICBpZiAodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgb3duS2V5cyA9IG93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBzeW0pLmVudW1lcmFibGU7XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgICAgb3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSkge1xuICAgICAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7XG4gICAgfTtcbiAgICB2YXIgdGFyZ2V0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCk7XG4gICAgdmFyIGtleSwgaTtcbiAgICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgICAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcbiAgICAgICAgZm9yKGkgPSAwOyBpIDwgc291cmNlU3ltYm9sS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge1xuICAgIH07XG4gICAgdmFyIHRhcmdldCA9IHtcbiAgICB9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuY29uc3QgbG9hZGVkSW1hZ2VVUkxzID0gbmV3IFNldCgpO1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWU7XG59XG5jb25zdCBWQUxJRF9MT0FESU5HX1ZBTFVFUyA9IFtcbiAgICAnbGF6eScsXG4gICAgJ2VhZ2VyJyxcbiAgICB1bmRlZmluZWRcbl07XG5jb25zdCBsb2FkZXJzID0gbmV3IE1hcChbXG4gICAgW1xuICAgICAgICAnZGVmYXVsdCcsXG4gICAgICAgIGRlZmF1bHRMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2ltZ2l4JyxcbiAgICAgICAgaW1naXhMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2Nsb3VkaW5hcnknLFxuICAgICAgICBjbG91ZGluYXJ5TG9hZGVyXG4gICAgXSxcbiAgICBbXG4gICAgICAgICdha2FtYWknLFxuICAgICAgICBha2FtYWlMb2FkZXJcbiAgICBdLFxuICAgIFtcbiAgICAgICAgJ2N1c3RvbScsXG4gICAgICAgIGN1c3RvbUxvYWRlclxuICAgIF0sIFxuXSk7XG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAgICdmaWxsJyxcbiAgICAnZml4ZWQnLFxuICAgICdpbnRyaW5zaWMnLFxuICAgICdyZXNwb25zaXZlJyxcbiAgICB1bmRlZmluZWQsIFxuXTtcbmZ1bmN0aW9uIGlzU3RhdGljUmVxdWlyZShzcmMpIHtcbiAgICByZXR1cm4gc3JjLmRlZmF1bHQgIT09IHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGlzU3RhdGljSW1hZ2VEYXRhKHNyYykge1xuICAgIHJldHVybiBzcmMuc3JjICE9PSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBpc1N0YXRpY0ltcG9ydChzcmMpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNyYyA9PT0gJ29iamVjdCcgJiYgKGlzU3RhdGljUmVxdWlyZShzcmMpIHx8IGlzU3RhdGljSW1hZ2VEYXRhKHNyYykpO1xufVxuY29uc3QgeyBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMgLCBpbWFnZVNpemVzOiBjb25maWdJbWFnZVNpemVzICwgbG9hZGVyOiBjb25maWdMb2FkZXIgLCBwYXRoOiBjb25maWdQYXRoICwgZG9tYWluczogY29uZmlnRG9tYWlucyAsICB9ID0gcHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgfHwgX2ltYWdlQ29uZmlnLmltYWdlQ29uZmlnRGVmYXVsdDtcbi8vIHNvcnQgc21hbGxlc3QgdG8gbGFyZ2VzdFxuY29uc3QgYWxsU2l6ZXMgPSBbXG4gICAgLi4uY29uZmlnRGV2aWNlU2l6ZXMsXG4gICAgLi4uY29uZmlnSW1hZ2VTaXplc1xuXTtcbmNvbmZpZ0RldmljZVNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmFsbFNpemVzLnNvcnQoKGEsIGIpPT5hIC0gYlxuKTtcbmZ1bmN0aW9uIGdldFdpZHRocyh3aWR0aCwgbGF5b3V0LCBzaXplcykge1xuICAgIGlmIChzaXplcyAmJiAobGF5b3V0ID09PSAnZmlsbCcgfHwgbGF5b3V0ID09PSAncmVzcG9uc2l2ZScpKSB7XG4gICAgICAgIC8vIEZpbmQgYWxsIHRoZSBcInZ3XCIgcGVyY2VudCBzaXplcyB1c2VkIGluIHRoZSBzaXplcyBwcm9wXG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGhSZSA9IC8oXnxcXHMpKDE/XFxkP1xcZCl2dy9nO1xuICAgICAgICBjb25zdCBwZXJjZW50U2l6ZXMgPSBbXTtcbiAgICAgICAgZm9yKGxldCBtYXRjaDsgbWF0Y2ggPSB2aWV3cG9ydFdpZHRoUmUuZXhlYyhzaXplcyk7IG1hdGNoKXtcbiAgICAgICAgICAgIHBlcmNlbnRTaXplcy5wdXNoKHBhcnNlSW50KG1hdGNoWzJdKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBlcmNlbnRTaXplcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHNtYWxsZXN0UmF0aW8gPSBNYXRoLm1pbiguLi5wZXJjZW50U2l6ZXMpICogMC4wMTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2lkdGhzOiBhbGxTaXplcy5maWx0ZXIoKHMpPT5zID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGFsbFNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2lkdGggIT09ICdudW1iZXInIHx8IGxheW91dCA9PT0gJ2ZpbGwnIHx8IGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aHM6IGNvbmZpZ0RldmljZVNpemVzLFxuICAgICAgICAgICAga2luZDogJ3cnXG4gICAgICAgIH07XG4gICAgfVxuICAgIGNvbnN0IHdpZHRocyA9IFtcbiAgICAgICAgLi4ubmV3IFNldCgvLyA+IFRoaXMgbWVhbnMgdGhhdCBtb3N0IE9MRUQgc2NyZWVucyB0aGF0IHNheSB0aGV5IGFyZSAzeCByZXNvbHV0aW9uLFxuICAgICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgICAgLy8gPiBibHVlIGNvbG9ycy4gU2hvd2luZyBhIDN4IHJlc29sdXRpb24gaW1hZ2UgaW4gdGhlIGFwcCB2cyBhIDJ4XG4gICAgICAgIC8vID4gcmVzb2x1dGlvbiBpbWFnZSB3aWxsIGJlIHZpc3VhbGx5IHRoZSBzYW1lLCB0aG91Z2ggdGhlIDN4IGltYWdlXG4gICAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAgIC8vID4gd2FzdGVmdWwgYXMgdGhlIGh1bWFuIGV5ZSBjYW5ub3Qgc2VlIHRoYXQgbGV2ZWwgb2YgZGV0YWlsIHdpdGhvdXRcbiAgICAgICAgLy8gPiBzb21ldGhpbmcgbGlrZSBhIG1hZ25pZnlpbmcgZ2xhc3MuXG4gICAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgICAgW1xuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICB3aWR0aCAqIDIgLyosIHdpZHRoICogMyovIFxuICAgICAgICBdLm1hcCgodyk9PmFsbFNpemVzLmZpbmQoKHApPT5wID49IHdcbiAgICAgICAgICAgICkgfHwgYWxsU2l6ZXNbYWxsU2l6ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgKSksIFxuICAgIF07XG4gICAgcmV0dXJuIHtcbiAgICAgICAgd2lkdGhzLFxuICAgICAgICBraW5kOiAneCdcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2VuZXJhdGVJbWdBdHRycyh7IHNyYyAsIHVub3B0aW1pemVkICwgbGF5b3V0ICwgd2lkdGggLCBxdWFsaXR5ICwgc2l6ZXMgLCBsb2FkZXIgIH0pIHtcbiAgICBpZiAodW5vcHRpbWl6ZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgIHNyY1NldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBjb25zdCB7IHdpZHRocyAsIGtpbmQgIH0gPSBnZXRXaWR0aHMod2lkdGgsIGxheW91dCwgc2l6ZXMpO1xuICAgIGNvbnN0IGxhc3QgPSB3aWR0aHMubGVuZ3RoIC0gMTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaXplczogIXNpemVzICYmIGtpbmQgPT09ICd3JyA/ICcxMDB2dycgOiBzaXplcyxcbiAgICAgICAgc3JjU2V0OiB3aWR0aHMubWFwKCh3LCBpKT0+YCR7bG9hZGVyKHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgICAgICB3aWR0aDogd1xuICAgICAgICAgICAgfSl9ICR7a2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxfSR7a2luZH1gXG4gICAgICAgICkuam9pbignLCAnKSxcbiAgICAgICAgLy8gSXQncyBpbnRlbmRlZCB0byBrZWVwIGBzcmNgIHRoZSBsYXN0IGF0dHJpYnV0ZSBiZWNhdXNlIFJlYWN0IHVwZGF0ZXNcbiAgICAgICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgICAgICAvLyBpbW1lZGlhdGVseSBzdGFydCB0byBmZXRjaCBgc3JjYCwgYmVmb3JlIGBzaXplc2AgYW5kIGBzcmNTZXRgIGFyZSBldmVuXG4gICAgICAgIC8vIHVwZGF0ZWQgYnkgUmVhY3QuIFRoYXQgY2F1c2VzIG11bHRpcGxlIHVubmVjZXNzYXJ5IHJlcXVlc3RzIGlmIGBzcmNTZXRgXG4gICAgICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgICAgICAvLyBUaGlzIGJ1ZyBjYW5ub3QgYmUgcmVwcm9kdWNlZCBpbiBDaHJvbWUgb3IgRmlyZWZveC5cbiAgICAgICAgc3JjOiBsb2FkZXIoe1xuICAgICAgICAgICAgc3JjLFxuICAgICAgICAgICAgcXVhbGl0eSxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aHNbbGFzdF1cbiAgICAgICAgfSlcbiAgICB9O1xufVxuZnVuY3Rpb24gZ2V0SW50KHgpIHtcbiAgICBpZiAodHlwZW9mIHggPT09ICdudW1iZXInKSB7XG4gICAgICAgIHJldHVybiB4O1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHggPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludCh4LCAxMCk7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBkZWZhdWx0SW1hZ2VMb2FkZXIobG9hZGVyUHJvcHMpIHtcbiAgICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKTtcbiAgICBpZiAobG9hZCkge1xuICAgICAgICByZXR1cm4gbG9hZChfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgICAgIHJvb3Q6IGNvbmZpZ1BhdGhcbiAgICAgICAgfSwgbG9hZGVyUHJvcHMpKTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIFwibG9hZGVyXCIgZm91bmQgaW4gXCJuZXh0LmNvbmZpZy5qc1wiLiBFeHBlY3RlZDogJHtfaW1hZ2VDb25maWcuVkFMSURfTE9BREVSUy5qb2luKCcsICcpfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWApO1xufVxuLy8gU2VlIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcS8zOTc3NzgzMy8yNjY1MzUgZm9yIHdoeSB3ZSB1c2UgdGhpcyByZWZcbi8vIGhhbmRsZXIgaW5zdGVhZCBvZiB0aGUgaW1nJ3Mgb25Mb2FkIGF0dHJpYnV0ZS5cbmZ1bmN0aW9uIGhhbmRsZUxvYWRpbmcoaW1nLCBzcmMsIGxheW91dCwgcGxhY2Vob2xkZXIsIG9uTG9hZGluZ0NvbXBsZXRlKSB7XG4gICAgaWYgKCFpbWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVMb2FkID0gKCk9PntcbiAgICAgICAgaWYgKCFpbWcuc3JjLnN0YXJ0c1dpdGgoJ2RhdGE6JykpIHtcbiAgICAgICAgICAgIGNvbnN0IHAgPSAnZGVjb2RlJyBpbiBpbWcgPyBpbWcuZGVjb2RlKCkgOiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIHAuY2F0Y2goKCk9PntcbiAgICAgICAgICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICBpZiAocGxhY2Vob2xkZXIgPT09ICdibHVyJykge1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuZmlsdGVyID0gJ25vbmUnO1xuICAgICAgICAgICAgICAgICAgICBpbWcuc3R5bGUuYmFja2dyb3VuZFNpemUgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgICAgIGltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAnbm9uZSc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxvYWRlZEltYWdlVVJMcy5hZGQoc3JjKTtcbiAgICAgICAgICAgICAgICBpZiAob25Mb2FkaW5nQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBuYXR1cmFsV2lkdGggLCBuYXR1cmFsSGVpZ2h0ICB9ID0gaW1nO1xuICAgICAgICAgICAgICAgICAgICAvLyBQYXNzIGJhY2sgcmVhZC1vbmx5IHByaW1pdGl2ZSB2YWx1ZXMgYnV0IG5vdCB0aGVcbiAgICAgICAgICAgICAgICAgICAgLy8gdW5kZXJseWluZyBET00gZWxlbWVudCBiZWNhdXNlIGl0IGNvdWxkIGJlIG1pc3VzZWQuXG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZGluZ0NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxXaWR0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hdHVyYWxIZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgICAgIGlmICgocmVmID0gaW1nLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGdldENvbXB1dGVkU3R5bGUoaW1nLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScgJiYgcGFyZW50LmRpc3BsYXkgPT09ICdmbGV4Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSBhcyBhIGNoaWxkIG9mIGEgZmxleCBjb250YWluZXIuIENvbnNpZGVyIHdyYXBwaW5nIHRoZSBpbWFnZSB3aXRoIGEgZGl2IHRvIGNvbmZpZ3VyZSB0aGUgd2lkdGguYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmIHBhcmVudC5wb3NpdGlvbiAhPT0gJ3JlbGF0aXZlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBtYXkgbm90IHJlbmRlciBwcm9wZXJseSB3aXRoIGEgcGFyZW50IHVzaW5nIHBvc2l0aW9uOlwiJHtwYXJlbnQucG9zaXRpb259XCIuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBwYXJlbnQgc3R5bGUgdG8gcG9zaXRpb246XCJyZWxhdGl2ZVwiIHdpdGggYSB3aWR0aCBhbmQgaGVpZ2h0LmApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChpbWcuY29tcGxldGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIHJlYWwgaW1hZ2UgZmFpbHMgdG8gbG9hZCwgdGhpcyB3aWxsIHN0aWxsIHJlbW92ZSB0aGUgcGxhY2Vob2xkZXIuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIGRlc2lyZWQgYmVoYXZpb3IgZm9yIG5vdywgYW5kIHdpbGwgYmUgcmV2aXNpdGVkIHdoZW4gZXJyb3JcbiAgICAgICAgLy8gaGFuZGxpbmcgaXMgd29ya2VkIG9uIGZvciB0aGUgaW1hZ2UgY29tcG9uZW50IGl0c2VsZi5cbiAgICAgICAgaGFuZGxlTG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGltZy5vbmxvYWQgPSBoYW5kbGVMb2FkO1xuICAgIH1cbn1cbmZ1bmN0aW9uIEltYWdlMShfcGFyYW0pIHtcbiAgICB2YXIgeyBzcmMgLCBzaXplcyAsIHVub3B0aW1pemVkID1mYWxzZSAsIHByaW9yaXR5ID1mYWxzZSAsIGxvYWRpbmcgLCBsYXp5Qm91bmRhcnkgPScyMDBweCcgLCBjbGFzc05hbWUgLCBxdWFsaXR5ICwgd2lkdGggLCBoZWlnaHQgLCBvYmplY3RGaXQgLCBvYmplY3RQb3NpdGlvbiAsIG9uTG9hZGluZ0NvbXBsZXRlICwgbG9hZGVyID1kZWZhdWx0SW1hZ2VMb2FkZXIgLCBwbGFjZWhvbGRlciA9J2VtcHR5JyAsIGJsdXJEYXRhVVJMICB9ID0gX3BhcmFtLCBhbGwgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3BhcmFtLCBbXCJzcmNcIiwgXCJzaXplc1wiLCBcInVub3B0aW1pemVkXCIsIFwicHJpb3JpdHlcIiwgXCJsb2FkaW5nXCIsIFwibGF6eUJvdW5kYXJ5XCIsIFwiY2xhc3NOYW1lXCIsIFwicXVhbGl0eVwiLCBcIndpZHRoXCIsIFwiaGVpZ2h0XCIsIFwib2JqZWN0Rml0XCIsIFwib2JqZWN0UG9zaXRpb25cIiwgXCJvbkxvYWRpbmdDb21wbGV0ZVwiLCBcImxvYWRlclwiLCBcInBsYWNlaG9sZGVyXCIsIFwiYmx1ckRhdGFVUkxcIl0pO1xuICAgIGxldCByZXN0ID0gYWxsO1xuICAgIGxldCBsYXlvdXQgPSBzaXplcyA/ICdyZXNwb25zaXZlJyA6ICdpbnRyaW5zaWMnO1xuICAgIGlmICgnbGF5b3V0JyBpbiByZXN0KSB7XG4gICAgICAgIC8vIE92ZXJyaWRlIGRlZmF1bHQgbGF5b3V0IGlmIHRoZSB1c2VyIHNwZWNpZmllZCBvbmU6XG4gICAgICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXQ7XG4gICAgICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICAgICAgZGVsZXRlIHJlc3RbJ2xheW91dCddO1xuICAgIH1cbiAgICBsZXQgc3RhdGljU3JjID0gJyc7XG4gICAgaWYgKGlzU3RhdGljSW1wb3J0KHNyYykpIHtcbiAgICAgICAgY29uc3Qgc3RhdGljSW1hZ2VEYXRhID0gaXNTdGF0aWNSZXF1aXJlKHNyYykgPyBzcmMuZGVmYXVsdCA6IHNyYztcbiAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuc3JjKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgc3JjLiBSZWNlaXZlZCAke0pTT04uc3RyaW5naWZ5KHN0YXRpY0ltYWdlRGF0YSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgYmx1ckRhdGFVUkwgPSBibHVyRGF0YVVSTCB8fCBzdGF0aWNJbWFnZURhdGEuYmx1ckRhdGFVUkw7XG4gICAgICAgIHN0YXRpY1NyYyA9IHN0YXRpY0ltYWdlRGF0YS5zcmM7XG4gICAgICAgIGlmICghbGF5b3V0IHx8IGxheW91dCAhPT0gJ2ZpbGwnKSB7XG4gICAgICAgICAgICBoZWlnaHQgPSBoZWlnaHQgfHwgc3RhdGljSW1hZ2VEYXRhLmhlaWdodDtcbiAgICAgICAgICAgIHdpZHRoID0gd2lkdGggfHwgc3RhdGljSW1hZ2VEYXRhLndpZHRoO1xuICAgICAgICAgICAgaWYgKCFzdGF0aWNJbWFnZURhdGEuaGVpZ2h0IHx8ICFzdGF0aWNJbWFnZURhdGEud2lkdGgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFuIG9iamVjdCBzaG91bGQgb25seSBiZSBwYXNzZWQgdG8gdGhlIGltYWdlIGNvbXBvbmVudCBzcmMgcGFyYW1ldGVyIGlmIGl0IGNvbWVzIGZyb20gYSBzdGF0aWMgaW1hZ2UgaW1wb3J0LiBJdCBtdXN0IGluY2x1ZGUgaGVpZ2h0IGFuZCB3aWR0aC4gUmVjZWl2ZWQgJHtKU09OLnN0cmluZ2lmeShzdGF0aWNJbWFnZURhdGEpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gc3JjIDogc3RhdGljU3JjO1xuICAgIGNvbnN0IHdpZHRoSW50ID0gZ2V0SW50KHdpZHRoKTtcbiAgICBjb25zdCBoZWlnaHRJbnQgPSBnZXRJbnQoaGVpZ2h0KTtcbiAgICBjb25zdCBxdWFsaXR5SW50ID0gZ2V0SW50KHF1YWxpdHkpO1xuICAgIGxldCBpc0xhenkgPSAhcHJpb3JpdHkgJiYgKGxvYWRpbmcgPT09ICdsYXp5JyB8fCB0eXBlb2YgbG9hZGluZyA9PT0gJ3VuZGVmaW5lZCcpO1xuICAgIGlmIChzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSB8fCBzcmMuc3RhcnRzV2l0aCgnYmxvYjonKSkge1xuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL0Jhc2ljc19vZl9IVFRQL0RhdGFfVVJJc1xuICAgICAgICB1bm9wdGltaXplZCA9IHRydWU7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9hZGVkSW1hZ2VVUkxzLmhhcyhzcmMpKSB7XG4gICAgICAgIGlzTGF6eSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSBpcyBtaXNzaW5nIHJlcXVpcmVkIFwic3JjXCIgcHJvcGVydHkuIE1ha2Ugc3VyZSB5b3UgcGFzcyBcInNyY1wiIGluIHByb3BzIHRvIHRoZSBcXGBuZXh0L2ltYWdlXFxgIGNvbXBvbmVudC4gUmVjZWl2ZWQ6ICR7SlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgICAgICBxdWFsaXR5XG4gICAgICAgICAgICB9KX1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIVZBTElEX0xBWU9VVF9WQUxVRVMuaW5jbHVkZXMobGF5b3V0KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibGF5b3V0XCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsYXlvdXR9XCIgc2hvdWxkIGJlIG9uZSBvZiAke1ZBTElEX0xBWU9VVF9WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJiBpc05hTih3aWR0aEludCkgfHwgdHlwZW9mIGhlaWdodEludCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNOYU4oaGVpZ2h0SW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwid2lkdGhcIiBvciBcImhlaWdodFwiIHByb3BlcnR5LiBUaGVzZSBzaG91bGQgYmUgbnVtZXJpYyB2YWx1ZXMuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxheW91dCA9PT0gJ2ZpbGwnICYmICh3aWR0aCB8fCBoZWlnaHQpKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgYW5kIFwibGF5b3V0PSdmaWxsJ1wiIGhhcyB1bnVzZWQgcHJvcGVydGllcyBhc3NpZ25lZC4gUGxlYXNlIHJlbW92ZSBcIndpZHRoXCIgYW5kIFwiaGVpZ2h0XCIuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFWQUxJRF9MT0FESU5HX1ZBTFVFUy5pbmNsdWRlcyhsb2FkaW5nKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGhhcyBpbnZhbGlkIFwibG9hZGluZ1wiIHByb3BlcnR5LiBQcm92aWRlZCBcIiR7bG9hZGluZ31cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTE9BRElOR19WQUxVRVMubWFwKFN0cmluZykuam9pbignLCcpfS5gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJpb3JpdHkgJiYgbG9hZGluZyA9PT0gJ2xhenknKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYWNlaG9sZGVyID09PSAnYmx1cicpIHtcbiAgICAgICAgICAgIGlmIChsYXlvdXQgIT09ICdmaWxsJyAmJiAod2lkdGhJbnQgfHwgMCkgKiAoaGVpZ2h0SW50IHx8IDApIDwgMTYwMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyBzbWFsbGVyIHRoYW4gNDB4NDAuIENvbnNpZGVyIHJlbW92aW5nIHRoZSBcInBsYWNlaG9sZGVyPSdibHVyJ1wiIHByb3BlcnR5IHRvIGltcHJvdmUgcGVyZm9ybWFuY2UuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWJsdXJEYXRhVVJMKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgVkFMSURfQkxVUl9FWFQgPSBbXG4gICAgICAgICAgICAgICAgICAgICdqcGVnJyxcbiAgICAgICAgICAgICAgICAgICAgJ3BuZycsXG4gICAgICAgICAgICAgICAgICAgICd3ZWJwJ1xuICAgICAgICAgICAgICAgIF0gLy8gc2hvdWxkIG1hdGNoIG5leHQtaW1hZ2UtbG9hZGVyXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgXCJwbGFjZWhvbGRlcj0nYmx1cidcIiBwcm9wZXJ0eSBidXQgaXMgbWlzc2luZyB0aGUgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LlxuICAgICAgICAgIFBvc3NpYmxlIHNvbHV0aW9uczpcbiAgICAgICAgICAgIC0gQWRkIGEgXCJibHVyRGF0YVVSTFwiIHByb3BlcnR5LCB0aGUgY29udGVudHMgc2hvdWxkIGJlIGEgc21hbGwgRGF0YSBVUkwgdG8gcmVwcmVzZW50IHRoZSBpbWFnZVxuICAgICAgICAgICAgLSBDaGFuZ2UgdGhlIFwic3JjXCIgcHJvcGVydHkgdG8gYSBzdGF0aWMgaW1wb3J0IHdpdGggb25lIG9mIHRoZSBzdXBwb3J0ZWQgZmlsZSB0eXBlczogJHtWQUxJRF9CTFVSX0VYVC5qb2luKCcsJyl9XG4gICAgICAgICAgICAtIFJlbW92ZSB0aGUgXCJwbGFjZWhvbGRlclwiIHByb3BlcnR5LCBlZmZlY3RpdmVseSBubyBibHVyIGVmZmVjdFxuICAgICAgICAgIFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcGxhY2Vob2xkZXItYmx1ci1kYXRhLXVybGApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICgncmVmJyBpbiByZXN0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaXMgdXNpbmcgdW5zdXBwb3J0ZWQgXCJyZWZcIiBwcm9wZXJ0eS4gQ29uc2lkZXIgdXNpbmcgdGhlIFwib25Mb2FkaW5nQ29tcGxldGVcIiBwcm9wZXJ0eSBpbnN0ZWFkLmApO1xuICAgICAgICB9XG4gICAgICAgIGlmICgnc3R5bGUnIGluIHJlc3QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBpcyB1c2luZyB1bnN1cHBvcnRlZCBcInN0eWxlXCIgcHJvcGVydHkuIFBsZWFzZSB1c2UgdGhlIFwiY2xhc3NOYW1lXCIgcHJvcGVydHkgaW5zdGVhZC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByYW5kID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxMDA7XG4gICAgICAgIGlmICghdW5vcHRpbWl6ZWQgJiYgIWxvYWRlcih7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB3aWR0aDogcmFuZCxcbiAgICAgICAgICAgIHF1YWxpdHk6IDc1XG4gICAgICAgIH0pLmluY2x1ZGVzKHJhbmQudG9TdHJpbmcoKSkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgYSBcImxvYWRlclwiIHByb3BlcnR5IHRoYXQgZG9lcyBub3QgaW1wbGVtZW50IHdpZHRoLiBQbGVhc2UgaW1wbGVtZW50IGl0IG9yIHVzZSB0aGUgXCJ1bm9wdGltaXplZFwiIHByb3BlcnR5IGluc3RlYWQuYCArIGBcXG5SZWFkIG1vcmU6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtbWlzc2luZy1sb2FkZXItd2lkdGhgKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBbc2V0UmVmLCBpc0ludGVyc2VjdGVkXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiBsYXp5Qm91bmRhcnksXG4gICAgICAgIGRpc2FibGVkOiAhaXNMYXp5XG4gICAgfSk7XG4gICAgY29uc3QgaXNWaXNpYmxlID0gIWlzTGF6eSB8fCBpc0ludGVyc2VjdGVkO1xuICAgIGxldCB3cmFwcGVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3R5bGU7XG4gICAgbGV0IHNpemVyU3ZnO1xuICAgIGxldCBpbWdTdHlsZSA9IHtcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICByaWdodDogMCxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIHBhZGRpbmc6IDAsXG4gICAgICAgIGJvcmRlcjogJ25vbmUnLFxuICAgICAgICBtYXJnaW46ICdhdXRvJyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgd2lkdGg6IDAsXG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgICAgIG1heEhlaWdodDogJzEwMCUnLFxuICAgICAgICBvYmplY3RGaXQsXG4gICAgICAgIG9iamVjdFBvc2l0aW9uXG4gICAgfTtcbiAgICBjb25zdCBibHVyU3R5bGUgPSBwbGFjZWhvbGRlciA9PT0gJ2JsdXInID8ge1xuICAgICAgICBmaWx0ZXI6ICdibHVyKDIwcHgpJyxcbiAgICAgICAgYmFja2dyb3VuZFNpemU6IG9iamVjdEZpdCB8fCAnY292ZXInLFxuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoXCIke2JsdXJEYXRhVVJMfVwiKWAsXG4gICAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogb2JqZWN0UG9zaXRpb24gfHwgJzAlIDAlJ1xuICAgIH0gOiB7XG4gICAgfTtcbiAgICBpZiAobGF5b3V0ID09PSAnZmlsbCcpIHtcbiAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgIGxlZnQ6IDAsXG4gICAgICAgICAgICBib3R0b206IDAsXG4gICAgICAgICAgICByaWdodDogMCxcbiAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygd2lkdGhJbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgLz5cbiAgICAgICAgY29uc3QgcXVvdGllbnQgPSBoZWlnaHRJbnQgLyB3aWR0aEludDtcbiAgICAgICAgY29uc3QgcGFkZGluZ1RvcCA9IGlzTmFOKHF1b3RpZW50KSA/ICcxMDAlJyA6IGAke3F1b3RpZW50ICogMTAwfSVgO1xuICAgICAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICAgICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdHlsZSA9IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIHBhZGRpbmdUb3BcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAobGF5b3V0ID09PSAnaW50cmluc2ljJykge1xuICAgICAgICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJpbnRyaW5zaWNcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxuICAgICAgICAgICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNpemVyU3R5bGUgPSB7XG4gICAgICAgICAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2l6ZXJTdmcgPSBgPHN2ZyB3aWR0aD1cIiR7d2lkdGhJbnR9XCIgaGVpZ2h0PVwiJHtoZWlnaHRJbnR9XCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIi8+YDtcbiAgICAgICAgfSBlbHNlIGlmIChsYXlvdXQgPT09ICdmaXhlZCcpIHtcbiAgICAgICAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiZml4ZWRcIiAvPlxuICAgICAgICAgICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRJbnRcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmApO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCBpbWdBdHRyaWJ1dGVzID0ge1xuICAgICAgICBzcmM6ICdkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhBUUFCQUlBQUFBQUFBUC8vL3lINUJBRUFBQUFBTEFBQUFBQUJBQUVBQUFJQlJBQTcnLFxuICAgICAgICBzcmNTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgc2l6ZXM6IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKGlzVmlzaWJsZSkge1xuICAgICAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgIGxvYWRlclxuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGV0IHNyY1N0cmluZyA9IHNyYztcbiAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgc3R5bGU6IHdyYXBwZXJTdHlsZVxuICAgIH0sIHNpemVyU3R5bGUgPyAvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBzdHlsZTogc2l6ZXJTdHlsZVxuICAgIH0sIHNpemVyU3ZnID8gLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgbWFyZ2luOiAwLFxuICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICBwYWRkaW5nOiAwXG4gICAgICAgIH0sXG4gICAgICAgIGFsdDogXCJcIixcbiAgICAgICAgXCJhcmlhLWhpZGRlblwiOiB0cnVlLFxuICAgICAgICBzcmM6IGBkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7KDAsIF90b0Jhc2U2NCkudG9CYXNlNjQoc2l6ZXJTdmcpfWBcbiAgICB9KSA6IG51bGwpIDogbnVsbCwgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgIH0sIHJlc3QsIGltZ0F0dHJpYnV0ZXMsIHtcbiAgICAgICAgZGVjb2Rpbmc6IFwiYXN5bmNcIixcbiAgICAgICAgXCJkYXRhLW5pbWdcIjogbGF5b3V0LFxuICAgICAgICBjbGFzc05hbWU6IGNsYXNzTmFtZSxcbiAgICAgICAgcmVmOiAoaW1nKT0+e1xuICAgICAgICAgICAgc2V0UmVmKGltZyk7XG4gICAgICAgICAgICBoYW5kbGVMb2FkaW5nKGltZywgc3JjU3RyaW5nLCBsYXlvdXQsIHBsYWNlaG9sZGVyLCBvbkxvYWRpbmdDb21wbGV0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlOiBfb2JqZWN0U3ByZWFkKHtcbiAgICAgICAgfSwgaW1nU3R5bGUsIGJsdXJTdHlsZSlcbiAgICB9KSksIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm5vc2NyaXB0XCIsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImltZ1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB9LCByZXN0LCBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgICAgICAgc3JjLFxuICAgICAgICB1bm9wdGltaXplZCxcbiAgICAgICAgbGF5b3V0LFxuICAgICAgICB3aWR0aDogd2lkdGhJbnQsXG4gICAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICAgIHNpemVzLFxuICAgICAgICBsb2FkZXJcbiAgICB9KSwge1xuICAgICAgICBkZWNvZGluZzogXCJhc3luY1wiLFxuICAgICAgICBcImRhdGEtbmltZ1wiOiBsYXlvdXQsXG4gICAgICAgIHN0eWxlOiBpbWdTdHlsZSxcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIGxvYWRpbmc6IGxvYWRpbmcgfHwgJ2xhenknXG4gICAgfSkpKSwgcHJpb3JpdHkgPyAvLyBOb3RlIGhvdyB3ZSBvbWl0IHRoZSBgaHJlZmAgYXR0cmlidXRlLCBhcyBpdCB3b3VsZCBvbmx5IGJlIHJlbGV2YW50XG4gICAgLy8gZm9yIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgYGltYWdlc3Jjc2V0YCwgYW5kIGluIHRob3NlIGNhc2VzXG4gICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgIC8vXG4gICAgLy8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjYXR0ci1saW5rLWltYWdlc3Jjc2V0XG4gICAgLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsIG51bGwsIC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgICBrZXk6ICdfX25pbWctJyArIGltZ0F0dHJpYnV0ZXMuc3JjICsgaW1nQXR0cmlidXRlcy5zcmNTZXQgKyBpbWdBdHRyaWJ1dGVzLnNpemVzLFxuICAgICAgICByZWw6IFwicHJlbG9hZFwiLFxuICAgICAgICBhczogXCJpbWFnZVwiLFxuICAgICAgICBocmVmOiBpbWdBdHRyaWJ1dGVzLnNyY1NldCA/IHVuZGVmaW5lZCA6IGltZ0F0dHJpYnV0ZXMuc3JjLFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNyY3NldCBpcyBub3QgeWV0IGluIHRoZSBsaW5rIGVsZW1lbnQgdHlwZS5cbiAgICAgICAgaW1hZ2VzcmNzZXQ6IGltZ0F0dHJpYnV0ZXMuc3JjU2V0LFxuICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlLlxuICAgICAgICBpbWFnZXNpemVzOiBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgfSkpIDogbnVsbCkpO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplU3JjKHNyYykge1xuICAgIHJldHVybiBzcmNbMF0gPT09ICcvJyA/IHNyYy5zbGljZSgxKSA6IHNyYztcbn1cbmZ1bmN0aW9uIGltZ2l4TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIC8vIERlbW86IGh0dHBzOi8vc3RhdGljLmltZ2l4Lm5ldC9kYWlzeS5wbmc/YXV0bz1mb3JtYXQmZml0PW1heCZ3PTMwMFxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYCR7cm9vdH0ke25vcm1hbGl6ZVNyYyhzcmMpfWApO1xuICAgIGNvbnN0IHBhcmFtcyA9IHVybC5zZWFyY2hQYXJhbXM7XG4gICAgcGFyYW1zLnNldCgnYXV0bycsIHBhcmFtcy5nZXQoJ2F1dG8nKSB8fCAnZm9ybWF0Jyk7XG4gICAgcGFyYW1zLnNldCgnZml0JywgcGFyYW1zLmdldCgnZml0JykgfHwgJ21heCcpO1xuICAgIHBhcmFtcy5zZXQoJ3cnLCBwYXJhbXMuZ2V0KCd3JykgfHwgd2lkdGgudG9TdHJpbmcoKSk7XG4gICAgaWYgKHF1YWxpdHkpIHtcbiAgICAgICAgcGFyYW1zLnNldCgncScsIHF1YWxpdHkudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIHJldHVybiB1cmwuaHJlZjtcbn1cbmZ1bmN0aW9uIGFrYW1haUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAgfSkge1xuICAgIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9P2ltd2lkdGg9JHt3aWR0aH1gO1xufVxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7IHJvb3QgLCBzcmMgLCB3aWR0aCAsIHF1YWxpdHkgIH0pIHtcbiAgICAvLyBEZW1vOiBodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9kZW1vL2ltYWdlL3VwbG9hZC93XzMwMCxjX2xpbWl0LHFfYXV0by90dXJ0bGVzLmpwZ1xuICAgIGNvbnN0IHBhcmFtcyA9IFtcbiAgICAgICAgJ2ZfYXV0bycsXG4gICAgICAgICdjX2xpbWl0JyxcbiAgICAgICAgJ3dfJyArIHdpZHRoLFxuICAgICAgICAncV8nICsgKHF1YWxpdHkgfHwgJ2F1dG8nKVxuICAgIF07XG4gICAgbGV0IHBhcmFtc1N0cmluZyA9IHBhcmFtcy5qb2luKCcsJykgKyAnLyc7XG4gICAgcmV0dXJuIGAke3Jvb3R9JHtwYXJhbXNTdHJpbmd9JHtub3JtYWxpemVTcmMoc3JjKX1gO1xufVxuZnVuY3Rpb24gY3VzdG9tTG9hZGVyKHsgc3JjICB9KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIGlzIG1pc3NpbmcgXCJsb2FkZXJcIiBwcm9wLmAgKyBgXFxuUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9uZXh0LWltYWdlLW1pc3NpbmctbG9hZGVyYCk7XG59XG5mdW5jdGlvbiBkZWZhdWx0TG9hZGVyKHsgcm9vdCAsIHNyYyAsIHdpZHRoICwgcXVhbGl0eSAgfSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdWYWx1ZXMgPSBbXTtcbiAgICAgICAgLy8gdGhlc2Ugc2hvdWxkIGFsd2F5cyBiZSBwcm92aWRlZCBidXQgbWFrZSBzdXJlIHRoZXkgYXJlXG4gICAgICAgIGlmICghc3JjKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3NyYycpO1xuICAgICAgICBpZiAoIXdpZHRoKSBtaXNzaW5nVmFsdWVzLnB1c2goJ3dpZHRoJyk7XG4gICAgICAgIGlmIChtaXNzaW5nVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oJywgJyl9IHRvIGJlIHByb3ZpZGVkLiBNYWtlIHN1cmUgeW91IHBhc3MgdGhlbSBhcyBwcm9wcyB0byB0aGUgXFxgbmV4dC9pbWFnZVxcYCBjb21wb25lbnQuIFJlY2VpdmVkOiAke0pTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBzcmMsXG4gICAgICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICAgICAgcXVhbGl0eVxuICAgICAgICAgICAgfSl9YCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNyYy5zdGFydHNXaXRoKCcvLycpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWApO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3JjLnN0YXJ0c1dpdGgoJy8nKSAmJiBjb25maWdEb21haW5zKSB7XG4gICAgICAgICAgICBsZXQgcGFyc2VkU3JjO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYyk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICd0ZXN0JyAmJiAhY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNyYyBwcm9wICgke3NyY30pIG9uIFxcYG5leHQvaW1hZ2VcXGAsIGhvc3RuYW1lIFwiJHtwYXJzZWRTcmMuaG9zdG5hbWV9XCIgaXMgbm90IGNvbmZpZ3VyZWQgdW5kZXIgaW1hZ2VzIGluIHlvdXIgXFxgbmV4dC5jb25maWcuanNcXGBcXG5gICsgYFNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL25leHQtaW1hZ2UtdW5jb25maWd1cmVkLWhvc3RgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYCR7cm9vdH0/dXJsPSR7ZW5jb2RlVVJJQ29tcG9uZW50KHNyYyl9Jnc9JHt3aWR0aH0mcT0ke3F1YWxpdHkgfHwgNzV9YDtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW1hZ2UuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcbmNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPSB0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oY2IpIHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBjYih7XG4gICAgICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgMSk7XG59O1xuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcbmNvbnN0IGNhbmNlbElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjayAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjay5iaW5kKHdpbmRvdykgfHwgZnVuY3Rpb24oaWQpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKTtcbn07XG5leHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IGNhbmNlbElkbGVDYWxsYmFjaztcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XG52YXIgX3JlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xuZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uKHsgcm9vdE1hcmdpbiAsIGRpc2FibGVkICB9KSB7XG4gICAgY29uc3QgaXNEaXNhYmxlZCA9IGRpc2FibGVkIHx8ICFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcjtcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcbiAgICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSAoMCwgX3JlYWN0KS51c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3Qgc2V0UmVmID0gKDAsIF9yZWFjdCkudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KCk7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNEaXNhYmxlZCB8fCB2aXNpYmxlKSByZXR1cm47XG4gICAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXG4gICAgICAgICAgICAsIHtcbiAgICAgICAgICAgICAgICByb290TWFyZ2luXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgaXNEaXNhYmxlZCxcbiAgICAgICAgcm9vdE1hcmdpbixcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgICgwLCBfcmVhY3QpLnVzZUVmZmVjdCgoKT0+e1xuICAgICAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZGxlQ2FsbGJhY2sgPSAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxuICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtcbiAgICAgICAgdmlzaWJsZVxuICAgIF0pO1xuICAgIHJldHVybiBbXG4gICAgICAgIHNldFJlZixcbiAgICAgICAgdmlzaWJsZVxuICAgIF07XG59XG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gICAgY29uc3QgeyBpZCAsIG9ic2VydmVyICwgZWxlbWVudHMgIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKTtcbiAgICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpIHtcbiAgICAgICAgZWxlbWVudHMuZGVsZXRlKGVsZW1lbnQpO1xuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XG4gICAgICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICAgICAgaWYgKGVsZW1lbnRzLnNpemUgPT09IDApIHtcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJztcbiAgICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKTtcbiAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcyk9PntcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSk9PntcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDA7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSwgb3B0aW9ucyk7XG4gICAgb2JzZXJ2ZXJzLnNldChpZCwgaW5zdGFuY2UgPSB7XG4gICAgICAgIGlkLFxuICAgICAgICBvYnNlcnZlcixcbiAgICAgICAgZWxlbWVudHNcbiAgICB9KTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiLy8gUmVhY3RcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlQXhpb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9saWJzL3VzZUF4aW9zXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIFJldXNhYmxlIENvbXBvbmVudHNcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCIuLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvQWxlcnRcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IE5hdmlnYXRpb25CYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9uYXZpZ2F0aW9uLWJhci9OYXZpZ2F0aW9uQmFyXCI7XHJcbmltcG9ydCBDYXRlZ29yeVRyZWF0bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2NhdGVnb3J5LXRyZWF0bWVudC9DYXRlZ29yeVRyZWF0bWVudFwiO1xyXG5pbXBvcnQgTG9jYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9sb2NhdGlvbi9Mb2NhdGlvblwiO1xyXG5pbXBvcnQgRGF0ZVRpbWUgZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWVcIjtcclxuaW1wb3J0IEluZm9ybWF0aW9uUGF5bWVudCBmcm9tIFwiLi4vY29tcG9uZW50cy9jbGllbnRzL2luZm9ybWF0aW9uLXBheW1lbnQvSW5mb3JtYXRpb25QYXltZW50XCI7XHJcbmltcG9ydCBDb25maXJtYXRpb24gZnJvbSBcIi4uL2NvbXBvbmVudHMvY2xpZW50cy9jb25maXJtYXRpb24tcGFnZS9Db25maXJtYXRpb25cIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lICgpIHtcclxuXHJcblxyXG4gICAgLy8gT3RoZXIgc3RhdGVzXHJcbiAgICBjb25zdCBbY2xpZW50RXZlbnRzLCBzZXRDbGllbnRFdmVudHNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkVHJlYXRtZW50cywgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtzb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMsIHNldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbdmFsaWRhdGlvbkVycm9yLCBzZXRWYWxpZGF0aW9uRXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2NsaWVudEluZm8sIHNldENsaWVudEluZm9dID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICBwaG9uZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBob3dIZWFyZEFib3V0VXM6IFwiXCIsXHJcbiAgICAgICAgb3RoZXJzOiBcIlwiLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBjYXRlZ29yeTogXCJcIixcclxuICAgICAgICB0cmVhdG1lbnQ6IFwiXCIsXHJcbiAgICAgICAgbG9jYXRpb246IFwiXCIsXHJcbiAgICAgICAgc2Vzc2lvbjogXCJcIixcclxuICAgICAgICBkYXRlOiBcIlwiLFxyXG4gICAgICAgIHN0eWxpc3Q6IFwiXCIsXHJcbiAgICAgICAgY291cG9uOiBcIlwiLFxyXG4gICAgICAgIHBhaWQ6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbYWN0aXZlQ2F0ZWdvcnksIHNldEFjdGl2ZUNhdGVnb3J5XSA9IHVzZVN0YXRlKFwiQnJvd3NcIik7XHJcbiAgICBjb25zdCBbYWN0aXZlUGFnZSwgc2V0QWN0aXZlUGFnZV0gPSB1c2VTdGF0ZSgxKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZERhdGUsIHNldFNlbGVjdGVkRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZFRpbWUsIHNldFNlbGVjdGVkVGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSB3aXRoIHZhbHVlcyBvZiB0aGUgbm9uIGlucHV0IGZpZWxkcyBzdWNoIGFzIGxvY2F0aW9uLCBzdHlsaXN0LCBkYXRlLCB0aW1lIGV0Yy4gXHJcbiAgICBmdW5jdGlvbiB1cGRhdGVTdGF0ZSAoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdGV4dCA9IGV2ZW50LnRhcmdldC50ZXh0Q29udGVudDtcclxuXHJcbiAgICAgICAgaWYodGV4dC5pbmNsdWRlcyhcIkF0aGVuYSBCZWF1dHkgQ2FyZVwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc2V0U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlQ2F0ZWdvcnkgKGUpIHtcclxuICAgICAgICBjb25zdCB0ZXh0ID0gZS50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgc2V0QWN0aXZlQ2F0ZWdvcnkodGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICBcclxuXHJcbiAgICAvKlxyXG4gICAgZnVuY3Rpb24gYWRkVHJlYXRtZW50IChzdHlsaXN0LCBpdGVtKSB7XHJcbiAgICAgICBcclxuICAgICAgICAvLyBsb29wIHRocm91Z2ggdGhlIGFscmVhZHkgc2VsZWN0ZWQgdHJlYXRtZW50cyB0byBzZWUgaWYgY2xpY2tlZCBvbmUgZXhpc3RzIG9yIG5vdC4gSXQgcmV0dXJucyBlaXRoZXIgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHNlbGVjdGVkVHJlYXRtZW50cy5zb21lKG5ld0l0ZW0gPT4gbmV3SXRlbS50cmVhdG1lbnRUaXRsZSA9PT0gaXRlbS50aXRsZSk7XHJcblxyXG4gICAgICAgIC8vIElmIGNsaWNrZWQgdHJlYXRtZW50IGV4aXN0cyB1cGRhdGUgdGhlIHNlbGVjdGVkVHJlYXRtZW50cyBhcnJheSBieSByZW1vdmluZyB0aGUgY2xpY2tlZCB0cmVhdG1lbnRcclxuICAgICAgICBpZihkb2VzRXhpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cy5mb3JFYWNoKG5ld0l0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYobmV3SXRlbS50cmVhdG1lbnRUaXRsZSAhPT0gaXRlbS50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaChuZXdJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyh0ZW1wKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHN0eWxpc3QpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IFxyXG4gICAgICAgICAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5OiBpdGVtLmNhdGVnb3J5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBpdGVtLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudER1cmF0aW9uOiBpdGVtLmR1cmF0aW9uLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiBpdGVtLnByaWNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogc3RhdGUubG9jYXRpb24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldEFjdGl2ZVRyZWF0bWVudChcIlwiKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4gc2V0QWN0aXZlVHJlYXRtZW50KFwiXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSWYgY2xpY2tlZCB0cmVhdG1lbnQgZG9lc24ndCBleGlzdCB0aGVuIGFkZCBpdCBpbiB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGFycmF5XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiBcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLCBcclxuICAgICAgICAgICAgICAgIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IGl0ZW0uY2F0ZWdvcnksIFxyXG4gICAgICAgICAgICAgICAgICAgIHRyZWF0bWVudFRpdGxlOiBpdGVtLnRpdGxlLCBcclxuICAgICAgICAgICAgICAgICAgICB0cmVhdG1lbnREdXJhdGlvbjogaXRlbS5kdXJhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IGl0ZW0ucHJpY2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hvb3NlblN0eWxpc3Q6IHN0eWxpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IHN0YXRlLmxvY2F0aW9uIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHNldEFjdGl2ZVRyZWF0bWVudChcIlwiKTtcclxuXHJcbiAgICB9XHJcbiAgICAqL1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsaWVudEluZm9PbkNoYW5nZUhhbmRsZXIgKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBldmVudC50YXJnZXQubmFtZTtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxyXG5cclxuICAgICAgICByZXR1cm4gc2V0Q2xpZW50SW5mbyhjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgW25hbWVdOiB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBzZWxlY3RUcmVhdG1lbnQoZXZlbnQsIHRyZWF0bWVudHMpIHtcclxuXHJcbiAgICAgICAgY29uc3QgdHJlYXRtZW50VGl0bGUgPSBldmVudC50YXJnZXQudGV4dENvbnRlbnQ7XHJcblxyXG4gICAgICAgIC8vIGxvb3AgdGhyb3VnaCB0aGUgYWxyZWFkeSBzZWxlY3RlZCB0cmVhdG1lbnRzIHRvIHNlZSBpZiBjbGlja2VkIG9uZSBleGlzdHMgb3Igbm90LiBJdCByZXR1cm5zIGVpdGhlciB0cnVlIG9yIGZhbHNlXHJcbiAgICAgICAgY29uc3QgZG9lc0V4aXN0ID0gc2VsZWN0ZWRUcmVhdG1lbnRzLnNvbWUobmV3SXRlbSA9PiBuZXdJdGVtLnRpdGxlID09PSB0cmVhdG1lbnRUaXRsZSk7XHJcblxyXG5cclxuICAgICAgICBpZihkb2VzRXhpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkU2VsZWN0ZWRUcmVhdG1lbnRzID0gc2VsZWN0ZWRUcmVhdG1lbnRzLmZpbHRlcih0cmVhdG1lbnQgPT4gdHJlYXRtZW50LnRpdGxlICE9PSB0cmVhdG1lbnRUaXRsZSk7XHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkVHJlYXRtZW50cyhmaWx0ZXJlZFNlbGVjdGVkVHJlYXRtZW50cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0cmVhdG1lbnRzLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodHJlYXRtZW50c1t4XS50aXRsZSA9PT0gdHJlYXRtZW50VGl0bGUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKGN1cnJlbnRWYWx1ZSA9PiB7IHJldHVybiBbLi4uY3VycmVudFZhbHVlLCB0cmVhdG1lbnRzW3hdXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUJvb2tpbmcoKSB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL2V2ZW50cy9jbGllbnQtZXZlbnRzXCIsIHtcclxuICAgICAgICAgICAgICAgIHNvcnRlZFNlbGVjdGVkVHJlYXRtZW50cyxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZSxcclxuICAgICAgICAgICAgICAgIGNsaWVudEluZm9cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIHNldENsaWVudEV2ZW50cyhkYXRhKTtcclxuXHJcbiAgICAgICAgfSBjYXRjaChlcnJvcikge1xyXG5cclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDbGllbnRJbmZvKHtcclxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcGhvbmU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICAgICAgICAgIGhvd0hlYXJkQWJvdXRVczogXCJcIixcclxuICAgICAgICAgICAgICAgIG90aGVyczogXCJcIlxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldFN0YXRlKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRUcmVhdG1lbnRzKFtdKTtcclxuICAgICAgICAgICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzKFtdKTtcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWREYXRlKFwiXCIpO1xyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZFRpbWUoXCJcIik7XHJcbiAgICAgICAgICAgIHNldEFjdGl2ZVBhZ2UoNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgXHJcbiAgICAvLyBjb25zb2xlLmxvZyhsb2NhdGlvbkRhdGEpO1xyXG5cclxuICAgIC8vIGlmKGxvY2F0aW9uRGF0YUxvYWRpbmcgfHwgY2F0ZWdvcnlEYXRhTG9hZGluZyB8fCB0cmVhdG1lbnREYXRhTG9hZGluZykge1xyXG4gICAgLy8gICAgIHJldHVybiAoPGRpdj5Mb2FkaW5nLi4uLjwvZGl2Pik7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWV9PlxyXG4gICAgICAgICAgICA8TmF2aWdhdGlvbkJhciBcclxuICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9IFxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlUGFnZSA9IHtzZXRBY3RpdmVQYWdlfSBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVGltZSA9IHtzZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMb2NhdGlvblxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVTdGF0ZSA9IHt1cGRhdGVTdGF0ZX0gXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8Q2F0ZWdvcnlUcmVhdG1lbnRcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVQYWdlID0ge2FjdGl2ZVBhZ2V9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXRlZ29yeSA9IHthY3RpdmVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZUFjdGl2ZUNhdGVnb3J5ID0ge2NoYW5nZUFjdGl2ZUNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0VHJlYXRtZW50ID0ge3NlbGVjdFRyZWF0bWVudH1cclxuICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgIDxEYXRlVGltZVxyXG4gICAgICAgICAgICAgICAgc3RhdGUgPSB7c3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlU3RhdGUgPSB7dXBkYXRlU3RhdGV9IFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSB7c3RhdGUubG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfVxyXG4gICAgICAgICAgICAgICAgc2V0U29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NldFNvcnRlZFNlbGVjdGVkVHJlYXRtZW50c31cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGF0ZSA9IHtzZWxlY3RlZERhdGV9XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUgPSB7c2V0U2VsZWN0ZWREYXRlfVxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUaW1lID0ge3NlbGVjdGVkVGltZX1cclxuICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkVGltZSA9IHtzZXRTZWxlY3RlZFRpbWV9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8SW5mb3JtYXRpb25QYXltZW50IFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlUGFnZSA9IHthY3RpdmVQYWdlfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5mbyA9IHtjbGllbnRJbmZvfVxyXG4gICAgICAgICAgICAgICAgY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciA9IHtjbGllbnRJbmZvT25DaGFuZ2VIYW5kbGVyfSBcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVCb29raW5nID0ge2NyZWF0ZUJvb2tpbmd9XHJcbiAgICAgICAgICAgIC8+XHJcblxyXG5cclxuICAgICAgICAgICAgPENvbmZpcm1hdGlvbiBcclxuICAgICAgICAgICAgICAgIGFjdGl2ZVBhZ2UgPSB7YWN0aXZlUGFnZX1cclxuICAgICAgICAgICAgICAgIGNsaWVudEV2ZW50cz17Y2xpZW50RXZlbnRzfVxyXG5cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgey8qIDxBbGVydCBtZXNzYWdlPVwiXCIgLz4gKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2NvbXBvbmVudHMvY2xpZW50cy9pbmZvcm1hdGlvbi1wYXltZW50L2ltYWdlcy82LmM2NWU0YTE2ZjViZjBiMGMwNGQyMGRkNTEyNWFmYmYxLnN2Z1wiLFwiaGVpZ2h0XCI6MjQwLFwid2lkdGhcIjozMjh9OyIsImV4cG9ydCBkZWZhdWx0IHtcInNyY1wiOlwiL19uZXh0L3N0YXRpYy9pbWFnZS9pbWFnZXMvNS5jMWJhODg1NTUyODBhZTg2MmI0YTc2ODUzZWYwYTU0MS5zdmdcIixcImhlaWdodFwiOjE4OSxcIndpZHRoXCI6MjQyfTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzLzcuNjBhZWZkNGE1NWI4YTA3M2IzMTQwN2NlNDJjMTRhOTcuc3ZnXCIsXCJoZWlnaHRcIjoxOTUsXCJ3aWR0aFwiOjI5N307IiwiZXhwb3J0IGRlZmF1bHQge1wic3JjXCI6XCIvX25leHQvc3RhdGljL2ltYWdlL2ltYWdlcy9Db21wb25lbnQgMTQzIOKAkyAyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZ1wiLFwiaGVpZ2h0XCI6MTI4LFwid2lkdGhcIjo3NyxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZDb21wb25lbnQrMTQzKyVFMiU4MCU5MysyLmQ0OGIxOTkxZWExNGE5MzJlM2E5MWZhZTRiM2E0MjY1LnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3BlcnNvbi1naXJsLWZsYXQuNTNhM2JkMTE1ZTA4NjdiOGU1MDhhMmNmZTVmNmRmNmMucG5nXCIsXCJoZWlnaHRcIjoxMDAsXCJ3aWR0aFwiOjEwMCxcImJsdXJEYXRhVVJMXCI6XCIvX25leHQvaW1hZ2U/dXJsPSUyRl9uZXh0JTJGc3RhdGljJTJGaW1hZ2UlMkZpbWFnZXMlMkZwZXJzb24tZ2lybC1mbGF0LjUzYTNiZDExNWUwODY3YjhlNTA4YTJjZmU1ZjZkZjZjLnBuZyZ3PTgmcT03MFwifTsiLCJleHBvcnQgZGVmYXVsdCB7XCJzcmNcIjpcIi9fbmV4dC9zdGF0aWMvaW1hZ2UvaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5lY2I4Y2M0NzIyMTM3OTA0ZDcwMjJjNTkxODM0OWE2Zi5qcGdcIixcImhlaWdodFwiOjQwMDAsXCJ3aWR0aFwiOjYwMDAsXCJibHVyRGF0YVVSTFwiOlwiL19uZXh0L2ltYWdlP3VybD0lMkZfbmV4dCUyRnN0YXRpYyUyRmltYWdlJTJGaW1hZ2VzJTJGcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmVjYjhjYzQ3MjIxMzc5MDRkNzAyMmM1OTE4MzQ5YTZmLmpwZyZ3PTgmcT03MFwifTsiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJidXR0b25cIjogXCJCdXR0b25fYnV0dG9uX18xclBlaVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2F0ZWdvcnlfdHJlYXRtZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlfdHJlYXRtZW50X18zU1l6RlwiLFxuXHRcImNhdGVnb3J5XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlfXzJ0RjJmXCIsXG5cdFwidHJlYXRtZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfdHJlYXRtZW50X18yd3pudVwiLFxuXHRcImhlYWRlclwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2hlYWRlcl9fMUtxemJcIixcblx0XCJjYXRlZ29yeUl0ZW1fbGlzdFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X2NhdGVnb3J5SXRlbV9saXN0X181cG9mdlwiLFxuXHRcImNhdGVnb3J5SXRlbV9jb250YWluZXJcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeUl0ZW1fY29udGFpbmVyX18zZHdjN1wiLFxuXHRcImNhdGVnb3J5X2l0ZW1cIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeV9pdGVtX19Sck9YaFwiLFxuXHRcImNhdGVnb3J5SXRlbV9jb250ZW50XCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfY2F0ZWdvcnlJdGVtX2NvbnRlbnRfXzJpbWJzXCIsXG5cdFwidHJlYXRtZW50SXRlbV9jb250YWluZXJcIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRJdGVtX2NvbnRhaW5lcl9fRXNUN2NcIixcblx0XCJjYXRlZ29yeVRyZWF0bWVudF9oaWRkZW5EaXZcIjogXCJDYXRlZ29yeVRyZWF0bWVudF9jYXRlZ29yeVRyZWF0bWVudF9oaWRkZW5EaXZfXzF4Q2xzXCIsXG5cdFwidHJlYXRtZW50X2l0ZW1cIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRfaXRlbV9fMVJ5UHRcIixcblx0XCJ0cmVhdG1lbnRJdGVtX2NvbnRlbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRJdGVtX2NvbnRlbnRfX09rbGVpXCIsXG5cdFwidHJlYXRtZW50X2NvbnRlbnRcIjogXCJDYXRlZ29yeVRyZWF0bWVudF90cmVhdG1lbnRfY29udGVudF9fTC02UmVcIixcblx0XCJzdHlsaXN0c1wiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3N0eWxpc3RzX18zenlvRlwiLFxuXHRcInN0eWxpc3RfbGlzdFwiOiBcIkNhdGVnb3J5VHJlYXRtZW50X3N0eWxpc3RfbGlzdF9fMlBrMktcIixcblx0XCJzdHlsaXN0TGlzdF9pdGVtXCI6IFwiQ2F0ZWdvcnlUcmVhdG1lbnRfc3R5bGlzdExpc3RfaXRlbV9fMlBwaGJcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRhdGVIaWRkZW5fZGl2XCI6IFwiRGF0ZVRpbWVfZGF0ZUhpZGRlbl9kaXZfXzE1WWl4XCIsXG5cdFwiYXZhaWxhYmxlX3RpbWVfbGlzdFwiOiBcIkRhdGVUaW1lX2F2YWlsYWJsZV90aW1lX2xpc3RfXzFXNl84XCIsXG5cdFwidGltZVwiOiBcIkRhdGVUaW1lX3RpbWVfXzJ0TXVWXCIsXG5cdFwiaW5kaXZpZHVhbF90aW1lXCI6IFwiRGF0ZVRpbWVfaW5kaXZpZHVhbF90aW1lX18xMnNUX1wiLFxuXHRcImRhdGVfdGltZVwiOiBcIkRhdGVUaW1lX2RhdGVfdGltZV9fMVdsM0ZcIixcblx0XCJoZWFkZXJcIjogXCJEYXRlVGltZV9oZWFkZXJfXy1OZnhPXCIsXG5cdFwiZGF0ZVRpbWVfY29udGVudFwiOiBcIkRhdGVUaW1lX2RhdGVUaW1lX2NvbnRlbnRfX1pPd0FLXCIsXG5cdFwiY29udGVudF9JbWFnZVwiOiBcIkRhdGVUaW1lX2NvbnRlbnRfSW1hZ2VfX05vd3oyXCIsXG5cdFwiZGF0ZXNfY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfZGF0ZXNfY29udGFpbmVyX19yWC1XZFwiLFxuXHRcImRhdGVzXCI6IFwiRGF0ZVRpbWVfZGF0ZXNfXzIxVWtpXCIsXG5cdFwicHJldlwiOiBcIkRhdGVUaW1lX3ByZXZfX0F5OWxmXCIsXG5cdFwibmV4dFwiOiBcIkRhdGVUaW1lX25leHRfXzJaVXhUXCIsXG5cdFwiZGF0ZUNhcmRfY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfZGF0ZUNhcmRfY29udGFpbmVyX18yXzBVaVwiLFxuXHRcImRhdGVfY2FyZFwiOiBcIkRhdGVUaW1lX2RhdGVfY2FyZF9fMllWUG5cIixcblx0XCJ3ZWVrRGF5X3RleHRcIjogXCJEYXRlVGltZV93ZWVrRGF5X3RleHRfXzFTanpzXCIsXG5cdFwiZGF0ZV90ZXh0XCI6IFwiRGF0ZVRpbWVfZGF0ZV90ZXh0X18xbWkzZVwiLFxuXHRcIm1vbnRoX3RleHRcIjogXCJEYXRlVGltZV9tb250aF90ZXh0X18xclVRVFwiLFxuXHRcImNsb2NrSWNvbl9jb250YWluZXJcIjogXCJEYXRlVGltZV9jbG9ja0ljb25fY29udGFpbmVyX18yTkF0ZlwiLFxuXHRcInN0eWxpc3RzX3RpbWVzXCI6IFwiRGF0ZVRpbWVfc3R5bGlzdHNfdGltZXNfXzFCT0lNXCIsXG5cdFwic3R5bGlzdHNfY29udGFpbmVyXCI6IFwiRGF0ZVRpbWVfc3R5bGlzdHNfY29udGFpbmVyX18xNDRTM1wiLFxuXHRcInRpbWVzX2NvbnRhaW5lclwiOiBcIkRhdGVUaW1lX3RpbWVzX2NvbnRhaW5lcl9fM3FZYWpcIixcblx0XCJ0aW1lc1wiOiBcIkRhdGVUaW1lX3RpbWVzX18xMV85cVwiLFxuXHRcInRpbWVfdGV4dFwiOiBcIkRhdGVUaW1lX3RpbWVfdGV4dF9fMWpNMUVcIixcblx0XCJzdHlsaXN0XCI6IFwiRGF0ZVRpbWVfc3R5bGlzdF9fMjhacTRcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImV2ZW50XCI6IFwiRXZlbnRfZXZlbnRfXzFEMnItXCIsXG5cdFwiZXZlbnRfaW1hZ2VcIjogXCJFdmVudF9ldmVudF9pbWFnZV9fTnBxZXRcIixcblx0XCJldmVudF90aXRsZVwiOiBcIkV2ZW50X2V2ZW50X3RpdGxlX19rODNNQlwiLFxuXHRcImV2ZW50X2RhdGVcIjogXCJFdmVudF9ldmVudF9kYXRlX18zeWF1cFwiLFxuXHRcImV2ZW50X3RpbWVcIjogXCJFdmVudF9ldmVudF90aW1lX191c08yVlwiLFxuXHRcIm1lc3NhZ2VfdG9fY2xpZW50XCI6IFwiRXZlbnRfbWVzc2FnZV90b19jbGllbnRfXzNybFk4XCIsXG5cdFwiYnV0dG9uX2RpdlwiOiBcIkV2ZW50X2J1dHRvbl9kaXZfXzJHeGNUXCIsXG5cdFwiYWJjXCI6IFwiRXZlbnRfYWJjX18yR3lHMFwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaG9tZVwiOiBcIkhvbWVfaG9tZV9fMTd5YjZcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImluZm9QYXltZW50X2hlYWRlclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9oZWFkZXJfX1ByWDV4XCIsXG5cdFwiaW5mb1BheW1lbnRfY29udGVudFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbmZvUGF5bWVudF9jb250ZW50X18xTXh2cFwiLFxuXHRcImltYWdlX2NvbnRhaW5lclwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9pbWFnZV9jb250YWluZXJfXzE1eWNkXCIsXG5cdFwiaW5wdXRfbGFiZWxcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfbGFiZWxfXzFaMXVPXCIsXG5cdFwiaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaW5wdXRfXzFMSjJkXCIsXG5cdFwiY2hlY2tib3hcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfY2hlY2tib3hfXzM3S0tsXCIsXG5cdFwibmFtZV9pbnB1dHNcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfbmFtZV9pbnB1dHNfXzFCU2lSXCIsXG5cdFwibmFtZV9pbmZvXCI6IFwiSW5mb3JtYXRpb25QYXltZW50X25hbWVfaW5mb19fMVFsZkhcIixcblx0XCJwaG9uZV9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9waG9uZV9pbnB1dF9fM1BNSVBcIixcblx0XCJlbWFpbF9pbnB1dFwiOiBcIkluZm9ybWF0aW9uUGF5bWVudF9lbWFpbF9pbnB1dF9fMU9WcldcIixcblx0XCJob3dIZWFyZEFib3V0VXNfaW5wdXRcIjogXCJJbmZvcm1hdGlvblBheW1lbnRfaG93SGVhcmRBYm91dFVzX2lucHV0X18zdmxYTVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibmF2aWdhdGlvbkJhcl9jb250YWluZXJcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25CYXJfY29udGFpbmVyX18zYy0ySFwiLFxuXHRcIndyYXBwZXJcIjogXCJOYXZpZ2F0aW9uQmFyX3dyYXBwZXJfX2FaS29zXCIsXG5cdFwibmF2aWdhdGlvbl9iYXJcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25fYmFyX19ZODVVWlwiLFxuXHRcIm5hdmlnYXRpb25fbGlua3NcIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25fbGlua3NfX3FkSi1TXCIsXG5cdFwiYnV0dG9uX2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfYnV0dG9uX2NvbnRhaW5lcl9fMWtSQjNcIixcblx0XCJuYXZpZ2F0aW9uTGlua19idXR0b25cIjogXCJOYXZpZ2F0aW9uQmFyX25hdmlnYXRpb25MaW5rX2J1dHRvbl9fMTE3TERcIixcblx0XCJibGFua1BhcmFfY29udGFpbmVyXCI6IFwiTmF2aWdhdGlvbkJhcl9ibGFua1BhcmFfY29udGFpbmVyX195VFl1NFwiLFxuXHRcIm5hdmlnYXRpb25UZXh0X2NvbnRhaW5lclwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvblRleHRfY29udGFpbmVyX18yTFdjUlwiLFxuXHRcIm5hdmlnYXRpb25fdGV4dFwiOiBcIk5hdmlnYXRpb25CYXJfbmF2aWdhdGlvbl90ZXh0X18yX3FONVwiLFxuXHRcInRleHRcIjogXCJOYXZpZ2F0aW9uQmFyX3RleHRfXzN3YVZpXCIsXG5cdFwidGV4dF9jb250ZW50XCI6IFwiTmF2aWdhdGlvbkJhcl90ZXh0X2NvbnRlbnRfXzJXSkZVXCIsXG5cdFwidGV4dF9ibGFua0RpdlwiOiBcIk5hdmlnYXRpb25CYXJfdGV4dF9ibGFua0Rpdl9fMldoRFVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIml0ZW1faGVhZGVyXCI6IFwiQ2xpZW50R2xvYmFsc19pdGVtX2hlYWRlcl9fM2dYVEtcIixcblx0XCJpdGVtSGVhZGVyX2NvbnRlbnRcIjogXCJDbGllbnRHbG9iYWxzX2l0ZW1IZWFkZXJfY29udGVudF9fM1EteEFcIixcblx0XCJldmVudEhhbmRsZXJfZGl2XCI6IFwiQ2xpZW50R2xvYmFsc19ldmVudEhhbmRsZXJfZGl2X191U281MVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9jYXRpb25zXCI6IFwiTG9jYXRpb25fbG9jYXRpb25zX18yalNPaVwiLFxuXHRcInNlbGVjdF9sb2NhdGlvblwiOiBcIkxvY2F0aW9uX3NlbGVjdF9sb2NhdGlvbl9fMng3cElcIixcblx0XCJsb2NhdGlvbl9saXN0XCI6IFwiTG9jYXRpb25fbG9jYXRpb25fbGlzdF9fMXM1MnJcIixcblx0XCJ3cmFwcGVyXCI6IFwiTG9jYXRpb25fd3JhcHBlcl9fMnlwSVVcIixcblx0XCJsb2NhdGlvbl9oaWRkZW5EaXZcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl9oaWRkZW5EaXZfXzFXVUphXCIsXG5cdFwibG9jYXRpb25JbmZvX2NvbnRhaW5lclwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uSW5mb19jb250YWluZXJfXzE2MHdDXCIsXG5cdFwibG9jYXRpb25faW5mb1wiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2luZm9fXzJTMW9sXCIsXG5cdFwibG9jYXRpb25fY29udGVudFwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2NvbnRlbnRfX2NVZzA3XCIsXG5cdFwibG9jYXRpb25fdGFibGVcIjogXCJMb2NhdGlvbl9sb2NhdGlvbl90YWJsZV9fM3FlWHZcIixcblx0XCJsb2NhdGlvbkFkZF9mb3JtXCI6IFwiTG9jYXRpb25fbG9jYXRpb25BZGRfZm9ybV9fMW5BbXpcIixcblx0XCJsb2NhdGlvbl9pbnB1dFwiOiBcIkxvY2F0aW9uX2xvY2F0aW9uX2lucHV0X19OWEhyalwiXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvaW1hZ2UtY29uZmlnLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2hlYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdG8tYmFzZS02NC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3NjcmlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1c2VBeGlvcyIsInN0eWxlcyIsIkNhdGVnb3J5IiwiVHJlYXRtZW50IiwiSXRlbUhlYWRlciIsIkNhdGVnb3J5VHJlYXRtZW50IiwiYWN0aXZlUGFnZSIsImFjdGl2ZUNhdGVnb3J5IiwiY2hhbmdlQWN0aXZlQ2F0ZWdvcnkiLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJzZWxlY3RUcmVhdG1lbnQiLCJkYXRhIiwiY2F0ZWdvcnlEYXRhIiwiZXJyb3IiLCJjYXRlZ29yeURhdGFGZXRjaGluZ0Vycm9yIiwibG9hZGluZyIsImNhdGVnb3J5RGF0YUxvYWRpbmciLCJ0cmVhdG1lbnREYXRhIiwidHJlYXRtZW50RGF0YUZldGNoaW5nRXJyb3IiLCJ0cmVhdG1lbnREYXRhTG9hZGluZyIsImNhdGVnb3JpZXMiLCJzZXRDYXRlZ29yaWVzIiwidHJlYXRtZW50cyIsInNldFRyZWF0bWVudHMiLCJjYXRlZ29yeV90cmVhdG1lbnQiLCJkaXNwbGF5IiwiY2F0ZWdvcnkiLCJjYXRlZ29yeUl0ZW1fbGlzdCIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInRyZWF0bWVudCIsInRyZWF0bWVudEl0ZW1fbGlzdCIsImNsaWVudEdsb2JhbFN0eWxlcyIsIkV2ZW50SGFuZGxlckRpdiIsInRyZWF0bWVudEl0ZW1fY29udGFpbmVyIiwiZXZlbnRIYW5kbGVyX2RpdiIsImV2ZW50IiwidGl0bGUiLCJ0cmVhdG1lbnRfaXRlbSIsImJhY2tncm91bmRJbWFnZSIsInNvbWUiLCJ4IiwidHJlYXRtZW50SXRlbV9jb250ZW50IiwiZHVyYXRpb24iLCJwcmljZSIsImRlc2NyaXB0aW9uIiwidHJlYXRtZW50X2NvbnRlbnQiLCJDYXRlZ29yeVNlcmlhbCIsImJsdWVHcmFkaWVudCIsInJlZEdyYWRpZW50IiwiY29uZGl0aW9uMSIsImNvbmRpdGlvbjIiLCJzdHlsZSIsImNhdGVnb3J5SXRlbV9jb250YWluZXIiLCJjYXRlZ29yeV9pdGVtIiwiY2F0ZWdvcnlJdGVtX2NvbnRlbnQiLCJjb2xvciIsImNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJJbWFnZSIsIkxvZ28iLCJCdXR0b24iLCJFdmVudCIsInN0YXJ0VGltZSIsImV2ZW50RGF0ZSIsIkRhdGUiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwiZXZlbnRTdGFydFRpbWUiLCJsZW5ndGgiLCJkYXRlIiwiZ2V0RGF0ZSIsIndlZWtEYXkiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsInllYXIiLCJnZXRGdWxsWWVhciIsImV2ZW50X2ltYWdlIiwiZXZlbnRfdGl0bGUiLCJldmVudF9kYXRlIiwiZXZlbnRfdGltZSIsImJ1dHRvbl9kaXYiLCJldmVudFByaWNlIiwibWVzc2FnZV90b19jbGllbnQiLCJjbGlja0V2ZW50SGFuZGxlciIsIml0ZW1faGVhZGVyIiwiaXRlbUhlYWRlcl9jb250ZW50IiwiU2NyaXB0IiwiTG9naW5CZ0ltYWdlIiwiZ2V0RGF0ZXMiLCJDb25maXJtYXRpb24iLCJjbGllbnRFdmVudHMiLCJjb25zb2xlIiwibG9nIiwiZGF0ZXMiLCJzZXREYXRlcyIsInRleHRBbGlnbiIsIl9pZCIsInRvU3RyaW5nIiwiRGF0ZUNhcmQiLCJkYXRlVGltZSIsInNlbGVjdGVkRGF0ZSIsInNldFNlbGVjdGVkRGF0ZSIsInNlbGVjdGVkVGltZSIsImRhdGVDYXJkX2NvbnRhaW5lciIsInRhcmdldCIsInRleHRDb250ZW50IiwiZGF0ZUhpZGRlbl9kaXYiLCJkYXRlSW5EYXRlRm9ybWF0IiwiZGF0ZV9jYXJkIiwiaW5jbHVkZXMiLCJ3ZWVrRGF5X3RleHQiLCJkYXRlX3RleHQiLCJtb250aF90ZXh0IiwiY2xvY2tJY29uX2NvbnRhaW5lciIsImJvcmRlciIsIkNob29zZVN0eWxpc3RzIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkRhdGVUaW1lIiwic3RhdGUiLCJzZXRTb3J0ZWRTZWxlY3RlZFRyZWF0bWVudHMiLCJsb2NhdGlvbiIsInNldFNlbGVjdGVkVGltZSIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImRhdGVJbmRleCIsInNldERhdGVJbmRleCIsImRhdGVfdGltZSIsImRhdGVUaW1lX2NvbnRlbnQiLCJjb250ZW50X0ltYWdlIiwiZGF0ZXNfY29udGFpbmVyIiwicHJldiIsIm5leHQiLCJhdmFpbGFibGVfdGltZV9saXN0IiwidGltZSIsInRpbWVzIiwicG9zaXRpb24iLCJpbmRpdmlkdWFsX3RpbWUiLCJCZWF1dGljaWFuIiwiQmVhdXRpY2lhbjIiLCJzdHlsaXN0c19jb250YWluZXIiLCJtYXJnaW5Cb3R0b20iLCJzdHlsaXN0IiwiaW1hZ2VIaWRkZW5fZGl2IiwidGltZXNfY29udGFpbmVyIiwidGltZV90ZXh0IiwiZmluZFRpbWVTbG90cyIsIndpZHRoIiwibWFyZ2luIiwianVzdGlmeUNvbnRlbnQiLCJmaW5hbGl6ZVRyZWF0bWVudHMiLCJ2YWx1ZSIsIm5ld1RyZWF0bWVudFRpdGxlIiwiZG9lc0V4aXN0IiwibmV3SXRlbSIsInRyZWF0bWVudFRpdGxlIiwiZmlsdGVyZWRUcmVhdG1lbnRzIiwiZmlsdGVyIiwibmV3dHJlYXRtZW50IiwiY2hvb3NlblN0eWxpc3QiLCJ0cmVhdG1lbnREdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwiY3VycmVudFZhbHVlIiwiZmluZFRpbWVzIiwibmV3VHJlYXRtZW50cyIsImZvckVhY2giLCJzZWxlY3RlZFRyZWF0bWVudCIsInB1c2giLCJhbGVydCIsInN0eWxpc3RzIiwiSW5wdXQiLCJJbmZvcm1hdGlvblBheW1lbnQiLCJjbGllbnRJbmZvIiwiY2xpZW50SW5mb09uQ2hhbmdlSGFuZGxlciIsInZhbGlkYXRpb25FcnJvciIsImNyZWF0ZUJvb2tpbmciLCJpbmZvX3BheW1lbnQiLCJpbmZvUGF5bWVudF9jb250ZW50IiwiaW1hZ2VfY29udGFpbmVyIiwibmFtZV9pbnB1dHMiLCJpbnB1dF9sYWJlbCIsIm5hbWVfaW5mbyIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwicGhvbmVfaW5wdXQiLCJwaG9uZSIsImVtYWlsX2lucHV0IiwiZW1haWwiLCJjaGVja2JveCIsImhvd0hlYXJkQWJvdXRVc19pbnB1dCIsInR5cGUiLCJuYW1lIiwicGxhY2Vob2xkZXIiLCJpbnB1dCIsInRvTG93ZXJDYXNlIiwidXJsIiwic2V0RGF0YSIsInNldExvYWRpbmciLCJzZXRFcnJvciIsImZldGNoRGF0YSIsImVuZFBvaW50IiwicmVzcG9uc2UiLCJnZXQiLCJMb2NhdGlvbkljb24iLCJMb2NhdGlvbiIsInVwZGF0ZVN0YXRlIiwibG9jYXRpb25zIiwic2V0TG9jYXRpb25zIiwic2VsZWN0X2xvY2F0aW9uIiwibG9jYXRpb25fbGlzdCIsIndyYXBwZXIiLCJsb2NhdGlvbkluZm9fY29udGFpbmVyIiwibG9jYXRpb25faW5mbyIsImxvY2F0aW9uX2NvbnRlbnQiLCJhZGRyZXNzMSIsImFkZHJlc3MyIiwiemlwQ29kZSIsImNpdHkiLCJjb3VudHJ5IiwibG9jYXRpb25faWNvbiIsImZvbnRTaXplIiwiTmF2aWdhdGlvbkJ1dHRvbiIsIk5hdmlnYXRpb25UZXh0IiwiTmF2aWdhdGlvbkJhciIsInNldEFjdGl2ZVBhZ2UiLCJpdGVtcyIsImlkIiwid2luZG93V2lkdGgiLCJzZXRXaW5kb3dXaWR0aCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbm5lcldpZHRoIiwibmF2aWdhdGlvbkJhcl9jb250YWluZXIiLCJuYXZpZ2F0aW9uX2JhciIsIm5hdmlnYXRpb25UZXh0X2NvbnRhaW5lciIsImNoYW5nZUFjdGl2ZVBhZ2UiLCJuZXdWYWx1ZSIsIk51bWJlciIsIm5hdmlnYXRpb25fbGlua3MiLCJidXR0b25fY29udGFpbmVyIiwibmF2aWdhdGlvbkxpbmtfYnV0dG9uIiwiYmxhbmtQYXJhX2NvbnRhaW5lciIsInRleHQiLCJuYXZpZ2F0aW9uX3RleHQiLCJ0ZXh0X2NvbnRlbnQiLCJ0ZXh0X2JsYW5rRGl2IiwiQWxlcnQiLCJtZXNzYWdlIiwiY3VzdG9tQ2xhc3NOYW1lIiwiYnV0dG9uU3R5bGUiLCJidXR0b24iLCJmZXRjaEV2ZW50cyIsImdldFN0eWxpc3RzIiwiZ2V0V29ya2luZ1RpbWVzIiwiZGVmYXVsdFRpbWVzQXJyYXkiLCJkYXRlc0FycmF5IiwiYWxsU3R5bGlzdHMiLCJjYWxlbmRhckV2ZW50cyIsInN0eWxpc3RzV29ya2luZ1RpbWVzT25BdmFpbGFibGVEYXRlcyIsInN0eWxpc3RzRnJlZVRpbWVzT25BdmFpbGFibGVEYXRlcyIsIndvcmtpbmdUaW1lIiwieHh4Iiwic3R5bGlzdFdvcmtpbmdUaW1lcyIsImJ1c3lUaW1lcyIsInN0YXJ0aW5nVGltZSIsInN0YXJ0aW5nSG91ciIsInN0YXJ0aW5nTWludXRlIiwic3RhdHVzIiwiZXZlbnRMb2NhdGlvbiIsImsiLCJNYXRoIiwiY2VpbCIsImV2ZW50RHVyYXRpb24iLCJpbnRlcnZhbCIsImhvdXIiLCJob3VySW5jcmVtZW50IiwiZmxvb3IiLCJuZXdXb3JraW5nVGltZXMiLCJ3b3JraW5nVGltZXMiLCJmcmVlVGltZXMiLCJzdHlsaXN0c0FuZFRoZWlyRnJlZVRpbWVzIiwiY291bnRPZlRpbWVzVG9PbW1pdCIsInJlZHVjZSIsInRvdGFsIiwicXFxIiwiYXZhaWxhYmxlVGltZXNCeURhdGUiLCJpIiwidG90YWxUaW1lQ291bnQiLCJ0ZW1wIiwiaiIsImNvdW50IiwieSIsIm1pbnV0ZXMiLCJkYXRlVGltZXNBcnJheSIsIm5ld0RhdGUiLCJldmVudHMiLCJlcnIiLCJtc2ciLCJnZXRUaW1lIiwiZ2V0TW9udGgiLCJkYXkiLCJzdHlsaXN0RnVsbE5hbWUiLCJkYXlOYW1lIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwicCIsIndvcmtTY2hlZHVsZSIsInNjaGVkdWxlIiwic3RhcnRUaW1lSW5kZXgiLCJlbmRUaW1lSW5kZXgiLCJlbmRUaW1lIiwicSIsIm1ldGhvZCIsImJvZHkiLCJoYXBwZW5pbmciLCJ0b3RhbERhdGFDb3VudCIsInNldFRvdGFsRGF0YUNvdW50IiwibmV3RGF0YSIsIkFycmF5IiwiaXNBcnJheSIsInRvdGFsSXRlbUNvdW50IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIkltYWdlMSIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2hlYWQiLCJfdG9CYXNlNjQiLCJfaW1hZ2VDb25maWciLCJfdXNlSW50ZXJzZWN0aW9uIiwiX2RlZmluZVByb3BlcnR5Iiwib2JqIiwia2V5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX19lc01vZHVsZSIsIl9vYmplY3RTcHJlYWQiLCJhcmd1bWVudHMiLCJzb3VyY2UiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsImNvbmNhdCIsInN5bSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsImV4Y2x1ZGVkIiwiX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UiLCJzb3VyY2VTeW1ib2xLZXlzIiwicHJvdG90eXBlIiwicHJvcGVydHlJc0VudW1lcmFibGUiLCJjYWxsIiwic291cmNlS2V5cyIsImxvYWRlZEltYWdlVVJMcyIsIlNldCIsImdsb2JhbCIsIl9fTkVYVF9JTUFHRV9JTVBPUlRFRCIsIlZBTElEX0xPQURJTkdfVkFMVUVTIiwidW5kZWZpbmVkIiwibG9hZGVycyIsIk1hcCIsImRlZmF1bHRMb2FkZXIiLCJpbWdpeExvYWRlciIsImNsb3VkaW5hcnlMb2FkZXIiLCJha2FtYWlMb2FkZXIiLCJjdXN0b21Mb2FkZXIiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiaXNTdGF0aWNSZXF1aXJlIiwic3JjIiwiaXNTdGF0aWNJbWFnZURhdGEiLCJpc1N0YXRpY0ltcG9ydCIsImRldmljZVNpemVzIiwiY29uZmlnRGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwiY29uZmlnSW1hZ2VTaXplcyIsImxvYWRlciIsImNvbmZpZ0xvYWRlciIsInBhdGgiLCJjb25maWdQYXRoIiwiZG9tYWlucyIsImNvbmZpZ0RvbWFpbnMiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX0lNQUdFX09QVFMiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsInNvcnQiLCJhIiwiYiIsImdldFdpZHRocyIsImxheW91dCIsInNpemVzIiwidmlld3BvcnRXaWR0aFJlIiwicGVyY2VudFNpemVzIiwibWF0Y2giLCJleGVjIiwicGFyc2VJbnQiLCJzbWFsbGVzdFJhdGlvIiwibWluIiwid2lkdGhzIiwicyIsImtpbmQiLCJ3IiwiZmluZCIsImdlbmVyYXRlSW1nQXR0cnMiLCJ1bm9wdGltaXplZCIsInF1YWxpdHkiLCJzcmNTZXQiLCJsYXN0Iiwiam9pbiIsImdldEludCIsImRlZmF1bHRJbWFnZUxvYWRlciIsImxvYWRlclByb3BzIiwibG9hZCIsInJvb3QiLCJFcnJvciIsIlZBTElEX0xPQURFUlMiLCJoYW5kbGVMb2FkaW5nIiwiaW1nIiwib25Mb2FkaW5nQ29tcGxldGUiLCJoYW5kbGVMb2FkIiwic3RhcnRzV2l0aCIsImRlY29kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwiY2F0Y2giLCJ0aGVuIiwiYmFja2dyb3VuZFNpemUiLCJhZGQiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0IiwicmVmIiwicGFyZW50RWxlbWVudCIsInBhcmVudCIsImdldENvbXB1dGVkU3R5bGUiLCJ3YXJuIiwiY29tcGxldGUiLCJvbmxvYWQiLCJfcGFyYW0iLCJwcmlvcml0eSIsImxhenlCb3VuZGFyeSIsImNsYXNzTmFtZSIsImhlaWdodCIsIm9iamVjdEZpdCIsIm9iamVjdFBvc2l0aW9uIiwiYmx1ckRhdGFVUkwiLCJhbGwiLCJyZXN0Iiwic3RhdGljU3JjIiwic3RhdGljSW1hZ2VEYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsIndpZHRoSW50IiwiaGVpZ2h0SW50IiwicXVhbGl0eUludCIsImlzTGF6eSIsImhhcyIsIlN0cmluZyIsImlzTmFOIiwiVkFMSURfQkxVUl9FWFQiLCJyYW5kIiwicmFuZG9tIiwic2V0UmVmIiwiaXNJbnRlcnNlY3RlZCIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJkaXNhYmxlZCIsImlzVmlzaWJsZSIsIndyYXBwZXJTdHlsZSIsInNpemVyU3R5bGUiLCJzaXplclN2ZyIsImltZ1N0eWxlIiwidG9wIiwibGVmdCIsImJvdHRvbSIsInJpZ2h0IiwiYm94U2l6aW5nIiwicGFkZGluZyIsIm1pbldpZHRoIiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJibHVyU3R5bGUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJvdmVyZmxvdyIsInF1b3RpZW50IiwicGFkZGluZ1RvcCIsImltZ0F0dHJpYnV0ZXMiLCJzcmNTdHJpbmciLCJjcmVhdGVFbGVtZW50IiwiYWx0IiwidG9CYXNlNjQiLCJhc3NpZ24iLCJkZWNvZGluZyIsInJlbCIsImFzIiwiaHJlZiIsImltYWdlc3Jjc2V0IiwiaW1hZ2VzaXplcyIsIm5vcm1hbGl6ZVNyYyIsInNsaWNlIiwiVVJMIiwicGFyYW1zIiwic2VhcmNoUGFyYW1zIiwic2V0IiwicGFyYW1zU3RyaW5nIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImhvc3RuYW1lIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImNhbmNlbElkbGVDYWxsYmFjayIsInNlbGYiLCJiaW5kIiwiY2IiLCJzdGFydCIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIm1heCIsImNsZWFyVGltZW91dCIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ1c2VSZWYiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUNhbGxiYWNrIiwiZWwiLCJjdXJyZW50IiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvcHRpb25zIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJpbnN0YW5jZSIsImVudHJpZXMiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJIb21lIiwic2V0Q2xpZW50RXZlbnRzIiwic2V0U2VsZWN0ZWRUcmVhdG1lbnRzIiwic29ydGVkU2VsZWN0ZWRUcmVhdG1lbnRzIiwic2V0VmFsaWRhdGlvbkVycm9yIiwic2V0Q2xpZW50SW5mbyIsImhvd0hlYXJkQWJvdXRVcyIsIm90aGVycyIsInNldFN0YXRlIiwic2Vzc2lvbiIsImNvdXBvbiIsInBhaWQiLCJzZXRBY3RpdmVDYXRlZ29yeSIsImUiLCJmaWx0ZXJlZFNlbGVjdGVkVHJlYXRtZW50cyIsInBvc3QiLCJob21lIl0sInNvdXJjZVJvb3QiOiIifQ==
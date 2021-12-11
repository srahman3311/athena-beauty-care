"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/clients/date-time/DateCard.js":
/*!**************************************************!*\
  !*** ./components/clients/date-time/DateCard.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateCard; }
/* harmony export */ });
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../styles/DateTime.module.css */ "./styles/DateTime.module.css");
/* harmony import */ var _styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\DateCard.js";
// Stylesheet


function DateCard(_ref) {
  var date = _ref.date,
      activeDate = _ref.activeDate,
      setActiveDate = _ref.setActiveDate;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateCard_container),
    style: {
      backgroundImage: activeDate === "".concat(date.date, "-").concat(date.month.toLowerCase()) && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateHidden_div),
      children: [date.date, "-", date.month.toLowerCase()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_card),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().weekDay_text),
        children: date.weekDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_text),
        children: date.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().month_text),
        children: date.month
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
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
          lineNumber: 33,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 9
  }, this);
}
_c = DateCard;

var _c;

$RefreshReg$(_c, "DateCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTU1M2NiZjBmOGJjMGZkOWVjNmQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFLZSxTQUFTQyxRQUFULE9BQXlEO0FBQUEsTUFBcENDLElBQW9DLFFBQXBDQSxJQUFvQztBQUFBLE1BQTdCQyxVQUE2QixRQUE3QkEsVUFBNkI7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBRXBFLHNCQUVJO0FBQ0ksYUFBUyxFQUFFSix1RkFEZjtBQUVJLFNBQUssRUFBRztBQUNKTSxNQUFBQSxlQUFlLEVBQUVILFVBQVUsZUFBUUQsSUFBSSxDQUFDQSxJQUFiLGNBQXFCQSxJQUFJLENBQUNLLEtBQUwsQ0FBV0MsV0FBWCxFQUFyQixDQUFWLElBQTZEO0FBRDFFLEtBRlo7QUFBQSw0QkFPSTtBQUFLLGVBQVMsRUFBRVIsbUZBQWhCO0FBQUEsaUJBQ0tFLElBQUksQ0FBQ0EsSUFEVixPQUNpQkEsSUFBSSxDQUFDSyxLQUFMLENBQVdDLFdBQVgsRUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFXSTtBQUNJLGVBQVMsRUFBRVIsOEVBRGY7QUFBQSw4QkFHSTtBQUFHLGlCQUFTLEVBQUVBLGlGQUFkO0FBQUEsa0JBQW9DRSxJQUFJLENBQUNVO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQUlJO0FBQUcsaUJBQVMsRUFBRVosOEVBQWQ7QUFBQSxrQkFBaUNFLElBQUksQ0FBQ0E7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpKLGVBS0k7QUFBRyxpQkFBUyxFQUFFRiwrRUFBZDtBQUFBLGtCQUFrQ0UsSUFBSSxDQUFDSztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEosZUFPSTtBQUNJLGlCQUFTLEVBQUVQLHdGQURmO0FBRUksYUFBSyxFQUFJO0FBQUNnQixVQUFBQSxNQUFNLEVBQUVkLElBQUksQ0FBQ1UsT0FBTCxLQUFpQixPQUFqQixJQUE0QjtBQUFyQyxTQUZiO0FBQUEsK0JBSUk7QUFBRyxlQUFLLEVBQUk7QUFBQ0ssWUFBQUEsS0FBSyxFQUFFZixJQUFJLENBQUNVLE9BQUwsS0FBaUIsT0FBakIsSUFBNEI7QUFBcEMsV0FBWjtBQUF5RCxtQkFBUyxFQUFDO0FBQW5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFpQ0g7S0FuQ3VCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVDYXJkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVDYXJkICh7IGRhdGUsICBhY3RpdmVEYXRlLCBzZXRBY3RpdmVEYXRlIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlQ2FyZF9jb250YWluZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlID17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBhY3RpdmVEYXRlID09PSBgJHtkYXRlLmRhdGV9LSR7ZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgJiYgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwwLDAsIDAuNCksIHJnYigwLDAsMjU1LCAwLjkpLCBkYXJrYmx1ZSlcIlxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUhpZGRlbl9kaXZ9PlxyXG4gICAgICAgICAgICAgICAge2RhdGUuZGF0ZX0te2RhdGUubW9udGgudG9Mb3dlckNhc2UoKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV9jYXJkfSBcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMud2Vla0RheV90ZXh0fT57ZGF0ZS53ZWVrRGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGV4dH0+e2RhdGUuZGF0ZX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb250aF90ZXh0fT57ZGF0ZS5tb250aH08L3A+XHJcblxyXG4gICAgICAgICAgICAgICAgPHNwYW4gXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2xvY2tJY29uX2NvbnRhaW5lcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2JvcmRlcjogZGF0ZS53ZWVrRGF5ID09PSBcIlRvZGF5XCIgJiYgXCIxcHggc29saWQgYmx1ZVwifX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8aSBzdHlsZSA9IHt7Y29sb3I6IGRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwiYmx1ZVwifX0gY2xhc3NOYW1lPVwiZmFyIGZhLWNsb2NrXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiRGF0ZUNhcmQiLCJkYXRlIiwiYWN0aXZlRGF0ZSIsInNldEFjdGl2ZURhdGUiLCJkYXRlQ2FyZF9jb250YWluZXIiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJtb250aCIsInRvTG93ZXJDYXNlIiwiZGF0ZUhpZGRlbl9kaXYiLCJkYXRlX2NhcmQiLCJ3ZWVrRGF5X3RleHQiLCJ3ZWVrRGF5IiwiZGF0ZV90ZXh0IiwibW9udGhfdGV4dCIsImNsb2NrSWNvbl9jb250YWluZXIiLCJib3JkZXIiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=
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
  var date = _ref.date;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateCard_container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().dateHidden_div),
      children: [date.date, "-", date.month.toLowerCase()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_card),
      style: {
        backgroundImage: date.weekDay === "Today" && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().weekDay_text),
        children: date.weekDay
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().date_text),
        children: date.date
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_1___default().month_text),
        children: date.month
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
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
          lineNumber: 31,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmFjMDdiODM3ZDNlMzkwYTkxNjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFLZSxTQUFTQyxRQUFULE9BQTZCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBRXhDLHNCQUVJO0FBQUssYUFBUyxFQUFFRix1RkFBaEI7QUFBQSw0QkFFSTtBQUFLLGVBQVMsRUFBRUEsbUZBQWhCO0FBQUEsaUJBQ0tFLElBQUksQ0FBQ0EsSUFEVixPQUNpQkEsSUFBSSxDQUFDRyxLQUFMLENBQVdDLFdBQVgsRUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFNSTtBQUNJLGVBQVMsRUFBRU4sOEVBRGY7QUFFSSxXQUFLLEVBQUc7QUFDSlEsUUFBQUEsZUFBZSxFQUFFTixJQUFJLENBQUNPLE9BQUwsS0FBaUIsT0FBakIsSUFBNEI7QUFEekMsT0FGWjtBQUFBLDhCQU1JO0FBQUcsaUJBQVMsRUFBRVQsaUZBQWQ7QUFBQSxrQkFBb0NFLElBQUksQ0FBQ087QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQU5KLGVBT0k7QUFBRyxpQkFBUyxFQUFFVCw4RUFBZDtBQUFBLGtCQUFpQ0UsSUFBSSxDQUFDQTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEosZUFRSTtBQUFHLGlCQUFTLEVBQUVGLCtFQUFkO0FBQUEsa0JBQWtDRSxJQUFJLENBQUNHO0FBQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FSSixlQVVJO0FBQ0ksaUJBQVMsRUFBRUwsd0ZBRGY7QUFFSSxhQUFLLEVBQUk7QUFBQ2MsVUFBQUEsTUFBTSxFQUFFWixJQUFJLENBQUNPLE9BQUwsS0FBaUIsT0FBakIsSUFBNEI7QUFBckMsU0FGYjtBQUFBLCtCQUlJO0FBQUcsZUFBSyxFQUFJO0FBQUNNLFlBQUFBLEtBQUssRUFBRWIsSUFBSSxDQUFDTyxPQUFMLEtBQWlCLE9BQWpCLElBQTRCO0FBQXBDLFdBQVo7QUFBeUQsbUJBQVMsRUFBQztBQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBK0JIO0tBakN1QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlQ2FyZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlQ2FyZCAoeyBkYXRlIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVDYXJkX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIaWRkZW5fZGl2fT5cclxuICAgICAgICAgICAgICAgIHtkYXRlLmRhdGV9LXtkYXRlLm1vbnRoLnRvTG93ZXJDYXNlKCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfY2FyZH0gXHJcbiAgICAgICAgICAgICAgICBzdHlsZSA9e3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwibGluZWFyLWdyYWRpZW50KHJnYigyNTUsMCwwLCAwLjQpLCByZ2IoMCwwLDI1NSwgMC45KSwgZGFya2JsdWUpXCJcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLndlZWtEYXlfdGV4dH0+e2RhdGUud2Vla0RheX08L3A+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RleHR9PntkYXRlLmRhdGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubW9udGhfdGV4dH0+e2RhdGUubW9udGh9PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzcGFuIFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNsb2NrSWNvbl9jb250YWluZXJ9IFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tib3JkZXI6IGRhdGUud2Vla0RheSA9PT0gXCJUb2RheVwiICYmIFwiMXB4IHNvbGlkIGJsdWVcIn19XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgc3R5bGUgPSB7e2NvbG9yOiBkYXRlLndlZWtEYXkgPT09IFwiVG9kYXlcIiAmJiBcImJsdWVcIn19IGNsYXNzTmFtZT1cImZhciBmYS1jbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbInN0eWxlcyIsIkRhdGVDYXJkIiwiZGF0ZSIsImRhdGVDYXJkX2NvbnRhaW5lciIsImRhdGVIaWRkZW5fZGl2IiwibW9udGgiLCJ0b0xvd2VyQ2FzZSIsImRhdGVfY2FyZCIsImJhY2tncm91bmRJbWFnZSIsIndlZWtEYXkiLCJ3ZWVrRGF5X3RleHQiLCJkYXRlX3RleHQiLCJtb250aF90ZXh0IiwiY2xvY2tJY29uX2NvbnRhaW5lciIsImJvcmRlciIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==
"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/clients/date-time/DateTime.js":
/*!**************************************************!*\
  !*** ./components/clients/date-time/DateTime.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DateTime; }
/* harmony export */ });
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/script */ "./node_modules/next/script.js");
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\DateTime.js",
    _s = $RefreshSig$();

// Next Modules




 // Stylesheet

 // libs

 // components







function DateTime(_ref) {
  _s();

  var _this = this;

  var state = _ref.state,
      activePage = _ref.activePage,
      selectedTreatments = _ref.selectedTreatments,
      location = _ref.location;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      dates = _useState[0],
      setDates = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]),
      dateTimes = _useState2[0],
      setDateTimes = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      activeDate = _useState3[0],
      setActiveDate = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      dateIndex = _useState4[0],
      setDateIndex = _useState4[1];

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    setDates((0,_lib_getDates__WEBPACK_IMPORTED_MODULE_5__.getDates)());
  }, []);
  console.log(dates);
  console.log(dateTimes);
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
      lineNumber: 44,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
      content: "Select date/time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
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
          lineNumber: 55,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().prev),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().next),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates),
          children: dateTimes.map(function (dateTime, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DateCard__WEBPACK_IMPORTED_MODULE_7__.default, {
              date: dateTime.date,
              activeDate: activeDate,
              setActiveDate: setActiveDate
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().available_time_list),
          children: dateTimes.map(function (dateTime, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().time),
              style: {
                display: activeDate === "".concat(dateTime.date.date, "-").concat(dateTime.date.month.toLowerCase()) ? "flex" : "none"
              },
              children: dateTime.times.map(function (time) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                  children: time
                }, time, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 45
                }, _this);
              })
            }, "".concat(dateTime.date.date, "-").concat(dateTime.date.weekDay), false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 9
  }, this);
}

_s(DateTime, "+pNyiuqxCQNVJM12iDNBtJ7PBLg=");

_c = DateTime;

var _c;

$RefreshReg$(_c, "DateTime");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMTM3MjUwNmYwYzgxNjY5NzlkMTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNhLFFBQVQsT0FBd0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFVBQTRDLFFBQTVDQSxVQUE0QztBQUFBLE1BQWhDQyxrQkFBZ0MsUUFBaENBLGtCQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFbkYsa0JBQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPZSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxNQUFPcUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFJQXZCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaaUIsSUFBQUEsUUFBUSxDQUFDWix1REFBUSxFQUFULENBQVI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFtQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBWjtBQUNBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsU0FBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFZCwrRUFBaEI7QUFBa0MsU0FBSyxFQUFJO0FBQUN1QixNQUFBQSxPQUFPLEVBQUVkLFVBQVUsS0FBSyxD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dHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaG9vc2VTdHlsaXN0cyBmcm9tIFwiLi9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHNcIjtcclxuaW1wb3J0IERhdGVDYXJkIGZyb20gXCIuL0RhdGVDYXJkXCI7XHJcbmltcG9ydCBTdHlsaXN0cyBmcm9tIFwiLi9TdHlsaXN0c1wiO1xyXG5pbXBvcnQgVGltZXMgZnJvbSBcIi4vVGltZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUgKHsgc3RhdGUsIGFjdGl2ZVBhZ2UsIHNlbGVjdGVkVHJlYXRtZW50cywgbG9jYXRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGVUaW1lcywgc2V0RGF0ZVRpbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVEYXRlLCBzZXRBY3RpdmVEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RhdGVJbmRleCwgc2V0RGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0ZXMpO1xyXG4gICAgY29uc29sZS5sb2coZGF0ZVRpbWVzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlU3R5bGlzdHMgXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge2xvY2F0aW9ufSBcclxuICAgICAgICAgICAgICAgIHNldERhdGVUaW1lcyA9IHtzZXREYXRlVGltZXN9XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRlID0ge3NldEFjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE0YWI4YjEyNmQuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBkYXRlL3RpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlVGltZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucHJldn0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0ge2RhdGVUaW1lLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURhdGUgPSB7YWN0aXZlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhaWxhYmxlX3RpbWVfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVEYXRlID09PSBgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgPyBcImZsZXhcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS50aW1lcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGtleSA9IHt0aW1lfT57dGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3R5bGlzdHNfdGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxpc3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGltZXMgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlNjcmlwdCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpbkJnSW1hZ2UiLCJMb2dvIiwic3R5bGVzIiwiZ2V0RGF0ZXMiLCJDaG9vc2VTdHlsaXN0cyIsIkRhdGVDYXJkIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkl0ZW1IZWFkZXIiLCJEYXRlVGltZSIsInN0YXRlIiwiYWN0aXZlUGFnZSIsInNlbGVjdGVkVHJlYXRtZW50cyIsImxvY2F0aW9uIiwiZGF0ZXMiLCJzZXREYXRlcyIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImFjdGl2ZURhdGUiLCJzZXRBY3RpdmVEYXRlIiwiZGF0ZUluZGV4Iiwic2V0RGF0ZUluZGV4IiwiY29uc29sZSIsImxvZyIsImRhdGVfdGltZSIsImRpc3BsYXkiLCJkYXRlVGltZV9jb250ZW50IiwiY29udGVudF9JbWFnZSIsImRhdGVzX2NvbnRhaW5lciIsInByZXYiLCJuZXh0IiwibWFwIiwiZGF0ZVRpbWUiLCJpbmRleCIsImRhdGUiLCJhdmFpbGFibGVfdGltZV9saXN0IiwidGltZSIsIm1vbnRoIiwidG9Mb3dlckNhc2UiLCJ0aW1lcyIsIndlZWtEYXkiXSwic291cmNlUm9vdCI6IiJ9
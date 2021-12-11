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

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(""),
      choosenTime = _useState5[0],
      setChoosenTime = _useState5[1];

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
      lineNumber: 45,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)((next_script__WEBPACK_IMPORTED_MODULE_0___default()), {
      src: "https://kit.fontawesome.com/14ab8b126d.js",
      crossorigin: "anonymous"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
      content: "Select date/time"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 52,
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
          lineNumber: 56,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
        className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dates_container),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().prev),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-left"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("button", {
          className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().next),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("i", {
            className: "fas fa-chevron-right"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 53
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
              lineNumber: 72,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
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
                  className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                  children: time
                }, time, false, {
                  fileName: _jsxFileName,
                  lineNumber: 93,
                  columnNumber: 45
                }, _this);
              })
            }, "".concat(dateTime.date.date, "-").concat(dateTime.date.weekDay), false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(DateTime, "lwfKnWHXZaEC1Vg0x2alm6Mvm8I=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNGE3NjA2N2Q2ODcwYThiMWRhMTQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNhLFFBQVQsT0FBd0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFVBQTRDLFFBQTVDQSxVQUE0QztBQUFBLE1BQWhDQyxrQkFBZ0MsUUFBaENBLGtCQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFbkYsa0JBQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPZSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxNQUFPcUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0N0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFJQXpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaaUIsSUFBQUEsUUFBUSxDQUFDWix1REFBUSxFQUFULENBQVI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFxQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVgsS0FBWjtBQUNBVSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsU0FBWjtBQUVBLHNCQUNJO0FB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QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0ZIOztHQXJHdUJsQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENob29zZVN0eWxpc3RzIGZyb20gXCIuL2Nob29zZS1zdHlsaXN0cy9DaG9vc2VTdHlsaXN0c1wiO1xyXG5pbXBvcnQgRGF0ZUNhcmQgZnJvbSBcIi4vRGF0ZUNhcmRcIjtcclxuaW1wb3J0IFN0eWxpc3RzIGZyb20gXCIuL1N0eWxpc3RzXCI7XHJcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9UaW1lc1wiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSAoeyBzdGF0ZSwgYWN0aXZlUGFnZSwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBsb2NhdGlvbiB9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0ZVRpbWVzLCBzZXREYXRlVGltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZURhdGUsIHNldEFjdGl2ZURhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGF0ZUluZGV4LCBzZXREYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hvb3NlblRpbWUsIHNldENob29zZW5UaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0ZXMpO1xyXG4gICAgY29uc29sZS5sb2coZGF0ZVRpbWVzKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlU3R5bGlzdHMgXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge2xvY2F0aW9ufSBcclxuICAgICAgICAgICAgICAgIHNldERhdGVUaW1lcyA9IHtzZXREYXRlVGltZXN9XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRlID0ge3NldEFjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE0YWI4YjEyNmQuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBkYXRlL3RpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlVGltZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucHJldn0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0ge2RhdGVUaW1lLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURhdGUgPSB7YWN0aXZlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhaWxhYmxlX3RpbWVfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVEYXRlID09PSBgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgPyBcImZsZXhcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS50aW1lcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmRpdmlkdWFsX3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3R5bGlzdHNfdGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxpc3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGltZXMgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlNjcmlwdCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpbkJnSW1hZ2UiLCJMb2dvIiwic3R5bGVzIiwiZ2V0RGF0ZXMiLCJDaG9vc2VTdHlsaXN0cyIsIkRhdGVDYXJkIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkl0ZW1IZWFkZXIiLCJEYXRlVGltZSIsInN0YXRlIiwiYWN0aXZlUGFnZSIsInNlbGVjdGVkVHJlYXRtZW50cyIsImxvY2F0aW9uIiwiZGF0ZXMiLCJzZXREYXRlcyIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImFjdGl2ZURhdGUiLCJzZXRBY3RpdmVEYXRlIiwiZGF0ZUluZGV4Iiwic2V0RGF0ZUluZGV4IiwiY2hvb3NlblRpbWUiLCJzZXRDaG9vc2VuVGltZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRlX3RpbWUiLCJkaXNwbGF5IiwiZGF0ZVRpbWVfY29udGVudCIsImNvbnRlbnRfSW1hZ2UiLCJkYXRlc19jb250YWluZXIiLCJwcmV2IiwibmV4dCIsIm1hcCIsImRhdGVUaW1lIiwiaW5kZXgiLCJkYXRlIiwiYXZhaWxhYmxlX3RpbWVfbGlzdCIsInRpbWUiLCJtb250aCIsInRvTG93ZXJDYXNlIiwidGltZXMiLCJpbmRpdmlkdWFsX3RpbWUiLCJ3ZWVrRGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
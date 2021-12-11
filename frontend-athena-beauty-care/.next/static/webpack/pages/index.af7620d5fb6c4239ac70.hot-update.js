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
          className: "times",
          style: {
            display: "flex",
            padding: "10px"
          },
          children: dateTimes.map(function (dateTime, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
              style: {
                display: dateIndex === index ? "block" : "none"
              },
              children: dateTime.times.map(function (time) {
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                  children: time
                }, time, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 45
                }, _this);
              })
            }, "".concat(dateTime.date.date, "-").concat(dateTime.date.weekDay), false, {
              fileName: _jsxFileName,
              lineNumber: 84,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWY3NjIwZDVmYjZjNDIzOWFjNzAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNhLFFBQVQsT0FBd0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFVBQTRDLFFBQTVDQSxVQUE0QztBQUFBLE1BQWhDQyxrQkFBZ0MsUUFBaENBLGtCQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFbkYsa0JBQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPZSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxNQUFPcUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFJQXZCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaaUIsSUFBQUEsUUFBUSxDQUFDWix1REFBUSxFQUFULENBQVI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFtQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVQsS0FBWjtBQUNBUSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsU0FBWjtBQUVBLHNCQUNJO0FBQUssYUFBUyxFQUFFZCwrRUFBaEI7QUFBa0MsU0FBSyxFQUFJO0FBQUN1QixNQUFBQSxPQUFPLEVBQUVkLFVBQVUsS0FBSyxDQUFmLEdBQW1CLE9BQW5CLEdBQTZCO0FBQXZDLEtBQTNDO0FBQUEsNEJBRUksK0RBQUMsb0VBQUQ7QUFDSSx3QkFBa0IsRUFBSUMsa0JBRDFCO0FBRUksY0FBUSxFQUFJQyxRQUZoQjtBQUdJLGtCQUFZLEVBQUlJLFlBSHBCO0FBSUksbUJBQWEsRUFBSUU7QUFKckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBUUksK0RBQUMsb0RBQUQ7QUFBUSxTQUFHLEVBQUMsMkNBQVo7QUFBd0QsaUJBQVcsRUFBQztBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkosZUFTSSwrREFBQyw0RUFBRDtBQUFZLGFBQU8sRUFBRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEosZUFXSTtBQUFLLGVBQVMsRUFBRWpCLHNGQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsbUZBQWhCO0FBQUEsK0JBQ0ksK0RBQUMsbURBQUQsQ0FDSTtBQUNBO0FBQ0E7QUFISjtBQUlJLGFBQUcsRUFBRUQsa0RBSlQ7QUFLSSxhQUFHLEVBQUM7QUFMUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBVUk7QUFBSyxpQkFBUyxFQUFFQyxxRkFBaEI7QUFBQSxnQ0FFSTtBQUFRLG1CQUFTLEVBQUVBLDBFQUFuQjtBQUFBLGlDQUFnQztBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkosZUFHSTtBQUFRLG1CQUFTLEVBQUVBLDBFQUFuQjtBQUFBLGlDQUFnQztBQUFHLHFCQUFTLEVBQUM7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSEosZUFLSTtBQUFLLG1CQUFTLEVBQUVBLDJFQUFoQjtBQUFBLG9CQUNLYyxTQUFTLENBQUNlLEdBQVYsQ0FBYyxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDaEMsZ0NBQ0ksK0RBQUMsOENBQUQ7QUFFSSxrQkFBSSxFQUFJRCxRQUFRLENBQUNFLElBRnJCO0FBR0ksMkJBQWEsRUFBSWY7QUFIckIsZUFDV2MsS0FBSyxHQUFHLENBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFPSCxXQVJBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMSixlQWlCSTtBQUFLLG1CQUFTLEVBQUMsT0FBZjtBQUF1QixlQUFLLEVBQUk7QUFBQ1IsWUFBQUEsT0FBTyxFQUFFLE1BQVY7QUFBa0JVLFlBQUFBLE9BQU8sRUFBRTtBQUEzQixXQUFoQztBQUFBLG9CQUNLbkIsU0FBUyxDQUFDZSxHQUFWLENBQWMsVUFBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ2hDLGdDQUVJO0FBRUksbUJBQUssRUFBRTtBQUFDUixnQkFBQUEsT0FBTyxFQUFFTCxTQUFTLEtBQUthLEtBQWQsR0FBc0IsT0FBdEIsR0FBZ0M7QUFBMUMsZUFGWDtBQUFBLHdCQUlLRCxRQUFRLENBQUNJLEtBQVQsQ0FBZUwsR0FBZixDQUFtQixVQUFBTSxJQUFJLEVBQUk7QUFDeEIsb0NBQ0k7QUFBQSw0QkFBaUJBO0FBQWpCLG1CQUFVQSxJQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFHSCxlQUpBO0FBSkwseUJBQ2NMLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUQ1QixjQUNvQ0YsUUFBUSxDQUFDRSxJQUFULENBQWNJLE9BRGxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFjSCxXQWZBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUEwRUg7O0dBNUZ1QjdCOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVUaW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9nZXREYXRlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2hvb3NlU3R5bGlzdHMgZnJvbSBcIi4vY2hvb3NlLXN0eWxpc3RzL0Nob29zZVN0eWxpc3RzXCI7XHJcbmltcG9ydCBEYXRlQ2FyZCBmcm9tIFwiLi9EYXRlQ2FyZFwiO1xyXG5pbXBvcnQgU3R5bGlzdHMgZnJvbSBcIi4vU3R5bGlzdHNcIjtcclxuaW1wb3J0IFRpbWVzIGZyb20gXCIuL1RpbWVzXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lICh7IHN0YXRlLCBhY3RpdmVQYWdlLCBzZWxlY3RlZFRyZWF0bWVudHMsIGxvY2F0aW9uIH0pIHtcclxuXHJcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRlVGltZXMsIHNldERhdGVUaW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlRGF0ZSwgc2V0QWN0aXZlRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkYXRlSW5kZXgsIHNldERhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldERhdGVzKGdldERhdGVzKCkpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGVzKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGVUaW1lcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPENob29zZVN0eWxpc3RzIFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHtsb2NhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRlVGltZXMgPSB7c2V0RGF0ZVRpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNGFiOGIxMjZkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgZGF0ZS90aW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVRpbWVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc19jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHtkYXRlVGltZS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRlID0ge3NldEFjdGl2ZURhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lc1wiIHN0eWxlID0ge3tkaXNwbGF5OiBcImZsZXhcIiwgcGFkZGluZzogXCIxMHB4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2Ake2RhdGVUaW1lLmRhdGUuZGF0ZX0tJHtkYXRlVGltZS5kYXRlLndlZWtEYXl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tkaXNwbGF5OiBkYXRlSW5kZXggPT09IGluZGV4ID8gXCJibG9ja1wiIDogXCJub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lLnRpbWVzLm1hcCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5ID0ge3RpbWV9Pnt0aW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5zdHlsaXN0c190aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGlzdHMgLz5cclxuICAgICAgICAgICAgICAgIDxUaW1lcyAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAqL31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiU2NyaXB0IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luQmdJbWFnZSIsIkxvZ28iLCJzdHlsZXMiLCJnZXREYXRlcyIsIkNob29zZVN0eWxpc3RzIiwiRGF0ZUNhcmQiLCJTdHlsaXN0cyIsIlRpbWVzIiwiSXRlbUhlYWRlciIsIkRhdGVUaW1lIiwic3RhdGUiLCJhY3RpdmVQYWdlIiwic2VsZWN0ZWRUcmVhdG1lbnRzIiwibG9jYXRpb24iLCJkYXRlcyIsInNldERhdGVzIiwiZGF0ZVRpbWVzIiwic2V0RGF0ZVRpbWVzIiwiYWN0aXZlRGF0ZSIsInNldEFjdGl2ZURhdGUiLCJkYXRlSW5kZXgiLCJzZXREYXRlSW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZGF0ZV90aW1lIiwiZGlzcGxheSIsImRhdGVUaW1lX2NvbnRlbnQiLCJjb250ZW50X0ltYWdlIiwiZGF0ZXNfY29udGFpbmVyIiwicHJldiIsIm5leHQiLCJtYXAiLCJkYXRlVGltZSIsImluZGV4IiwiZGF0ZSIsInBhZGRpbmciLCJ0aW1lcyIsInRpbWUiLCJ3ZWVrRGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
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
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.Fragment, {
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                    onClick: function onClick(event) {
                      return setChoosenTime(event.target.textContent);
                    },
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dateHidden_div),
                    children: time
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 94,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                    children: time
                  }, time, false, {
                    fileName: _jsxFileName,
                    lineNumber: 101,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguN2NiM2RhNmUzOTNmNjg0MDVkZmUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJZSxTQUFTYSxRQUFULE9BQXdFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkRDLEtBQW1ELFFBQW5EQSxLQUFtRDtBQUFBLE1BQTVDQyxVQUE0QyxRQUE1Q0EsVUFBNEM7QUFBQSxNQUFoQ0Msa0JBQWdDLFFBQWhDQSxrQkFBZ0M7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBRW5GLGtCQUEwQmQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDaEIsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DbEIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT21CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQWtDcEIsK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQUEsTUFBT3FCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDdEIsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT3VCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBSUF6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWmlCLElBQUFBLFFBQVEsQ0FBQ1osdURBQVEsRUFBVCxDQUFSO0FBRUgsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BcUIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLEtBQVo7QUFDQVUsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlULFNBQVo7QUFFQSxzQkFDSTtB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O0FBTEwseUJBRWNKLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUY1QixjQUVvQ0YsUUFBUSxDQUFDRSxJQUFULENBQWNXLE9BRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUE2QkgsV0E5QkE7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTBGSDs7R0E3R3VCdEM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaG9vc2VTdHlsaXN0cyBmcm9tIFwiLi9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHNcIjtcclxuaW1wb3J0IERhdGVDYXJkIGZyb20gXCIuL0RhdGVDYXJkXCI7XHJcbmltcG9ydCBTdHlsaXN0cyBmcm9tIFwiLi9TdHlsaXN0c1wiO1xyXG5pbXBvcnQgVGltZXMgZnJvbSBcIi4vVGltZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUgKHsgc3RhdGUsIGFjdGl2ZVBhZ2UsIHNlbGVjdGVkVHJlYXRtZW50cywgbG9jYXRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGVUaW1lcywgc2V0RGF0ZVRpbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVEYXRlLCBzZXRBY3RpdmVEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RhdGVJbmRleCwgc2V0RGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Nob29zZW5UaW1lLCBzZXRDaG9vc2VuVGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldERhdGVzKGdldERhdGVzKCkpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRhdGVzKTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGVUaW1lcyk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPENob29zZVN0eWxpc3RzIFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHtsb2NhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRlVGltZXMgPSB7c2V0RGF0ZVRpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNGFiOGIxMjZkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgZGF0ZS90aW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVRpbWVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc19jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHtkYXRlVGltZS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXRlID0ge2FjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURhdGUgPSB7c2V0QWN0aXZlRGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWlsYWJsZV90aW1lX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVzLm1hcCgoZGF0ZVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7YCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUud2Vla0RheX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlRGF0ZSA9PT0gYCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUubW9udGgudG9Mb3dlckNhc2UoKX1gID8gXCJmbGV4XCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWUudGltZXMubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtldmVudCA9PiBzZXRDaG9vc2VuVGltZShldmVudC50YXJnZXQudGV4dENvbnRlbnQpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhdGVIaWRkZW5fZGl2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbmRpdmlkdWFsX3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZSA9IHtzdHlsZXMuc3R5bGlzdHNfdGltZXN9PlxyXG4gICAgICAgICAgICAgICAgPFN0eWxpc3RzIC8+XHJcbiAgICAgICAgICAgICAgICA8VGltZXMgLz5cclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgKi99XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG5cclxuXHJcbiAgICApO1xyXG59Il0sIm5hbWVzIjpbIlNjcmlwdCIsIkltYWdlIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJMb2dpbkJnSW1hZ2UiLCJMb2dvIiwic3R5bGVzIiwiZ2V0RGF0ZXMiLCJDaG9vc2VTdHlsaXN0cyIsIkRhdGVDYXJkIiwiU3R5bGlzdHMiLCJUaW1lcyIsIkl0ZW1IZWFkZXIiLCJEYXRlVGltZSIsInN0YXRlIiwiYWN0aXZlUGFnZSIsInNlbGVjdGVkVHJlYXRtZW50cyIsImxvY2F0aW9uIiwiZGF0ZXMiLCJzZXREYXRlcyIsImRhdGVUaW1lcyIsInNldERhdGVUaW1lcyIsImFjdGl2ZURhdGUiLCJzZXRBY3RpdmVEYXRlIiwiZGF0ZUluZGV4Iiwic2V0RGF0ZUluZGV4IiwiY2hvb3NlblRpbWUiLCJzZXRDaG9vc2VuVGltZSIsImNvbnNvbGUiLCJsb2ciLCJkYXRlX3RpbWUiLCJkaXNwbGF5IiwiZGF0ZVRpbWVfY29udGVudCIsImNvbnRlbnRfSW1hZ2UiLCJkYXRlc19jb250YWluZXIiLCJwcmV2IiwibmV4dCIsIm1hcCIsImRhdGVUaW1lIiwiaW5kZXgiLCJkYXRlIiwiYXZhaWxhYmxlX3RpbWVfbGlzdCIsInRpbWUiLCJtb250aCIsInRvTG93ZXJDYXNlIiwidGltZXMiLCJldmVudCIsInRhcmdldCIsInRleHRDb250ZW50IiwiZGF0ZUhpZGRlbl9kaXYiLCJpbmRpdmlkdWFsX3RpbWUiLCJ3ZWVrRGF5Il0sInNvdXJjZVJvb3QiOiIifQ==
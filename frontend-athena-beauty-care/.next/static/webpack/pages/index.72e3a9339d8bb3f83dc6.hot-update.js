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
          children: dateTimes.map(function (dateTime, index) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)(_DateCard__WEBPACK_IMPORTED_MODULE_7__.default, {
              date: dateTime.date,
              activeDate: activeDate,
              setActiveDate: setActiveDate
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 33
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
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
                    lineNumber: 92,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                    style: {
                      backgroundImage: choosenTime === time && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                    },
                    children: time
                  }, time, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzJlM2E5MzM5ZDhiYjNmODNkYzYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJZSxTQUFTYSxRQUFULE9BQXdFO0FBQUE7O0FBQUE7O0FBQUEsTUFBbkRDLEtBQW1ELFFBQW5EQSxLQUFtRDtBQUFBLE1BQTVDQyxVQUE0QyxRQUE1Q0EsVUFBNEM7QUFBQSxNQUFoQ0Msa0JBQWdDLFFBQWhDQSxrQkFBZ0M7QUFBQSxNQUFaQyxRQUFZLFFBQVpBLFFBQVk7O0FBRW5GLGtCQUEwQmQsK0NBQVEsQ0FBQyxFQUFELENBQWxDO0FBQUEsTUFBT2UsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQWtDaEIsK0NBQVEsQ0FBQyxFQUFELENBQTFDO0FBQUEsTUFBT2lCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQW9DbEIsK0NBQVEsQ0FBQyxFQUFELENBQTVDO0FBQUEsTUFBT21CLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQWtDcEIsK0NBQVEsQ0FBQyxDQUFELENBQTFDO0FBQUEsTUFBT3FCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQXNDdEIsK0NBQVEsQ0FBQyxFQUFELENBQTlDO0FBQUEsTUFBT3VCLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBSUF6QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFFWmlCLElBQUFBLFFBQVEsQ0FBQ1osdURBQVEsRUFBVCxDQUFSO0FBRUgsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BcUIsRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILFdBQVo7QUFDQSxzQkFDSTtBQUFLLGFBQVMsRUFBRXBCLCtFQUFoQjtBQUFrQyxTQUFLLEVBQUk7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O0FBQUE7QUFBQSwyQkFSSjtBQUFBLGdDQURKO0FBb0JILGVBckJBO0FBTEwseUJBRWNKLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUY1QixjQUVvQ0YsUUFBUSxDQUFDRSxJQUFULENBQWNZLE9BRmxEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRko7QUFnQ0gsV0FqQ0E7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQTZGSDs7R0E5R3VCdkM7O0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY2xpZW50cy9kYXRlLXRpbWUvRGF0ZVRpbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gTmV4dCBNb2R1bGVzXHJcbmltcG9ydCBTY3JpcHQgZnJvbSBcIm5leHQvc2NyaXB0XCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMb2dpbkJnSW1hZ2UgZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy9yYXBoYWVsLWxvdmFza2ktUGU5SVhVdUM2UVUtdW5zcGxhc2guanBnXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvNS5zdmdcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0RhdGVUaW1lLm1vZHVsZS5jc3NcIjtcclxuXHJcbi8vIGxpYnNcclxuaW1wb3J0IHsgZ2V0RGF0ZXMgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2dldERhdGVzXCI7XHJcblxyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBDaG9vc2VTdHlsaXN0cyBmcm9tIFwiLi9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHNcIjtcclxuaW1wb3J0IERhdGVDYXJkIGZyb20gXCIuL0RhdGVDYXJkXCI7XHJcbmltcG9ydCBTdHlsaXN0cyBmcm9tIFwiLi9TdHlsaXN0c1wiO1xyXG5pbXBvcnQgVGltZXMgZnJvbSBcIi4vVGltZXNcIjtcclxuaW1wb3J0IEl0ZW1IZWFkZXIgZnJvbSBcIi4uL2NsaWVudC1yZXVzYWJsZS1jb21wb25lbnRzL0l0ZW1IZWFkZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGF0ZVRpbWUgKHsgc3RhdGUsIGFjdGl2ZVBhZ2UsIHNlbGVjdGVkVHJlYXRtZW50cywgbG9jYXRpb24gfSkge1xyXG5cclxuICAgIGNvbnN0IFtkYXRlcywgc2V0RGF0ZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2RhdGVUaW1lcywgc2V0RGF0ZVRpbWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFthY3RpdmVEYXRlLCBzZXRBY3RpdmVEYXRlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2RhdGVJbmRleCwgc2V0RGF0ZUluZGV4XSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2Nob29zZW5UaW1lLCBzZXRDaG9vc2VuVGltZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIHNldERhdGVzKGdldERhdGVzKCkpO1xyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGNob29zZW5UaW1lKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlX3RpbWV9IHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVQYWdlID09PSAzID8gXCJibG9ja1wiIDogXCJub25lXCJ9fT5cclxuXHJcbiAgICAgICAgICAgIDxDaG9vc2VTdHlsaXN0cyBcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkVHJlYXRtZW50cyA9IHtzZWxlY3RlZFRyZWF0bWVudHN9IFxyXG4gICAgICAgICAgICAgICAgbG9jYXRpb24gPSB7bG9jYXRpb259IFxyXG4gICAgICAgICAgICAgICAgc2V0RGF0ZVRpbWVzID0ge3NldERhdGVUaW1lc31cclxuICAgICAgICAgICAgICAgIHNldEFjdGl2ZURhdGUgPSB7c2V0QWN0aXZlRGF0ZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPFNjcmlwdCBzcmM9XCJodHRwczovL2tpdC5mb250YXdlc29tZS5jb20vMTRhYjhiMTI2ZC5qc1wiIGNyb3Nzb3JpZ2luPVwiYW5vbnltb3VzXCIgLz5cclxuICAgICAgICAgICAgPEl0ZW1IZWFkZXIgY29udGVudCA9IFwiU2VsZWN0IGRhdGUvdGltZVwiIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVUaW1lX2NvbnRlbnR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X0ltYWdlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0IGFuZCBvYmplY0ZpdCBwcm9wZXJ0aWVzIG11c3QgYmUgc2V0IHRvIGZpbGwgdG8gbWFrZSB0aGUgaW1hZ2UgZml0IHRvIGl0J3MgY29udGFpbmVyLiAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBvYmplY3RGaXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtMb2dvfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiTG9naW4gQmFja2dyb3VuZCBJbWFnZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXNfY29udGFpbmVyfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1sZWZ0XCI+PC9pPjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMubmV4dH0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tcmlnaHRcIj48L2k+PC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZXN9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVzLm1hcCgoZGF0ZVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlQ2FyZCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2luZGV4ICsgMX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGUgPSB7ZGF0ZVRpbWUuZGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlRGF0ZSA9IHthY3RpdmVEYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRlID0ge3NldEFjdGl2ZURhdGV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmFpbGFibGVfdGltZV9saXN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50aW1lfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0ge2Ake2RhdGVUaW1lLmRhdGUuZGF0ZX0tJHtkYXRlVGltZS5kYXRlLndlZWtEYXl9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZURhdGUgPT09IGAke2RhdGVUaW1lLmRhdGUuZGF0ZX0tJHtkYXRlVGltZS5kYXRlLm1vbnRoLnRvTG93ZXJDYXNlKCl9YCA/IFwiZmxleFwiIDogXCJub25lXCJ9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lLnRpbWVzLm1hcCh0aW1lID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gc2V0Q2hvb3NlblRpbWUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlSGlkZGVuX2Rpdn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5kaXZpZHVhbF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjaG9vc2VuVGltZSA9PT0gdGltZSAmJiBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0eWxpc3RzX3RpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxTdHlsaXN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVzIC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJTY3JpcHQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW5CZ0ltYWdlIiwiTG9nbyIsInN0eWxlcyIsImdldERhdGVzIiwiQ2hvb3NlU3R5bGlzdHMiLCJEYXRlQ2FyZCIsIlN0eWxpc3RzIiwiVGltZXMiLCJJdGVtSGVhZGVyIiwiRGF0ZVRpbWUiLCJzdGF0ZSIsImFjdGl2ZVBhZ2UiLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJsb2NhdGlvbiIsImRhdGVzIiwic2V0RGF0ZXMiLCJkYXRlVGltZXMiLCJzZXREYXRlVGltZXMiLCJhY3RpdmVEYXRlIiwic2V0QWN0aXZlRGF0ZSIsImRhdGVJbmRleCIsInNldERhdGVJbmRleCIsImNob29zZW5UaW1lIiwic2V0Q2hvb3NlblRpbWUiLCJjb25zb2xlIiwibG9nIiwiZGF0ZV90aW1lIiwiZGlzcGxheSIsImRhdGVUaW1lX2NvbnRlbnQiLCJjb250ZW50X0ltYWdlIiwiZGF0ZXNfY29udGFpbmVyIiwicHJldiIsIm5leHQiLCJtYXAiLCJkYXRlVGltZSIsImluZGV4IiwiZGF0ZSIsImF2YWlsYWJsZV90aW1lX2xpc3QiLCJ0aW1lIiwibW9udGgiLCJ0b0xvd2VyQ2FzZSIsInRpbWVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImRhdGVIaWRkZW5fZGl2IiwiaW5kaXZpZHVhbF90aW1lIiwiYmFja2dyb3VuZEltYWdlIiwid2Vla0RheSJdLCJzb3VyY2VSb290IjoiIn0=
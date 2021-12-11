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
                return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                  style: {
                    position: "relative"
                  },
                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("div", {
                    onClick: function onClick(event) {
                      return setChoosenTime(event.target.textContent);
                    },
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().dateHidden_div),
                    children: "".concat(dateTime.date.date, "-").concat(dateTime.date.month.toLowerCase(), "-").concat(time)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 92,
                    columnNumber: 49
                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxDEV)("p", {
                    className: (_styles_DateTime_module_css__WEBPACK_IMPORTED_MODULE_12___default().individual_time),
                    style: {
                      backgroundImage: choosenTime === "".concat(dateTime.date.date, "-").concat(dateTime.date.month.toLowerCase(), "-").concat(time) && "linear-gradient(rgb(255,0,0, 0.4), rgb(0,0,255, 0.9), darkblue)"
                    },
                    children: time
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 49
                  }, _this)]
                }, time, true, {
                  fileName: _jsxFileName,
                  lineNumber: 91,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTM3ZjE0OTU3ODZjNWU2MGM0MGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNhLFFBQVQsT0FBd0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFVBQTRDLFFBQTVDQSxVQUE0QztBQUFBLE1BQWhDQyxrQkFBZ0MsUUFBaENBLGtCQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFbkYsa0JBQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPZSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxNQUFPcUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0N0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFJQXpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaaUIsSUFBQUEsUUFBUSxDQUFDWix1REFBUSxFQUFULENBQVI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFxQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFcEIsK0VBQWhCO0FBQWtDLFNBQUssRUFBSTtB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ZUFRSTtBQUVJLDZCQUFTLEVBQUVwQyxxRkFGZjtBQUdJLHlCQUFLLEVBQUc7QUFDSjhDLHNCQUFBQSxlQUFlLEVBQUUxQixXQUFXLGVBQVFZLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjQSxJQUF0QixjQUE4QkYsUUFBUSxDQUFDRSxJQUFULENBQWNHLEtBQWQsQ0FBb0JDLFdBQXBCLEVBQTlCLGNBQW1FRixJQUFuRSxDQUFYLElBQXdGO0FBRHJHLHFCQUhaO0FBQUEsOEJBT0tBO0FBUEw7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFSSjtBQUFBLG1CQUFZQSxJQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREo7QUFvQkgsZUFyQkE7QUFMTCx5QkFFY0osUUFBUSxDQUFDRSxJQUFULENBQWNBLElBRjVCLGNBRW9DRixRQUFRLENBQUNFLElBQVQsQ0FBY2EsT0FGbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSjtBQWdDSCxXQWpDQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQVZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBNkZIOztHQTlHdUJ4Qzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9EYXRlVGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0IE1vZHVsZXNcclxuaW1wb3J0IFNjcmlwdCBmcm9tIFwibmV4dC9zY3JpcHRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExvZ2luQmdJbWFnZSBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzL3JhcGhhZWwtbG92YXNraS1QZTlJWFV1QzZRVS11bnNwbGFzaC5qcGdcIjtcclxuaW1wb3J0IExvZ28gZnJvbSBcIi4uLy4uLy4uL2ltYWdlcy81LnN2Z1wiO1xyXG5cclxuLy8gU3R5bGVzaGVldFxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvRGF0ZVRpbWUubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gbGlic1xyXG5pbXBvcnQgeyBnZXREYXRlcyB9IGZyb20gXCIuLi8uLi8uLi9saWIvZ2V0RGF0ZXNcIjtcclxuXHJcbi8vIGNvbXBvbmVudHNcclxuaW1wb3J0IENob29zZVN0eWxpc3RzIGZyb20gXCIuL2Nob29zZS1zdHlsaXN0cy9DaG9vc2VTdHlsaXN0c1wiO1xyXG5pbXBvcnQgRGF0ZUNhcmQgZnJvbSBcIi4vRGF0ZUNhcmRcIjtcclxuaW1wb3J0IFN0eWxpc3RzIGZyb20gXCIuL1N0eWxpc3RzXCI7XHJcbmltcG9ydCBUaW1lcyBmcm9tIFwiLi9UaW1lc1wiO1xyXG5pbXBvcnQgSXRlbUhlYWRlciBmcm9tIFwiLi4vY2xpZW50LXJldXNhYmxlLWNvbXBvbmVudHMvSXRlbUhlYWRlclwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEYXRlVGltZSAoeyBzdGF0ZSwgYWN0aXZlUGFnZSwgc2VsZWN0ZWRUcmVhdG1lbnRzLCBsb2NhdGlvbiB9KSB7XHJcblxyXG4gICAgY29uc3QgW2RhdGVzLCBzZXREYXRlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZGF0ZVRpbWVzLCBzZXREYXRlVGltZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2FjdGl2ZURhdGUsIHNldEFjdGl2ZURhdGVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZGF0ZUluZGV4LCBzZXREYXRlSW5kZXhdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY2hvb3NlblRpbWUsIHNldENob29zZW5UaW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0RGF0ZXMoZ2V0RGF0ZXMoKSk7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgY29uc29sZS5sb2coY2hvb3NlblRpbWUpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVfdGltZX0gc3R5bGUgPSB7e2Rpc3BsYXk6IGFjdGl2ZVBhZ2UgPT09IDMgPyBcImJsb2NrXCIgOiBcIm5vbmVcIn19PlxyXG5cclxuICAgICAgICAgICAgPENob29zZVN0eWxpc3RzIFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzID0ge3NlbGVjdGVkVHJlYXRtZW50c30gXHJcbiAgICAgICAgICAgICAgICBsb2NhdGlvbiA9IHtsb2NhdGlvbn0gXHJcbiAgICAgICAgICAgICAgICBzZXREYXRlVGltZXMgPSB7c2V0RGF0ZVRpbWVzfVxyXG4gICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8U2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS8xNGFiOGIxMjZkLmpzXCIgY3Jvc3NvcmlnaW49XCJhbm9ueW1vdXNcIiAvPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJTZWxlY3QgZGF0ZS90aW1lXCIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZVRpbWVfY29udGVudH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfSW1hZ2V9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQgYW5kIG9iamVjRml0IHByb3BlcnRpZXMgbXVzdCBiZSBzZXQgdG8gZmlsbCB0byBtYWtlIHRoZSBpbWFnZSBmaXQgdG8gaXQncyBjb250YWluZXIuICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGF5b3V0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9iamVjdEZpdD1cImZpbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e0xvZ299IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJMb2dpbiBCYWNrZ3JvdW5kIEltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc19jb250YWluZXJ9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnByZXZ9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLWxlZnRcIj48L2k+PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5uZXh0fT48aSBjbGFzc05hbWU9XCJmYXMgZmEtY2hldnJvbi1yaWdodFwiPjwvaT48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlc30+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVDYXJkIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7aW5kZXggKyAxfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZSA9IHtkYXRlVGltZS5kYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmVEYXRlID0ge2FjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZURhdGUgPSB7c2V0QWN0aXZlRGF0ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF2YWlsYWJsZV90aW1lX2xpc3R9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWVzLm1hcCgoZGF0ZVRpbWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRpbWV9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB7YCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUud2Vla0RheX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlRGF0ZSA9PT0gYCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUubW9udGgudG9Mb3dlckNhc2UoKX1gID8gXCJmbGV4XCIgOiBcIm5vbmVcIn19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGF0ZVRpbWUudGltZXMubWFwKHRpbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleSA9IHt0aW1lfSBzdHlsZT17e3Bvc2l0aW9uOiBcInJlbGF0aXZlXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17ZXZlbnQgPT4gc2V0Q2hvb3NlblRpbWUoZXZlbnQudGFyZ2V0LnRleHRDb250ZW50KX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXRlSGlkZGVuX2Rpdn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Ake2RhdGVUaW1lLmRhdGUuZGF0ZX0tJHtkYXRlVGltZS5kYXRlLm1vbnRoLnRvTG93ZXJDYXNlKCl9LSR7dGltZX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5kaXZpZHVhbF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjaG9vc2VuVGltZSA9PT0gYCR7ZGF0ZVRpbWUuZGF0ZS5kYXRlfS0ke2RhdGVUaW1lLmRhdGUubW9udGgudG9Mb3dlckNhc2UoKX0tJHt0aW1lfWAgJiYgXCJsaW5lYXItZ3JhZGllbnQocmdiKDI1NSwwLDAsIDAuNCksIHJnYigwLDAsMjU1LCAwLjkpLCBkYXJrYmx1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lID0ge3N0eWxlcy5zdHlsaXN0c190aW1lc30+XHJcbiAgICAgICAgICAgICAgICA8U3R5bGlzdHMgLz5cclxuICAgICAgICAgICAgICAgIDxUaW1lcyAvPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAqL31cclxuICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiU2NyaXB0IiwiSW1hZ2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvZ2luQmdJbWFnZSIsIkxvZ28iLCJzdHlsZXMiLCJnZXREYXRlcyIsIkNob29zZVN0eWxpc3RzIiwiRGF0ZUNhcmQiLCJTdHlsaXN0cyIsIlRpbWVzIiwiSXRlbUhlYWRlciIsIkRhdGVUaW1lIiwic3RhdGUiLCJhY3RpdmVQYWdlIiwic2VsZWN0ZWRUcmVhdG1lbnRzIiwibG9jYXRpb24iLCJkYXRlcyIsInNldERhdGVzIiwiZGF0ZVRpbWVzIiwic2V0RGF0ZVRpbWVzIiwiYWN0aXZlRGF0ZSIsInNldEFjdGl2ZURhdGUiLCJkYXRlSW5kZXgiLCJzZXREYXRlSW5kZXgiLCJjaG9vc2VuVGltZSIsInNldENob29zZW5UaW1lIiwiY29uc29sZSIsImxvZyIsImRhdGVfdGltZSIsImRpc3BsYXkiLCJkYXRlVGltZV9jb250ZW50IiwiY29udGVudF9JbWFnZSIsImRhdGVzX2NvbnRhaW5lciIsInByZXYiLCJuZXh0IiwibWFwIiwiZGF0ZVRpbWUiLCJpbmRleCIsImRhdGUiLCJhdmFpbGFibGVfdGltZV9saXN0IiwidGltZSIsIm1vbnRoIiwidG9Mb3dlckNhc2UiLCJ0aW1lcyIsInBvc2l0aW9uIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImRhdGVIaWRkZW5fZGl2IiwiaW5kaXZpZHVhbF90aW1lIiwiYmFja2dyb3VuZEltYWdlIiwid2Vla0RheSJdLCJzb3VyY2VSb290IjoiIn0=
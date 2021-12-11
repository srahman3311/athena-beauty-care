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
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 49
                  }, _this)]
                }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDQ2Y2FmMjNjNmQ2MjAwZTQxZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7Q0FHQTs7Q0FHQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUllLFNBQVNhLFFBQVQsT0FBd0U7QUFBQTs7QUFBQTs7QUFBQSxNQUFuREMsS0FBbUQsUUFBbkRBLEtBQW1EO0FBQUEsTUFBNUNDLFVBQTRDLFFBQTVDQSxVQUE0QztBQUFBLE1BQWhDQyxrQkFBZ0MsUUFBaENBLGtCQUFnQztBQUFBLE1BQVpDLFFBQVksUUFBWkEsUUFBWTs7QUFFbkYsa0JBQTBCZCwrQ0FBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQSxNQUFPZSxLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBa0NoQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBMUM7QUFBQSxNQUFPaUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBb0NsQiwrQ0FBUSxDQUFDLEVBQUQsQ0FBNUM7QUFBQSxNQUFPbUIsVUFBUDtBQUFBLE1BQW1CQyxhQUFuQjs7QUFDQSxtQkFBa0NwQiwrQ0FBUSxDQUFDLENBQUQsQ0FBMUM7QUFBQSxNQUFPcUIsU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjs7QUFDQSxtQkFBc0N0QiwrQ0FBUSxDQUFDLEVBQUQsQ0FBOUM7QUFBQSxNQUFPdUIsV0FBUDtBQUFBLE1BQW9CQyxjQUFwQjs7QUFJQXpCLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaaUIsSUFBQUEsUUFBUSxDQUFDWix1REFBUSxFQUFULENBQVI7QUFFSCxHQUpRLEVBSU4sRUFKTSxDQUFUO0FBTUFxQixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUgsV0FBWjtBQUNBLHNCQUNJO0FBQUssYUFBUyxFQUFFcEIsK0VBQWhCO0FBQWtDLFNBQUssRUFBSTtB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QVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESjtBQW9CSCxlQXJCQTtBQUxMLHlCQUVjSixRQUFRLENBQUNFLElBQVQsQ0FBY0EsSUFGNUIsY0FFb0NGLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjWSxPQUZsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZKO0FBZ0NILFdBakNBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFsQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUE2Rkg7O0dBOUd1QnZDOztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NsaWVudHMvZGF0ZS10aW1lL0RhdGVUaW1lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQgTW9kdWxlc1xyXG5pbXBvcnQgU2NyaXB0IGZyb20gXCJuZXh0L3NjcmlwdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTG9naW5CZ0ltYWdlIGZyb20gXCIuLi8uLi8uLi9pbWFnZXMvcmFwaGFlbC1sb3Zhc2tpLVBlOUlYVXVDNlFVLXVuc3BsYXNoLmpwZ1wiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vLi4vaW1hZ2VzLzUuc3ZnXCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uLy4uL3N0eWxlcy9EYXRlVGltZS5tb2R1bGUuY3NzXCI7XHJcblxyXG4vLyBsaWJzXHJcbmltcG9ydCB7IGdldERhdGVzIH0gZnJvbSBcIi4uLy4uLy4uL2xpYi9nZXREYXRlc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5pbXBvcnQgQ2hvb3NlU3R5bGlzdHMgZnJvbSBcIi4vY2hvb3NlLXN0eWxpc3RzL0Nob29zZVN0eWxpc3RzXCI7XHJcbmltcG9ydCBEYXRlQ2FyZCBmcm9tIFwiLi9EYXRlQ2FyZFwiO1xyXG5pbXBvcnQgU3R5bGlzdHMgZnJvbSBcIi4vU3R5bGlzdHNcIjtcclxuaW1wb3J0IFRpbWVzIGZyb20gXCIuL1RpbWVzXCI7XHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERhdGVUaW1lICh7IHN0YXRlLCBhY3RpdmVQYWdlLCBzZWxlY3RlZFRyZWF0bWVudHMsIGxvY2F0aW9uIH0pIHtcclxuXHJcbiAgICBjb25zdCBbZGF0ZXMsIHNldERhdGVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtkYXRlVGltZXMsIHNldERhdGVUaW1lc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbYWN0aXZlRGF0ZSwgc2V0QWN0aXZlRGF0ZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtkYXRlSW5kZXgsIHNldERhdGVJbmRleF0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjaG9vc2VuVGltZSwgc2V0Q2hvb3NlblRpbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXREYXRlcyhnZXREYXRlcygpKTtcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcbiAgICBjb25zb2xlLmxvZyhjaG9vc2VuVGltZSk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZV90aW1lfSBzdHlsZSA9IHt7ZGlzcGxheTogYWN0aXZlUGFnZSA9PT0gMyA/IFwiYmxvY2tcIiA6IFwibm9uZVwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q2hvb3NlU3R5bGlzdHMgXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMgPSB7c2VsZWN0ZWRUcmVhdG1lbnRzfSBcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uID0ge2xvY2F0aW9ufSBcclxuICAgICAgICAgICAgICAgIHNldERhdGVUaW1lcyA9IHtzZXREYXRlVGltZXN9XHJcbiAgICAgICAgICAgICAgICBzZXRBY3RpdmVEYXRlID0ge3NldEFjdGl2ZURhdGV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxTY3JpcHQgc3JjPVwiaHR0cHM6Ly9raXQuZm9udGF3ZXNvbWUuY29tLzE0YWI4YjEyNmQuanNcIiBjcm9zc29yaWdpbj1cImFub255bW91c1wiIC8+XHJcbiAgICAgICAgICAgIDxJdGVtSGVhZGVyIGNvbnRlbnQgPSBcIlNlbGVjdCBkYXRlL3RpbWVcIiAvPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXRlVGltZV9jb250ZW50fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9JbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxheW91dCBhbmQgb2JqZWNGaXQgcHJvcGVydGllcyBtdXN0IGJlIHNldCB0byBmaWxsIHRvIG1ha2UgdGhlIGltYWdlIGZpdCB0byBpdCdzIGNvbnRhaW5lci4gIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsYXlvdXQ9XCJmaWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2JqZWN0Rml0PVwiZmlsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17TG9nb30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIkxvZ2luIEJhY2tncm91bmQgSW1hZ2VcIiBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzX2NvbnRhaW5lcn0+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMucHJldn0+PGkgY2xhc3NOYW1lPVwiZmFzIGZhLWNoZXZyb24tbGVmdFwiPjwvaT48L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLm5leHR9PjxpIGNsYXNzTmFtZT1cImZhcyBmYS1jaGV2cm9uLXJpZ2h0XCI+PC9pPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhdGVzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2RhdGVUaW1lcy5tYXAoKGRhdGVUaW1lLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZUNhcmQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtpbmRleCArIDF9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlID0ge2RhdGVUaW1lLmRhdGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZURhdGUgPSB7YWN0aXZlRGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlRGF0ZSA9IHtzZXRBY3RpdmVEYXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhaWxhYmxlX3RpbWVfbGlzdH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZXMubWFwKChkYXRlVGltZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGltZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleSA9IHtgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS53ZWVrRGF5fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlID0ge3tkaXNwbGF5OiBhY3RpdmVEYXRlID09PSBgJHtkYXRlVGltZS5kYXRlLmRhdGV9LSR7ZGF0ZVRpbWUuZGF0ZS5tb250aC50b0xvd2VyQ2FzZSgpfWAgPyBcImZsZXhcIiA6IFwibm9uZVwifX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRlVGltZS50aW1lcy5tYXAodGltZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2V2ZW50ID0+IHNldENob29zZW5UaW1lKGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGF0ZUhpZGRlbl9kaXZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5kaXZpZHVhbF90aW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBjaG9vc2VuVGltZSA9PT0gdGltZSAmJiBcImxpbmVhci1ncmFkaWVudChyZ2IoMjU1LDAsMCwgMC40KSwgcmdiKDAsMCwyNTUsIDAuOSksIGRhcmtibHVlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWUgPSB7c3R5bGVzLnN0eWxpc3RzX3RpbWVzfT5cclxuICAgICAgICAgICAgICAgIDxTdHlsaXN0cyAvPlxyXG4gICAgICAgICAgICAgICAgPFRpbWVzIC8+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICovfVxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuXHJcblxyXG4gICAgKTtcclxufSJdLCJuYW1lcyI6WyJTY3JpcHQiLCJJbWFnZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiTG9naW5CZ0ltYWdlIiwiTG9nbyIsInN0eWxlcyIsImdldERhdGVzIiwiQ2hvb3NlU3R5bGlzdHMiLCJEYXRlQ2FyZCIsIlN0eWxpc3RzIiwiVGltZXMiLCJJdGVtSGVhZGVyIiwiRGF0ZVRpbWUiLCJzdGF0ZSIsImFjdGl2ZVBhZ2UiLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJsb2NhdGlvbiIsImRhdGVzIiwic2V0RGF0ZXMiLCJkYXRlVGltZXMiLCJzZXREYXRlVGltZXMiLCJhY3RpdmVEYXRlIiwic2V0QWN0aXZlRGF0ZSIsImRhdGVJbmRleCIsInNldERhdGVJbmRleCIsImNob29zZW5UaW1lIiwic2V0Q2hvb3NlblRpbWUiLCJjb25zb2xlIiwibG9nIiwiZGF0ZV90aW1lIiwiZGlzcGxheSIsImRhdGVUaW1lX2NvbnRlbnQiLCJjb250ZW50X0ltYWdlIiwiZGF0ZXNfY29udGFpbmVyIiwicHJldiIsIm5leHQiLCJtYXAiLCJkYXRlVGltZSIsImluZGV4IiwiZGF0ZSIsImF2YWlsYWJsZV90aW1lX2xpc3QiLCJ0aW1lIiwibW9udGgiLCJ0b0xvd2VyQ2FzZSIsInRpbWVzIiwiZXZlbnQiLCJ0YXJnZXQiLCJ0ZXh0Q29udGVudCIsImRhdGVIaWRkZW5fZGl2IiwiaW5kaXZpZHVhbF90aW1lIiwiYmFja2dyb3VuZEltYWdlIiwid2Vla0RheSJdLCJzb3VyY2VSb290IjoiIn0=
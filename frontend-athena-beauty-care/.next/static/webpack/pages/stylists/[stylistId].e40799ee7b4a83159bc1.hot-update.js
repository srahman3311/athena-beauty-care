"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/[stylistId]",{

/***/ "./components/admins/stylists/WorkScheduleList.js":
/*!********************************************************!*\
  !*** ./components/admins/stylists/WorkScheduleList.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\stylists\\WorkScheduleList.js";


function WorkScheduleList(_ref) {
  var _this = this;

  var workSchedules = _ref.workSchedules,
      setWorkSchedules = _ref.setWorkSchedules;

  function removeWorkSchedule(event) {
    var day = event.target.value;
    var filteredWorkSchedules = workSchedules.filter(function (schedule) {
      return schedule.day !== day;
    });
    setWorkSchedules(filteredWorkSchedules);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "workSchedule_list",
    children: workSchedules.map(function (schedule, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "",
        style: {
          display: "flex",
          justifyContent: "space-between"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: schedule.location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: schedule.day
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: schedule.startTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          children: schedule.endTime
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 25
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          value: schedule.day,
          onClick: removeWorkSchedule,
          children: "Remove"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 25
        }, _this)]
      }, index + 1, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 9
  }, this);
}

_c = WorkScheduleList;
/* harmony default export */ __webpack_exports__["default"] = (WorkScheduleList);

var _c;

$RefreshReg$(_c, "WorkScheduleList");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvW3N0eWxpc3RJZF0uZTQwNzk5ZWU3YjRhODMxNTliYzEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsZ0JBQVQsT0FBK0Q7QUFBQTs7QUFBQSxNQUFuQ0MsYUFBbUMsUUFBbkNBLGFBQW1DO0FBQUEsTUFBcEJDLGdCQUFvQixRQUFwQkEsZ0JBQW9COztBQUczRCxXQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUM7QUFFL0IsUUFBTUMsR0FBRyxHQUFHRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBekI7QUFFQSxRQUFNQyxxQkFBcUIsR0FBR1AsYUFBYSxDQUFDUSxNQUFkLENBQXFCLFVBQUFDLFFBQVE7QUFBQSxhQUFJQSxRQUFRLENBQUNMLEdBQVQsS0FBaUJBLEdBQXJCO0FBQUEsS0FBN0IsQ0FBOUI7QUFFQUgsSUFBQUEsZ0JBQWdCLENBQUNNLHFCQUFELENBQWhCO0FBRUg7O0FBRUQsc0JBRUk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQSxjQUVLUCxhQUFhLENBQUNVLEdBQWQsQ0FBa0IsVUFBQ0QsUUFBRCxFQUFXRSxLQUFYLEVBQXFCO0FBQ3BDLDBCQUNJO0FBQUssaUJBQVMsRUFBQyxFQUFmO0FBQW9DLGFBQUssRUFBSTtBQUFDQyxVQUFBQSxPQUFPLEVBQUUsTUFBVjtBQUFrQkMsVUFBQUEsY0FBYyxFQUFFO0FBQWxDLFNBQTdDO0FBQUEsZ0NBQ0k7QUFBQSxvQkFBSUosUUFBUSxDQUFDSztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFFSTtBQUFBLG9CQUFJTCxRQUFRLENBQUNMO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUlLLFFBQVEsQ0FBQ007QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFBQSxvQkFBSU4sUUFBUSxDQUFDTztBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSkosZUFLSTtBQUFRLGVBQUssRUFBSVAsUUFBUSxDQUFDTCxHQUExQjtBQUErQixpQkFBTyxFQUFJRixrQkFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQSxTQUF5QlMsS0FBSyxHQUFHLENBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQVVILEtBWEE7QUFGTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUFtQkg7O0tBaENRWjtBQW1DVCwrREFBZUEsZ0JBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbnMvc3R5bGlzdHMvV29ya1NjaGVkdWxlTGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmZ1bmN0aW9uIFdvcmtTY2hlZHVsZUxpc3QoeyB3b3JrU2NoZWR1bGVzLCBzZXRXb3JrU2NoZWR1bGVzIH0pIHtcclxuXHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlV29ya1NjaGVkdWxlKGV2ZW50KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IGRheSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGZpbHRlcmVkV29ya1NjaGVkdWxlcyA9IHdvcmtTY2hlZHVsZXMuZmlsdGVyKHNjaGVkdWxlID0+IHNjaGVkdWxlLmRheSAhPT0gZGF5KTtcclxuICAgIFxyXG4gICAgICAgIHNldFdvcmtTY2hlZHVsZXMoZmlsdGVyZWRXb3JrU2NoZWR1bGVzKTtcclxuICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya1NjaGVkdWxlX2xpc3RcIiA+XHJcblxyXG4gICAgICAgICAgICB7d29ya1NjaGVkdWxlcy5tYXAoKHNjaGVkdWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGtleSA9IHtpbmRleCArIDF9IHN0eWxlID0ge3tkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzY2hlZHVsZS5sb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzY2hlZHVsZS5kYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c2NoZWR1bGUuc3RhcnRUaW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NjaGVkdWxlLmVuZFRpbWV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHZhbHVlID0ge3NjaGVkdWxlLmRheX0gb25DbGljayA9IHtyZW1vdmVXb3JrU2NoZWR1bGV9PlJlbW92ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtTY2hlZHVsZUxpc3Q7Il0sIm5hbWVzIjpbIldvcmtTY2hlZHVsZUxpc3QiLCJ3b3JrU2NoZWR1bGVzIiwic2V0V29ya1NjaGVkdWxlcyIsInJlbW92ZVdvcmtTY2hlZHVsZSIsImV2ZW50IiwiZGF5IiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZFdvcmtTY2hlZHVsZXMiLCJmaWx0ZXIiLCJzY2hlZHVsZSIsIm1hcCIsImluZGV4IiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwibG9jYXRpb24iLCJzdGFydFRpbWUiLCJlbmRUaW1lIl0sInNvdXJjZVJvb3QiOiIifQ==
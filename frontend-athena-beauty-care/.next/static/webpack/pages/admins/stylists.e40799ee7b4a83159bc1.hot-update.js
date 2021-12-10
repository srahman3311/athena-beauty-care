"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/stylists",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL3N0eWxpc3RzLmU0MDc5OWVlN2I0YTgzMTU5YmMxLmhvdC11cGRhdGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLFNBQVNBLGdCQUFULE9BQStEO0FBQUE7O0FBQUEsTUFBbkNDLGFBQW1DLFFBQW5DQSxhQUFtQztBQUFBLE1BQXBCQyxnQkFBb0IsUUFBcEJBLGdCQUFvQjs7QUFHM0QsV0FBU0Msa0JBQVQsQ0FBNEJDLEtBQTVCLEVBQW1DO0FBRS9CLFFBQU1DLEdBQUcsR0FBR0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLEtBQXpCO0FBRUEsUUFBTUMscUJBQXFCLEdBQUdQLGFBQWEsQ0FBQ1EsTUFBZCxDQUFxQixVQUFBQyxRQUFRO0FBQUEsYUFBSUEsUUFBUSxDQUFDTCxHQUFULEtBQWlCQSxHQUFyQjtBQUFBLEtBQTdCLENBQTlCO0FBRUFILElBQUFBLGdCQUFnQixDQUFDTSxxQkFBRCxDQUFoQjtBQUVIOztBQUVELHNCQUVJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUEsY0FFS1AsYUFBYSxDQUFDVSxHQUFkLENBQWtCLFVBQUNELFFBQUQsRUFBV0UsS0FBWCxFQUFxQjtBQUNwQywwQkFDSTtBQUFLLGlCQUFTLEVBQUMsRUFBZjtBQUFvQyxhQUFLLEVBQUk7QUFBQ0MsVUFBQUEsT0FBTyxFQUFFLE1BQVY7QUFBa0JDLFVBQUFBLGNBQWMsRUFBRTtBQUFsQyxTQUE3QztBQUFBLGdDQUNJO0FBQUEsb0JBQUlKLFFBQVEsQ0FBQ0s7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBRUk7QUFBQSxvQkFBSUwsUUFBUSxDQUFDTDtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkosZUFHSTtBQUFBLG9CQUFJSyxRQUFRLENBQUNNO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFISixlQUlJO0FBQUEsb0JBQUlOLFFBQVEsQ0FBQ087QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKLGVBS0k7QUFBUSxlQUFLLEVBQUlQLFFBQVEsQ0FBQ0wsR0FBMUI7QUFBK0IsaUJBQU8sRUFBSUYsa0JBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxKO0FBQUEsU0FBeUJTLEtBQUssR0FBRyxDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFVSCxLQVhBO0FBRkw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZKO0FBbUJIOztLQWhDUVo7QUFtQ1QsK0RBQWVBLGdCQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYWRtaW5zL3N0eWxpc3RzL1dvcmtTY2hlZHVsZUxpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5mdW5jdGlvbiBXb3JrU2NoZWR1bGVMaXN0KHsgd29ya1NjaGVkdWxlcywgc2V0V29ya1NjaGVkdWxlcyB9KSB7XHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZVdvcmtTY2hlZHVsZShldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBkYXkgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICBcclxuICAgICAgICBjb25zdCBmaWx0ZXJlZFdvcmtTY2hlZHVsZXMgPSB3b3JrU2NoZWR1bGVzLmZpbHRlcihzY2hlZHVsZSA9PiBzY2hlZHVsZS5kYXkgIT09IGRheSk7XHJcbiAgICBcclxuICAgICAgICBzZXRXb3JrU2NoZWR1bGVzKGZpbHRlcmVkV29ya1NjaGVkdWxlcyk7XHJcbiAgICBcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtTY2hlZHVsZV9saXN0XCIgPlxyXG5cclxuICAgICAgICAgICAge3dvcmtTY2hlZHVsZXMubWFwKChzY2hlZHVsZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIiBrZXkgPSB7aW5kZXggKyAxfSBzdHlsZSA9IHt7ZGlzcGxheTogXCJmbGV4XCIsIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIn19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c2NoZWR1bGUubG9jYXRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57c2NoZWR1bGUuZGF5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3NjaGVkdWxlLnN0YXJ0VGltZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntzY2hlZHVsZS5lbmRUaW1lfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB2YWx1ZSA9IHtzY2hlZHVsZS5kYXl9IG9uQ2xpY2sgPSB7cmVtb3ZlV29ya1NjaGVkdWxlfT5SZW1vdmU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBXb3JrU2NoZWR1bGVMaXN0OyJdLCJuYW1lcyI6WyJXb3JrU2NoZWR1bGVMaXN0Iiwid29ya1NjaGVkdWxlcyIsInNldFdvcmtTY2hlZHVsZXMiLCJyZW1vdmVXb3JrU2NoZWR1bGUiLCJldmVudCIsImRheSIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWRXb3JrU2NoZWR1bGVzIiwiZmlsdGVyIiwic2NoZWR1bGUiLCJtYXAiLCJpbmRleCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImxvY2F0aW9uIiwic3RhcnRUaW1lIiwiZW5kVGltZSJdLCJzb3VyY2VSb290IjoiIn0=
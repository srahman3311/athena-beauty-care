"use strict";
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js":
/*!*********************************************************************************!*\
  !*** ./lib/find-time-slots-copy/helper-functions/getStylistsAllWorkingTimes.js ***!
  \*********************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStylistsAllWorkingTimes": function() { return /* binding */ getStylistsAllWorkingTimes; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var times = ["10:00", "10:15", "10:30", "10:45", "11:00", "11:15", "11:30", "11:45", "12:00", "12:15", "12:30", "12:45", "13:00", "13:15", "13:30", "13:45", "14:00", "14:15", "14:30", "14:45", "15:00", "15:15", "15:30", "15:45", "16:00", "16:15", "16:30", "16:45", "17:00"];
var getStylistsAllWorkingTimes = function getStylistsAllWorkingTimes(startTime, endTime) {
  var startTimeIndex = times.indexOf(startTime);
  var endTimeIndex = times.indexOf(endTime);
  var stylistWorkingTimes = [];

  for (var i = startTimeIndex; i <= endTimeIndex; i++) {
    stylistWorkingTimes.push(times[i]);
  }

  return stylistWorkingTimes;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC43ODNjM2Q4YmRjYzQ1NDJhNTViMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLENBQ1YsT0FEVSxFQUNELE9BREMsRUFDUSxPQURSLEVBQ2lCLE9BRGpCLEVBQzBCLE9BRDFCLEVBQ21DLE9BRG5DLEVBQzRDLE9BRDVDLEVBQ3FELE9BRHJELEVBQzhELE9BRDlELEVBQ3VFLE9BRHZFLEVBQ2dGLE9BRGhGLEVBQ3lGLE9BRHpGLEVBRVYsT0FGVSxFQUVELE9BRkMsRUFFUSxPQUZSLEVBRWlCLE9BRmpCLEVBRTBCLE9BRjFCLEVBRW1DLE9BRm5DLEVBRTRDLE9BRjVDLEVBRXFELE9BRnJELEVBRThELE9BRjlELEVBRXVFLE9BRnZFLEVBRWdGLE9BRmhGLEVBRXlGLE9BRnpGLEVBR1YsT0FIVSxFQUdELE9BSEMsRUFHUSxPQUhSLEVBR2lCLE9BSGpCLEVBRzBCLE9BSDFCLENBQWQ7QUFPTyxJQUFNQywwQkFBMEIsR0FBRyxTQUE3QkEsMEJBQTZCLENBQUNDLFNBQUQsRUFBWUMsT0FBWixFQUF3QjtBQUk5RCxNQUFNQyxjQUFjLEdBQUdKLEtBQUssQ0FBQ0ssT0FBTixDQUFjSCxTQUFkLENBQXZCO0FBQ0EsTUFBTUksWUFBWSxHQUFHTixLQUFLLENBQUNLLE9BQU4sQ0FBY0YsT0FBZCxDQUFyQjtBQUdBLE1BQU1JLG1CQUFtQixHQUFHLEVBQTVCOztBQUdBLE9BQUksSUFBSUMsQ0FBQyxHQUFHSixjQUFaLEVBQTRCSSxDQUFDLElBQUlGLFlBQWpDLEVBQStDRSxDQUFDLEVBQWhELEVBQW9EO0FBRWhERCxJQUFBQSxtQkFBbUIsQ0FBQ0UsSUFBcEIsQ0FBeUJULEtBQUssQ0FBQ1EsQ0FBRCxDQUE5QjtBQUVIOztBQUdELFNBQU9ELG1CQUFQO0FBR0gsQ0FyQk0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2hlbHBlci1mdW5jdGlvbnMvZ2V0U3R5bGlzdHNBbGxXb3JraW5nVGltZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGltZXMgPSBbXHJcbiAgICBcIjEwOjAwXCIsIFwiMTA6MTVcIiwgXCIxMDozMFwiLCBcIjEwOjQ1XCIsIFwiMTE6MDBcIiwgXCIxMToxNVwiLCBcIjExOjMwXCIsIFwiMTE6NDVcIiwgXCIxMjowMFwiLCBcIjEyOjE1XCIsIFwiMTI6MzBcIiwgXCIxMjo0NVwiLCBcclxuICAgIFwiMTM6MDBcIiwgXCIxMzoxNVwiLCBcIjEzOjMwXCIsIFwiMTM6NDVcIiwgXCIxNDowMFwiLCBcIjE0OjE1XCIsIFwiMTQ6MzBcIiwgXCIxNDo0NVwiLCBcIjE1OjAwXCIsIFwiMTU6MTVcIiwgXCIxNTozMFwiLCBcIjE1OjQ1XCIsIFxyXG4gICAgXCIxNjowMFwiLCBcIjE2OjE1XCIsIFwiMTY6MzBcIiwgXCIxNjo0NVwiLCBcIjE3OjAwXCJcclxuXVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdHlsaXN0c0FsbFdvcmtpbmdUaW1lcyA9IChzdGFydFRpbWUsIGVuZFRpbWUpID0+IHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHN0YXJ0VGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihzdGFydFRpbWUpO1xyXG4gICAgY29uc3QgZW5kVGltZUluZGV4ID0gdGltZXMuaW5kZXhPZihlbmRUaW1lKTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3R5bGlzdFdvcmtpbmdUaW1lcyA9IFtdO1xyXG5cclxuXHJcbiAgICBmb3IobGV0IGkgPSBzdGFydFRpbWVJbmRleDsgaSA8PSBlbmRUaW1lSW5kZXg7IGkrKykge1xyXG5cclxuICAgICAgICBzdHlsaXN0V29ya2luZ1RpbWVzLnB1c2godGltZXNbaV0pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHN0eWxpc3RXb3JraW5nVGltZXM7XHJcblxyXG5cclxufVxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ0aW1lcyIsImdldFN0eWxpc3RzQWxsV29ya2luZ1RpbWVzIiwic3RhcnRUaW1lIiwiZW5kVGltZSIsInN0YXJ0VGltZUluZGV4IiwiaW5kZXhPZiIsImVuZFRpbWVJbmRleCIsInN0eWxpc3RXb3JraW5nVGltZXMiLCJpIiwicHVzaCJdLCJzb3VyY2VSb290IjoiIn0=
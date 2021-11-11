"use strict";
self["webpackHotUpdate_N_E"]("pages/test",{

/***/ "./lib/find-time-slots-copy/getDates.js":
/*!**********************************************!*\
  !*** ./lib/find-time-slots-copy/getDates.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDates": function() { return /* binding */ getDates; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
//
var getDates = function getDates() {
  var dates = []; // populating dateTimeArray with 30 dates from today

  for (var i = 0; i < 30; i++) {
    var date = new Date(new Date().getTime() + 86400000 * i);
    var year = date.getFullYear().toString();
    var month = (date.getMonth() + 1).toString();
    var day = date.getDate().toString();
    if (month < 10) month = "0".concat(month);
    if (day < 10) day = "0".concat(day);
    var newDate = "".concat(year, "-").concat(month, "-").concat(day);
    dateAndTimeArray.push(newDate);
  }

  return dates;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGVzdC5iMzg0ZWFmNTk4MzJhNjRlMTJlOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBRTFCLE1BQU1DLEtBQUssR0FBRyxFQUFkLENBRjBCLENBSzFCOztBQUNBLE9BQUksSUFBSUMsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHLEVBQW5CLEVBQXVCQSxDQUFDLEVBQXhCLEVBQTRCO0FBRXhCLFFBQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBSUEsSUFBSixHQUFXQyxPQUFYLEtBQXdCLFdBQVdILENBQTVDLENBQWI7QUFFQSxRQUFNSSxJQUFJLEdBQUdILElBQUksQ0FBQ0ksV0FBTCxHQUFtQkMsUUFBbkIsRUFBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFDTixJQUFJLENBQUNPLFFBQUwsS0FBa0IsQ0FBbkIsRUFBc0JGLFFBQXRCLEVBQVo7QUFDQSxRQUFJRyxHQUFHLEdBQUdSLElBQUksQ0FBQ1MsT0FBTCxHQUFlSixRQUFmLEVBQVY7QUFFQSxRQUFJQyxLQUFLLEdBQUcsRUFBWixFQUFnQkEsS0FBSyxjQUFPQSxLQUFQLENBQUw7QUFDaEIsUUFBSUUsR0FBRyxHQUFHLEVBQVYsRUFBY0EsR0FBRyxjQUFPQSxHQUFQLENBQUg7QUFHZCxRQUFNRSxPQUFPLGFBQU1QLElBQU4sY0FBY0csS0FBZCxjQUF1QkUsR0FBdkIsQ0FBYjtBQUNBRyxJQUFBQSxnQkFBZ0IsQ0FBQ0MsSUFBakIsQ0FBc0JGLE9BQXRCO0FBRUg7O0FBRUQsU0FBT1osS0FBUDtBQUVILENBekJNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2xpYi9maW5kLXRpbWUtc2xvdHMtY29weS9nZXREYXRlcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1xyXG5leHBvcnQgY29uc3QgZ2V0RGF0ZXMgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgZGF0ZXMgPSBbXTtcclxuXHJcblxyXG4gICAgLy8gcG9wdWxhdGluZyBkYXRlVGltZUFycmF5IHdpdGggMzAgZGF0ZXMgZnJvbSB0b2RheVxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArICg4NjQwMDAwMCAqIGkpKTtcclxuXHJcbiAgICAgICAgY29uc3QgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBtb250aCA9IChkYXRlLmdldE1vbnRoKCkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICBpZiAobW9udGggPCAxMCkgbW9udGggPSBgMCR7bW9udGh9YDtcclxuICAgICAgICBpZiAoZGF5IDwgMTApIGRheSA9IGAwJHtkYXl9YDtcclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld0RhdGUgPSBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xyXG4gICAgICAgIGRhdGVBbmRUaW1lQXJyYXkucHVzaChuZXdEYXRlKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGRhdGVzO1xyXG5cclxufSJdLCJuYW1lcyI6WyJnZXREYXRlcyIsImRhdGVzIiwiaSIsImRhdGUiLCJEYXRlIiwiZ2V0VGltZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInRvU3RyaW5nIiwibW9udGgiLCJnZXRNb250aCIsImRheSIsImdldERhdGUiLCJuZXdEYXRlIiwiZGF0ZUFuZFRpbWVBcnJheSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9
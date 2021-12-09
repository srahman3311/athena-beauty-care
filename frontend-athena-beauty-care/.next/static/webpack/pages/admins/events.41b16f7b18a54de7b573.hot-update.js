"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/events",{

/***/ "./components/reusable-components/SearchInput.js":
/*!*******************************************************!*\
  !*** ./components/reusable-components/SearchInput.js ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\SearchInput.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function SearchInput(_ref) {
  var value = _ref.value,
      setState = _ref.setState,
      setHappening = _ref.setHappening;

  function handleChange(event) {
    setState(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, {
        searchText: event.target.value,
        skip: 0,
        limit: 20
      });
    });
    setHappening("searching");
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "search",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("input", {
      type: "text",
      value: value,
      placeholder: "Search",
      onChange: handleChange
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_c = SearchInput;
/* harmony default export */ __webpack_exports__["default"] = (SearchInput);

var _c;

$RefreshReg$(_c, "SearchInput");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2V2ZW50cy40MWIxNmY3YjE4YTU0ZGU3YjU3My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsU0FBU0EsV0FBVCxPQUF5RDtBQUFBLE1BQWpDQyxLQUFpQyxRQUFqQ0EsS0FBaUM7QUFBQSxNQUExQkMsUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjs7QUFFckQsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFFekJILElBQUFBLFFBQVEsQ0FBQyxVQUFBSSxZQUFZLEVBQUk7QUFDckIsNkNBQ09BLFlBRFA7QUFFSUMsUUFBQUEsVUFBVSxFQUFFRixLQUFLLENBQUNHLE1BQU4sQ0FBYVAsS0FGN0I7QUFHSVEsUUFBQUEsSUFBSSxFQUFFLENBSFY7QUFJSUMsUUFBQUEsS0FBSyxFQUFFO0FBSlg7QUFNSCxLQVBPLENBQVI7QUFTQVAsSUFBQUEsWUFBWSxDQUFDLFdBQUQsQ0FBWjtBQUNIOztBQUdELHNCQUNJO0FBQUssYUFBUyxFQUFDLFFBQWY7QUFBQSwyQkFDSTtBQUNJLFVBQUksRUFBRyxNQURYO0FBRUksV0FBSyxFQUFJRixLQUZiO0FBR0ksaUJBQVcsRUFBQyxRQUhoQjtBQUlJLGNBQVEsRUFBSUc7QUFKaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVdIOztLQTVCUUo7QUErQlQsK0RBQWVBLFdBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlYXJjaElucHV0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuZnVuY3Rpb24gU2VhcmNoSW5wdXQgKHsgdmFsdWUsIHNldFN0YXRlLCBzZXRIYXBwZW5pbmcgfSkge1xyXG5cclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBzZXRTdGF0ZShjdXJyZW50VmFsdWUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoVGV4dDogZXZlbnQudGFyZ2V0LnZhbHVlLFxyXG4gICAgICAgICAgICAgICAgc2tpcDogMCxcclxuICAgICAgICAgICAgICAgIGxpbWl0OiAyMFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJzZWFyY2hpbmdcIik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgIFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfSBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaElucHV0OyJdLCJuYW1lcyI6WyJTZWFyY2hJbnB1dCIsInZhbHVlIiwic2V0U3RhdGUiLCJzZXRIYXBwZW5pbmciLCJoYW5kbGVDaGFuZ2UiLCJldmVudCIsImN1cnJlbnRWYWx1ZSIsInNlYXJjaFRleHQiLCJ0YXJnZXQiLCJza2lwIiwibGltaXQiXSwic291cmNlUm9vdCI6IiJ9
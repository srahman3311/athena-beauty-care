"use strict";
self["webpackHotUpdate_N_E"]("pages/admins/categories",{

/***/ "./components/reusable-components/DeletePrompt.js":
/*!********************************************************!*\
  !*** ./components/reusable-components/DeletePrompt.js ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\DeletePrompt.js",
    _this = undefined;



// styles are in globals.css
var DeletePrompt = function DeletePrompt(_ref) {
  var itemId = _ref.itemId,
      itemNameForDeletePrompt = _ref.itemNameForDeletePrompt,
      showDeletePrompt = _ref.showDeletePrompt,
      setShowDeletePrompt = _ref.setShowDeletePrompt,
      deleteItem = _ref.deleteItem,
      deleting = _ref.deleting;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "delete_prompt",
    style: {
      display: showDeletePrompt || deleting ? "block" : "none"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: ["Are you sure want to delete ", itemNameForDeletePrompt, "?"]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      value: itemId,
      onClick: deleteItem,
      children: "Yes"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: function onClick() {
        return setShowDeletePrompt(false);
      },
      children: "No"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, _this), deleting && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Deleting..."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 26
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = DeletePrompt;
/* harmony default export */ __webpack_exports__["default"] = (DeletePrompt);

var _c;

$RefreshReg$(_c, "DeletePrompt");

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


/***/ }),

/***/ "./components/reusable-components/Loading.js":
/*!***************************************************!*\
  !*** ./components/reusable-components/Loading.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Loading; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\Loading.js";

// styles are in globals.css
function Loading() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "loading",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Loading...."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, this);
}
_c = Loading;

var _c;

$RefreshReg$(_c, "Loading");

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


/***/ }),

/***/ "./components/reusable-components/data-table/DataTable.js":
/*!****************************************************************!*\
  !*** ./components/reusable-components/data-table/DataTable.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TableHeader */ "./components/reusable-components/data-table/TableHeader.js");
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableData */ "./components/reusable-components/data-table/TableData.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\DataTable.js",
    _this = undefined;





var DataTable = function DataTable(_ref) {
  var tableFor = _ref.tableFor,
      tableHeaders = _ref.tableHeaders,
      tableData = _ref.tableData,
      dynamicClass = _ref.dynamicClass,
      setItemId = _ref.setItemId,
      openDeletePrompt = _ref.openDeletePrompt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "data-table",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("table", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TableHeader__WEBPACK_IMPORTED_MODULE_0__.default, {
        tableHeaders: tableHeaders
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_TableData__WEBPACK_IMPORTED_MODULE_1__.default, {
        tableFor: tableFor,
        tableData: tableData,
        setItemId: setItemId,
        openDeletePrompt: openDeletePrompt
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, _this);
};

_c = DataTable;
/* harmony default export */ __webpack_exports__["default"] = (DataTable);

var _c;

$RefreshReg$(_c, "DataTable");

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


/***/ }),

/***/ "./components/reusable-components/data-table/TableData.js":
/*!****************************************************************!*\
  !*** ./components/reusable-components/data-table/TableData.js ***!
  \****************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableData; }
/* harmony export */ });
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\TableData.js";
//


function TableData(_ref) {
  var _this = this;

  var tableFor = _ref.tableFor,
      tableData = _ref.tableData,
      setItemId = _ref.setItemId,
      openDeletePrompt = _ref.openDeletePrompt;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tbody", {
    children: tableData.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("tr", {
        children: item.data.map(function (value, index) {
          if (value.includes("View Details")) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                value: value.substring(value.indexOf("-") + 1, value.length),
                onClick: function onClick(event) {
                  return setItemId(event.target.value);
                },
                children: "View Details"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 17,
                columnNumber: 41
              }, _this)
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 37
            }, _this);
          }

          if (value.includes("Delete")) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
                value: value.substring(value.indexOf("-") + 1, value.length),
                onClick: openDeletePrompt,
                children: "Delete"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 41
              }, _this)
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 37
            }, _this);
          }

          if (value.includes("http")) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_0___default()), {
                href: value,
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("a", {
                  children: "View Details"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 61
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 41
              }, _this)
            }, index + 1, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 37
            }, _this);
          }

          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("td", {
            children: value
          }, index + 1, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 33
          }, _this);
        })
      }, item.id, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 21
      }, _this);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
_c = TableData;

var _c;

$RefreshReg$(_c, "TableData");

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


/***/ }),

/***/ "./components/reusable-components/data-table/TableHeader.js":
/*!******************************************************************!*\
  !*** ./components/reusable-components/data-table/TableHeader.js ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ TableHeader; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\reusable-components\\data-table\\TableHeader.js";

//
function TableHeader(_ref) {
  var _this = this;

  var tableHeaders = _ref.tableHeaders;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("thead", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("tr", {
      children: tableHeaders.map(function (header) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("th", {
          children: header
        }, header, false, {
          fileName: _jsxFileName,
          lineNumber: 9,
          columnNumber: 28
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}
_c = TableHeader;

var _c;

$RefreshReg$(_c, "TableHeader");

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


/***/ }),

/***/ "./libs/data.js":
/*!**********************!*\
  !*** ./libs/data.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "daysOfTheWeek": function() { return /* binding */ daysOfTheWeek; },
/* harmony export */   "times": function() { return /* binding */ times; },
/* harmony export */   "locationDataTableHeaders": function() { return /* binding */ locationDataTableHeaders; },
/* harmony export */   "categoryDataTableHeaders": function() { return /* binding */ categoryDataTableHeaders; },
/* harmony export */   "stylistDataTableHeaders": function() { return /* binding */ stylistDataTableHeaders; },
/* harmony export */   "eventsDataTableHeaders": function() { return /* binding */ eventsDataTableHeaders; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var daysOfTheWeek = [{
  id: 1,
  name: "Monday"
}, {
  id: 1,
  name: "Tuesday"
}, {
  id: 1,
  name: "Wednesday"
}, {
  id: 1,
  name: "Thursday"
}, {
  id: 1,
  name: "Friday"
}];
var times = [{
  id: 1,
  time: "10:00"
}, {
  id: 2,
  time: "10:30"
}, {
  id: 3,
  time: "11:00"
}, {
  id: 4,
  time: "11:30"
}, {
  id: 5,
  time: "12:00"
}, {
  id: 6,
  time: "12:30"
}, {
  id: 7,
  time: "13:00"
}, {
  id: 8,
  time: "13:30"
}, {
  id: 9,
  time: "14:00"
}, {
  id: 10,
  time: "14:30"
}, {
  id: 11,
  time: "15:00"
}, {
  id: 12,
  time: "15:30"
}, {
  id: 13,
  time: "16:00"
}, {
  id: 14,
  time: "16:30"
}, {
  id: 15,
  time: "17:00"
}];
var locationDataTableHeaders = ["Title", "Address1", "Address2", "City", "Country", "Phone", "Zip Code", "Action", "Delete"];
var categoryDataTableHeaders = ["Title", "Action", "Delete"];
var stylistDataTableHeaders = ["First Name", "Last Name", "Email", "Password", "Details"];
var eventsDataTableHeaders = ["Location", "Category", "Treatment", "Stylist", "Event Date", "Start Time", "End Time", "Client", "Action", "Delete"];

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


/***/ }),

/***/ "./libs/useAxios.js":
/*!**************************!*\
  !*** ./libs/useAxios.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ useAxios; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _s = $RefreshSig$();




function useAxios(method, url, body, happening) {
  _s();

  // // Need to put following three in the useEffect's dependecy array to allow for dynamic data fetching based on user's 
  // // search input, navigation to previous and next items.
  // let searchText = "";
  // let skip = 0;
  // let limit = 0;
  // // If it's a post request then body will contain searchText, skip and limit. Update the above three with the body's values
  // if(body !== "undefined") {
  //     searchText = body.searchText;
  //     skip = body.skip;
  //     limit = body.limit
  // }
  // console.log(searchText, skip, limit);
  // console.log(method, url, body);
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),
      totalDataCount = _useState2[0],
      setTotalDataCount = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      loading = _useState3[0],
      setLoading = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),
      error = _useState4[0],
      setError = _useState4[1];

  var fetchData = /*#__PURE__*/function () {
    var _ref = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var response, newData, _response$data, items, totalItemCount;

      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              setLoading(true);
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default()({
                method: method,
                url: url,
                data: body
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.data;

            case 7:
              newData = _context.sent;
              console.log(newData); // If data are being fetched with get method then an array of json objects has been sent from backend

              if (!Array.isArray(newData)) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", setData(newData));

            case 11:
              if (!(response.data.items === "undefined")) {
                _context.next = 13;
                break;
              }

              return _context.abrupt("return", setData(newData));

            case 13:
              // Else, data are being fetched with post method. So an object has been sent from backend which contains data and
              // totalDataCount
              _response$data = response.data, items = _response$data.items, totalItemCount = _response$data.totalItemCount;
              setData(items);
              setTotalDataCount(totalItemCount);
              _context.next = 21;
              break;

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](0);
              setError(_context.t0);

            case 21:
              _context.prev = 21;
              setLoading(false);
              return _context.finish(21);

            case 24:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 18, 21, 24]]);
    }));

    return function fetchData() {
      return _ref.apply(this, arguments);
    };
  }();

  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    fetchData();
  }, [url, happening]);
  console.log(data);
  return {
    data: data,
    totalDataCount: totalDataCount,
    error: error,
    loading: loading
  };
}

_s(useAxios, "6n8vdF4IjGerTg+xDibblIdJD0Q=");

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


/***/ }),

/***/ "./pages/admins/categories.js":
/*!************************************!*\
  !*** ./pages/admins/categories.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Category; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../libs/data */ "./libs/data.js");
/* harmony import */ var _libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../libs/category-modifiers/fetchCategoryData */ "./libs/category-modifiers/fetchCategoryData.js");
/* harmony import */ var _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../libs/category-modifiers/searchCategories */ "./libs/category-modifiers/searchCategories.js");
/* harmony import */ var _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../libs/category-modifiers/displayHideCategoryForm */ "./libs/category-modifiers/displayHideCategoryForm.js");
/* harmony import */ var _libs_category_modifiers_deleteCategory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../libs/category-modifiers/deleteCategory */ "./libs/category-modifiers/deleteCategory.js");
/* harmony import */ var _libs_useAxios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../libs/useAxios */ "./libs/useAxios.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../styles/locations/AddLocation.module.css */ "./styles/locations/AddLocation.module.css");
/* harmony import */ var _styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_reusable_components_item_table_ItemTableHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableHeader */ "./components/reusable-components/item-table/ItemTableHeader.js");
/* harmony import */ var _components_reusable_components_item_table_ItemTableData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/item-table/ItemTableData */ "./components/reusable-components/item-table/ItemTableData.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/category/AddCategory */ "./components/admins/category/AddCategory.js");
/* harmony import */ var _components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/DisplayFormButton */ "./components/reusable-components/DisplayFormButton.js");
/* harmony import */ var _components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/reusable-components/NextPrevItems */ "./components/reusable-components/NextPrevItems.js");
/* harmony import */ var _components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/reusable-components/item-details/ItemDetailsModal */ "./components/reusable-components/item-details/ItemDetailsModal.js");
/* harmony import */ var _components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/reusable-components/SearchInput */ "./components/reusable-components/SearchInput.js");
/* harmony import */ var _components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/reusable-components/Loading */ "./components/reusable-components/Loading.js");
/* harmony import */ var _components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/reusable-components/DeletePrompt */ "./components/reusable-components/DeletePrompt.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\admins\\categories.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// Modifier functions





 // React Modules

 // Stylesheet

 // components
// Table Components



 // Other Components










function Category() {
  _s();

  var categoryHeaders = ["_id", "Title", "Action", "__v", "Delete"];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      categoryState = _useState2[0],
      setCategoryState = _useState2[1]; // Custom hook call to fetch data


  var endpoint = "http://localhost:7070/api/categories";
  var requestBody = {
    searchText: categoryState.searchText,
    skip: categoryState.skip,
    limit: categoryState.limit
  };

  var _useAxios = (0,_libs_useAxios__WEBPACK_IMPORTED_MODULE_6__.default)("post", endpoint, requestBody, happening),
      data = _useAxios.data,
      totalDataCount = _useAxios.totalDataCount,
      error = _useAxios.error,
      loading = _useAxios.loading;

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      showDeletePrompt = _useState3[0],
      setShowDeletePrompt = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      itemNameForDeletePrompt = _useState4[0],
      setItemNameForDeletePrompt = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      categories = _useState5[0],
      setCategories = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]),
      categoryTableData = _useState6[0],
      setCategoryTableData = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      categoryId = _useState7[0],
      setCategoryId = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(""),
      categoryIdForDeleting = _useState8[0],
      setCategoryIdForDeleting = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      isAddingUpdating = _useState9[0],
      setIsAddingUpdating = _useState9[1]; // const [display]


  var _useState10 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    categoryId: "",
    title: ""
  }),
      categoryInfo = _useState10[0],
      setCategoryInfo = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({
    categories: [],
    searchText: "",
    skip: 0,
    limit: 20,
    dataLength: 0
  }),
      state = _useState11[0],
      setState = _useState11[1];

  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(function () {
    setHappening("fetching");

    if (data !== null) {
      setCategories(data);
      var newData = [];
      data.forEach(function (category, index) {
        newData.push({
          id: index + 1,
          data: [category.title, "View Details-".concat(category._id.toString()), "Delete-".concat(category._id.toString())]
        });
      });
      setCategoryTableData(newData);
      setCategoryState(function (currentValue) {
        return _objectSpread(_objectSpread({}, currentValue), {}, {
          dataLength: totalDataCount
        });
      });
    }

    (0,_libs_category_modifiers_fetchCategoryData__WEBPACK_IMPORTED_MODULE_2__.fetchCategoryData)(state, state.skip, setState);
  }, []);

  function openDeletePrompt(event) {
    var _id = event.target.value;
    setCategoryIdForDeleting(_id);

    for (var x = 0; x < locations.length; x++) {
      if (_id === locations[x]._id.toString()) {
        setItemNameForDeletePrompt(locations[x].title);
        break;
      }
    }

    setShowDeletePrompt(true);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
    className: (_styles_locations_AddLocation_module_css__WEBPACK_IMPORTED_MODULE_20___default().categories),
    style: {
      display: "flex"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_11__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
      className: "category_content",
      style: {
        width: "80%"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_admins_category_AddCategory__WEBPACK_IMPORTED_MODULE_12__.default // For input field values
      , {
        categoryInfo: categoryInfo // if true, isAddingUpdating will display the form and will hide if false
        ,
        isAddingUpdating: isAddingUpdating // Clicking on close button will invoke this function 
        ,
        displayHideCategoryForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm // Following attributes will be passed to the displayHideCategoryForm function as arguments for
        // updating the states on close button click event. isAddingUpdating will be set to false,
        // setLocationInfo will update the locationInfo state with it's initial empty values   
        ,
        setCategoryInfo: setCategoryInfo,
        setIsAddingUpdating: setIsAddingUpdating
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
        className: "search_add",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_SearchInput__WEBPACK_IMPORTED_MODULE_16__.default, {
          state: state,
          setState: setState,
          searchData: _libs_category_modifiers_searchCategories__WEBPACK_IMPORTED_MODULE_3__.searchCategories
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_DisplayFormButton__WEBPACK_IMPORTED_MODULE_13__.default, {
          text: "Add Category",
          displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm,
          setIsAddingUpdating: setIsAddingUpdating
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
        className: "table",
        children: error ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)("div", {
          children: "Something went wrong"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 25
        }, this) : loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_Loading__WEBPACK_IMPORTED_MODULE_17__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 25
        }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_10__.default, {
          tableHeaders: _libs_data__WEBPACK_IMPORTED_MODULE_1__.categoryDataTableHeaders,
          tableData: categoryTableData,
          setItemId: setCategoryId,
          openDeletePrompt: openDeletePrompt
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_NextPrevItems__WEBPACK_IMPORTED_MODULE_14__.default, {
        state: state,
        setState: setState
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_DeletePrompt__WEBPACK_IMPORTED_MODULE_18__.default, {
        deleting: deleting,
        itemId: locationIdForDeleting,
        itemNameForDeletePrompt: itemNameForDeletePrompt,
        showDeletePrompt: showDeletePrompt,
        setShowDeletePrompt: setShowDeletePrompt,
        deleteItem: deleteLocation
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxDEV)(_components_reusable_components_item_details_ItemDetailsModal__WEBPACK_IMPORTED_MODULE_15__.default, {
        itemId: categoryId,
        setItemId: setCategoryId,
        items: state.categories,
        itemHeaders: categoryHeaders,
        setItemInfo: setCategoryInfo // For displaying location add/update form
        ,
        isAddingUpdating: isAddingUpdating,
        setIsAddingUpdating: setIsAddingUpdating // Add and update forms are same but need to populate the form's input fields with the data for updating
        ,
        displayHideForm: _libs_category_modifiers_displayHideCategoryForm__WEBPACK_IMPORTED_MODULE_4__.displayHideCategoryForm
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 132,
    columnNumber: 9
  }, this);
}

_s(Category, "54/utT/dRNbwXzrDI4Oh9aU/3dM=", false, function () {
  return [_libs_useAxios__WEBPACK_IMPORTED_MODULE_6__.default];
});

_c = Category;

var _c;

$RefreshReg$(_c, "Category");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuNjIyOTVjN2ZjMjU5MDAyYTU2ZGYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUdBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQXNHO0FBQUEsTUFBbkdDLE1BQW1HLFFBQW5HQSxNQUFtRztBQUFBLE1BQTNGQyx1QkFBMkYsUUFBM0ZBLHVCQUEyRjtBQUFBLE1BQWxFQyxnQkFBa0UsUUFBbEVBLGdCQUFrRTtBQUFBLE1BQWhEQyxtQkFBZ0QsUUFBaERBLG1CQUFnRDtBQUFBLE1BQTNCQyxVQUEyQixRQUEzQkEsVUFBMkI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFFdkgsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUErQixTQUFLLEVBQUk7QUFBQ0MsTUFBQUEsT0FBTyxFQUFFSixnQkFBZ0IsSUFBSUcsUUFBcEIsR0FBK0IsT0FBL0IsR0FBd0M7QUFBbEQsS0FBeEM7QUFBQSw0QkFDSTtBQUFBLGlEQUFnQ0osdUJBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBRUk7QUFBUSxXQUFLLEVBQUlELE1BQWpCO0FBQXlCLGFBQU8sRUFBSUksVUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSixlQUdJO0FBQVEsYUFBTyxFQUFJO0FBQUEsZUFBTUQsbUJBQW1CLENBQUMsS0FBRCxDQUF6QjtBQUFBLE9BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSEosRUFLS0UsUUFBUSxpQkFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQVVILENBWkQ7O0tBQU1OO0FBZU4sK0RBQWVBLFlBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUdIOztHQWhNdUJXO1VBZTZCbEM7OztLQWY3QmtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvZGF0YS10YWJsZS9EYXRhVGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL1RhYmxlRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvVGFibGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL2xpYnMvZGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbGlicy91c2VBeGlvcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRtaW5zL2NhdGVnb3JpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gc3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzc1xyXG5cclxuXHJcbmNvbnN0IERlbGV0ZVByb21wdCA9ICh7IGl0ZW1JZCwgaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQsIHNob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHQsIGRlbGV0ZUl0ZW0sIGRlbGV0aW5nIH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlX3Byb21wdFwiIHN0eWxlID0ge3tkaXNwbGF5OiBzaG93RGVsZXRlUHJvbXB0IHx8IGRlbGV0aW5nID8gXCJibG9ja1wiOiBcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgd2FudCB0byBkZWxldGUge2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0fT88L3A+XHJcbiAgICAgICAgICAgIDxidXR0b24gdmFsdWUgPSB7aXRlbUlkfSBvbkNsaWNrID0ge2RlbGV0ZUl0ZW19PlllczwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2sgPSB7KCkgPT4gc2V0U2hvd0RlbGV0ZVByb21wdChmYWxzZSl9Pk5vPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7ZGVsZXRpbmcgJiYgPHA+RGVsZXRpbmcuLi48L3A+fVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERlbGV0ZVByb21wdDsiLCJcclxuLy8gc3R5bGVzIGFyZSBpbiBnbG9iYWxzLmNzc1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nICgpIHtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICA8cD5Mb2FkaW5nLi4uLjwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbiIsImltcG9ydCBUYWJsZUhlYWRlciBmcm9tIFwiLi9UYWJsZUhlYWRlclwiO1xyXG5pbXBvcnQgVGFibGVEYXRhIGZyb20gXCIuL1RhYmxlRGF0YVwiO1xyXG5cclxuY29uc3QgRGF0YVRhYmxlID0gKHsgdGFibGVGb3IsIHRhYmxlSGVhZGVycywgdGFibGVEYXRhLCBkeW5hbWljQ2xhc3MsIHNldEl0ZW1JZCwgb3BlbkRlbGV0ZVByb21wdCAgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXRhYmxlXCI+XHJcbiAgICAgICAgICAgIDx0YWJsZT5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWRlciB0YWJsZUhlYWRlcnMgPSB7dGFibGVIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICB0YWJsZUZvciA9IHt0YWJsZUZvcn0gXHJcbiAgICAgICAgICAgICAgICAgICAgdGFibGVEYXRhID0ge3RhYmxlRGF0YX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUlkID0ge3NldEl0ZW1JZH0gXHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkRlbGV0ZVByb21wdCA9IHtvcGVuRGVsZXRlUHJvbXB0IH0gXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERhdGFUYWJsZTsiLCIvL1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZURhdGEgKHsgdGFibGVGb3IsIHRhYmxlRGF0YSwgc2V0SXRlbUlkLCBvcGVuRGVsZXRlUHJvbXB0IH0pIHtcclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICB7dGFibGVEYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPHRyIGtleSA9IHtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uZGF0YS5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwiVmlldyBEZXRhaWxzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3ZhbHVlLnN1YnN0cmluZyh2YWx1ZS5pbmRleE9mKFwiLVwiKSArIDEsIHZhbHVlLmxlbmd0aCl9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7ZXZlbnQgPT4gc2V0SXRlbUlkKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVmlldyBEZXRhaWxzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwiRGVsZXRlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHt2YWx1ZS5zdWJzdHJpbmcodmFsdWUuaW5kZXhPZihcIi1cIikgKyAxLCB2YWx1ZS5sZW5ndGgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2sgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUuaW5jbHVkZXMoXCJodHRwXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleSA9IHtpbmRleCArIDF9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0ge3ZhbHVlfT48YT5WaWV3IERldGFpbHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXkgPSB7aW5kZXggKyAxfT57dmFsdWV9PC90ZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7IFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICApO1xyXG59IiwiLy9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhYmxlSGVhZGVyICh7IHRhYmxlSGVhZGVycyB9KSB7XHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgICAgICB7dGFibGVIZWFkZXJzLm1hcChoZWFkZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA8dGgga2V5ID0ge2hlYWRlcn0+e2hlYWRlcn08L3RoPlxyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICk7XHJcbn0iLCJleHBvcnQgY29uc3QgZGF5c09mVGhlV2VlayA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiTW9uZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJUdWVzZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJXZWRuZXNkYXlcIn0sXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIlRodXJzZGF5XCJ9LFxyXG4gICAgeyBpZDogMSwgbmFtZTogXCJGcmlkYXlcIn0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgdGltZXMgPSBbXHJcbiAgICB7IGlkOiAxLCB0aW1lOiBcIjEwOjAwXCIgfSxcclxuICAgIHsgaWQ6IDIsIHRpbWU6IFwiMTA6MzBcIiB9LFxyXG4gICAgeyBpZDogMywgdGltZTogXCIxMTowMFwiIH0sXHJcbiAgICB7IGlkOiA0LCB0aW1lOiBcIjExOjMwXCIgfSxcclxuICAgIHsgaWQ6IDUsIHRpbWU6IFwiMTI6MDBcIiB9LFxyXG4gICAgeyBpZDogNiwgdGltZTogXCIxMjozMFwiIH0sXHJcbiAgICB7IGlkOiA3LCB0aW1lOiBcIjEzOjAwXCIgfSxcclxuICAgIHsgaWQ6IDgsIHRpbWU6IFwiMTM6MzBcIiB9LFxyXG4gICAgeyBpZDogOSwgdGltZTogXCIxNDowMFwiIH0sXHJcbiAgICB7IGlkOiAxMCwgdGltZTogXCIxNDozMFwiIH0sXHJcbiAgICB7IGlkOiAxMSwgdGltZTogXCIxNTowMFwiIH0sXHJcbiAgICB7IGlkOiAxMiwgdGltZTogXCIxNTozMFwiIH0sXHJcbiAgICB7IGlkOiAxMywgdGltZTogXCIxNjowMFwiIH0sXHJcbiAgICB7IGlkOiAxNCwgdGltZTogXCIxNjozMFwiIH0sXHJcbiAgICB7IGlkOiAxNSwgdGltZTogXCIxNzowMFwiIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgbG9jYXRpb25EYXRhVGFibGVIZWFkZXJzID0gW1xyXG4gICAgXCJUaXRsZVwiLCBcIkFkZHJlc3MxXCIsIFwiQWRkcmVzczJcIiwgXCJDaXR5XCIsIFwiQ291bnRyeVwiLCBcIlBob25lXCIsIFwiWmlwIENvZGVcIiwgXCJBY3Rpb25cIiwgXCJEZWxldGVcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNhdGVnb3J5RGF0YVRhYmxlSGVhZGVycyA9IFtcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IHN0eWxpc3REYXRhVGFibGVIZWFkZXJzID0gW1wiRmlyc3QgTmFtZVwiLCBcIkxhc3QgTmFtZVwiLCBcIkVtYWlsXCIsIFwiUGFzc3dvcmRcIiwgXCJEZXRhaWxzXCJdO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50c0RhdGFUYWJsZUhlYWRlcnMgPSBbXHJcbiAgICBcIkxvY2F0aW9uXCIsIFwiQ2F0ZWdvcnlcIiwgXCJUcmVhdG1lbnRcIiwgXCJTdHlsaXN0XCIsIFwiRXZlbnQgRGF0ZVwiLCBcIlN0YXJ0IFRpbWVcIiwgXCJFbmQgVGltZVwiLCBcIkNsaWVudFwiLCBcIkFjdGlvblwiLCBcIkRlbGV0ZVwiXHJcbl07XHJcbiIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUF4aW9zKG1ldGhvZCwgdXJsLCBib2R5LCBoYXBwZW5pbmcpIHtcclxuXHJcbiAgICAvLyAvLyBOZWVkIHRvIHB1dCBmb2xsb3dpbmcgdGhyZWUgaW4gdGhlIHVzZUVmZmVjdCdzIGRlcGVuZGVjeSBhcnJheSB0byBhbGxvdyBmb3IgZHluYW1pYyBkYXRhIGZldGNoaW5nIGJhc2VkIG9uIHVzZXIncyBcclxuICAgIC8vIC8vIHNlYXJjaCBpbnB1dCwgbmF2aWdhdGlvbiB0byBwcmV2aW91cyBhbmQgbmV4dCBpdGVtcy5cclxuICAgIC8vIGxldCBzZWFyY2hUZXh0ID0gXCJcIjtcclxuICAgIC8vIGxldCBza2lwID0gMDtcclxuICAgIC8vIGxldCBsaW1pdCA9IDA7XHJcblxyXG4gICAgLy8gLy8gSWYgaXQncyBhIHBvc3QgcmVxdWVzdCB0aGVuIGJvZHkgd2lsbCBjb250YWluIHNlYXJjaFRleHQsIHNraXAgYW5kIGxpbWl0LiBVcGRhdGUgdGhlIGFib3ZlIHRocmVlIHdpdGggdGhlIGJvZHkncyB2YWx1ZXNcclxuICAgIC8vIGlmKGJvZHkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgIC8vICAgICBzZWFyY2hUZXh0ID0gYm9keS5zZWFyY2hUZXh0O1xyXG4gICAgLy8gICAgIHNraXAgPSBib2R5LnNraXA7XHJcbiAgICAvLyAgICAgbGltaXQgPSBib2R5LmxpbWl0XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGV4dCwgc2tpcCwgbGltaXQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cobWV0aG9kLCB1cmwsIGJvZHkpO1xyXG5cclxuXHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICAgIGNvbnN0IFt0b3RhbERhdGFDb3VudCwgc2V0VG90YWxEYXRhQ291bnRdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zKHsgbWV0aG9kLCB1cmwsIGRhdGE6IGJvZHkgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gYXdhaXQgcmVzcG9uc2UuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG5ld0RhdGEpO1xyXG5cclxuICAgICAgICAgICAgLy8gSWYgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIGdldCBtZXRob2QgdGhlbiBhbiBhcnJheSBvZiBqc29uIG9iamVjdHMgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmRcclxuICAgICAgICAgICAgaWYoQXJyYXkuaXNBcnJheShuZXdEYXRhKSkgcmV0dXJuIHNldERhdGEobmV3RGF0YSk7XHJcblxyXG4gICAgICAgICAgICBpZihyZXNwb25zZS5kYXRhLml0ZW1zID09PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2V0RGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRWxzZSwgZGF0YSBhcmUgYmVpbmcgZmV0Y2hlZCB3aXRoIHBvc3QgbWV0aG9kLiBTbyBhbiBvYmplY3QgaGFzIGJlZW4gc2VudCBmcm9tIGJhY2tlbmQgd2hpY2ggY29udGFpbnMgZGF0YSBhbmRcclxuICAgICAgICAgICAgLy8gdG90YWxEYXRhQ291bnRcclxuICAgICAgICAgICAgY29uc3QgeyBpdGVtcywgdG90YWxJdGVtQ291bnQgfSA9IHJlc3BvbnNlLmRhdGE7XHJcblxyXG4gICAgICAgICAgICBzZXREYXRhKGl0ZW1zKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRvdGFsRGF0YUNvdW50KHRvdGFsSXRlbUNvdW50KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRFcnJvcihlcnJvcik7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuXHJcbiAgICB9LCBbdXJsLCBoYXBwZW5pbmddKTsgXHJcblxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgcmV0dXJuIHsgZGF0YSwgdG90YWxEYXRhQ291bnQsIGVycm9yLCBsb2FkaW5nIH07XHJcblxyXG59XHJcbiIsIi8vIE1vZGlmaWVyIGZ1bmN0aW9uc1xyXG5pbXBvcnQgeyBjYXRlZ29yeURhdGFUYWJsZUhlYWRlcnMgfSBmcm9tIFwiLi4vLi4vbGlicy9kYXRhXCI7XHJcblxyXG5pbXBvcnQgeyBmZXRjaENhdGVnb3J5RGF0YSB9IGZyb20gXCIuLi8uLi9saWJzL2NhdGVnb3J5LW1vZGlmaWVycy9mZXRjaENhdGVnb3J5RGF0YVwiO1xyXG5pbXBvcnQgeyBzZWFyY2hDYXRlZ29yaWVzIH0gZnJvbSBcIi4uLy4uL2xpYnMvY2F0ZWdvcnktbW9kaWZpZXJzL3NlYXJjaENhdGVnb3JpZXNcIjtcclxuaW1wb3J0IHsgZGlzcGxheUhpZGVDYXRlZ29yeUZvcm0gfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGlzcGxheUhpZGVDYXRlZ29yeUZvcm1cIjtcclxuaW1wb3J0IHsgZGVsZXRlQ2F0ZWdvcnkgfSBmcm9tIFwiLi4vLi4vbGlicy9jYXRlZ29yeS1tb2RpZmllcnMvZGVsZXRlQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IHVzZUF4aW9zIGZyb20gXCIuLi8uLi9saWJzL3VzZUF4aW9zXCI7XHJcblxyXG5cclxuLy8gUmVhY3QgTW9kdWxlc1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG4vLyBTdHlsZXNoZWV0XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9sb2NhdGlvbnMvQWRkTG9jYXRpb24ubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gY29tcG9uZW50c1xyXG5cclxuLy8gVGFibGUgQ29tcG9uZW50c1xyXG5pbXBvcnQgSXRlbVRhYmxlSGVhZGVyIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS10YWJsZS9JdGVtVGFibGVIZWFkZXJcIjtcclxuaW1wb3J0IEl0ZW1UYWJsZURhdGEgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9pdGVtLXRhYmxlL0l0ZW1UYWJsZURhdGFcIjtcclxuaW1wb3J0IERhdGFUYWJsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL2RhdGEtdGFibGUvRGF0YVRhYmxlXCI7XHJcblxyXG4vLyBPdGhlciBDb21wb25lbnRzXHJcbmltcG9ydCBDb250cm9sUGFuZWwgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvYWRtaW5zL2NvbnRyb2wtcGFuZWwvQ29udHJvbFBhbmVsXCI7XHJcbmltcG9ydCBBZGRDYXRlZ29yeSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvY2F0ZWdvcnkvQWRkQ2F0ZWdvcnlcIjtcclxuaW1wb3J0IERpc3BsYXlGb3JtQnV0dG9uIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvRGlzcGxheUZvcm1CdXR0b25cIjtcclxuaW1wb3J0IE5leHRQcmV2SXRlbXMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9OZXh0UHJldkl0ZW1zXCI7XHJcbmltcG9ydCBJdGVtRGV0YWlsc01vZGFsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvaXRlbS1kZXRhaWxzL0l0ZW1EZXRhaWxzTW9kYWxcIjtcclxuaW1wb3J0IFNlYXJjaElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvU2VhcmNoSW5wdXRcIjtcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9Mb2FkaW5nXCI7XHJcbmltcG9ydCBEZWxldGVQcm9tcHQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9EZWxldGVQcm9tcHRcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnkgKCkge1xyXG5cclxuICAgIGNvbnN0IGNhdGVnb3J5SGVhZGVycyA9IFtcIl9pZFwiLCBcIlRpdGxlXCIsIFwiQWN0aW9uXCIsIFwiX192XCIsIFwiRGVsZXRlXCJdO1xyXG5cclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5U3RhdGUsIHNldENhdGVnb3J5U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgc2tpcDogMCxcclxuICAgICAgICBsaW1pdDogMjAsXHJcbiAgICAgICAgZGF0YUxlbmd0aDogMFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ3VzdG9tIGhvb2sgY2FsbCB0byBmZXRjaCBkYXRhXHJcbiAgICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovL2xvY2FsaG9zdDo3MDcwL2FwaS9jYXRlZ29yaWVzXCI7XHJcbiAgICBjb25zdCByZXF1ZXN0Qm9keSA9IHsgc2VhcmNoVGV4dDogY2F0ZWdvcnlTdGF0ZS5zZWFyY2hUZXh0LCBza2lwOiBjYXRlZ29yeVN0YXRlLnNraXAsIGxpbWl0OiBjYXRlZ29yeVN0YXRlLmxpbWl0IH07XHJcbiAgICBjb25zdCB7IGRhdGEsIHRvdGFsRGF0YUNvdW50LCBlcnJvciwgbG9hZGluZyB9ID0gdXNlQXhpb3MoXCJwb3N0XCIsIGVuZHBvaW50LCByZXF1ZXN0Qm9keSwgaGFwcGVuaW5nKTtcclxuXHJcblxyXG4gICAgY29uc3QgW3Nob3dEZWxldGVQcm9tcHQsIHNldFNob3dEZWxldGVQcm9tcHRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2l0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0LCBzZXRJdGVtTmFtZUZvckRlbGV0ZVByb21wdF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yaWVzLCBzZXRDYXRlZ29yaWVzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjYXRlZ29yeVRhYmxlRGF0YSwgc2V0Q2F0ZWdvcnlUYWJsZURhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW2NhdGVnb3J5SWQsIHNldENhdGVnb3J5SWRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbY2F0ZWdvcnlJZEZvckRlbGV0aW5nLCBzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmddID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbaXNBZGRpbmdVcGRhdGluZywgc2V0SXNBZGRpbmdVcGRhdGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICAvLyBjb25zdCBbZGlzcGxheV1cclxuICAgIGNvbnN0IFtjYXRlZ29yeUluZm8sIHNldENhdGVnb3J5SW5mb10gPSB1c2VTdGF0ZSh7IGNhdGVnb3J5SWQ6IFwiXCIsIHRpdGxlOiBcIlwiIH0pO1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgY2F0ZWdvcmllczogW10sXHJcbiAgICAgICAgc2VhcmNoVGV4dDogXCJcIixcclxuICAgICAgICBza2lwOiAwLFxyXG4gICAgICAgIGxpbWl0OiAyMCxcclxuICAgICAgICBkYXRhTGVuZ3RoOiAwXHJcbiAgICB9KVxyXG5cclxuIFxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgICAgICAgc2V0SGFwcGVuaW5nKFwiZmV0Y2hpbmdcIik7XHJcblxyXG4gICAgICAgIGlmKGRhdGEgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3JpZXMoZGF0YSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goKGNhdGVnb3J5LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIG5ld0RhdGEucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhdGVnb3J5LnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBgVmlldyBEZXRhaWxzLSR7Y2F0ZWdvcnkuX2lkLnRvU3RyaW5nKCl9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYERlbGV0ZS0ke2NhdGVnb3J5Ll9pZC50b1N0cmluZygpfWBcclxuICAgICAgICAgICAgICAgICAgICBdXHJcblxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5VGFibGVEYXRhKG5ld0RhdGEpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHNldENhdGVnb3J5U3RhdGUoY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4uY3VycmVudFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFMZW5ndGg6IHRvdGFsRGF0YUNvdW50XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmZXRjaENhdGVnb3J5RGF0YShzdGF0ZSwgc3RhdGUuc2tpcCwgc2V0U3RhdGUpO1xyXG5cclxuICAgIH0sIFtdKTtcclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuRGVsZXRlUHJvbXB0IChldmVudCkge1xyXG5cclxuICAgICAgICBjb25zdCBfaWQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcblxyXG4gICAgICAgIHNldENhdGVnb3J5SWRGb3JEZWxldGluZyhfaWQpO1xyXG5cclxuICAgICAgICBmb3IobGV0IHggPSAwOyB4IDwgbG9jYXRpb25zLmxlbmd0aDsgeCsrKSB7XHJcblxyXG4gICAgICAgICAgICBpZihfaWQgPT09IGxvY2F0aW9uc1t4XS5faWQudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SXRlbU5hbWVGb3JEZWxldGVQcm9tcHQobG9jYXRpb25zW3hdLnRpdGxlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0KHRydWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfSBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwifX0+XHJcblxyXG4gICAgICAgICAgICA8Q29udHJvbFBhbmVsIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhdGVnb3J5X2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiODAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkQ2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICAvLyBGb3IgaW5wdXQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnlJbmZvID0ge2NhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAvLyBpZiB0cnVlLCBpc0FkZGluZ1VwZGF0aW5nIHdpbGwgZGlzcGxheSB0aGUgZm9ybSBhbmQgd2lsbCBoaWRlIGlmIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgaXNBZGRpbmdVcGRhdGluZyA9IHtpc0FkZGluZ1VwZGF0aW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsaWNraW5nIG9uIGNsb3NlIGJ1dHRvbiB3aWxsIGludm9rZSB0aGlzIGZ1bmN0aW9uIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvbGxvd2luZyBhdHRyaWJ1dGVzIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSBmdW5jdGlvbiBhcyBhcmd1bWVudHMgZm9yXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXBkYXRpbmcgdGhlIHN0YXRlcyBvbiBjbG9zZSBidXR0b24gY2xpY2sgZXZlbnQuIGlzQWRkaW5nVXBkYXRpbmcgd2lsbCBiZSBzZXQgdG8gZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2V0TG9jYXRpb25JbmZvIHdpbGwgdXBkYXRlIHRoZSBsb2NhdGlvbkluZm8gc3RhdGUgd2l0aCBpdCdzIGluaXRpYWwgZW1wdHkgdmFsdWVzICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0Q2F0ZWdvcnlJbmZvID0ge3NldENhdGVnb3J5SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hfYWRkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlYXJjaElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRTdGF0ZSA9IHtzZXRTdGF0ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoRGF0YSA9IHtzZWFyY2hDYXRlZ29yaWVzfSBcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEaXNwbGF5Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0ID0gXCJBZGQgQ2F0ZWdvcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheUhpZGVGb3JtID0ge2Rpc3BsYXlIaWRlQ2F0ZWdvcnlGb3JtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGVzIGFyZSBpbiBnbG9iYWwgY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZVwiID5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+U29tZXRoaW5nIHdlbnQgd3Jvbmc8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkaW5nIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPERhdGFUYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge2NhdGVnb3J5RGF0YVRhYmxlSGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJsZURhdGEgPSB7Y2F0ZWdvcnlUYWJsZURhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZW5EZWxldGVQcm9tcHQgPSB7b3BlbkRlbGV0ZVByb21wdH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImRhdGEtdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGFibGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJdGVtVGFibGVIZWFkZXIgaXRlbUhlYWRlcnMgPSB7Y2F0ZWdvcnlIZWFkZXJzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SXRlbVRhYmxlRGF0YSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0ge3N0YXRlLmNhdGVnb3JpZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0ge3N0YXRlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFN0YXRlID0ge3NldFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlSXRlbSA9IHtkZWxldGVDYXRlZ29yeX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICA8TmV4dFByZXZJdGVtcyBzdGF0ZSA9IHtzdGF0ZX0gc2V0U3RhdGUgPSB7c2V0U3RhdGV9IC8+XHJcbiAgICAgICAgICAgICAgICA8RGVsZXRlUHJvbXB0XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRpbmcgPSB7ZGVsZXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbUlkID0ge2xvY2F0aW9uSWRGb3JEZWxldGluZ31cclxuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZUZvckRlbGV0ZVByb21wdCA9IHtpdGVtTmFtZUZvckRlbGV0ZVByb21wdH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd0RlbGV0ZVByb21wdCA9IHtzaG93RGVsZXRlUHJvbXB0fSBcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaG93RGVsZXRlUHJvbXB0ID0ge3NldFNob3dEZWxldGVQcm9tcHR9IFxyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUl0ZW0gPSB7ZGVsZXRlTG9jYXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgIHsvKiBTdHlsZXMgYXJlIGluIGdsb2JhbHMuY3NzICovfVxyXG4gICAgICAgICAgICAgICAgPEl0ZW1EZXRhaWxzTW9kYWxcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSWQgPSB7Y2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRJdGVtSWQgPSB7c2V0Q2F0ZWdvcnlJZH1cclxuICAgICAgICAgICAgICAgICAgICBpdGVtcyA9IHtzdGF0ZS5jYXRlZ29yaWVzfVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1IZWFkZXJzID0ge2NhdGVnb3J5SGVhZGVyc30gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SXRlbUluZm8gPSB7c2V0Q2F0ZWdvcnlJbmZvfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEZvciBkaXNwbGF5aW5nIGxvY2F0aW9uIGFkZC91cGRhdGUgZm9ybVxyXG4gICAgICAgICAgICAgICAgICAgIGlzQWRkaW5nVXBkYXRpbmcgPSB7aXNBZGRpbmdVcGRhdGluZ31cclxuICAgICAgICAgICAgICAgICAgICBzZXRJc0FkZGluZ1VwZGF0aW5nID0ge3NldElzQWRkaW5nVXBkYXRpbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQWRkIGFuZCB1cGRhdGUgZm9ybXMgYXJlIHNhbWUgYnV0IG5lZWQgdG8gcG9wdWxhdGUgdGhlIGZvcm0ncyBpbnB1dCBmaWVsZHMgd2l0aCB0aGUgZGF0YSBmb3IgdXBkYXRpbmdcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5SGlkZUZvcm0gPSB7ZGlzcGxheUhpZGVDYXRlZ29yeUZvcm19XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsiRGVsZXRlUHJvbXB0IiwiaXRlbUlkIiwiaXRlbU5hbWVGb3JEZWxldGVQcm9tcHQiLCJzaG93RGVsZXRlUHJvbXB0Iiwic2V0U2hvd0RlbGV0ZVByb21wdCIsImRlbGV0ZUl0ZW0iLCJkZWxldGluZyIsImRpc3BsYXkiLCJMb2FkaW5nIiwiVGFibGVIZWFkZXIiLCJUYWJsZURhdGEiLCJEYXRhVGFibGUiLCJ0YWJsZUZvciIsInRhYmxlSGVhZGVycyIsInRhYmxlRGF0YSIsImR5bmFtaWNDbGFzcyIsInNldEl0ZW1JZCIsIm9wZW5EZWxldGVQcm9tcHQiLCJMaW5rIiwibWFwIiwiaXRlbSIsImRhdGEiLCJ2YWx1ZSIsImluZGV4IiwiaW5jbHVkZXMiLCJzdWJzdHJpbmciLCJpbmRleE9mIiwibGVuZ3RoIiwiZXZlbnQiLCJ0YXJnZXQiLCJpZCIsImhlYWRlciIsImRheXNPZlRoZVdlZWsiLCJuYW1lIiwidGltZXMiLCJ0aW1lIiwibG9jYXRpb25EYXRhVGFibGVIZWFkZXJzIiwiY2F0ZWdvcnlEYXRhVGFibGVIZWFkZXJzIiwic3R5bGlzdERhdGFUYWJsZUhlYWRlcnMiLCJldmVudHNEYXRhVGFibGVIZWFkZXJzIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJheGlvcyIsInVzZUF4aW9zIiwibWV0aG9kIiwidXJsIiwiYm9keSIsImhhcHBlbmluZyIsInNldERhdGEiLCJ0b3RhbERhdGFDb3VudCIsInNldFRvdGFsRGF0YUNvdW50IiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hEYXRhIiwicmVzcG9uc2UiLCJuZXdEYXRhIiwiY29uc29sZSIsImxvZyIsIkFycmF5IiwiaXNBcnJheSIsIml0ZW1zIiwidG90YWxJdGVtQ291bnQiLCJmZXRjaENhdGVnb3J5RGF0YSIsInNlYXJjaENhdGVnb3JpZXMiLCJkaXNwbGF5SGlkZUNhdGVnb3J5Rm9ybSIsImRlbGV0ZUNhdGVnb3J5Iiwic3R5bGVzIiwiSXRlbVRhYmxlSGVhZGVyIiwiSXRlbVRhYmxlRGF0YSIsIkNvbnRyb2xQYW5lbCIsIkFkZENhdGVnb3J5IiwiRGlzcGxheUZvcm1CdXR0b24iLCJOZXh0UHJldkl0ZW1zIiwiSXRlbURldGFpbHNNb2RhbCIsIlNlYXJjaElucHV0IiwiQ2F0ZWdvcnkiLCJjYXRlZ29yeUhlYWRlcnMiLCJzZXRIYXBwZW5pbmciLCJzZWFyY2hUZXh0Iiwic2tpcCIsImxpbWl0IiwiZGF0YUxlbmd0aCIsImNhdGVnb3J5U3RhdGUiLCJzZXRDYXRlZ29yeVN0YXRlIiwiZW5kcG9pbnQiLCJyZXF1ZXN0Qm9keSIsInNldEl0ZW1OYW1lRm9yRGVsZXRlUHJvbXB0IiwiY2F0ZWdvcmllcyIsInNldENhdGVnb3JpZXMiLCJjYXRlZ29yeVRhYmxlRGF0YSIsInNldENhdGVnb3J5VGFibGVEYXRhIiwiY2F0ZWdvcnlJZCIsInNldENhdGVnb3J5SWQiLCJjYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJzZXRDYXRlZ29yeUlkRm9yRGVsZXRpbmciLCJpc0FkZGluZ1VwZGF0aW5nIiwic2V0SXNBZGRpbmdVcGRhdGluZyIsInRpdGxlIiwiY2F0ZWdvcnlJbmZvIiwic2V0Q2F0ZWdvcnlJbmZvIiwic3RhdGUiLCJzZXRTdGF0ZSIsImZvckVhY2giLCJjYXRlZ29yeSIsInB1c2giLCJfaWQiLCJ0b1N0cmluZyIsImN1cnJlbnRWYWx1ZSIsIngiLCJsb2NhdGlvbnMiLCJ3aWR0aCIsImxvY2F0aW9uSWRGb3JEZWxldGluZyIsImRlbGV0ZUxvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==
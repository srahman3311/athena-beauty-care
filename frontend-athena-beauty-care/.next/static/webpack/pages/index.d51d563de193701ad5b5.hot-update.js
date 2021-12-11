"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/clients/date-time/choose-stylists/ChooseStylists.js":
/*!************************************************************************!*\
  !*** ./components/clients/date-time/choose-stylists/ChooseStylists.js ***!
  \************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChooseStylists; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../client-reusable-components/ItemHeader */ "./components/clients/client-reusable-components/ItemHeader.js");
/* harmony import */ var _lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../lib/find-time-slots-copy/findTimeSlots */ "./lib/find-time-slots-copy/findTimeSlots.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\clients\\date-time\\choose-stylists\\ChooseStylists.js",
    _s = $RefreshSig$();


 // Components 




function ChooseStylists(_ref) {
  _s();

  var _this = this;

  var location = _ref.location,
      selectedTreatments = _ref.selectedTreatments,
      setDateTimes = _ref.setDateTimes,
      setActiveDate = _ref.setActiveDate;
  var styles = {
    width: "60%",
    margin: "0 auto 10px auto",
    display: "flex",
    justifyContent: "space-evenly",
    backgroundColor: "#ccc"
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      treatments = _useState[0],
      setTreatments = _useState[1]; // OnChange handler for stylist


  function finalizeTreatments(event, index) {
    // event.target.value contains the stylist
    var stylist = event.target.value; // Find the treatment from the selectedTreatments list using index

    var treatment = selectedTreatments[index];
    var newTreatmentTitle = selectedTreatments[index].title; // Every treatment has multiple stylists and user has the flexibility to choose stylist from the stylists of a 
    // specific treatment. If user is trying to change the stylist then previous treatment must be ommitted.  

    var doesExist = treatments.some(function (newItem) {
      return newItem.treatmentTitle === newTreatmentTitle;
    });

    if (doesExist) {
      var filteredTreatments = treatments.filter(function (item) {
        return item.treatmentTitle !== newTreatmentTitle;
      });
      var _newtreatment = {
        category: treatment.category,
        choosenStylist: stylist,
        location: location,
        treatmentDuration: treatment.duration,
        treatmentPrice: treatment.price,
        treatmentTitle: treatment.title
      };
      return setTreatments([].concat((0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(filteredTreatments), [_newtreatment]));
    }

    var newtreatment = {
      category: treatment.category,
      choosenStylist: stylist,
      location: location,
      treatmentDuration: treatment.duration,
      treatmentPrice: treatment.price,
      treatmentTitle: treatment.title
    };
    setTreatments(function (currentValue) {
      return [].concat((0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(currentValue), [newtreatment]);
    });
  }

  function findTimes() {
    return _findTimes.apply(this, arguments);
  }

  function _findTimes() {
    _findTimes = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
      var newTreatments, dateTimes, firstDate;
      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Need to sort the treatments as per the client's selection order. 
              newTreatments = [];
              selectedTreatments.forEach(function (selectedTreatment) {
                treatments.forEach(function (treatment) {
                  if (treatment.treatmentTitle === selectedTreatment.title) {
                    newTreatments.push(treatment);
                  }
                });
              });
              _context.next = 4;
              return (0,_lib_find_time_slots_copy_findTimeSlots__WEBPACK_IMPORTED_MODULE_5__.findTimeSlots)(newTreatments);

            case 4:
              dateTimes = _context.sent;
              setDateTimes(dateTimes);
              firstDate = dateTimes[0].date.date + "-" + dateTimes[0].date.month.toLowerCase();
              setActiveDate(firstDate);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _findTimes.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
    className: "choose_stylists",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(_client_reusable_components_ItemHeader__WEBPACK_IMPORTED_MODULE_4__.default, {
      content: "Choose stylists"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }, this), selectedTreatments.map(function (treatment, index) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
        className: "chooseStylists_content",
        style: styles,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: location
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: treatment.category
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("p", {
          children: treatment.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 29
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("select", {
          name: "treatment" // Index will find the treatment from the selectedTreatments list
          ,
          onChange: function onChange(event) {
            return finalizeTreatments(event, index);
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
            value: "",
            children: "Choose stylist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 33
          }, _this), treatment.stylists.map(function (stylist) {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("option", {
              value: stylist,
              children: stylist
            }, stylist, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 41
            }, _this);
          })]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 29
        }, _this)]
      }, treatment.title, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 25
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("div", {
      className: "buttonssss",
      style: {
        width: "100%",
        textAlign: "center"
      },
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)("button", {
        onClick: findTimes,
        children: "Find Available Starting Times"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 112,
    columnNumber: 9
  }, this);
}

_s(ChooseStylists, "l26X411+9SoSaEfN67FFcwJBffI=");

_c = ChooseStylists;

var _c;

$RefreshReg$(_c, "ChooseStylists");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDUxZDU2M2RlMTkzNzAxYWQ1YjUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBRUE7O0FBQ0E7QUFDQTs7QUFLZSxTQUFTRyxjQUFULE9BQXdGO0FBQUE7O0FBQUE7O0FBQUEsTUFBN0RDLFFBQTZELFFBQTdEQSxRQUE2RDtBQUFBLE1BQW5EQyxrQkFBbUQsUUFBbkRBLGtCQUFtRDtBQUFBLE1BQS9CQyxZQUErQixRQUEvQkEsWUFBK0I7QUFBQSxNQUFqQkMsYUFBaUIsUUFBakJBLGFBQWlCO0FBRW5HLE1BQU1DLE1BQU0sR0FBRztBQUNYQyxJQUFBQSxLQUFLLEVBQUUsS0FESTtBQUVYQyxJQUFBQSxNQUFNLEVBQUUsa0JBRkc7QUFHWEMsSUFBQUEsT0FBTyxFQUFFLE1BSEU7QUFJWEMsSUFBQUEsY0FBYyxFQUFFLGNBSkw7QUFLWEMsSUFBQUEsZUFBZSxFQUFFO0FBTE4sR0FBZjs7QUFTQSxrQkFBb0NiLCtDQUFRLENBQUMsRUFBRCxDQUE1QztBQUFBLE1BQU9jLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkIsZ0JBWG1HLENBZW5HOzs7QUFDQSxXQUFTQyxrQkFBVCxDQUE0QkMsS0FBNUIsRUFBbUNDLEtBQW5DLEVBQTBDO0FBRXRDO0FBQ0EsUUFBTUMsT0FBTyxHQUFHRixLQUFLLENBQUNHLE1BQU4sQ0FBYUMsS0FBN0IsQ0FIc0MsQ0FLdEM7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHakIsa0JBQWtCLENBQUNhLEtBQUQsQ0FBcEM7QUFDQSxRQUFNSyxpQkFBaUIsR0FBR2xCLGtCQUFrQixDQUFDYSxLQUFELENBQWxCLENBQTBCTSxLQUFwRCxDQVBzQyxDQVV0QztBQUNBOztBQUNBLFFBQU1DLFNBQVMsR0FBR1gsVUFBVSxDQUFDWSxJQUFYLENBQWdCLFVBQUFDLE9BQU87QUFBQSxhQUFJQSxPQUFPLENBQUNDLGNBQVIsS0FBMkJMLGlCQUEvQjtBQUFBLEtBQXZCLENBQWxCOztBQUVBLFFBQUdFLFNBQUgsRUFBYztBQUlWLFVBQU1JLGtCQUFrQixHQUFHZixVQUFVLENBQUNnQixNQUFYLENBQWtCLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNILGNBQUwsS0FBd0JMLGlCQUE1QjtBQUFBLE9BQXRCLENBQTNCO0FBRUEsVUFBTVMsYUFBWSxHQUFHO0FBRWpCQyxRQUFBQSxRQUFRLEVBQUVYLFNBQVMsQ0FBQ1csUUFGSDtBQUdqQkMsUUFBQUEsY0FBYyxFQUFFZixPQUhDO0FBSWpCZixRQUFBQSxRQUFRLEVBQVJBLFFBSmlCO0FBS2pCK0IsUUFBQUEsaUJBQWlCLEVBQUViLFNBQVMsQ0FBQ2MsUUFMWjtBQU1qQkMsUUFBQUEsY0FBYyxFQUFFZixTQUFTLENBQUNnQixLQU5UO0FBT2pCVixRQUFBQSxjQUFjLEVBQUVOLFNBQVMsQ0FBQ0U7QUFQVCxPQUFyQjtBQVdBLGFBQU9ULGFBQWEsME1BQUtjLGtCQUFMLElBQXlCRyxhQUF6QixHQUFwQjtBQUNIOztBQUdELFFBQU1BLFlBQVksR0FBRztBQUVqQkMsTUFBQUEsUUFBUSxFQUFFWCxTQUFTLENBQUNXLFFBRkg7QUFHakJDLE1BQUFBLGNBQWMsRUFBRWYsT0FIQztBQUlqQmYsTUFBQUEsUUFBUSxFQUFSQSxRQUppQjtBQUtqQitCLE1BQUFBLGlCQUFpQixFQUFFYixTQUFTLENBQUNjLFFBTFo7QUFNakJDLE1BQUFBLGNBQWMsRUFBRWYsU0FBUyxDQUFDZ0IsS0FOVDtBQU9qQlYsTUFBQUEsY0FBYyxFQUFFTixTQUFTLENBQUNFO0FBUFQsS0FBckI7QUFXQVQsSUFBQUEsYUFBYSxDQUFDLFVBQUF3QixZQUFZLEVBQUk7QUFBRSxzTkFBV0EsWUFBWCxJQUF5QlAsWUFBekI7QUFBdUMsS0FBMUQsQ0FBYjtBQUVIOztBQWhFa0csV0FtRXBGUSxTQW5Fb0Y7QUFBQTtBQUFBOztBQUFBO0FBQUEsNllBbUVuRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHSTtBQUNNQyxjQUFBQSxhQUpWLEdBSTBCLEVBSjFCO0FBTUlwQyxjQUFBQSxrQkFBa0IsQ0FBQ3FDLE9BQW5CLENBQTJCLFVBQUFDLGlCQUFpQixFQUFJO0FBRTVDN0IsZ0JBQUFBLFVBQVUsQ0FBQzRCLE9BQVgsQ0FBbUIsVUFBQXBCLFNBQVMsRUFBSTtBQUU1QixzQkFBR0EsU0FBUyxDQUFDTSxjQUFWLEtBQTZCZSxpQkFBaUIsQ0FBQ25CLEtBQWxELEVBQXlEO0FBRXJEaUIsb0JBQUFBLGFBQWEsQ0FBQ0csSUFBZCxDQUFtQnRCLFNBQW5CO0FBQ0g7QUFFSixpQkFQRDtBQVFILGVBVkQ7QUFOSjtBQUFBLHFCQW1CNEJwQixzRkFBYSxDQUFDdUMsYUFBRCxDQW5CekM7O0FBQUE7QUFtQlVJLGNBQUFBLFNBbkJWO0FBcUJJdkMsY0FBQUEsWUFBWSxDQUFDdUMsU0FBRCxDQUFaO0FBRU1DLGNBQUFBLFNBdkJWLEdBdUJzQkQsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUFiLENBQWtCQSxJQUFsQixHQUF5QixHQUF6QixHQUErQkYsU0FBUyxDQUFDLENBQUQsQ0FBVCxDQUFhRSxJQUFiLENBQWtCQyxLQUFsQixDQUF3QkMsV0FBeEIsRUF2QnJEO0FBeUJJMUMsY0FBQUEsYUFBYSxDQUFDdUMsU0FBRCxDQUFiOztBQXpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQW5FbUc7QUFBQTtBQUFBOztBQXFHbkcsc0JBQ0k7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQSw0QkFDSSw4REFBQywyRUFBRDtBQUFZLGFBQU8sRUFBRztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFJUXpDLGtCQUFrQixDQUFDNkMsR0FBbkIsQ0FBdUIsVUFBQzVCLFNBQUQsRUFBWUosS0FBWixFQUFzQjtBQUV6QywwQkFFSTtBQUFLLGlCQUFTLEVBQUMsd0JBQWY7QUFBd0MsYUFBSyxFQUFJVixNQUFqRDtBQUFBLGdDQUNJO0FBQUEsb0JBQUlKO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUVJO0FBQUEsb0JBQUlrQixTQUFTLENBQUNXO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGSixlQUdJO0FBQUEsb0JBQUlYLFNBQVMsQ0FBQ0U7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhKLGVBSUk7QUFDSSxjQUFJLEVBQUcsV0FEWCxDQUVJO0FBRko7QUFHSSxrQkFBUSxFQUFJLGtCQUFBUCxLQUFLO0FBQUEsbUJBQUlELGtCQUFrQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsQ0FBdEI7QUFBQSxXQUhyQjtBQUFBLGtDQUtJO0FBQVEsaUJBQUssRUFBRyxFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMSixFQU1LSSxTQUFTLENBQUM2QixRQUFWLENBQW1CRCxHQUFuQixDQUF1QixVQUFBL0IsT0FBTyxFQUFJO0FBQy9CLGdDQUNJO0FBQXdCLG1CQUFLLEVBQUlBLE9BQWpDO0FBQUEsd0JBQTJDQTtBQUEzQyxlQUFlQSxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREo7QUFHSCxXQUpBLENBTkw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpKO0FBQUEsU0FBZ0VHLFNBQVMsQ0FBQ0UsS0FBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBcUJILEtBdkJELENBSlIsZUEyQ0k7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUE0QixXQUFLLEVBQUk7QUFBQ2YsUUFBQUEsS0FBSyxFQUFFLE1BQVI7QUFBZ0IyQyxRQUFBQSxTQUFTLEVBQUU7QUFBM0IsT0FBckM7QUFBQSw2QkFDSTtBQUFRLGVBQU8sRUFBRVosU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBM0NKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBa0RIOztHQXZKdUJyQzs7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jbGllbnRzL2RhdGUtdGltZS9jaG9vc2Utc3R5bGlzdHMvQ2hvb3NlU3R5bGlzdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbi8vIENvbXBvbmVudHMgXHJcbmltcG9ydCBJdGVtSGVhZGVyIGZyb20gXCIuLi8uLi9jbGllbnQtcmV1c2FibGUtY29tcG9uZW50cy9JdGVtSGVhZGVyXCI7XHJcbmltcG9ydCB7IGZpbmRUaW1lU2xvdHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vbGliL2ZpbmQtdGltZS1zbG90cy1jb3B5L2ZpbmRUaW1lU2xvdHNcIjtcclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENob29zZVN0eWxpc3RzICh7IGxvY2F0aW9uLCBzZWxlY3RlZFRyZWF0bWVudHMsIHNldERhdGVUaW1lcywgc2V0QWN0aXZlRGF0ZSB9KSB7XHJcblxyXG4gICAgY29uc3Qgc3R5bGVzID0ge1xyXG4gICAgICAgIHdpZHRoOiBcIjYwJVwiLFxyXG4gICAgICAgIG1hcmdpbjogXCIwIGF1dG8gMTBweCBhdXRvXCIsXHJcbiAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtZXZlbmx5XCIsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiNjY2NcIlxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjb25zdCBbdHJlYXRtZW50cywgc2V0VHJlYXRtZW50c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBcclxuXHJcblxyXG4gICAgLy8gT25DaGFuZ2UgaGFuZGxlciBmb3Igc3R5bGlzdFxyXG4gICAgZnVuY3Rpb24gZmluYWxpemVUcmVhdG1lbnRzKGV2ZW50LCBpbmRleCkge1xyXG5cclxuICAgICAgICAvLyBldmVudC50YXJnZXQudmFsdWUgY29udGFpbnMgdGhlIHN0eWxpc3RcclxuICAgICAgICBjb25zdCBzdHlsaXN0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBGaW5kIHRoZSB0cmVhdG1lbnQgZnJvbSB0aGUgc2VsZWN0ZWRUcmVhdG1lbnRzIGxpc3QgdXNpbmcgaW5kZXhcclxuICAgICAgICBjb25zdCB0cmVhdG1lbnQgPSBzZWxlY3RlZFRyZWF0bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IG5ld1RyZWF0bWVudFRpdGxlID0gc2VsZWN0ZWRUcmVhdG1lbnRzW2luZGV4XS50aXRsZTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gRXZlcnkgdHJlYXRtZW50IGhhcyBtdWx0aXBsZSBzdHlsaXN0cyBhbmQgdXNlciBoYXMgdGhlIGZsZXhpYmlsaXR5IHRvIGNob29zZSBzdHlsaXN0IGZyb20gdGhlIHN0eWxpc3RzIG9mIGEgXHJcbiAgICAgICAgLy8gc3BlY2lmaWMgdHJlYXRtZW50LiBJZiB1c2VyIGlzIHRyeWluZyB0byBjaGFuZ2UgdGhlIHN0eWxpc3QgdGhlbiBwcmV2aW91cyB0cmVhdG1lbnQgbXVzdCBiZSBvbW1pdHRlZC4gIFxyXG4gICAgICAgIGNvbnN0IGRvZXNFeGlzdCA9IHRyZWF0bWVudHMuc29tZShuZXdJdGVtID0+IG5ld0l0ZW0udHJlYXRtZW50VGl0bGUgPT09IG5ld1RyZWF0bWVudFRpdGxlKTtcclxuXHJcbiAgICAgICAgaWYoZG9lc0V4aXN0KSB7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlcmVkVHJlYXRtZW50cyA9IHRyZWF0bWVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbS50cmVhdG1lbnRUaXRsZSAhPT0gbmV3VHJlYXRtZW50VGl0bGUpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbmV3dHJlYXRtZW50ID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB0cmVhdG1lbnQuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgICAgICBjaG9vc2VuU3R5bGlzdDogc3R5bGlzdCxcclxuICAgICAgICAgICAgICAgIGxvY2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IHRyZWF0bWVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgICAgIHRyZWF0bWVudFByaWNlOiB0cmVhdG1lbnQucHJpY2UsXHJcbiAgICAgICAgICAgICAgICB0cmVhdG1lbnRUaXRsZTogdHJlYXRtZW50LnRpdGxlXHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc2V0VHJlYXRtZW50cyhbLi4uZmlsdGVyZWRUcmVhdG1lbnRzLCBuZXd0cmVhdG1lbnRdKVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IG5ld3RyZWF0bWVudCA9IHtcclxuXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiB0cmVhdG1lbnQuY2F0ZWdvcnksXHJcbiAgICAgICAgICAgIGNob29zZW5TdHlsaXN0OiBzdHlsaXN0LFxyXG4gICAgICAgICAgICBsb2NhdGlvbixcclxuICAgICAgICAgICAgdHJlYXRtZW50RHVyYXRpb246IHRyZWF0bWVudC5kdXJhdGlvbixcclxuICAgICAgICAgICAgdHJlYXRtZW50UHJpY2U6IHRyZWF0bWVudC5wcmljZSxcclxuICAgICAgICAgICAgdHJlYXRtZW50VGl0bGU6IHRyZWF0bWVudC50aXRsZVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRyZWF0bWVudHMoY3VycmVudFZhbHVlID0+IHsgcmV0dXJuIFsuLi5jdXJyZW50VmFsdWUsIG5ld3RyZWF0bWVudF19KTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGZpbmRUaW1lcygpIHtcclxuXHJcblxyXG4gICAgICAgIC8vIE5lZWQgdG8gc29ydCB0aGUgdHJlYXRtZW50cyBhcyBwZXIgdGhlIGNsaWVudCdzIHNlbGVjdGlvbiBvcmRlci4gXHJcbiAgICAgICAgY29uc3QgbmV3VHJlYXRtZW50cyA9IFtdO1xyXG5cclxuICAgICAgICBzZWxlY3RlZFRyZWF0bWVudHMuZm9yRWFjaChzZWxlY3RlZFRyZWF0bWVudCA9PiB7XHJcblxyXG4gICAgICAgICAgICB0cmVhdG1lbnRzLmZvckVhY2godHJlYXRtZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0cmVhdG1lbnQudHJlYXRtZW50VGl0bGUgPT09IHNlbGVjdGVkVHJlYXRtZW50LnRpdGxlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIG5ld1RyZWF0bWVudHMucHVzaCh0cmVhdG1lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgXHJcbiAgICAgICAgY29uc3QgZGF0ZVRpbWVzID0gYXdhaXQgZmluZFRpbWVTbG90cyhuZXdUcmVhdG1lbnRzKTtcclxuXHJcbiAgICAgICAgc2V0RGF0ZVRpbWVzKGRhdGVUaW1lcyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGZpcnN0RGF0ZSA9IGRhdGVUaW1lc1swXS5kYXRlLmRhdGUgKyBcIi1cIiArIGRhdGVUaW1lc1swXS5kYXRlLm1vbnRoLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgIHNldEFjdGl2ZURhdGUoZmlyc3REYXRlKTtcclxuXHJcbiAgICAgICBcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNob29zZV9zdHlsaXN0c1wiPlxyXG4gICAgICAgICAgICA8SXRlbUhlYWRlciBjb250ZW50ID0gXCJDaG9vc2Ugc3R5bGlzdHNcIiAvPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRUcmVhdG1lbnRzLm1hcCgodHJlYXRtZW50LCBpbmRleCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfSBrZXkgPSB7dHJlYXRtZW50LnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPntsb2NhdGlvbn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57dHJlYXRtZW50LmNhdGVnb3J5fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt0cmVhdG1lbnQudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJ0cmVhdG1lbnRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJbmRleCB3aWxsIGZpbmQgdGhlIHRyZWF0bWVudCBmcm9tIHRoZSBzZWxlY3RlZFRyZWF0bWVudHMgbGlzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2V2ZW50ID0+IGZpbmFsaXplVHJlYXRtZW50cyhldmVudCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlwiPkNob29zZSBzdHlsaXN0PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RyZWF0bWVudC5zdHlsaXN0cy5tYXAoc3R5bGlzdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleSA9IHtzdHlsaXN0fSB2YWx1ZSA9IHtzdHlsaXN0fT57c3R5bGlzdH08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaG9vc2VTdHlsaXN0c19jb250ZW50XCIgc3R5bGUgPSB7c3R5bGVzfT5cclxuICAgICAgICAgICAgICAgIDxwPkxvY2F0aW9uPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+Q2F0ZWdvcnk8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5UcmVhdG1lbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIkF0aGVuYSBHb3JnZW91c1wiPkF0aGVuYSBHb3JnZW91czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWUgPSBcIlNvdWRpIEdvcmdlb3VzXCI+U291ZGkgR29yZ2VvdXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlID0gXCJKZW5uaWZlciBHb3JnZW91c1wiPkplbm5pZmVyIEdvcmdlb3VzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uc3Nzc1wiIHN0eWxlID0ge3t3aWR0aDogXCIxMDAlXCIsIHRleHRBbGlnbjogXCJjZW50ZXJcIn19PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtmaW5kVGltZXN9PkZpbmQgQXZhaWxhYmxlIFN0YXJ0aW5nIFRpbWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJJdGVtSGVhZGVyIiwiZmluZFRpbWVTbG90cyIsIkNob29zZVN0eWxpc3RzIiwibG9jYXRpb24iLCJzZWxlY3RlZFRyZWF0bWVudHMiLCJzZXREYXRlVGltZXMiLCJzZXRBY3RpdmVEYXRlIiwic3R5bGVzIiwid2lkdGgiLCJtYXJnaW4iLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0cmVhdG1lbnRzIiwic2V0VHJlYXRtZW50cyIsImZpbmFsaXplVHJlYXRtZW50cyIsImV2ZW50IiwiaW5kZXgiLCJzdHlsaXN0IiwidGFyZ2V0IiwidmFsdWUiLCJ0cmVhdG1lbnQiLCJuZXdUcmVhdG1lbnRUaXRsZSIsInRpdGxlIiwiZG9lc0V4aXN0Iiwic29tZSIsIm5ld0l0ZW0iLCJ0cmVhdG1lbnRUaXRsZSIsImZpbHRlcmVkVHJlYXRtZW50cyIsImZpbHRlciIsIml0ZW0iLCJuZXd0cmVhdG1lbnQiLCJjYXRlZ29yeSIsImNob29zZW5TdHlsaXN0IiwidHJlYXRtZW50RHVyYXRpb24iLCJkdXJhdGlvbiIsInRyZWF0bWVudFByaWNlIiwicHJpY2UiLCJjdXJyZW50VmFsdWUiLCJmaW5kVGltZXMiLCJuZXdUcmVhdG1lbnRzIiwiZm9yRWFjaCIsInNlbGVjdGVkVHJlYXRtZW50IiwicHVzaCIsImRhdGVUaW1lcyIsImZpcnN0RGF0ZSIsImRhdGUiLCJtb250aCIsInRvTG93ZXJDYXNlIiwibWFwIiwic3R5bGlzdHMiLCJ0ZXh0QWxpZ24iXSwic291cmNlUm9vdCI6IiJ9
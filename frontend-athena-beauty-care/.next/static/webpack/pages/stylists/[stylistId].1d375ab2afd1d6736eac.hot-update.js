"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/[stylistId]",{

/***/ "./components/admins/stylists/AddStylist.js":
/*!**************************************************!*\
  !*** ./components/admins/stylists/AddStylist.js ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _libs_stylist_modifiers_addUpdateStylist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../libs/stylist-modifiers/addUpdateStylist */ "./libs/stylist-modifiers/addUpdateStylist.js");
/* harmony import */ var _libs_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../libs/data */ "./libs/data.js");
/* harmony import */ var _styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../styles/stylists/Stylists.module.css */ "./styles/stylists/Stylists.module.css");
/* harmony import */ var _styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_ImageUpload_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../styles/ImageUpload.module.css */ "./styles/ImageUpload.module.css");
/* harmony import */ var _styles_ImageUpload_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_ImageUpload_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _WorkScheduleForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WorkScheduleForm */ "./components/admins/stylists/WorkScheduleForm.js");
/* harmony import */ var _WorkScheduleList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./WorkScheduleList */ "./components/admins/stylists/WorkScheduleList.js");
/* harmony import */ var _reusable_components_DropdownList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reusable-components/DropdownList */ "./components/reusable-components/DropdownList.js");
/* harmony import */ var _reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../reusable-components/Input */ "./components/reusable-components/Input.js");
/* harmony import */ var _reusable_components_SaveButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../reusable-components/SaveButton */ "./components/reusable-components/SaveButton.js");
/* harmony import */ var _reusable_components_ImagePreview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../reusable-components/ImagePreview */ "./components/reusable-components/ImagePreview.js");
/* harmony import */ var _reusable_components_FileInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../reusable-components/FileInput */ "./components/reusable-components/FileInput.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\components\\admins\\stylists\\AddStylist.js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// React Modules



 // Stylesheet


 // Children










function AddStylist(_ref) {
  _s();

  var stylistInfo = _ref.stylistInfo,
      setStylistInfo = _ref.setStylistInfo,
      showModal = _ref.showModal,
      setShowModal = _ref.setShowModal,
      setActionMessage = _ref.setActionMessage,
      setHappening = _ref.setHappening,
      workSchedules = _ref.workSchedules,
      setWorkSchedules = _ref.setWorkSchedules,
      imageUrl = _ref.imageUrl,
      stylistId = _ref.stylistId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      validationError = _useState[0],
      setValidationError = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null),
      file = _useState2[0],
      setFile = _useState2[1];

  function handleChange(event) {
    event.preventDefault();
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;
    setStylistInfo(function (currentValue) {
      return _objectSpread(_objectSpread({}, currentValue), {}, (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)({}, name, value));
    });
  }

  function addUpdateStylist(_x) {
    return _addUpdateStylist.apply(this, arguments);
  }

  function _addUpdateStylist() {
    _addUpdateStylist = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(event) {
      var firstName, lastName, username, email, password, password2, stylistData, endpoint, response;
      return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              event.preventDefault();
              firstName = stylistInfo.firstName, lastName = stylistInfo.lastName, username = stylistInfo.username, email = stylistInfo.email, password = stylistInfo.password, password2 = stylistInfo.password2;

              if (!(!firstName || !lastName || !username || !email)) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

            case 4:
              if (stylistId) {
                _context.next = 9;
                break;
              }

              if (!(!password || !password2)) {
                _context.next = 7;
                break;
              }

              return _context.abrupt("return", setValidationError(true));

            case 7:
              if (!(password !== password2)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt("return", alert("Passwords didn't match"));

            case 9:
              if (workSchedules.length) {
                _context.next = 11;
                break;
              }

              return _context.abrupt("return", alert("Please add at least one work schedule"));

            case 11:
              // 
              stylistData = new FormData(); // To be able to send array and objects using FormData they must be stringified first. And at the backend 
              // they must parsed to have usability 

              stylistData.append("stylistInfo", JSON.stringify(stylistInfo));
              stylistData.append("file", file);
              stylistData.append("workSchedules", JSON.stringify(workSchedules));
              _context.prev = 15;
              setActionMessage("Saving"); // Default endpoint is add event

              endpoint = "http://localhost:7070/api/stylists/add-stylist"; // If stylistId is not empty string then update request should be sent and stylistId must be appended with
              // the FormData

              if (stylistId) {
                stylistData.append("_id", stylistId);
                endpoint = "http://localhost:7070/api/stylists/update";
              }

              _context.next = 21;
              return axios__WEBPACK_IMPORTED_MODULE_4___default().post(endpoint, stylistData);

            case 21:
              response = _context.sent;
              if (response.status === 201) setShowModal(false);
              setActionMessage(response.data);
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](15);
              setActionMessage(_context.t0.response.data);

            case 29:
              _context.prev = 29;
              setHappening("refetching afer adding");
              return _context.finish(29);

            case 32:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[15, 26, 29, 32]]);
    }));
    return _addUpdateStylist.apply(this, arguments);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().add_stylist),
    style: {
      display: showModal ? "block" : "none",
      width: "100%",
      height: "100%"
    },
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: "add_stylist_content",
      style: {
        display: "flex",
        marginBottom: "30px"
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().profile_picture),
        style: {
          width: "30%",
          backgroundColor: "#CCC"
        },
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: (_styles_ImageUpload_module_css__WEBPACK_IMPORTED_MODULE_16___default().image_uploader),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: (_styles_ImageUpload_module_css__WEBPACK_IMPORTED_MODULE_16___default().upload_container),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_ImagePreview__WEBPACK_IMPORTED_MODULE_12__.default, {
              file: file,
              imageUrl: imageUrl
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_FileInput__WEBPACK_IMPORTED_MODULE_13__.default, {
              file: file,
              setFile: setFile
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 132,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 25
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: "stylists_content",
        style: {
          width: "70%"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: "stylist_info",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
            type: "text",
            label: "First Name",
            name: "firstName",
            value: stylistInfo.firstName,
            placeholder: "Athena",
            onChange: handleChange,
            setData: setStylistInfo,
            error: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
            type: "text",
            label: "Last Name",
            name: "lastName",
            value: stylistInfo.lastName,
            placeholder: "Gorgeous",
            onChange: handleChange,
            setData: setStylistInfo,
            error: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 151,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
            type: "text",
            label: "Username",
            name: "username",
            value: stylistInfo.username,
            placeholder: "Gorgeous",
            onChange: handleChange,
            setData: setStylistInfo,
            error: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 162,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
            type: "email",
            label: "Email",
            name: "email",
            value: stylistInfo.email,
            placeholder: "athena@gmail.com",
            onChange: handleChange,
            setData: setStylistInfo,
            error: validationError
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: "",
            style: {
              display: stylistId ? "none" : "block"
            },
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
              type: "password",
              label: "Password",
              name: "password",
              value: stylistInfo.password,
              placeholder: "",
              onChange: handleChange,
              setData: setStylistInfo,
              error: validationError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 185,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_reusable_components_Input__WEBPACK_IMPORTED_MODULE_10__.default, {
              type: "password",
              label: "Retype Password",
              name: "password2",
              value: stylistInfo.password2,
              placeholder: "",
              onChange: handleChange,
              setData: setStylistInfo,
              error: validationError
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 184,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 140,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_WorkScheduleForm__WEBPACK_IMPORTED_MODULE_7__.default, {
          workSchedules: workSchedules,
          setWorkSchedules: setWorkSchedules
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_WorkScheduleList__WEBPACK_IMPORTED_MODULE_8__.default, {
          workSchedules: workSchedules,
          setWorkSchedules: setWorkSchedules
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
      onClick: function onClick() {
        return setShowModal(false);
      },
      children: "Cancel"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
      value: stylistId,
      onClick: addUpdateStylist,
      children: "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 124,
    columnNumber: 9
  }, this);
}

_s(AddStylist, "xDjuaKlBQBJd8IX1GhVD5q9rvU8=");

_c = AddStylist;
/* harmony default export */ __webpack_exports__["default"] = (AddStylist);

var _c;

$RefreshReg$(_c, "AddStylist");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvW3N0eWxpc3RJZF0uMWQzNzVhYjJhZmQxZDY3MzZlYWMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQSxTQUFTZSxVQUFULE9BV0c7QUFBQTs7QUFBQSxNQVZDQyxXQVVELFFBVkNBLFdBVUQ7QUFBQSxNQVRDQyxjQVNELFFBVENBLGNBU0Q7QUFBQSxNQVJDQyxTQVFELFFBUkNBLFNBUUQ7QUFBQSxNQVBDQyxZQU9ELFFBUENBLFlBT0Q7QUFBQSxNQU5DQyxnQkFNRCxRQU5DQSxnQkFNRDtBQUFBLE1BTENDLFlBS0QsUUFMQ0EsWUFLRDtBQUFBLE1BSkNDLGFBSUQsUUFKQ0EsYUFJRDtBQUFBLE1BSENDLGdCQUdELFFBSENBLGdCQUdEO0FBQUEsTUFGQ0MsUUFFRCxRQUZDQSxRQUVEO0FBQUEsTUFEQ0MsU0FDRCxRQURDQSxTQUNEOztBQUdDLGtCQUE4Q3hCLCtDQUFRLENBQUMsS0FBRCxDQUF0RDtBQUFBLE1BQU95QixlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFDQSxtQkFBd0IxQiwrQ0FBUSxDQUFDLElBQUQsQ0FBaEM7QUFBQSxNQUFPMkIsSUFBUDtBQUFBLE1BQWFDLE9BQWI7O0FBSUEsV0FBU0MsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFFekJBLElBQUFBLEtBQUssQ0FBQ0MsY0FBTjtBQUVBLHdCQUF3QkQsS0FBSyxDQUFDRSxNQUE5QjtBQUFBLFFBQVFDLElBQVIsaUJBQVFBLElBQVI7QUFBQSxRQUFjQyxLQUFkLGlCQUFjQSxLQUFkO0FBRUFsQixJQUFBQSxjQUFjLENBQUMsVUFBQW1CLFlBQVksRUFBSTtBQUMzQiw2Q0FDT0EsWUFEUCx1TUFFS0YsSUFGTCxFQUVZ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QixhQUFPLEVBQUV0QixnQkFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsR0o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBRko7QUF3R0g7O0dBNU1RWTs7S0FBQUE7QUErTVQsK0RBQWVBLFVBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hZG1pbnMvc3R5bGlzdHMvQWRkU3R5bGlzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBSZWFjdCBNb2R1bGVzXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhZGRVcGRhdGVTdHlsaXN0IH0gZnJvbSBcIi4uLy4uLy4uL2xpYnMvc3R5bGlzdC1tb2RpZmllcnMvYWRkVXBkYXRlU3R5bGlzdFwiO1xyXG5pbXBvcnQgeyB0aW1lcywgZGF5c09mVGhlV2VlayB9IGZyb20gXCIuLi8uLi8uLi9saWJzL2RhdGFcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL3N0eWxpc3RzL1N0eWxpc3RzLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IGltYWdlVXBsb2FkU3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvSW1hZ2VVcGxvYWQubW9kdWxlLmNzc1wiO1xyXG5cclxuLy8gQ2hpbGRyZW5cclxuaW1wb3J0IFdvcmtTY2hlZHVsZUZvcm0gZnJvbSBcIi4vV29ya1NjaGVkdWxlRm9ybVwiO1xyXG5pbXBvcnQgV29ya1NjaGVkdWxlTGlzdCBmcm9tIFwiLi9Xb3JrU2NoZWR1bGVMaXN0XCI7XHJcbmltcG9ydCBEcm9wZG93bkxpc3QgZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvRHJvcGRvd25MaXN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9JbnB1dFwiO1xyXG5pbXBvcnQgU2F2ZUJ1dHRvbiBmcm9tIFwiLi4vLi4vcmV1c2FibGUtY29tcG9uZW50cy9TYXZlQnV0dG9uXCI7XHJcbmltcG9ydCBJbWFnZVByZXZpZXcgZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvSW1hZ2VQcmV2aWV3XCI7XHJcbmltcG9ydCBGaWxlSW5wdXQgZnJvbSBcIi4uLy4uL3JldXNhYmxlLWNvbXBvbmVudHMvRmlsZUlucHV0XCI7XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIEFkZFN0eWxpc3QgKHsgXHJcbiAgICBzdHlsaXN0SW5mbywgXHJcbiAgICBzZXRTdHlsaXN0SW5mbywgXHJcbiAgICBzaG93TW9kYWwsIFxyXG4gICAgc2V0U2hvd01vZGFsLCBcclxuICAgIHNldEFjdGlvbk1lc3NhZ2UsIFxyXG4gICAgc2V0SGFwcGVuaW5nLCBcclxuICAgIHdvcmtTY2hlZHVsZXMsIFxyXG4gICAgc2V0V29ya1NjaGVkdWxlcyxcclxuICAgIGltYWdlVXJsLFxyXG4gICAgc3R5bGlzdElkIFxyXG59KSB7XHJcblxyXG4gICBcclxuICAgIGNvbnN0IFt2YWxpZGF0aW9uRXJyb3IsIHNldFZhbGlkYXRpb25FcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7IFxyXG4gICAgY29uc3QgW2ZpbGUsIHNldEZpbGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZShldmVudCkge1xyXG5cclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgIHNldFN0eWxpc3RJbmZvKGN1cnJlbnRWYWx1ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5jdXJyZW50VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBbbmFtZV06IHZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZFVwZGF0ZVN0eWxpc3QoZXZlbnQpIHtcclxuXHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGxhc3ROYW1lLCB1c2VybmFtZSwgZW1haWwsIHBhc3N3b3JkLCBwYXNzd29yZDIgfSA9IHN0eWxpc3RJbmZvO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICBpZighZmlyc3ROYW1lIHx8ICFsYXN0TmFtZSB8fCAhdXNlcm5hbWUgfHwgIWVtYWlsKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG5cclxuICAgICAgICAvLyBPbmx5IHZhbGlkYXRlIHBhc3N3b3JkcyB3aGVuIGEgbmV3IHN0eWxpc3QgaXMgYmVpbmcgYWRkZWQuIElmIHVwZGF0aW5nIGEgc3R5bGlzdEluZm8gdGhlbiBubyBuZWVkIHRvIHBlcmZvcm1cclxuICAgICAgICAvLyBwYXNzd29yZCB2YWxpZGF0aW9uc1xyXG4gICAgICAgIGlmKCFzdHlsaXN0SWQpIHtcclxuXHJcbiAgICAgICAgICAgIGlmKCFwYXNzd29yZCB8fCAhcGFzc3dvcmQyKSByZXR1cm4gc2V0VmFsaWRhdGlvbkVycm9yKHRydWUpO1xyXG4gICAgICAgICAgICBpZihwYXNzd29yZCAhPT0gcGFzc3dvcmQyKSByZXR1cm4gYWxlcnQoXCJQYXNzd29yZHMgZGlkbid0IG1hdGNoXCIpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCF3b3JrU2NoZWR1bGVzLmxlbmd0aCkgcmV0dXJuIGFsZXJ0KFwiUGxlYXNlIGFkZCBhdCBsZWFzdCBvbmUgd29yayBzY2hlZHVsZVwiKTtcclxuXHJcblxyXG4gICAgICAgIC8vIFxyXG4gICAgICAgIGNvbnN0IHN0eWxpc3REYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgIC8vIFRvIGJlIGFibGUgdG8gc2VuZCBhcnJheSBhbmQgb2JqZWN0cyB1c2luZyBGb3JtRGF0YSB0aGV5IG11c3QgYmUgc3RyaW5naWZpZWQgZmlyc3QuIEFuZCBhdCB0aGUgYmFja2VuZCBcclxuICAgICAgICAvLyB0aGV5IG11c3QgcGFyc2VkIHRvIGhhdmUgdXNhYmlsaXR5IFxyXG4gICAgICAgIHN0eWxpc3REYXRhLmFwcGVuZChcInN0eWxpc3RJbmZvXCIsIEpTT04uc3RyaW5naWZ5KHN0eWxpc3RJbmZvKSk7XHJcbiAgICAgICAgc3R5bGlzdERhdGEuYXBwZW5kKFwiZmlsZVwiLCBmaWxlKTtcclxuICAgICAgICBzdHlsaXN0RGF0YS5hcHBlbmQoXCJ3b3JrU2NoZWR1bGVzXCIsIEpTT04uc3RyaW5naWZ5KHdvcmtTY2hlZHVsZXMpKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIHNldEFjdGlvbk1lc3NhZ2UoXCJTYXZpbmdcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBEZWZhdWx0IGVuZHBvaW50IGlzIGFkZCBldmVudFxyXG4gICAgICAgICAgICBsZXQgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvYWRkLXN0eWxpc3RcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIElmIHN0eWxpc3RJZCBpcyBub3QgZW1wdHkgc3RyaW5nIHRoZW4gdXBkYXRlIHJlcXVlc3Qgc2hvdWxkIGJlIHNlbnQgYW5kIHN0eWxpc3RJZCBtdXN0IGJlIGFwcGVuZGVkIHdpdGhcclxuICAgICAgICAgICAgLy8gdGhlIEZvcm1EYXRhXHJcbiAgICAgICAgICAgIGlmIChzdHlsaXN0SWQpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxpc3REYXRhLmFwcGVuZChcIl9pZFwiLCBzdHlsaXN0SWQpO1xyXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NzA3MC9hcGkvc3R5bGlzdHMvdXBkYXRlXCJcclxuICAgICAgICAgICAgfSBcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgc3R5bGlzdERhdGEpO1xyXG5cclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDEpIHNldFNob3dNb2RhbChmYWxzZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlKGVycm9yLnJlc3BvbnNlLmRhdGEpO1xyXG5cclxuICAgICAgICB9IGZpbmFsbHkge1xyXG5cclxuICAgICAgICAgICAgc2V0SGFwcGVuaW5nKFwicmVmZXRjaGluZyBhZmVyIGFkZGluZ1wiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hZGRfc3R5bGlzdH0gc3R5bGUgPSB7e2Rpc3BsYXk6IHNob3dNb2RhbCA/IFwiYmxvY2tcIiA6IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCJ9fT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkX3N0eWxpc3RfY29udGVudFwiIHN0eWxlID0ge3tkaXNwbGF5OiBcImZsZXhcIiwgbWFyZ2luQm90dG9tOiBcIjMwcHhcIn19PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9waWN0dXJlfSBzdHlsZT17e3dpZHRoOiBcIjMwJVwiLCBiYWNrZ3JvdW5kQ29sb3I6IFwiI0NDQ1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ltYWdlVXBsb2FkU3R5bGVzLmltYWdlX3VwbG9hZGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2ltYWdlVXBsb2FkU3R5bGVzLnVwbG9hZF9jb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlUHJldmlldyBmaWxlID0ge2ZpbGV9IGltYWdlVXJsID0ge2ltYWdlVXJsfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbGVJbnB1dCBmaWxlID0ge2ZpbGV9IHNldEZpbGUgPSB7c2V0RmlsZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN0eWxpc3RzX2NvbnRlbnRcIiBzdHlsZSA9IHt7d2lkdGg6IFwiNzAlXCJ9fT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdHlsaXN0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsID0gXCJGaXJzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImZpcnN0TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHtzdHlsaXN0SW5mby5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiQXRoZW5hXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0U3R5bGlzdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImxhc3ROYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkdvcmdlb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0U3R5bGlzdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIkdvcmdlb3VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlID0ge2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0U3R5bGlzdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA9IFwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIkVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWUgPSBcImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLmVtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcImF0aGVuYUBnbWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSA9IHtzZXRTdHlsaXN0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0ge3ZhbGlkYXRpb25FcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBIaWRlIHRoZSBwYXNzd29yZCBpbnB1dCBmaWVsZHMgd2hlbiB1c2VyIGlzIHRyeWluZyB0byB1cGRhdGUganVzdCB0aGUgc3R5bGlzdEluZm8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgc3R5bGUgPSB7e2Rpc3BsYXk6IHN0eWxpc3RJZCA/IFwibm9uZVwiIDogXCJibG9ja1wifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwgPSBcIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB7c3R5bGlzdEluZm8ucGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXIgPSBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2UgPSB7aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSB7c2V0U3R5bGlzdEluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSB7dmFsaWRhdGlvbkVycm9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgPSBcInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbCA9IFwiUmV0eXBlIFBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lID0gXCJwYXNzd29yZDJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0ge3N0eWxpc3RJbmZvLnBhc3N3b3JkMn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlciA9IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZSA9IHtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YSA9IHtzZXRTdHlsaXN0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IHt2YWxpZGF0aW9uRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxXb3JrU2NoZWR1bGVGb3JtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3b3JrU2NoZWR1bGVzID0ge3dvcmtTY2hlZHVsZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRXb3JrU2NoZWR1bGVzID0ge3NldFdvcmtTY2hlZHVsZXN9IFxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFdvcmtTY2hlZHVsZUxpc3QgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmtTY2hlZHVsZXMgPSB7d29ya1NjaGVkdWxlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFdvcmtTY2hlZHVsZXMgPSB7c2V0V29ya1NjaGVkdWxlc30gXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrID0geygpID0+IHNldFNob3dNb2RhbChmYWxzZSl9PkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHZhbHVlID0ge3N0eWxpc3RJZH0gb25DbGljaz17YWRkVXBkYXRlU3R5bGlzdH0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkU3R5bGlzdDsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsImFkZFVwZGF0ZVN0eWxpc3QiLCJ0aW1lcyIsImRheXNPZlRoZVdlZWsiLCJzdHlsZXMiLCJpbWFnZVVwbG9hZFN0eWxlcyIsIldvcmtTY2hlZHVsZUZvcm0iLCJXb3JrU2NoZWR1bGVMaXN0IiwiRHJvcGRvd25MaXN0IiwiSW5wdXQiLCJTYXZlQnV0dG9uIiwiSW1hZ2VQcmV2aWV3IiwiRmlsZUlucHV0IiwiQWRkU3R5bGlzdCIsInN0eWxpc3RJbmZvIiwic2V0U3R5bGlzdEluZm8iLCJzaG93TW9kYWwiLCJzZXRTaG93TW9kYWwiLCJzZXRBY3Rpb25NZXNzYWdlIiwic2V0SGFwcGVuaW5nIiwid29ya1NjaGVkdWxlcyIsInNldFdvcmtTY2hlZHVsZXMiLCJpbWFnZVVybCIsInN0eWxpc3RJZCIsInZhbGlkYXRpb25FcnJvciIsInNldFZhbGlkYXRpb25FcnJvciIsImZpbGUiLCJzZXRGaWxlIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImN1cnJlbnRWYWx1ZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwidXNlcm5hbWUiLCJlbWFpbCIsInBhc3N3b3JkIiwicGFzc3dvcmQyIiwiYWxlcnQiLCJsZW5ndGgiLCJzdHlsaXN0RGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiSlNPTiIsInN0cmluZ2lmeSIsImVuZHBvaW50IiwicG9zdCIsInJlc3BvbnNlIiwic3RhdHVzIiwiZGF0YSIsImFkZF9zdHlsaXN0IiwiZGlzcGxheSIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwicHJvZmlsZV9waWN0dXJlIiwiYmFja2dyb3VuZENvbG9yIiwiaW1hZ2VfdXBsb2FkZXIiLCJ1cGxvYWRfY29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==
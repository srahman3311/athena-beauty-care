"use strict";
self["webpackHotUpdate_N_E"]("pages/stylists/[stylistId]",{

/***/ "./pages/stylists/[stylistId].js":
/*!***************************************!*\
  !*** ./pages/stylists/[stylistId].js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Stylist; }
/* harmony export */ });
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/admins/control-panel/ControlPanel */ "./components/admins/control-panel/ControlPanel.js");
/* harmony import */ var _components_reusable_components_profile_ProfilePicture__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/reusable-components/profile/ProfilePicture */ "./components/reusable-components/profile/ProfilePicture.js");
/* harmony import */ var _components_reusable_components_profile_NameTitle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/reusable-components/profile/NameTitle */ "./components/reusable-components/profile/NameTitle.js");
/* harmony import */ var _components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/reusable-components/data-table/DataTable */ "./components/reusable-components/data-table/DataTable.js");
/* harmony import */ var _components_reusable_components_SectionHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/reusable-components/SectionHeader */ "./components/reusable-components/SectionHeader.js");
/* harmony import */ var _components_reusable_components_profile_IndividualInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/reusable-components/profile/IndividualInfo */ "./components/reusable-components/profile/IndividualInfo.js");
/* harmony import */ var _components_admins_stylists_AddStylist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/admins/stylists/AddStylist */ "./components/admins/stylists/AddStylist.js");
/* harmony import */ var _components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/reusable-components/Message */ "./components/reusable-components/Message.js");
/* harmony import */ var _styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../styles/stylists/Stylists.module.css */ "./styles/stylists/Stylists.module.css");
/* harmony import */ var _styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "D:\\programming\\fiverr-projects\\nextjs-projects\\athena-beauty-care\\frontend-athena-beauty-care\\pages\\stylists\\[stylistId].js",
    _s = $RefreshSig$();



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//React & Other Modules


 // Components








 // Stylesheet



function Stylist() {
  _s();

  var imageSrc = "https://cdn.pixabay.com/photo/2021/01/04/10/41/icon-5887126_1280.png";
  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
  var stylistId = router.query.stylistId;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)("Fetching"),
      happening = _useState[0],
      setHappening = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      actionMessage = _useState2[0],
      setActionMessage = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      showModal = _useState3[0],
      setShowModal = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    password2: ""
  }),
      stylistInfo = _useState4[0],
      setStylistInfo = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      workSchedules = _useState5[0],
      setWorkSchedules = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      loading = _useState7[0],
      setLoading = _useState7[1];

  var _useState8 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(null),
      stylist = _useState8[0],
      setStylist = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      stylistTableData = _useState9[0],
      setStylistTableData = _useState9[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    setHappening("Fetchin");

    function fetchData() {
      return _fetchData.apply(this, arguments);
    }

    function _fetchData() {
      _fetchData = (0,D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var response, newData;
        return D_programming_fiverr_projects_nextjs_projects_athena_beauty_care_frontend_athena_beauty_care_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!stylistId) {
                  _context.next = 21;
                  break;
                }

                _context.prev = 1;
                setLoading(true);
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_5___default().get("http://localhost:7070/api/stylists/" + stylistId);

              case 5:
                response = _context.sent;
                console.log(response.data);
                setStylist(response.data);
                setStylistInfo(function (currentValue) {
                  return _objectSpread(_objectSpread({}, currentValue), {}, {
                    firstName: response.data.firstName,
                    lastName: response.data.lastName,
                    username: response.data.username,
                    email: response.data.email
                  });
                });
                setWorkSchedules(response.data.workSchedule);
                newData = [];
                response.data.workSchedule.forEach(function (schedule, index) {
                  newData.push({
                    id: index + 1,
                    data: [schedule.location, schedule.day, schedule.startTime, schedule.endTime]
                  });
                });
                setStylistTableData(newData);
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](1);
                setError(_context.t0);

              case 18:
                _context.prev = 18;
                setLoading(false);
                return _context.finish(18);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[1, 15, 18, 21]]);
      }));
      return _fetchData.apply(this, arguments);
    }

    fetchData();
  }, [router.isReady, happening]);
  if (loading) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
    children: "Loading...."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 119,
    columnNumber: 24
  }, this);

  if (stylist !== null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
      className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().stylist_profile),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_admins_control_panel_ControlPanel__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
        className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().stylistProfile_content),
        style: {
          display: showModal ? "none" : "flex"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
          onClick: function onClick() {
            return setShowModal(true);
          },
          children: "Update"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().stylist_summary),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_ProfilePicture__WEBPACK_IMPORTED_MODULE_7__.default, {
            imageSrc: stylist.imageUrl !== "undefined" ? stylist.imageUrl : imageSrc
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_NameTitle__WEBPACK_IMPORTED_MODULE_8__.default, {
            name: "".concat(stylist.firstName, " ").concat(stylist.lastName)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("p", {
            children: "Head Stylist"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 135,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("button", {
            children: "View Calendar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 136,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
          className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().stylist_details),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().general_info),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_SectionHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
              content: "General Information"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
              className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().generalInfo_content),
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_IndividualInfo__WEBPACK_IMPORTED_MODULE_11__.default, {
                infoTitle: "First Name",
                info: stylist.firstName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 143,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_IndividualInfo__WEBPACK_IMPORTED_MODULE_11__.default, {
                infoTitle: "Last Name",
                info: stylist.lastName
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 144,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_IndividualInfo__WEBPACK_IMPORTED_MODULE_11__.default, {
                infoTitle: "Email",
                info: stylist.email
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 145,
                columnNumber: 33
              }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_profile_IndividualInfo__WEBPACK_IMPORTED_MODULE_11__.default, {
                infoTitle: "Phone",
                info: "+8801717062884"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 146,
                columnNumber: 33
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {
            className: (_styles_stylists_Stylists_module_css__WEBPACK_IMPORTED_MODULE_15___default().workSchedule_table),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_SectionHeader__WEBPACK_IMPORTED_MODULE_10__.default, {
              content: "Work Schedule"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 29
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_data_table_DataTable__WEBPACK_IMPORTED_MODULE_9__.default, {
              tableHeaders: ["Location", "Day", "Start Time", "End Time"],
              tableData: stylistTableData,
              dynamicClass: "workSchedule_table"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 154,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 138,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_admins_stylists_AddStylist__WEBPACK_IMPORTED_MODULE_12__.default, {
        stylistInfo: stylistInfo,
        setStylistInfo: setStylistInfo,
        workSchedules: workSchedules,
        setWorkSchedules: setWorkSchedules,
        showModal: showModal,
        setShowModal: setShowModal,
        setActionMessage: setActionMessage,
        setHappening: setHappening,
        imageUrl: stylist.imageUrl,
        stylistId: stylist._id.toString()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)(_components_reusable_components_Message__WEBPACK_IMPORTED_MODULE_13__.default, {
        message: actionMessage,
        setActionMessage: setActionMessage
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }, this);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxDEV)("div", {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 189,
    columnNumber: 12
  }, this);
}

_s(Stylist, "2rYvf8ELleTyMStFCZJg4+j6zxg=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];
});

_c = Stylist;

var _c;

$RefreshReg$(_c, "Stylist");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc3R5bGlzdHMvW3N0eWxpc3RJZF0uMmM1MWJlMmJiODBlOWIxOGUzZTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7Q0FNQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQVFlLFNBQVNhLE9BQVQsR0FBb0I7QUFBQTs7QUFFL0IsTUFBTUMsUUFBUSxHQUFHLHNFQUFqQjtBQUVBLE1BQU1DLE1BQU0sR0FBR2Ysc0RBQVMsRUFBeEI7QUFFQSxNQUFRZ0IsU0FBUixHQUFzQkQsTUFBTSxDQUFDRSxLQUE3QixDQUFRRCxTQUFSOztBQUVBLGtCQUFrQ2QsK0NBQVEsQ0FBQyxVQUFELENBQTFDO0FBQUEsTUFBT2dCLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQTBDakIsK0NBQVEsQ0FBQyxJQUFELENBQWxEO0FBQUEsTUFBT2tCLGFBQVA7QUFBQSxNQUFzQkMsZ0JBQXRCOztBQUNBLG1CQUFrQ25CLCtDQUFRLENBQUMsS0FBRCxDQUExQztBQUFBLE1BQU9vQixTQUFQO0FBQUEsTUFBa0JDLFlBQWxCOztBQUNBLG1CQUFzQ3JCLCtDQUFRLENBQUM7QUFDM0NzQixJQUFBQSxTQUFTLEVBQUUsRUFEZ0M7QUFFM0NDLElBQUFBLFFBQVEsRUFBRSxFQUZpQztBQUczQ0MsSUFBQUEsUUFBUSxFQUFFLEVBSGlDO0FBSTNDQyxJQUFBQSxLQUFLLEVBQUUsRUFKb0M7QUFLM0NDLElBQUFBLFFBQVEsRUFBRSxFQUxpQztBQU0zQ0MsSUFBQUEsU0FBUyxFQUFFO0FBTmdDLEdBQUQsQ0FBOUM7QUFBQSxNQUFPQyxXQUFQO0FBQUEsTUFBb0JDLGNBQXBCOztBQVFBLG1CQUEwQzdCLCtDQUFRLENBQUMsRUFBRCxDQUFsRDtBQUFBLE1BQU84QixhQUFQO0FBQUEsTUFBc0JDLGdCQUF0Qjs7QUFDQSxtQkFBMEIvQiwrQ0FBUSxDQUFDLElBQUQsQ0FBbEM7QUFBQSxNQUFPZ0MsS0FBUDtBQUFBLE1BQWNDLFFBQWQ7O0FBQ0EsbUJBQThCakMsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT2tDLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQThCbkMsK0NBQVEsQ0FBQyxJQUFELENBQXRDO0FBQUEsTUFBT29DLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdEckMsK0NBQVEsQ0FBQyxFQUFELENBQXhEO0FBQUEsTUFBT3NDLGdCQUFQO0FBQUEsTUFBeUJDLG1CQUF6Qjs7QUFJQXhDLEVBQUFBLGdEQUFTLENBQUMsWUFBTTtBQUVaa0IsSUFBQUEsWUFBWSxDQUFDLFNBQUQsQ0FBWjs7QUFGWSxhQUlHdUIsU0FKSDtBQUFBO0FBQUE7O0FBQUE7QUFBQSwrWUFJWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHTzFCLFNBSFA7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFPWXFCLGdCQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBUFo7QUFBQSx1QkFTbUNsQyxnREFBQSxDQUFVLHdDQUF3Q2EsU0FBbEQsQ0FUbkM7O0FBQUE7QUFTa0I0QixnQkFBQUEsUUFUbEI7QUFXWUMsZ0JBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixRQUFRLENBQUNHLElBQXJCO0FBRUFSLGdCQUFBQSxVQUFVLENBQUNLLFFBQVEsQ0FBQ0csSUFBVixDQUFWO0FBQ0FoQixnQkFBQUEsY0FBYyxDQUFDLFVBQUFpQixZQUFZLEVBQUk7QUFDM0IseURBQ09BLFlBRFA7QUFFSXhCLG9CQUFBQSxTQUFTLEVBQUVvQixRQUFRLENBQUNHLElBQVQsQ0FBY3ZCLFNBRjdCO0FBR0lDLG9CQUFBQSxRQUFRLEVBQUVtQixRQUFRLENBQUNHLElBQVQsQ0FBY3RCLFFBSDVCO0FBSUlDLG9CQUFBQSxRQUFRLEVBQUVrQixRQUFRLENBQUNHLElBQVQsQ0FBY3JCLFFBSjVCO0FBS0lDLG9CQUFBQSxLQUFLLEVBQUVpQixRQUFRLENBQUNHLElBQVQsQ0FBY3BCO0FBTHpCO0FBT0gsaUJBUmEsQ0FBZDtBQVNBTSxnQkFBQUEsZ0JBQWdCLENBQUNXLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxZQUFmLENBQWhCO0FBRU1DLGdCQUFBQSxPQXpCbEIsR0F5QjRCLEVBekI1QjtBQTJCWU4sZ0JBQUFBLFFBQVEsQ0FBQ0csSUFBVCxDQUFjRSxZQUFkLENBQTJCRSxPQUEzQixDQUFtQyxVQUFDQyxRQUFELEVBQVdDLEtBQVgsRUFBcUI7QUFDcERILGtCQUFBQSxPQUFPLENBQUNJLElBQVIsQ0FBYTtBQUNUQyxvQkFBQUEsRUFBRSxFQUFFRixLQUFLLEdBQUcsQ0FESDtBQUVUTixvQkFBQUEsSUFBSSxFQUFFLENBQ0ZLLFFBQVEsQ0FBQ0ksUUFEUCxFQUVGSixRQUFRLENBQUNLLEdBRlAsRUFHRkwsUUFBUSxDQUFDTSxTQUhQLEVBSUZOLFFBQVEsQ0FBQ08sT0FKUDtBQUZHLG1CQUFiO0FBU0gsaUJBVkQ7QUFZQWxCLGdCQUFBQSxtQkFBbUIsQ0FBQ1MsT0FBRCxDQUFuQjtBQXZDWjtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQTRDWWYsZ0JBQUFBLFFBQVEsYUFBUjs7QUE1Q1o7QUFBQTtBQWdEWUUsZ0JBQUFBLFVBQVUsQ0FBQyxLQUFELENBQVY7QUFoRFo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FKWTtBQUFBO0FBQUE7O0FBMERaSyxJQUFBQSxTQUFTO0FBRVosR0E1RFEsRUE0RE4sQ0FBQzNCLE1BQU0sQ0FBQzZDLE9BQVIsRUFBaUIxQyxTQUFqQixDQTVETSxDQUFUO0FBZ0VBLE1BQUdrQixPQUFILEVBQVksb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDs7QUFFWixNQUFHRSxPQUFPLEtBQUssSUFBZixFQUFxQjtBQUVqQix3QkFDSTtBQUFLLGVBQVMsRUFBRTFCLDhGQUFoQjtBQUFBLDhCQUVJLCtEQUFDLGtGQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGSixlQUdJO0FBQUssaUJBQVMsRUFBRUEscUdBQWhCO0FBQStDLGFBQUssRUFBSTtBQUFDbUQsVUFBQUEsT0FBTyxFQUFFekMsU0FBUyxHQUFHLE1BQUgsR0FBWTtBQUEvQixTQUF4RDtBQUFBLGdDQUNJO0FBQVEsaUJBQU8sRUFBRTtBQUFBLG1CQUFNQyxZQUFZLENBQUMsSUFBRCxDQUFsQjtBQUFBLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURKLGVBR0k7QUFBSyxtQkFBUyxFQUFFWCw4RkFBaEI7QUFBQSxrQ0FDSSwrREFBQywyRkFBRDtBQUNJLG9CQUFRLEVBQUkwQixPQUFPLENBQUMyQixRQUFSLEtBQXFCLFdBQXJCLEdBQW1DM0IsT0FBTyxDQUFDMkIsUUFBM0MsR0FBc0RuRDtBQUR0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLGVBSUksK0RBQUMsc0ZBQUQ7QUFBVyxnQkFBSSxZQUFPd0IsT0FBTyxDQUFDZCxTQUFmLGNBQTRCYyxPQUFPLENBQUNiLFFBQXBDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFKSixlQUtJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUxKLGVBTUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUhKLGVBV0k7QUFBSyxtQkFBUyxFQUFFYiw4RkFBaEI7QUFBQSxrQ0FFSTtBQUFLLHFCQUFTLEVBQUVBLDJGQUFoQjtBQUFBLG9DQUNJLCtEQUFDLG1GQUFEO0FBQWUscUJBQU8sRUFBRztBQUF6QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLGVBRUk7QUFBSyx1QkFBUyxFQUFFQSxrR0FBaEI7QUFBQSxzQ0FDSSwrREFBQyw0RkFBRDtBQUFnQix5QkFBUyxFQUFHLFlBQTVCO0FBQXlDLG9CQUFJLEVBQUkwQixPQUFPLENBQUNkO0FBQXpEO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosZUFFSSwrREFBQyw0RkFBRDtBQUFnQix5QkFBUyxFQUFHLFdBQTVCO0FBQXdDLG9CQUFJLEVBQUljLE9BQU8sQ0FBQ2I7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixlQUdJLCtEQUFDLDRGQUFEO0FBQWdCLHlCQUFTLEVBQUcsT0FBNUI7QUFBb0Msb0JBQUksRUFBSWEsT0FBTyxDQUFDWDtBQUFwRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUhKLGVBSUksK0RBQUMsNEZBQUQ7QUFBZ0IseUJBQVMsRUFBRyxPQUE1QjtBQUFvQyxvQkFBSSxFQUFHO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFGSixlQWNJO0FBQUsscUJBQVMsRUFBRWYsaUdBQWhCO0FBQUEsb0NBQ0ksK0RBQUMsbUZBQUQ7QUFBZSxxQkFBTyxFQUFHO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREosZUFFSSwrREFBQyx5RkFBRDtBQUNJLDBCQUFZLEVBQUksQ0FBQyxVQUFELEVBQWEsS0FBYixFQUFvQixZQUFwQixFQUFrQyxVQUFsQyxDQURwQjtBQUVJLHVCQUFTLEVBQUk0QixnQkFGakI7QUFHSSwwQkFBWSxFQUFHO0FBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQTJDSSwrREFBQyw0RUFBRDtBQUNJLG1CQUFXLEVBQUlWLFdBRG5CO0FBRUksc0JBQWMsRUFBSUMsY0FGdEI7QUFHSSxxQkFBYSxFQUFFQyxhQUhuQjtBQUlJLHdCQUFnQixFQUFFQyxnQkFKdEI7QUFLSSxpQkFBUyxFQUFJWCxTQUxqQjtBQU1JLG9CQUFZLEVBQUlDLFlBTnBCO0FBT0ksd0JBQWdCLEVBQUlGLGdCQVB4QjtBQVFJLG9CQUFZLEVBQUlGLFlBUnBCO0FBU0ksZ0JBQVEsRUFBSW1CLE9BQU8sQ0FBQzJCLFFBVHhCO0FBVUksaUJBQVMsRUFBSTNCLE9BQU8sQ0FBQ2dDLEdBQVIsQ0FBWUMsUUFBWjtBQVZqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBM0NKLGVBd0RJLCtEQUFDLDZFQUFEO0FBQ0ksZUFBTyxFQUFJbkQsYUFEZjtBQUVJLHdCQUFnQixFQUFJQztBQUZ4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeERKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBZ0VIOztBQUVELHNCQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUVIOztHQW5LdUJSO1VBSUxiOzs7S0FKS2EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3R5bGlzdHMvW3N0eWxpc3RJZF0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy9SZWFjdCAmIE90aGVyIE1vZHVsZXNcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcblxyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgQ29udHJvbFBhbmVsIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2FkbWlucy9jb250cm9sLXBhbmVsL0NvbnRyb2xQYW5lbFwiXHJcbmltcG9ydCBQcm9maWxlUGljdHVyZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL3Byb2ZpbGUvUHJvZmlsZVBpY3R1cmVcIjtcclxuaW1wb3J0IE5hbWVUaXRsZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL3Byb2ZpbGUvTmFtZVRpdGxlXCI7XHJcbmltcG9ydCBEYXRhVGFibGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvcmV1c2FibGUtY29tcG9uZW50cy9kYXRhLXRhYmxlL0RhdGFUYWJsZVwiO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRlciBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL1NlY3Rpb25IZWFkZXJcIjtcclxuaW1wb3J0IEluZGl2aWR1YWxJbmZvIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL3JldXNhYmxlLWNvbXBvbmVudHMvcHJvZmlsZS9JbmRpdmlkdWFsSW5mb1wiO1xyXG5pbXBvcnQgQWRkU3R5bGlzdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9hZG1pbnMvc3R5bGlzdHMvQWRkU3R5bGlzdFwiO1xyXG5pbXBvcnQgTWVzc2FnZSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9yZXVzYWJsZS1jb21wb25lbnRzL01lc3NhZ2VcIjtcclxuXHJcbi8vIFN0eWxlc2hlZXRcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL3N0eWxpc3RzL1N0eWxpc3RzLm1vZHVsZS5jc3NcIjtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0eWxpc3QgKCkge1xyXG5cclxuICAgIGNvbnN0IGltYWdlU3JjID0gXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIxLzAxLzA0LzEwLzQxL2ljb24tNTg4NzEyNl8xMjgwLnBuZ1wiO1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgc3R5bGlzdElkIH0gPSByb3V0ZXIucXVlcnk7XHJcbiAgICBcclxuICAgIGNvbnN0IFtoYXBwZW5pbmcsIHNldEhhcHBlbmluZ10gPSB1c2VTdGF0ZShcIkZldGNoaW5nXCIpO1xyXG4gICAgY29uc3QgW2FjdGlvbk1lc3NhZ2UsIHNldEFjdGlvbk1lc3NhZ2VdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc2hvd01vZGFsLCBzZXRTaG93TW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0eWxpc3RJbmZvLCBzZXRTdHlsaXN0SW5mb10gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkMjogXCJcIlxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBbd29ya1NjaGVkdWxlcywgc2V0V29ya1NjaGVkdWxlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW3N0eWxpc3QsIHNldFN0eWxpc3RdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgICBjb25zdCBbc3R5bGlzdFRhYmxlRGF0YSwgc2V0U3R5bGlzdFRhYmxlRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG5cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG5cclxuICAgICAgICBzZXRIYXBwZW5pbmcoXCJGZXRjaGluXCIpO1xyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XHJcbiAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgaWYoc3R5bGlzdElkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoXCJodHRwOi8vbG9jYWxob3N0OjcwNzAvYXBpL3N0eWxpc3RzL1wiICsgc3R5bGlzdElkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldFN0eWxpc3QocmVzcG9uc2UuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGlzdEluZm8oY3VycmVudFZhbHVlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmN1cnJlbnRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcnN0TmFtZTogcmVzcG9uc2UuZGF0YS5maXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0TmFtZTogcmVzcG9uc2UuZGF0YS5sYXN0TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiByZXNwb25zZS5kYXRhLnVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IHJlc3BvbnNlLmRhdGEuZW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFdvcmtTY2hlZHVsZXMocmVzcG9uc2UuZGF0YS53b3JrU2NoZWR1bGUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmRhdGEud29ya1NjaGVkdWxlLmZvckVhY2goKHNjaGVkdWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdEYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZS5sb2NhdGlvbiwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZWR1bGUuZGF5LCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY2hlZHVsZS5zdGFydFRpbWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjaGVkdWxlLmVuZFRpbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U3R5bGlzdFRhYmxlRGF0YShuZXdEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0RXJyb3IoZXJyb3IpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZmluYWxseSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZmV0Y2hEYXRhKCk7XHJcbiAgICAgICBcclxuICAgIH0sIFtyb3V0ZXIuaXNSZWFkeSwgaGFwcGVuaW5nXSlcclxuXHJcbiAgICBcclxuXHJcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uLjwvZGl2PlxyXG5cclxuICAgIGlmKHN0eWxpc3QgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zdHlsaXN0X3Byb2ZpbGV9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxDb250cm9sUGFuZWwgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdFByb2ZpbGVfY29udGVudH0gc3R5bGUgPSB7e2Rpc3BsYXk6IHNob3dNb2RhbCA/IFwibm9uZVwiIDogXCJmbGV4XCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFNob3dNb2RhbCh0cnVlKX0+VXBkYXRlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdF9zdW1tYXJ5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2ZpbGVQaWN0dXJlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VTcmMgPSB7c3R5bGlzdC5pbWFnZVVybCAhPT0gXCJ1bmRlZmluZWRcIiA/IHN0eWxpc3QuaW1hZ2VVcmwgOiBpbWFnZVNyY30gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOYW1lVGl0bGUgbmFtZSA9IHtgJHtzdHlsaXN0LmZpcnN0TmFtZX0gJHtzdHlsaXN0Lmxhc3ROYW1lfWB9ICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5IZWFkIFN0eWxpc3Q8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+VmlldyBDYWxlbmRhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc3R5bGlzdF9kZXRhaWxzfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZ2VuZXJhbF9pbmZvfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWN0aW9uSGVhZGVyIGNvbnRlbnQgPSBcIkdlbmVyYWwgSW5mb3JtYXRpb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5nZW5lcmFsSW5mb19jb250ZW50fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5kaXZpZHVhbEluZm8gaW5mb1RpdGxlID0gXCJGaXJzdCBOYW1lXCIgaW5mbyA9IHtzdHlsaXN0LmZpcnN0TmFtZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5kaXZpZHVhbEluZm8gaW5mb1RpdGxlID0gXCJMYXN0IE5hbWVcIiBpbmZvID0ge3N0eWxpc3QubGFzdE5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZGl2aWR1YWxJbmZvIGluZm9UaXRsZSA9IFwiRW1haWxcIiBpbmZvID0ge3N0eWxpc3QuZW1haWx9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEluZGl2aWR1YWxJbmZvIGluZm9UaXRsZSA9IFwiUGhvbmVcIiBpbmZvID0gXCIrODgwMTcxNzA2Mjg4NFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrU2NoZWR1bGVfdGFibGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlY3Rpb25IZWFkZXIgY29udGVudCA9IFwiV29yayBTY2hlZHVsZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0YVRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFibGVIZWFkZXJzID0ge1tcIkxvY2F0aW9uXCIsIFwiRGF5XCIsIFwiU3RhcnQgVGltZVwiLCBcIkVuZCBUaW1lXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmxlRGF0YSA9IHtzdHlsaXN0VGFibGVEYXRhfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkeW5hbWljQ2xhc3MgPSBcIndvcmtTY2hlZHVsZV90YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8QWRkU3R5bGlzdCBcclxuICAgICAgICAgICAgICAgICAgICBzdHlsaXN0SW5mbyA9IHtzdHlsaXN0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICBzZXRTdHlsaXN0SW5mbyA9IHtzZXRTdHlsaXN0SW5mb31cclxuICAgICAgICAgICAgICAgICAgICB3b3JrU2NoZWR1bGVzPXt3b3JrU2NoZWR1bGVzfVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFdvcmtTY2hlZHVsZXM9e3NldFdvcmtTY2hlZHVsZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgc2hvd01vZGFsID0ge3Nob3dNb2RhbH0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2hvd01vZGFsID0ge3NldFNob3dNb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICBzZXRBY3Rpb25NZXNzYWdlID0ge3NldEFjdGlvbk1lc3NhZ2V9IFxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhhcHBlbmluZyA9IHtzZXRIYXBwZW5pbmd9XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmwgPSB7c3R5bGlzdC5pbWFnZVVybH1cclxuICAgICAgICAgICAgICAgICAgICBzdHlsaXN0SWQgPSB7c3R5bGlzdC5faWQudG9TdHJpbmcoKX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UgPSB7YWN0aW9uTWVzc2FnZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0QWN0aW9uTWVzc2FnZSA9IHtzZXRBY3Rpb25NZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIDxkaXY+PC9kaXY+O1xyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRyb2xQYW5lbCIsIlByb2ZpbGVQaWN0dXJlIiwiTmFtZVRpdGxlIiwiRGF0YVRhYmxlIiwiU2VjdGlvbkhlYWRlciIsIkluZGl2aWR1YWxJbmZvIiwiQWRkU3R5bGlzdCIsIk1lc3NhZ2UiLCJzdHlsZXMiLCJTdHlsaXN0IiwiaW1hZ2VTcmMiLCJyb3V0ZXIiLCJzdHlsaXN0SWQiLCJxdWVyeSIsImhhcHBlbmluZyIsInNldEhhcHBlbmluZyIsImFjdGlvbk1lc3NhZ2UiLCJzZXRBY3Rpb25NZXNzYWdlIiwic2hvd01vZGFsIiwic2V0U2hvd01vZGFsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJwYXNzd29yZDIiLCJzdHlsaXN0SW5mbyIsInNldFN0eWxpc3RJbmZvIiwid29ya1NjaGVkdWxlcyIsInNldFdvcmtTY2hlZHVsZXMiLCJlcnJvciIsInNldEVycm9yIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdHlsaXN0Iiwic2V0U3R5bGlzdCIsInN0eWxpc3RUYWJsZURhdGEiLCJzZXRTdHlsaXN0VGFibGVEYXRhIiwiZmV0Y2hEYXRhIiwiZ2V0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImN1cnJlbnRWYWx1ZSIsIndvcmtTY2hlZHVsZSIsIm5ld0RhdGEiLCJmb3JFYWNoIiwic2NoZWR1bGUiLCJpbmRleCIsInB1c2giLCJpZCIsImxvY2F0aW9uIiwiZGF5Iiwic3RhcnRUaW1lIiwiZW5kVGltZSIsImlzUmVhZHkiLCJzdHlsaXN0X3Byb2ZpbGUiLCJzdHlsaXN0UHJvZmlsZV9jb250ZW50IiwiZGlzcGxheSIsInN0eWxpc3Rfc3VtbWFyeSIsImltYWdlVXJsIiwic3R5bGlzdF9kZXRhaWxzIiwiZ2VuZXJhbF9pbmZvIiwiZ2VuZXJhbEluZm9fY29udGVudCIsIndvcmtTY2hlZHVsZV90YWJsZSIsIl9pZCIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: callAPI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callAPI", function() { return callAPI; });
function callAPI() {
  return "http://localhost:8080/api/";
}

/***/ }),

/***/ "./modules/wrappedMenu/actions.js":
/*!****************************************!*\
  !*** ./modules/wrappedMenu/actions.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constrants */ "./modules/wrappedMenu/constrants.js");
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constrants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./modules/wrappedMenu/components/wrappedMenu.js":
/*!*******************************************************!*\
  !*** ./modules/wrappedMenu/components/wrappedMenu.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Menu */ "@material-ui/core/Menu");
/* harmony import */ var _material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "@material-ui/core/MenuItem");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! material-ui-popup-state */ "material-ui-popup-state");
/* harmony import */ var material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_icons_kit_icomoon_home__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons-kit/icomoon/home */ "react-icons-kit/icomoon/home");
/* harmony import */ var react_icons_kit_icomoon_home__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_icomoon_home__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_kit_md_ic_assignment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons-kit/md/ic_assignment */ "react-icons-kit/md/ic_assignment");
/* harmony import */ var react_icons_kit_md_ic_assignment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_assignment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons-kit/fa/user */ "react-icons-kit/fa/user");
/* harmony import */ var react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var react_icons_kit_fa_envelopeO__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-icons-kit/fa/envelopeO */ "react-icons-kit/fa/envelopeO");
/* harmony import */ var react_icons_kit_fa_envelopeO__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_envelopeO__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-icons-kit/fa/userPlus */ "react-icons-kit/fa/userPlus");
/* harmony import */ var react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-icons-kit/fa/times */ "react-icons-kit/fa/times");
/* harmony import */ var react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react-icons-kit/fa/thList */ "react-icons-kit/fa/thList");
/* harmony import */ var react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-icons-kit/fa/ellipsisV */ "react-icons-kit/fa/ellipsisV");
/* harmony import */ var react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_icons_kit_fa_pencil__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons-kit/fa/pencil */ "react-icons-kit/fa/pencil");
/* harmony import */ var react_icons_kit_fa_pencil__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_pencil__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-icons-kit/md/ic_arrow_back */ "react-icons-kit/md/ic_arrow_back");
/* harmony import */ var react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons-kit/md/ic_list */ "react-icons-kit/md/ic_list");
/* harmony import */ var react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_31__);








var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\wrappedMenu\\components\\wrappedMenu.js";

























var WrappedMenu =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(WrappedMenu, _Component);

  function WrappedMenu(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WrappedMenu);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WrappedMenu).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "handleLogout", function () {
      js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.set("token", "", {
        expires: 0.000
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.set("roleName", "", {
        expires: 0.000
      });
      js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.set('id', "", {
        expires: 0
      });
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin");
    });

    _this.state = {
      toggle: false,
      openMenu: false,
      route: "",
      loading: true,
      oldRoute: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WrappedMenu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        route: next_router__WEBPACK_IMPORTED_MODULE_10___default.a.router.route.substring(7, next_router__WEBPACK_IMPORTED_MODULE_10___default.a.router.route.length)
      });

      if (js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("token") === undefined || js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("token") === "") {
        next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin");
      }

      if (js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("roleName") === "ROLE_WRITER") next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/");
      this.setState({
        loading: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("token") === undefined || js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("token") === "" || js_cookie__WEBPACK_IMPORTED_MODULE_29___default.a.get("roleName") === "ROLE_WRITER") {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });
      }

      var handleToggle = function handleToggle() {
        _this2.setState({
          toggle: !_this2.state.toggle
        });
      };

      var handleClick = function handleClick() {
        _this2.setState({
          openMenu: !_this2.state.openMenu
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
        id: "2453628393",
        __self: this
      }, "@media only screen and (max-width:720px){.wrapped-icon.jsx-2453628393{opacity :1;}}.line.jsx-2453628393{width:300px;left:-320px;height:40px;position:absolute;background:#8574d4;z-index:-1;-webkit-transition:all 0.3s;transition:all 0.3s;}.line.jsx-2453628393:after{content:\"\";position:absolute;left:0;bottom:0;width:0;height:0;border-left:20px solid white;border-top:20px solid transparent;border-bottom:20px solid transparent;}.line.jsx-2453628393:before{content:\"\";position:absolute;right:-20px;bottom:0;width:0;height:0;border-left:20px solid #8574d4;border-top:20px solid transparent;border-bottom:20px solid transparent;}.item.jsx-2453628393:hover .line.jsx-2453628393{left:-20px;-webkit-transition:all 0.3s;transition:all 0.3s;}.item.jsx-2453628393{margin-top:20px;cursor:pointer;}.active-item.jsx-2453628393 .line.jsx-2453628393{left:-20px;}.active-item.jsx-2453628393{margin-top:20px;cursor:pointer;}body.jsx-2453628393{padding:0px!important;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cmFwcGVkTWVudVxcY29tcG9uZW50c1xcd3JhcHBlZE1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VxQixBQUs0QixBQUdTLEFBU0QsQUFXQSxBQVdHLEFBSUssQUFJTCxBQUdLLEFBS3BCLFdBbERLLEFBYWMsQUFXQSxBQVluQixBQU9DLENBdkNXLElBb0NaLEFBT0EsTUFHQyxFQTdDWSxLQVNMLEFBV0ssRUFlWixBQU9BLEtBekNrQixBQVNULEtBV0EsSUFWRCxLQVdBLEdBVkMsQ0FWVSxJQXFCVixDQVFULEdBbEI2QixLQVdFLE1BckJyQixXQUVYLE9BU21DLE9BV0EsMkJBVkcsT0FWckMsQUFxQnFDLDhCQVZyQyxPQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cmFwcGVkTWVudVxcY29tcG9uZW50c1xcd3JhcHBlZE1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxuXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgTWVudSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51JztcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9NZW51SXRlbSc7XG5pbXBvcnQgUG9wdXBTdGF0ZSwgeyBiaW5kVHJpZ2dlciwgYmluZE1lbnUgfSBmcm9tICdtYXRlcmlhbC11aS1wb3B1cC1zdGF0ZSc7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdyZWFjdC1pY29ucy1raXQnXG5pbXBvcnQgeyBob21lIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ljb21vb24vaG9tZSdcbmltcG9ydCB7IGljX2Fzc2lnbm1lbnQgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvbWQvaWNfYXNzaWdubWVudCdcbmltcG9ydCB7IHVzZXIgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvdXNlcidcbmltcG9ydCB7IGVudmVsb3BlTyB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS9lbnZlbG9wZU8nXG5pbXBvcnQgeyB1c2VyUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS91c2VyUGx1cydcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL3RpbWVzJ1xuaW1wb3J0IHsgdGhMaXN0IH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL3RoTGlzdCdcbmltcG9ydCB7IGVsbGlwc2lzViB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS9lbGxpcHNpc1YnXG5pbXBvcnQgeyBwZW5jaWwgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvcGVuY2lsJ1xuaW1wb3J0IHtpY19hcnJvd19iYWNrfSBmcm9tICdyZWFjdC1pY29ucy1raXQvbWQvaWNfYXJyb3dfYmFjaydcbmltcG9ydCB7aWNfbGlzdH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX2xpc3QnXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgeyBDbGlwTG9hZGVyIH0gZnJvbSAncmVhY3Qtc3Bpbm5lcnMnO1xuXG5jbGFzcyBXcmFwcGVkTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICB0b2dnbGU6IGZhbHNlLFxuICAgICAgICAgICAgb3Blbk1lbnU6IGZhbHNlLFxuICAgICAgICAgICAgcm91dGU6IFwiXCIsXG4gICAgICAgICAgICBsb2FkaW5nOnRydWUsXG4gICAgICAgICAgICBvbGRSb3V0ZSA6IFwiXCJcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3V0ZTogUm91dGVyLnJvdXRlci5yb3V0ZS5zdWJzdHJpbmcoNywgUm91dGVyLnJvdXRlci5yb3V0ZS5sZW5ndGgpXG4gICAgICAgIH0pXG4gICAgICAgIGlmIChjb29raWVzLmdldChcInRva2VuXCIpID09PSB1bmRlZmluZWQgfHwgY29va2llcy5nZXQoXCJ0b2tlblwiKSA9PT0gXCJcIiApIHtcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FkbWluXCIpXG4gICAgICAgIH1cbiAgICAgICAgaWYoY29va2llcy5nZXQoXCJyb2xlTmFtZVwiKSA9PT0gXCJST0xFX1dSSVRFUlwiKVxuICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvXCIpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVMb2dvdXQgPSAoKSA9PiB7XG4gICAgICAgIGNvb2tpZXMuc2V0KFwidG9rZW5cIiwgXCJcIiwgeyBleHBpcmVzOiAwLjAwMCB9KVxuICAgICAgICBjb29raWVzLnNldChcInJvbGVOYW1lXCIsIFwiXCIsIHsgZXhwaXJlczogMC4wMDAgfSlcbiAgICAgICAgY29va2llcy5zZXQoJ2lkJywgXCJcIiwgeyBleHBpcmVzOiAwIH0pXG4gICAgICAgIFJvdXRlci5wdXNoKFwiL2FkbWluXCIpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgaWYgKGNvb2tpZXMuZ2V0KFwidG9rZW5cIikgPT09IHVuZGVmaW5lZCB8fCBjb29raWVzLmdldChcInRva2VuXCIpID09PSBcIlwiIHx8IGNvb2tpZXMuZ2V0KFwicm9sZU5hbWVcIikgPT09IFwiUk9MRV9XUklURVJcIikge1xuICAgICAgICAgICAgcmV0dXJuIDxkaXY+PC9kaXY+XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlVG9nZ2xlID0gKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgdG9nZ2xlOiAhdGhpcy5zdGF0ZS50b2dnbGVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudTogIXRoaXMuc3RhdGUub3Blbk1lbnVcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLndyYXBwZWQtaWNvbntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eSA6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzAwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0zMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM4NTc0ZDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4Oi0xO1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjphbGwgMC4zc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmxpbmU6YWZ0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAyMHB4IHNvbGlkIHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMjBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAubGluZTpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDIwcHggc29saWQgIzg1NzRkNDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAyMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLml0ZW06aG92ZXIgLmxpbmV7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDotMjBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjNzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmUtaXRlbSAubGluZXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0Oi0yMHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLmFjdGl2ZS1pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjIwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzowcHghaW1wb3J0YW50XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcG9zaXRpb246IFwiZml4ZWRcIiwgYmFja2dyb3VuZDogXCIjZjVmNmZhXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8Q2xpcExvYWRlclxuICAgICAgICAgICAgICAgICAgICBjc3M9e2Bwb3NpdGlvbjpmaXhlZDsgei1pbmRleDoyMDsgbGVmdDo0NSU7dG9wOjIwJWB9XG4gICAgICAgICAgICAgICAgICAgIHNpemVVbml0PXtcInB4XCJ9XG4gICAgICAgICAgICAgICAgICAgIHNpemU9ezE1MH1cbiAgICAgICAgICAgICAgICAgICAgY29sb3I9eycjMTIzYWJjJ31cbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZz17dGhpcy5zdGF0ZS5sb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5SaWdodDogXCIwcHhcIiwgbWFyZ2luTGVmdDogXCIwcHhcIiB9fT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyYXBwZWQtaGVhZGVyXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiODBweFwiLCBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsIGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgIzAwMDAwMDI2XCIsIHpJbmRleDogXCIxMFwiLCBtYXJnaW5SaWdodDogXCIwcHhcIiwgbWFyZ2luTGVmdDogXCIwcHhcIiwgcG9zaXRpb246IFwiZml4ZWRcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiwgbWFyZ2luVG9wOiBcIjEwcHhcIiwgbWFyZ2luUmlnaHQ6IFwiNzBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjEwcHhcIiB9fT5IaSBMb25nPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBvcHVwU3RhdGUgdmFyaWFudD1cInBvcG92ZXJcIiBwb3B1cElkPVwiZGVtby1wb3B1cC1tZW51XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3B1cFN0YXRlID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwibW9yZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJsb25nLW1lbnVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiIHsuLi5iaW5kVHJpZ2dlcihwb3B1cFN0YXRlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJ3cmFwcGVkLWljb25cIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiLCBoZWlnaHQ6IFwiMzJweFwiLCB3aWR0aDogXCIzMnB4XCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiB9fSBpY29uPXtlbGxpcHNpc1Z9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51IHsuLi5iaW5kTWVudShwb3B1cFN0YXRlKX0gc3R5bGU9e3sgd2lkdGg6IFwiNTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e3BvcHVwU3RhdGUuY2xvc2V9IHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX0+VXNlciBpbmZvPC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIG9uQ2xpY2s9e2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVMb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdXBTdGF0ZS5jbG9zZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19IHN0eWxlPXt7IHdpZHRoOiBcIjE1MHB4XCIgfX0+TG9nb3V0PC9NZW51SXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wdXBTdGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJNZW51IGNvbC1sZy0zIGNvbC14bC0yIGNvbC1tZC0zIGNvbC1zbS01IGNvbC02IHJvd1wiIHN0eWxlPXt7IHBvc2l0aW9uOiBcImZpeGVkXCIsIGhlaWdodDogXCIxMDAlXCIsIHRvcDogXCIwcHhcIiwgbGVmdDogdGhpcy5zdGF0ZS50b2dnbGUgPT09IGZhbHNlID8gXCItMTVweFwiIDogXCItMjUwcHhcIiwgdHJhbnNpdGlvbjogXCJhbGwgMC4xc1wiLCB6SW5kZXg6IFwiMTAwXCIsIGJhY2tncm91bmQ6IFwiIzJjMzIzZVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93XCIgc3R5bGU9e3tiYWNrZ3JvdW5kOlwid2hpdGVcIixoZWlnaHQ6XCI4MHB4XCIsbWFyZ2luTGVmdDpcIjE1cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTEgY29sLWxnLTEwIG10LTRcIiBzdHlsZT17eyBoZWlnaHQ6IFwiNjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWRtaW4vaG9tZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzpmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9fSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGN1cnNvcjogXCJwb2ludGVyXCIgfX0gc3JjPVwiLi4vLi4vLi4vc3RhdGljL2xvZ292bi5wbmdcIiAvPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiLCB0cmFuc2l0aW9uOiBcImFsbCAwLjA1c1wiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCByaWdodDogdGhpcy5zdGF0ZS50b2dnbGUgPT09IGZhbHNlID8gXCIwcHhcIiA6IFwiLTEyMHB4XCIsIHRvcDogXCIzMHB4XCIsIGNvbG9yOiBcIiMwMDAwMDA5ZVwiLCBjdXJzb3I6IFwicG9pbnRlclwiLCB6SW5kZXg6IFwiMTAwXCIgfX0gc2l6ZT17IXRoaXMuc3RhdGUudG9nZ2xlID8gXCIyNVwiIDogXCIzNVwifSBpY29uPXt0aGlzLnN0YXRlLnRvZ2dsZSA9PT0gZmFsc2UgPyBpY19hcnJvd19iYWNrIDogaWNfbGlzdH0gb25DbGljaz17KCkgPT4gaGFuZGxlVG9nZ2xlKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiY29sLTEyXCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiBcIjEwMHB4XCIsb3ZlcmZsb3c6XCJoaWRkZW5cIix3aWR0aDpcIjk0JVwiLG1hcmdpblJpZ2h0OlwiMTBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3RoaXMuc3RhdGUucm91dGUgPT09IFwiaG9tZVwiID8gXCJhY3RpdmUtaXRlbVwiIDogXCIgaXRlbSBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FkbWluL2hvbWVcIil9fSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGNvbG9yOiBcIndoaXRlXCIsekluZGV4OlwiMTBcIixwYWRkaW5nVG9wOlwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0MHB4XCIgfX0+PEljb24gc2l6ZT17MTV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0gaWNvbj17aG9tZX0gLz4gRGFzaGJvYXJkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yb3V0ZS5pbmRleE9mKFwiZG9jc1wiKSAhPT0gLTE/IFwiYWN0aXZlLWl0ZW1cIiA6IFwiaXRlbSBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNvbG9yPXt0aGlzLnN0YXRlLnJvdXRlID09PSBcImRvY3NcIiA/IFwicHJpbWFyeVwiIDogXCJ3aGl0ZVwifSBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOnRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaChcIi9hZG1pbi9kb2NzXCIpfX0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBjb2xvcjogXCJ3aGl0ZVwiLHBhZGRpbmdUb3A6XCI1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjQwcHhcIiB9fT4gPEljb24gc2l6ZT17MTV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0gaWNvbj17aWNfYXNzaWdubWVudH0gLz4gRG9jdW1lbnRzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yb3V0ZSA9PT0gXCJ3cml0ZXJzXCIgPyBcImFjdGl2ZS1pdGVtXCIgOiBcIiBpdGVtIFwifT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY29sb3I9e3RoaXMuc3RhdGUucm91dGUgPT09IFwid3JpdGVyc1wiID8gXCJwcmltYXJ5XCIgOiBcIndoaXRlXCJ9IG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6dHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKFwiL2FkbWluL3dyaXRlcnNcIil9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgY29sb3I6IFwid2hpdGVcIixwYWRkaW5nVG9wOlwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0MHB4XCIgfX0+PEljb24gc2l6ZT17MTV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0gaWNvbj17cGVuY2lsfSAvPiBXcml0ZXJzPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5yb3V0ZSA9PT0gXCJjb250YWN0c1wiID8gXCJhY3RpdmUtaXRlbVwiIDogXCIgaXRlbSBcIn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNvbG9yPXt0aGlzLnN0YXRlLnJvdXRlID09PSBcImNvbnRhY3RzXCIgPyBcInByaW1hcnlcIiA6IFwid2hpdGVcIn0gb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZzp0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goXCIvYWRtaW4vY29udGFjdHNcIil9fSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgY29sb3I6IFwid2hpdGVcIixwYWRkaW5nVG9wOlwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0MHB4XCIgfX0+PEljb24gc2l6ZT17MTV9IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0gaWNvbj17ZW52ZWxvcGVPfSAvPiAgQ29udGFjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIXRoaXMuc3RhdGUudG9nZ2xlID8gPGRpdiBjbGFzc05hbWU9XCJjb2wtMCBjb2wtbGctMiBcIj48L2Rpdj4gOiA8ZGl2IGNsYXNzTmFtZT1cImNvbC0wIGNvbC1sZy0xXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17IXRoaXMuc3RhdGUudG9nZ2xlID8gXCJjb2wtMTIgY29sLWxnLTEwXCIgOiBcImNvbC0xMiBjb2wtbGctMTFcIn0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBtYXJnaW5Ub3A6IFwiMTAwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXcmFwcGVkTWVudTsiXX0= */\n/*@ sourceURL=C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\wrappedMenu\\components\\wrappedMenu.js */"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: "fixed",
          background: "#f5f6fa",
          width: "100%",
          height: "100%"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_spinners__WEBPACK_IMPORTED_MODULE_31__["ClipLoader"], {
        css: "position:fixed; z-index:20; left:45%;top:20%",
        sizeUnit: "px",
        size: 150,
        color: '#123abc',
        loading: this.state.loading,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          width: "100%",
          marginRight: "0px",
          marginLeft: "0px"
        },
        className: "jsx-2453628393" + " " + "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          width: "100%",
          height: "80px",
          background: "white",
          borderBottom: "1px solid #00000026",
          zIndex: "10",
          marginRight: "0px",
          marginLeft: "0px",
          position: "fixed"
        },
        className: "jsx-2453628393" + " " + "wrapped-header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          "float": "right",
          marginTop: "10px",
          marginRight: "70px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          marginRight: "10px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, "Hi Long"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15___default.a, {
        variant: "popover",
        popupId: "demo-popup-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, function (popupState) {
        return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_16___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          "aria-label": "more",
          "aria-controls": "long-menu",
          "aria-haspopup": "true"
        }, Object(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15__["bindTrigger"])(popupState), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 149
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
          className: "wrapped-icon",
          style: {
            marginBottom: "5px",
            marginRight: "5px",
            height: "32px",
            width: "32px",
            borderRadius: "50%"
          },
          icon: react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_25__["ellipsisV"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 154
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(material_ui_popup_state__WEBPACK_IMPORTED_MODULE_15__["bindMenu"])(popupState), {
          style: {
            width: "500px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
          onClick: popupState.close,
          style: {
            width: "150px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, "User info"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_14___default.a, {
          onClick: function onClick(e) {
            _this2.handleLogout();

            _this2.setState({
              loading: true
            });

            popupState.close();
          },
          style: {
            width: "150px"
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, "Logout")));
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          position: "fixed",
          height: "100%",
          top: "0px",
          left: this.state.toggle === false ? "-15px" : "-250px",
          transition: "all 0.1s",
          zIndex: "100",
          background: "#2c323e"
        },
        className: "jsx-2453628393" + " " + "Menu col-lg-3 col-xl-2 col-md-3 col-sm-5 col-6 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          background: "white",
          height: "80px",
          marginLeft: "15px"
        },
        className: "jsx-2453628393" + " " + "col-12 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          height: "60px"
        },
        className: "jsx-2453628393" + " " + "col-11 col-lg-10 mt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("img", {
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin/home");

          _this2.setState({
            loading: false
          });
        },
        style: {
          width: "100%",
          cursor: "pointer"
        },
        src: "../../../static/logovn.png",
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        style: {
          marginBottom: "5px",
          marginRight: "5px",
          transition: "all 0.05s",
          position: "absolute",
          right: this.state.toggle === false ? "0px" : "-120px",
          top: "30px",
          color: "#0000009e",
          cursor: "pointer",
          zIndex: "100"
        },
        size: !this.state.toggle ? "25" : "35",
        icon: this.state.toggle === false ? react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_27__["ic_arrow_back"] : react_icons_kit_md_ic_list__WEBPACK_IMPORTED_MODULE_28__["ic_list"],
        onClick: function onClick() {
          return handleToggle();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("ul", {
        style: {
          position: "absolute",
          top: "100px",
          overflow: "hidden",
          width: "94%",
          marginRight: "10px"
        },
        className: "jsx-2453628393" + " " + "col-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-2453628393" + " " + ((this.state.route === "home" ? "active-item" : " item ") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin/home");
        },
        style: {
          width: "100%",
          color: "white",
          zIndex: "10",
          paddingTop: "5px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          paddingLeft: "40px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        size: 15,
        style: {
          marginBottom: "5px",
          marginRight: "5px"
        },
        icon: react_icons_kit_icomoon_home__WEBPACK_IMPORTED_MODULE_18__["home"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }), " Dashboard"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-2453628393" + " " + ((this.state.route.indexOf("docs") !== -1 ? "active-item" : "item ") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 200
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        color: this.state.route === "docs" ? "primary" : "white",
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin/docs");
        },
        style: {
          width: "100%",
          color: "white",
          paddingTop: "5px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          paddingLeft: "40px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }, " ", react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        size: 15,
        style: {
          marginBottom: "5px",
          marginRight: "5px"
        },
        icon: react_icons_kit_md_ic_assignment__WEBPACK_IMPORTED_MODULE_19__["ic_assignment"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206
        },
        __self: this
      }), " Documents"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-2453628393" + " " + ((this.state.route === "writers" ? "active-item" : " item ") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 210
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        color: this.state.route === "writers" ? "primary" : "white",
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin/writers");
        },
        style: {
          width: "100%",
          color: "white",
          paddingTop: "5px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          paddingLeft: "40px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        size: 15,
        style: {
          marginBottom: "5px",
          marginRight: "5px"
        },
        icon: react_icons_kit_fa_pencil__WEBPACK_IMPORTED_MODULE_26__["pencil"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }), " Writers"))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("li", {
        className: "jsx-2453628393" + " " + ((this.state.route === "contacts" ? "active-item" : " item ") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        color: this.state.route === "contacts" ? "primary" : "white",
        onClick: function onClick() {
          _this2.setState({
            loading: true
          });

          next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push("/admin/contacts");
        },
        style: {
          width: "100%",
          color: "white",
          paddingTop: "5px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("span", {
        style: {
          paddingLeft: "40px"
        },
        className: "jsx-2453628393",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_17__["Icon"], {
        size: 15,
        style: {
          marginBottom: "5px",
          marginRight: "5px"
        },
        icon: react_icons_kit_fa_envelopeO__WEBPACK_IMPORTED_MODULE_21__["envelopeO"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230
        },
        __self: this
      }), "  Contacts"))))), !this.state.toggle ? react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "col-0 col-lg-2 ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }) : react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        className: "jsx-2453628393" + " " + "col-0 col-lg-1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
        style: {
          width: "100%",
          marginTop: "100px"
        },
        className: "jsx-2453628393" + " " + ((!this.state.toggle ? "col-12 col-lg-10" : "col-12 col-lg-11") || ""),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, this.props.children)));
    }
  }]);

  return WrappedMenu;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WrappedMenu);

/***/ }),

/***/ "./modules/wrappedMenu/components/wrappedMenuContainer.js":
/*!****************************************************************!*\
  !*** ./modules/wrappedMenu/components/wrappedMenuContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wrappedMenu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./wrappedMenu */ "./modules/wrappedMenu/components/wrappedMenu.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers */ "./modules/wrappedMenu/reducers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./modules/wrappedMenu/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\wrappedMenu\\components\\wrappedMenuContainer.js";








var WrappedMenuContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(WrappedMenuContainer, _Component);

  function WrappedMenuContainer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, WrappedMenuContainer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(WrappedMenuContainer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(WrappedMenuContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_wrappedMenu__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })));
    }
  }]);

  return WrappedMenuContainer;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

function mapStateToProps(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state[_reducers__WEBPACK_IMPORTED_MODULE_11__["name"]]);
}

function mapDispatchToProps(dispatch) {
  var actions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions__WEBPACK_IMPORTED_MODULE_12__);

  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_9__["bindActionCreators"])(actions, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(WrappedMenuContainer)));

/***/ }),

/***/ "./modules/wrappedMenu/constrants.js":
/*!*******************************************!*\
  !*** ./modules/wrappedMenu/constrants.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/wrappedMenu/reducers.js":
/*!*****************************************!*\
  !*** ./modules/wrappedMenu/reducers.js ***!
  \*****************************************/
/*! exports provided: name, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-freeze */ "deep-freeze");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./modules/wrappedMenu/actions.js");



var name = "WrappedPage";
var initialState = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()({
  isDocsPageMain: true
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])({}, initialState));

/***/ }),

/***/ "./modules/writersPage/actions.js":
/*!****************************************!*\
  !*** ./modules/writersPage/actions.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constrants */ "./modules/writersPage/constrants.js");
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constrants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./modules/writersPage/components/Table.js":
/*!*************************************************!*\
  !*** ./modules/writersPage/components/Table.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EnhancedTable; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Input */ "@material-ui/core/Input");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! clsx */ "clsx");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Table */ "@material-ui/core/Table");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableBody */ "@material-ui/core/TableBody");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableCell */ "@material-ui/core/TableCell");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableHead */ "@material-ui/core/TableHead");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "@material-ui/core/TablePagination");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableRow */ "@material-ui/core/TableRow");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TableSortLabel */ "@material-ui/core/TableSortLabel");
/* harmony import */ var _material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Checkbox */ "@material-ui/core/Checkbox");
/* harmony import */ var _material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Checkbox__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/Tooltip */ "@material-ui/core/Tooltip");
/* harmony import */ var _material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Tooltip__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "@material-ui/core/FormControlLabel");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/core/Switch */ "@material-ui/core/Switch");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @material-ui/icons/Delete */ "@material-ui/icons/Delete");
/* harmony import */ var _material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Delete__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @material-ui/icons/FilterList */ "@material-ui/icons/FilterList");
/* harmony import */ var _material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FilterList__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @material-ui/icons/Create */ "@material-ui/icons/Create");
/* harmony import */ var _material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! react-icons-kit/fa/minus */ "react-icons-kit/fa/minus");
/* harmony import */ var react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react-icons-kit/md/ic_check */ "react-icons-kit/md/ic_check");
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../api */ "./api.js");



var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\Table.js";




























function EnhancedTable(props) {
  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('asc'),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      order = _React$useState2[0],
      setOrder = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState('calories'),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      orderBy = _React$useState4[0],
      setOrderBy = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState([]),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState5, 2),
      selected = _React$useState6[0],
      setSelected = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState7, 2),
      page = _React$useState8[0],
      setPage = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState9, 2),
      dense = _React$useState10[0],
      setDense = _React$useState10[1];

  var _React$useState11 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(5),
      _React$useState12 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState11, 2),
      rowsPerPage = _React$useState12[0],
      setRowsPerPage = _React$useState12[1];

  var _React$useState13 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(""),
      _React$useState14 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState13, 2),
      nameSearch = _React$useState14[0],
      setNameSearch = _React$useState14[1];

  function handleRequestSort(event, property) {
    var isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleSelectAllClick(event) {
    if (event.target.checked) {
      console.log(props.rows);
      var newSelecteds = props.rows.map(function (n, index) {
        return index;
      });
      setSelected(newSelecteds);
      return;
    }

    setSelected([]);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleDetailPage(data, id) {
    props.uploadData(data, id);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  }

  function handleChangeDense(event) {
    setDense(event.target.checked);
  }

  var isSelected = function isSelected(index) {
    return selected.indexOf(index) !== -1;
  };

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage); //   console.log(props)

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_17___default.a, {
    className: classes.paper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EnhancedTableToolbar, {
    numSelected: selected.length,
    nameSearch: nameSearch,
    setNameSearch: setNameSearch,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.tableWrapper,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: classes.table,
    "aria-labelledby": "tableTitle",
    size: dense ? 'small' : 'medium',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(EnhancedTableHead, {
    classes: classes,
    numSelected: selected.length,
    order: order,
    orderBy: orderBy,
    onSelectAllClick: handleSelectAllClick,
    onRequestSort: handleRequestSort,
    rowCount: props.rows.length,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, stableSearch(stableSort(props.rows, getSorting(order, orderBy)), nameSearch).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row, index) {
    var isItemSelected = isSelected(index);
    var labelId = "enhanced-table-checkbox-".concat(index); // console.log(row) 

    if (row.name === "admin") return;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
      hover: true,
      role: "checkbox",
      "aria-checked": isItemSelected,
      tabIndex: -1,
      key: index,
      selected: isItemSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      component: "th",
      id: labelId,
      align: "center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, row.status ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        background: "#4bc051",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        position: "relative",
        color: "white",
        marginTop: "5px",
        left: "60%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_28__["Icon"], {
      size: 20,
      icon: react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_27__["ic_check"],
      style: {
        marginLeft: "2px",
        marginTop: "1px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        background: "#ff4c4c",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        position: "relative",
        color: "white",
        marginTop: "5px",
        left: "60%"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_28__["Icon"], {
      size: 20,
      icon: react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_26__["minus"],
      style: {
        marginLeft: "2px",
        marginTop: "5px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("img", {
      style: {
        borderRadius: "50%",
        width: "50px"
      },
      src: _api__WEBPACK_IMPORTED_MODULE_30__["callAPI"]() + "upload/" + row.avatar,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, row.name), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, row.phoneNumber), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      align: "right",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, row.email), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      padding: "checkbox",
      alig: "center",
      style: {
        paddingRight: "20px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_19___default.a, {
      onClick: function onClick(e) {
        return handleDetailPage(row, row.id);
      },
      size: "medium",
      "aria-label": "delete",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_icons_Create__WEBPACK_IMPORTED_MODULE_25___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))));
  }), emptyRows > 0 && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    style: {
      height: 49 * emptyRows
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    colSpan: 9,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }))))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_12___default.a, {
    rowsPerPageOptions: [5, 10, 25],
    component: "div",
    count: props.rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    backIconButtonProps: {
      'aria-label': 'previous page'
    },
    nextIconButtonProps: {
      'aria-label': 'next page'
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_21___default.a, {
    control: react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_22___default.a, {
      checked: dense,
      onChange: handleChangeDense,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165
      },
      __self: this
    }),
    label: "Dense padding",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }));
}

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
}

function stableSearch(arr, name) {
  var searchThis = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr);

  return name === "" ? searchThis : searchThis.filter(function (e) {
    return e.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
  });
}

function stableSort(array, cmp) {
  var stabilizedThis = array.map(function (el, index) {
    return [el, index];
  });
  stabilizedThis.sort(function (a, b) {
    var order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(function (el) {
    return el[0];
  });
}

function getSorting(order, orderBy) {
  return order === 'desc' ? function (a, b) {
    return desc(a, b, orderBy);
  } : function (a, b) {
    return -desc(a, b, orderBy);
  };
}

var headRows = [{
  id: 'status',
  numeric: false,
  disablePadding: false,
  label: 'status'
}, {
  id: 'avatar',
  numeric: false,
  disablePadding: false,
  label: 'avatar'
}, {
  id: 'name',
  numeric: true,
  disablePadding: false,
  label: 'name'
}, {
  id: 'phoneNumber',
  numeric: true,
  disablePadding: false,
  label: 'phone'
}, {
  id: 'email',
  numeric: true,
  disablePadding: false,
  label: 'email'
}];

function EnhancedTableHead(props) {
  var classes = props.classes,
      onSelectAllClick = props.onSelectAllClick,
      order = props.order,
      orderBy = props.orderBy,
      numSelected = props.numSelected,
      onRequestSort = props.onRequestSort;

  var createSortHandler = function createSortHandler(property) {
    return function (event) {
      onRequestSort(event, property);
    };
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_11___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, headRows.map(function (row) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
      key: row.id,
      align: row.numeric ? 'right' : 'right',
      padding: row.disablePadding ? 'none' : 'default',
      sortDirection: orderBy === row.id ? order : false,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableSortLabel__WEBPACK_IMPORTED_MODULE_14___default.a, {
      active: orderBy === row.id,
      direction: order,
      onClick: createSortHandler(row.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, row.label, orderBy === row.id ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: classes.visuallyHidden,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, order === 'desc' ? 'sorted descending' : 'sorted ascending') : null));
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_10___default.a, {
    padding: "checkbox",
    align: "center",
    style: {
      paddingRight: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }, "Edit")));
}

EnhancedTableHead.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired,
  onRequestSort: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  onSelectAllClick: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  order: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['asc', 'desc']).isRequired,
  orderBy: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired,
  rowCount: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
var useToolbarStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["lighten"])(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 100%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: '0 0 auto'
    }
  };
});

var EnhancedTableToolbar = function EnhancedTableToolbar(props) {
  var classes = useToolbarStyles();
  var numSelected = props.numSelected;

  function handleChangeSearchName(e) {
    props.setNameSearch(e.target.value);
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_15___default.a, {
    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()(classes.root, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.highlight, numSelected > 0)),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.title,
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: "col-0 col-lg-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_16___default.a, {
    className: "col-4 col-lg-2 mt-3",
    variant: "h6",
    id: "tableTitle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "List writer"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_29___default.a, {
    id: "standard-name",
    label: "Search Name Writer",
    margin: "normal",
    className: "col-7 col-lg-6",
    style: {
      marginTop: "0px"
    },
    onChange: function onChange(e) {
      return handleChangeSearchName(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    className: classes.spacer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }));
};

EnhancedTableToolbar.propTypes = {
  numSelected: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number.isRequired
};
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_7__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      marginTop: theme.spacing(3)
    },
    paper: {
      width: '100%',
      marginBottom: theme.spacing(2)
    },
    table: {
      minWidth: 750
    },
    tableWrapper: {
      overflowX: 'auto'
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1
    }
  };
});

/***/ }),

/***/ "./modules/writersPage/components/modal.js":
/*!*************************************************!*\
  !*** ./modules/writersPage/components/modal.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertDialog; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Dialog */ "@material-ui/core/Dialog");
/* harmony import */ var _material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/DialogActions */ "@material-ui/core/DialogActions");
/* harmony import */ var _material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogActions__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/DialogContent */ "@material-ui/core/DialogContent");
/* harmony import */ var _material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/DialogContentText */ "@material-ui/core/DialogContentText");
/* harmony import */ var _material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogContentText__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/md/ic_send */ "react-icons-kit/md/ic_send");
/* harmony import */ var react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @date-io/date-fns */ "@date-io/date-fns");
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_date_io_date_fns__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_remove_circle_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_remove_circle_outline */ "react-icons-kit/md/ic_remove_circle_outline");
/* harmony import */ var react_icons_kit_md_ic_remove_circle_outline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_remove_circle_outline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons-kit/md/ic_check */ "react-icons-kit/md/ic_check");
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_md_ic_sync__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/md/ic_sync */ "react-icons-kit/md/ic_sync");
/* harmony import */ var react_icons_kit_md_ic_sync__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_sync__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons-kit/md/ic_person_add */ "react-icons-kit/md/ic_person_add");
/* harmony import */ var react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons-kit/fa/minus */ "react-icons-kit/fa/minus");
/* harmony import */ var react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_minus__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons-kit/md/ic_arrow_back */ "react-icons-kit/md/ic_arrow_back");
/* harmony import */ var react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_arrow_back__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/pickers */ "@material-ui/pickers");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);


var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\modal.js";





















function AlertDialog(props) {
  var _React$createElement;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState('paper'),
      _React$useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState3, 2),
      scroll = _React$useState4[0],
      setScroll = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(new Date('2019-08-18T21:11:54')),
      _React$useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState5, 2),
      selectedDate = _React$useState6[0],
      setSelectedDate = _React$useState6[1];

  var _React$useState7 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState7, 2),
      editUser = _React$useState8[0],
      setEditUser = _React$useState8[1];

  var _React$useState9 = react__WEBPACK_IMPORTED_MODULE_4___default.a.useState(false),
      _React$useState10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState9, 2),
      isFalse = _React$useState10[0],
      setIsFalse = _React$useState10[1];

  function changeFile(e) {
    console.log(e.target.files[0]);
    props.handleOnchange("img", URL.createObjectURL(e.target.files[0]));
  }

  function handleOnchange(e) {
    var value = e.target.value;
    var info = e.target.name;
    props.handleOnchange(info, value);
  }

  function handleChangeDate(e, name) {
    var value = new Date(e);
    var info = name;
    var day = value.getDate();
    var month = value.getMonth();
    var year = value.getFullYear();
    var result = month + "/" + day + "/" + year;
    props.handleOnchange(info, result);
  }

  function handleSubmit() {
    var check = {
      name: "",
      username: "",
      phoneNumber: "",
      email: ""
    };

    for (var i in check) {
      console.log(props.data);
      if (props.data[i] === "") return setIsFalse(true);
    }

    return props.handleSubmit();
  }

  function handleAddWriter() {
    setEditUser(!editUser);
  }

  function handleModal() {
    setIsFalse(false);
    props.handleModal();
  }

  function handleStatusWriter(status, id) {
    console.log("ban");
    props.handleStatusWriter(status, id);
  }

  function displayArrDocs() {
    props.arrDocs.map(function (doc) {
      return console.log(doc);
    });
    return props.arrDocs.map(function (doc) {
      react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "row item col-12 col-lg-11 ",
        style: {
          border: "1px solid #00000017"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        className: "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
        style: {
          background: "#4bc051",
          width: "28px",
          height: "28px",
          borderRadius: "50%",
          position: "absolute",
          color: "white",
          marginTop: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
        size: 20,
        icon: react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16__["ic_check"],
        style: {
          marginLeft: "5px",
          marginTop: "1px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
        className: "col-6",
        style: {
          marginTop: "5px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Rocket Chat"));
    });
  }

  function handleDoc(id) {
    console.log("long");
    next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push("/admin/docs/" + id);
  } // console.log(props)


  var _props$data = props.data,
      avatar = _props$data.avatar,
      name = _props$data.name,
      username = _props$data.username,
      phoneNumber = _props$data.phoneNumber,
      email = _props$data.email,
      status = _props$data.status,
      password = _props$data.password,
      id = _props$data.id;
  console.log(props);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Dialog__WEBPACK_IMPORTED_MODULE_6___default.a, {
    open: props.openModal,
    onClose: handleModal,
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    scroll: scroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "4145724005",
    __self: this
  }, ".contacts-type.jsx-4145724005{background:white;border-radius:10px;border:1px solid #00000030;}.item.jsx-4145724005{-webkit-transition:all 0.2s;transition:all 0.2s;cursor:pointer;}.item.jsx-4145724005:hover{-webkit-transition:all 0.2s;transition:all 0.2s;border:1px solid #00000030;-webkit-transform :scale(1.02,1.02);-ms-transform :scale(1.02,1.02);transform :scale(1.02,1.02);box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cml0ZXJzUGFnZVxcY29tcG9uZW50c1xcbW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkdxQixBQUdzQyxBQUtFLEFBSUEsaUJBUkEsbUJBRXhCLFlBSUEsQUFHK0IsZUFQOUIsQUFJQSxZQUlnQyxnR0FDOEYsdUhBQzlIIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cml0ZXJzUGFnZVxcY29tcG9uZW50c1xcbW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2RhdGUtZm5zJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnRUZXh0JztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCc7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0J1xuaW1wb3J0IHsgaWNfc2VuZCB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19zZW5kJ1xuaW1wb3J0IERhdGVGbnNVdGlscyBmcm9tICdAZGF0ZS1pby9kYXRlLWZucyc7XG5pbXBvcnQge2ljX3JlbW92ZV9jaXJjbGVfb3V0bGluZX0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX3JlbW92ZV9jaXJjbGVfb3V0bGluZSdcbmltcG9ydCB7IGljX2NoZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrJ1xuaW1wb3J0IHsgaWNfc3luYyB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19zeW5jJ1xuaW1wb3J0IHsgaWNfcGVyc29uX2FkZCB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19wZXJzb25fYWRkJ1xuaW1wb3J0IHsgbWludXMgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvZmEvbWludXMnXG5pbXBvcnQgeyBpY19hcnJvd19iYWNrIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX2Fycm93X2JhY2snXG5pbXBvcnQge1xuICAgIE11aVBpY2tlcnNVdGlsc1Byb3ZpZGVyLFxuICAgIEtleWJvYXJkVGltZVBpY2tlcixcbiAgICBLZXlib2FyZERhdGVQaWNrZXIsXG59IGZyb20gJ0BtYXRlcmlhbC11aS9waWNrZXJzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydERpYWxvZyhwcm9wcykge1xuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gUmVhY3QudXNlU3RhdGUoJ3BhcGVyJyk7XG4gICAgY29uc3QgW3NlbGVjdGVkRGF0ZSwgc2V0U2VsZWN0ZWREYXRlXSA9IFJlYWN0LnVzZVN0YXRlKG5ldyBEYXRlKCcyMDE5LTA4LTE4VDIxOjExOjU0JykpO1xuICAgIGNvbnN0IFtlZGl0VXNlciwgc2V0RWRpdFVzZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW2lzRmFsc2UsIHNldElzRmFsc2VdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VGaWxlKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbMF0pXG4gICAgICAgIHByb3BzLmhhbmRsZU9uY2hhbmdlKFwiaW1nXCIsIFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pKVxuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVPbmNoYW5nZShlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcbiAgICAgICAgY29uc3QgaW5mbyA9IGUudGFyZ2V0Lm5hbWVcbiAgICAgICAgcHJvcHMuaGFuZGxlT25jaGFuZ2UoaW5mbywgdmFsdWUpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZURhdGUoZSwgbmFtZSkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IG5ldyBEYXRlKGUpXG4gICAgICAgIGNvbnN0IGluZm8gPSBuYW1lXG4gICAgICAgIGxldCBkYXkgPSB2YWx1ZS5nZXREYXRlKClcbiAgICAgICAgbGV0IG1vbnRoID0gdmFsdWUuZ2V0TW9udGgoKVxuICAgICAgICBsZXQgeWVhciA9IHZhbHVlLmdldEZ1bGxZZWFyKClcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbW9udGggKyBcIi9cIiArIGRheSArIFwiL1wiICsgeWVhclxuICAgICAgICBwcm9wcy5oYW5kbGVPbmNoYW5nZShpbmZvLCByZXN1bHQpXG5cbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3VibWl0KCkge1xuICAgICAgICBjb25zdCBjaGVjayA9IHtcbiAgICAgICAgICAgIG5hbWU6XCJcIixcbiAgICAgICAgICAgIHVzZXJuYW1lOlwiXCIsIFxuICAgICAgICAgICAgcGhvbmVOdW1iZXI6XCJcIiAsIFxuICAgICAgICAgICAgZW1haWw6XCJcIlxuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSBpbiBjaGVjaylcbiAgICAgICAge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuZGF0YSlcbiAgICAgICAgICAgIGlmKHByb3BzLmRhdGFbaV0gPT09IFwiXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNldElzRmFsc2UodHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHMuaGFuZGxlU3VibWl0KClcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlQWRkV3JpdGVyKCkge1xuICAgICAgICBzZXRFZGl0VXNlcighZWRpdFVzZXIpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZU1vZGFsKCl7XG4gICAgICAgIHNldElzRmFsc2UoZmFsc2UpXG4gICAgICAgIHByb3BzLmhhbmRsZU1vZGFsKClcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlU3RhdHVzV3JpdGVyKHN0YXR1cyxpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmFuXCIpXG4gICAgICAgIHByb3BzLmhhbmRsZVN0YXR1c1dyaXRlcihzdGF0dXMsaWQpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlBcnJEb2NzKCl7XG4gICAgICAgIHByb3BzLmFyckRvY3MubWFwKGRvYyA9PiBjb25zb2xlLmxvZyhkb2MpKVxuICAgICAgICByZXR1cm4gcHJvcHMuYXJyRG9jcy5tYXAoZG9jPT57XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBpdGVtIGNvbC0xMiBjb2wtbGctMTEgXCIgc3R5bGU9e3sgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwMDAwMTdcIiB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzRiYzA1MVwiLCB3aWR0aDogXCIyOHB4XCIsIGhlaWdodDogXCIyOHB4XCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiwgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgY29sb3I6IFwid2hpdGVcIiwgbWFyZ2luVG9wOiBcIjVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsyMH0gaWNvbj17aWNfY2hlY2t9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6IFwiNXB4XCIsIG1hcmdpblRvcDogXCIxcHhcIiB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJjb2wtNlwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCI1cHhcIiB9fT5Sb2NrZXQgQ2hhdDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGZ1bmN0aW9uIGhhbmRsZURvYyhpZCl7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibG9uZ1wiKVxuICAgICAgICBSb3V0ZXIucHVzaChcIi9hZG1pbi9kb2NzL1wiK2lkKVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwcm9wcylcbiAgICBjb25zdCB7YXZhdGFyLCBuYW1lLHVzZXJuYW1lLCBwaG9uZU51bWJlciAsIGVtYWlsLCBzdGF0dXMsIHBhc3N3b3JkLCBpZH0gPSBwcm9wcy5kYXRhXG4gICAgY29uc29sZS5sb2cocHJvcHMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxEaWFsb2dcbiAgICAgICAgICAgICAgICBvcGVuPXtwcm9wcy5vcGVuTW9kYWx9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlTW9kYWx9XG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICBzY3JvbGw9e3Njcm9sbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5jb250YWN0cy10eXBle1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOjFweCBzb2xpZCAjMDAwMDAwMzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW17XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtOmhvdmVye1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDAzMDtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDogc2NhbGUoMS4wMiwxLjAyKTsgXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDFweCAwIDAgI2RhZGNlMCwgaW5zZXQgLTFweCAwIDAgI2RhZGNlMCwgMCAxcHggMnB4IDAgcmdiYSg2MCw2NCw2NywuMyksIDAgMXB4IDNweCAxcHggcmdiYSg2MCw2NCw2NywuMTUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj57XCJVc2VyIEluZm9cIn08L0RpYWxvZ1RpdGxlPlxuICAgICAgICAgICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT1cInJvd1wiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc0FkZFdyaXRlciA/IDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHJvdyBtbC0zXCIgc3R5bGU9e3sgYm9yZGVyOiBcIjBweFwiLCBtYXJnaW46IFwiMHB4XCIsIHBhZGRpbmc6IFwiMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93IG1iLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLmlzVXNlZEVtYWlsID8gPHAgc3R5bGU9e3tjb2xvcjpcInJlZFwifX0+WW91ciBFbWFpbCBpcyB1c2VkPC9wPiA6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuaXNVc2VkVXNlcm5hbWUgPyA8cCBzdHlsZT17e2NvbG9yOlwicmVkXCJ9fT5Zb3VyIFVzZXJuYW1lIGlzIHVzZWQ8L3A+IDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5pc1VzZWRQaG9uZSA/IDxwIHN0eWxlPXt7Y29sb3I6XCJyZWRcIn19PllvdXIgUGhvbmUgaXMgdXNlZDwvcD4gOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25jaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZhbHNlICYmIG5hbWUgPT09IFwiXCIgPyA8c3Bhbj5OYW1lIGlzIHJlcXVpcmVkPC9zcGFuPjpcIlwifVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VyIE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25jaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZhbHNlICYmIHVzZXJuYW1lID09PSBcIlwiID8gPHNwYW4+VXNlciBOYW1lIGlzIHJlcXVpcmVkPC9zcGFuPjpcIlwifVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInN0YW5kYXJkLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbmNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRmFsc2UgJiYgZW1haWwgPT09IFwiXCIgPyA8c3Bhbj5FbWFpbCBpcyByZXF1aXJlZDwvc3Bhbj46XCJcIn1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGhvbmVOdW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaG9uZU51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgbWItM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBoYW5kbGVPbmNoYW5nZShlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRmFsc2UgJiYgcGhvbmVOdW1iZXIgPT09IFwiXCIgPyA8c3Bhbj5waG9uZU51bWJlciBpcyByZXF1aXJlZDwvc3Bhbj46XCJcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzdGFuZGFyZC1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIG1iLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gaGFuZGxlT25jaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0ZhbHNlICYmIHBhc3N3b3JkID09PSBcIlwiID8gPHNwYW4+UGFzc3dvcmQgaXMgcmVxdWlyZWQ8L3NwYW4+OlwiXCJ9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3VibWl0fSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjBweFwiIH19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiM0Y2FmNTBcIiwgY29sb3I6IFwid2hpdGVcIixtYXJnaW5MZWZ0OlwiMTVweFwiLG1hcmdpblRvcDpcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN1Ym1pdCA8SWNvbiBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIxMHB4XCIgfX0gaWNvbj17aWNfc2VuZH0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiA6XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHJvd1wiIHN0eWxlPXt7IG1hcmdpbjogXCIwcHhcIiwgcGFkZGluZzogXCIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOlwiMTAwJVwifX0gc3JjPXtcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvXCIrYXZhdGFyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntuYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIwcHhcIiB9fT57ZW1haWx9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD4wNzc4NzIyNTM5PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c3RhdHVzID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZT0+aGFuZGxlU3RhdHVzV3JpdGVyKGZhbHNlLGlkKX0gc3R5bGU9e3sgYm9yZGVyUmFkaXVzOiBcIjIwcHhcIiB9fSB2YXJpYW50PVwiY29udGFpbmVkXCIgY29sb3I9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gaWNvbj17aWNfcmVtb3ZlX2NpcmNsZV9vdXRsaW5lfSAvPiBCYW4gV3JpdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17ZT0+aGFuZGxlU3RhdHVzV3JpdGVyKHRydWUsaWQpfSBzdHlsZT17eyBib3JkZXJSYWRpdXM6IFwiMjBweFwiLGNvbG9yOlwid2hpdGVcIiwgYmFja2dyb3VuZDpcIiM0YmMwNTFcIiB9fSB2YXJpYW50PVwiY29udGFpbmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzaXplPXsyMH0gc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMTBweFwiIH19IGljb249e2ljX2NoZWNrfSAvPiBBdmFpbGFibGUgV3JpdGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93IG10LTNcIiBzdHlsZT17eyBvdmVyZmxvdzogXCJoaWRkZW5cIix3aWR0aDpcIjQwMHB4XCIgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIHJvdyBtYi01XCIgc3R5bGU9e3sgbWF4SGVpZ2h0OiBcIjIwMHB4XCIsIG92ZXJmbG93WTogXCJzY3JvbGxcIiwgb3ZlcmZsb3dYOiBcInZpc2libGVcIiwgcGFkZGluZ0xlZnQ6IFwiMzVweFwiLHdpZHRoOlwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuYXJyRG9jcy5tYXAoZG9jPT4ge2lmKGRvYy5zdGF0dXMgPT09IFwiUEVORElOR1wiIHx8IGRvYy5zdGF0dXMgPT09IFwiQ0hFQ0tFRFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17ZG9jLmlkfSBjbGFzc05hbWU9XCJyb3cgaXRlbSBjb2wtMTIgY29sLWxnLTExIFwiIHN0eWxlPXt7IGJvcmRlcjogXCIxcHggc29saWQgIzAwMDAwMDE3XCIsaGVpZ2h0OlwiNTBweFwiIH19IG9uQ2xpY2s9e2U9PmhhbmRsZURvYyhkb2MuaWQpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZG9jLnN0YXR1cyA9PT0gXCJDSEVDS0VEXCIgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjNGJjMDUxXCIsIHdpZHRoOiBcIjI4cHhcIiwgaGVpZ2h0OiBcIjI4cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezIwfSBpY29uPXtpY19jaGVja30gc3R5bGU9e3sgbWFyZ2luTGVmdDogXCI1cHhcIiwgbWFyZ2luVG9wOiBcIjFweFwiIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzE3MDBkNmI4XCIsIHdpZHRoOiBcIjI4cHhcIiwgaGVpZ2h0OiBcIjI4cHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCBjb2xvcjogXCJ3aGl0ZVwiLCBtYXJnaW5Ub3A6IFwiNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezIwfSBpY29uPXtpY19zeW5jfSBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjVweFwiLCBtYXJnaW5Ub3A6IFwiMXB4XCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjVweFwiIH19PlJvY2tldCBDaGF0PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICAgICAgPC9EaWFsb2c+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il19 */\n/*@ sourceURL=C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\modal.js */"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default.a, {
    id: "alert-dialog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "User Info"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_DialogContent__WEBPACK_IMPORTED_MODULE_8___default.a, {
    className: "row",
    style: {
      width: "100%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, props.isAddWriter ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      border: "0px",
      margin: "0px",
      padding: "0px"
    },
    className: "jsx-4145724005" + " " + "col-12 row ml-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-12 row mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, props.isUsedEmail ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: "red"
    },
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Your Email is used") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }), props.isUsedUsername ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: "red"
    },
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "Your Username is used") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("br", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), props.isUsedPhone ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      color: "red"
    },
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, "Your Phone is used") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "Name",
    margin: "normal",
    className: "col-12",
    name: "name",
    value: name,
    onChange: function onChange(e) {
      return handleOnchange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }), isFalse && name === "" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Name is required") : ""), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "User Name",
    margin: "normal",
    className: "col-12",
    name: "username",
    value: username,
    onChange: function onChange(e) {
      return handleOnchange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }), isFalse && username === "" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "User Name is required") : ""), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "Email",
    margin: "normal",
    name: "email",
    value: email,
    className: "col-12",
    onChange: function onChange(e) {
      return handleOnchange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }), isFalse && email === "" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, "Email is required") : ""), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "phoneNumber",
    margin: "normal",
    name: "phoneNumber",
    value: phoneNumber,
    className: "col-12 mb-3",
    onChange: function onChange(e) {
      return handleOnchange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), isFalse && phoneNumber === "" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "phoneNumber is required") : "", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11___default.a, {
    id: "standard-name",
    label: "password",
    margin: "normal",
    name: "password",
    value: password,
    type: "password",
    className: "col-12 mb-3",
    onChange: function onChange(e) {
      return handleOnchange(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), isFalse && password === "" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, "Password is required") : ""), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, (_React$createElement = {
    onClick: handleSubmit,
    style: {
      borderRadius: "20px"
    },
    variant: "contained"
  }, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "style", {
    background: "#4caf50",
    color: "white",
    marginLeft: "15px",
    marginTop: "20px"
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 201
  }), Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$createElement, "__self", this), _React$createElement), "Submit ", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    size: 20,
    style: {
      marginLeft: "10px"
    },
    icon: react_icons_kit_md_ic_send__WEBPACK_IMPORTED_MODULE_13__["ic_send"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })))) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      margin: "0px",
      padding: "0px"
    },
    className: "jsx-4145724005" + " " + "col-12 row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "row col-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("img", {
    style: {
      width: "100%"
    },
    src: "http://localhost:8080/upload/" + avatar,
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-4145724005" + " " + "col-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h5", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    style: {
      marginBottom: "0px"
    },
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214
    },
    __self: this
  }, email), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-4145724005",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, "0778722539"), status ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: function onClick(e) {
      return handleStatusWriter(false, id);
    },
    style: {
      borderRadius: "20px"
    },
    variant: "contained",
    color: "secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    size: 20,
    style: {
      marginRight: "10px"
    },
    icon: react_icons_kit_md_ic_remove_circle_outline__WEBPACK_IMPORTED_MODULE_15__["ic_remove_circle_outline"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), " Ban Writer") : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5___default.a, {
    onClick: function onClick(e) {
      return handleStatusWriter(true, id);
    },
    style: {
      borderRadius: "20px",
      color: "white",
      background: "#4bc051"
    },
    variant: "contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
    size: 20,
    style: {
      marginRight: "10px"
    },
    icon: react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16__["ic_check"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), " Available Writer"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      overflow: "hidden",
      width: "400px"
    },
    className: "jsx-4145724005" + " " + "col-12 row mt-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      maxHeight: "200px",
      overflowY: "scroll",
      overflowX: "visible",
      paddingLeft: "35px",
      width: "100%"
    },
    className: "jsx-4145724005" + " " + "col-11 row mb-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }, props.arrDocs.map(function (doc) {
    if (doc.status === "PENDING" || doc.status === "CHECKED") return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      key: doc.id,
      style: {
        border: "1px solid #00000017",
        height: "50px"
      },
      onClick: function onClick(e) {
        return handleDoc(doc.id);
      },
      className: "jsx-4145724005" + " " + "row item col-12 col-lg-11 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      className: "jsx-4145724005" + " " + "col-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }, doc.status === "CHECKED" ? react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        background: "#4bc051",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        position: "absolute",
        color: "white",
        marginTop: "5px"
      },
      className: "jsx-4145724005",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      size: 20,
      icon: react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_16__["ic_check"],
      style: {
        marginLeft: "5px",
        marginTop: "1px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235
      },
      __self: this
    })) : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
      style: {
        background: "#1700d6b8",
        width: "28px",
        height: "28px",
        borderRadius: "50%",
        position: "absolute",
        color: "white",
        marginTop: "5px"
      },
      className: "jsx-4145724005",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_12__["Icon"], {
      size: 20,
      icon: react_icons_kit_md_ic_sync__WEBPACK_IMPORTED_MODULE_17__["ic_sync"],
      style: {
        marginLeft: "5px",
        marginTop: "1px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
      style: {
        marginTop: "5px"
      },
      className: "jsx-4145724005" + " " + "col-6",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    }, "Rocket Chat"));
  })))))));
}

/***/ }),

/***/ "./modules/writersPage/components/writersPage.js":
/*!*******************************************************!*\
  !*** ./modules/writersPage/components/writersPage.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Table */ "./modules/writersPage/components/Table.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal */ "./modules/writersPage/components/modal.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/md/ic_check */ "react-icons-kit/md/ic_check");
/* harmony import */ var react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_icons_kit_md_ic_block__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons-kit/md/ic_block */ "react-icons-kit/md/ic_block");
/* harmony import */ var react_icons_kit_md_ic_block__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_block__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-icons-kit/md/ic_person_add */ "react-icons-kit/md/ic_person_add");
/* harmony import */ var react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-icons-kit/fa/user */ "react-icons-kit/fa/user");
/* harmony import */ var react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../api */ "./api.js");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react-spinners */ "react-spinners");
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_25__);











var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\writersPage.js";















var addWriterUrl = _api__WEBPACK_IMPORTED_MODULE_23__["callAPI"]() + "auth/addWriter";
var statusWriterURL = _api__WEBPACK_IMPORTED_MODULE_23__["callAPI"]() + "auth/update/status";
var documentWriter = _api__WEBPACK_IMPORTED_MODULE_23__["callAPI"]() + "documents/";

var writersPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(writersPage, _Component);

  function writersPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, writersPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(writersPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "handleStatusWriter", function (status, id) {
      var formData = new FormData();
      var data = {
        status: status
      };

      for (var i in data) {
        formData.append(i, formData[i]);
      }

      fetch(statusWriterURL, {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": "Bearer " + js_cookie__WEBPACK_IMPORTED_MODULE_21___default.a.get("token")
        },
        body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
          id: id,
          status: status
        })
      }).then(function (res) {
        console.log(res);
        return res.text();
      }).then(function (data) {
        console.log(data);

        _this.props.updateCount(status);
      });

      var newRow = Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_this.props.rows);

      newRow.filter(function (e) {
        if (e.id === _this.state.index) {
          e.status = status;
        }

        return e;
      });

      _this.setState({
        rows: newRow
      });

      _this.handleModal();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__["default"])(_this), "addWriter", function () {
      if (!_this.state.isAddWriter) _this.handleAddWriter();

      _this.handleModal();
    });

    _this.state = {
      showInfo: false,
      img: "",
      data: {
        img: "",
        name: "",
        username: "",
        phoneNumber: "",
        email: "",
        password: ""
      },
      isUsedEmail: false,
      isUsedUsername: false,
      index: "",
      showForm: false,
      isAddWriter: false,
      banWriter: _this.props.banWriter,
      availableWriter: _this.props.availableWriter,
      arrDocs: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(writersPage, [{
    key: "handleModal",
    value: function handleModal() {
      if (this.state.openModal) this.setState({
        data: {
          name: "",
          username: "",
          phoneNumber: "",
          email: "",
          password: ""
        },
        index: "",
        isUpdate: false
      });
      console.log(this.state);
      this.setState(Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({
        openModal: !this.state.openModal,
        isUsedEmail: false,
        isUsedUsername: false,
        isUsedPhone: false
      }, "isUsedPhone", false));
    }
  }, {
    key: "handleAddWriter",
    value: function handleAddWriter() {
      console.log(this.state);
      this.setState({
        isAddWriter: !this.state.isAddWriter
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      // console.log(this.props)
      var uploadData = function uploadData(data, index) {
        console.log(data);
        fetch(documentWriter + data.id + "/document", {
          method: 'GET',
          headers: {
            "Content-Type": "application/json;charset=UTF-8",
            "Authorization": "Bearer " + js_cookie__WEBPACK_IMPORTED_MODULE_21___default.a.get("token")
          }
        }).then(function (res) {
          return res.json();
        }).then(function (data) {
          _this2.setState({
            arrDocs: data.result
          });
        });

        _this2.setState({
          data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, data),
          index: index,
          isUpdate: true,
          isAddWriter: false
        });

        console.log(_this2.state);

        _this2.handleModal();
      };

      var initData = function initData() {
        _this2.setState({
          data: {
            name: "",
            username: "",
            phoneNumber: "",
            email: "",
            password: ""
          }
        });
      };

      var handleSubmit = function handleSubmit() {
        fetch(addWriterUrl, {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + js_cookie__WEBPACK_IMPORTED_MODULE_21___default.a.get("token")
          },
          body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
            email: _this2.state.data.email,
            password: _this2.state.data.password,
            username: _this2.state.data.username,
            name: _this2.state.data.name,
            phoneNumber: _this2.state.data.phoneNumber
          })
        }).then(function (res) {
          console.log(res);
          return res.json();
        }).then(function (data) {
          console.log(data);

          if (data.message === "Email already in use") {
            _this2.setState({
              isUsedEmail: true
            });

            _this2.setState({
              isUsedUsername: false
            });

            _this2.setState({
              isUsedPhone: false
            });

            return;
          }

          if (data.message === "Username already in use") {
            _this2.setState({
              isUsedUsername: true
            });

            _this2.setState({
              isUsedEmail: false
            });

            _this2.setState({
              isUsedPhone: false
            });

            return;
          }

          if (data.status === 500) {
            _this2.setState({
              isUsedPhone: true
            });

            _this2.setState({
              isUsedEmail: false
            });

            _this2.setState({
              isUsedUsername: false
            });

            return;
          }

          _this2.setState({
            isUsedEmail: false
          });

          var newRow = _this2.props.rows;
          data = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state.data, {
            status: "available"
          });
          newRow.push(data);

          _this2.setState({
            data: {
              name: "",
              username: "",
              phoneNumber: "",
              email: "",
              password: ""
            },
            rows: newRow
          });

          _this2.handleModal();
        });
      };

      var handleOnchange = function handleOnchange(info, value) {
        _this2.setState({
          data: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, _this2.state.data, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])({}, info, value))
        });
      };

      return react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_12___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_11___default.a, {
        id: "3859198595",
        __self: this
      }, ".contacts-type.jsx-3859198595{background:white;border-radius:10px;border:1px solid #00000030;}.item.jsx-3859198595{-webkit-transition:all 0.2s;transition:all 0.2s;cursor:pointer;}.item.jsx-3859198595:hover{-webkit-transition:all 0.2s;transition:all 0.2s;border:1px solid #00000030;-webkit-transform :scale(1.02,1.02);-ms-transform :scale(1.02,1.02);transform :scale(1.02,1.02);box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cml0ZXJzUGFnZVxcY29tcG9uZW50c1xcd3JpdGVyc1BhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMk5xQixBQUcwQyxBQUtFLEFBSUEsaUJBUkEsbUJBRXhCLFlBSUEsQUFHK0IsZUFQOUIsQUFJQSxZQUlnQyxnR0FDOEYsdUhBQzlIIiwiZmlsZSI6IkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFx3cml0ZXJzUGFnZVxcY29tcG9uZW50c1xcd3JpdGVyc1BhZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRhYmxlRG9jcyBmcm9tIFwiLi9UYWJsZVwiXG5pbXBvcnQgTW9kYWxXcml0ZXIgZnJvbSBcIi4vbW9kYWxcIlxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3JlYWN0LWljb25zLWtpdCdcbmltcG9ydCB7IGljX2NoZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX2NoZWNrJ1xuaW1wb3J0IHsgaWNfYmxvY2sgfSBmcm9tICdyZWFjdC1pY29ucy1raXQvbWQvaWNfYmxvY2snXG5pbXBvcnQgeyBpY19wZXJzb25fYWRkIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L21kL2ljX3BlcnNvbl9hZGQnXG5pbXBvcnQgeyB1c2VyIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL3VzZXInXG5pbXBvcnQgY29va2llcyBmcm9tICdqcy1jb29raWUnO1xuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCAqIGFzIGFwaSBmcm9tIFwiLi4vLi4vLi4vYXBpXCJcbmltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xuaW1wb3J0IHsgQ2xpcExvYWRlciB9IGZyb20gJ3JlYWN0LXNwaW5uZXJzJztcblxuY29uc3QgYWRkV3JpdGVyVXJsID0gYXBpLmNhbGxBUEkoKSsgYGF1dGgvYWRkV3JpdGVyYFxuY29uc3Qgc3RhdHVzV3JpdGVyVVJMID0gYXBpLmNhbGxBUEkoKSsgXCJhdXRoL3VwZGF0ZS9zdGF0dXNcIlxuY29uc3QgZG9jdW1lbnRXcml0ZXIgPSBhcGkuY2FsbEFQSSgpK1wiZG9jdW1lbnRzL1wiXG5cbmNsYXNzIHdyaXRlcnNQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIHNob3dJbmZvOiBmYWxzZSxcbiAgICAgICAgICAgIGltZzogXCJcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpbWc6IFwiXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgICAgICAgICAgICBlbWFpbDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogXCJcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGlzVXNlZEVtYWlsIDogZmFsc2UsXG4gICAgICAgICAgICBpc1VzZWRVc2VybmFtZTpmYWxzZSxcbiAgICAgICAgICAgIGluZGV4OiBcIlwiLFxuICAgICAgICAgICAgc2hvd0Zvcm06IGZhbHNlLFxuICAgICAgICAgICAgaXNBZGRXcml0ZXI6IGZhbHNlLFxuICAgICAgICAgICAgYmFuV3JpdGVyOnRoaXMucHJvcHMuYmFuV3JpdGVyLFxuICAgICAgICAgICAgYXZhaWxhYmxlV3JpdGVyOnRoaXMucHJvcHMuYXZhaWxhYmxlV3JpdGVyLFxuICAgICAgICAgICAgYXJyRG9jczpbXVxuICAgICAgICB9XG4gICAgfVxuICAgIGhhbmRsZU1vZGFsKCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5vcGVuTW9kYWwpXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbmRleDogXCJcIixcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZTogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgb3Blbk1vZGFsOiAhdGhpcy5zdGF0ZS5vcGVuTW9kYWwsXG4gICAgICAgICAgICBpc1VzZWRFbWFpbDpmYWxzZSxcbiAgICAgICAgICAgIGlzVXNlZFVzZXJuYW1lOmZhbHNlLFxuICAgICAgICAgICAgaXNVc2VkUGhvbmUgOiBmYWxzZSxcbiAgICAgICAgICAgIGlzVXNlZFBob25lOiBmYWxzZVxuICAgICAgICB9KVxuICAgIH1cbiAgICBoYW5kbGVTdGF0dXNXcml0ZXIgPSAoc3RhdHVzLGlkKSA9PiB7XG4gICAgICAgIHZhciBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gICAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzOnN0YXR1c1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgaSBpbiBkYXRhKVxuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKGksZm9ybURhdGFbaV0pXG4gICAgICAgIGZldGNoKHN0YXR1c1dyaXRlclVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIsXG4gICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgY29va2llcy5nZXQoXCJ0b2tlblwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpXG4gICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICAgICAgdGhpcy5wcm9wcy51cGRhdGVDb3VudChzdGF0dXMpXG4gICAgICAgIH0pXG4gICAgICAgIGxldCBuZXdSb3cgPSBbLi4udGhpcy5wcm9wcy5yb3dzXVxuICAgICAgICBuZXdSb3cuZmlsdGVyKGUgPT4ge1xuICAgICAgICAgICAgaWYoZS5pZCA9PT0gdGhpcy5zdGF0ZS5pbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlLnN0YXR1cyA9IHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICByb3dzOiBuZXdSb3csXG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuaGFuZGxlTW9kYWwoKVxuXG4gICAgfVxuICAgIGhhbmRsZUFkZFdyaXRlcigpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBpc0FkZFdyaXRlcjogIXRoaXMuc3RhdGUuaXNBZGRXcml0ZXJcbiAgICAgICAgfSlcbiAgICB9XG4gICAgYWRkV3JpdGVyID0gKCkgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuaXNBZGRXcml0ZXIpXG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFkZFdyaXRlcigpXG4gICAgICAgIHRoaXMuaGFuZGxlTW9kYWwoKVxuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpXG4gICAgICAgIGNvbnN0IHVwbG9hZERhdGEgPSAoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICBmZXRjaChkb2N1bWVudFdyaXRlciArIGRhdGEuaWQrYC9kb2N1bWVudGAsIHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9VVRGLThcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgY29va2llcy5nZXQoXCJ0b2tlblwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH0pLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIGFyckRvY3M6ZGF0YS5yZXN1bHRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGRhdGE6IHsgLi4uZGF0YSB9LFxuICAgICAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgICAgICBpc1VwZGF0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpc0FkZFdyaXRlcjogZmFsc2VcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RhbCgpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5pdERhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKCkgPT4ge1xuICAgICAgICAgICAgZmV0Y2goYWRkV3JpdGVyVXJsLCB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IFwiQmVhcmVyIFwiICsgY29va2llcy5nZXQoXCJ0b2tlblwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5zdGF0ZS5kYXRhLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogdGhpcy5zdGF0ZS5kYXRhLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICB1c2VybmFtZTogdGhpcy5zdGF0ZS5kYXRhLnVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnN0YXRlLmRhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMuc3RhdGUuZGF0YS5waG9uZU51bWJlclxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXG4gICAgICAgICAgICB9KS50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5tZXNzYWdlID09PSBcIkVtYWlsIGFscmVhZHkgaW4gdXNlXCIpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRFbWFpbDp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNVc2VkVXNlcm5hbWU6ZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRQaG9uZTpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihkYXRhLm1lc3NhZ2UgPT09IFwiVXNlcm5hbWUgYWxyZWFkeSBpbiB1c2VcIilcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVXNlZFVzZXJuYW1lOnRydWV9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRFbWFpbDpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2lzVXNlZFBob25lOmZhbHNlfSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKGRhdGEuc3RhdHVzID09PSA1MDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRQaG9uZTp0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aXNVc2VkRW1haWw6ZmFsc2V9KVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRVc2VybmFtZTpmYWxzZX0pXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtpc1VzZWRFbWFpbDpmYWxzZX0pXG4gICAgICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMucHJvcHMucm93c1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7IC4uLnRoaXMuc3RhdGUuZGF0YSwgc3RhdHVzOiBcImF2YWlsYWJsZVwiIH1cbiAgICAgICAgICAgICAgICBuZXdSb3cucHVzaChkYXRhKVxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgcm93czogbmV3Um93LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVNb2RhbCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGhhbmRsZU9uY2hhbmdlID0gKGluZm8sIHZhbHVlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgW2luZm9dOiB2YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdHMtdHlwZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjoxcHggc29saWQgIzAwMDAwMDMwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLml0ZW17XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjJzO1xuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAuaXRlbTpob3ZlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246YWxsIDAuMnM7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6MXB4IHNvbGlkICMwMDAwMDAzMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSA6IHNjYWxlKDEuMDIsMS4wMik7IFxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCAjZGFkY2UwLCBpbnNldCAtMXB4IDAgMCAjZGFkY2UwLCAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LC4zKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LC4xNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e3Bvc2l0aW9uOlwiZml4ZWRcIiwgYmFja2dyb3VuZDpcIiNmNWY2ZmFcIix3aWR0aDogXCIyMDAlXCIsIGhlaWdodDpcIjEwMCVcIixsZWZ0OlwiMHB4XCIsdG9wOlwiMHB4XCIsekluZGV4OlwiLTEwXCJ9fT5cblxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHJvdyBwbC01XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgY29sLTExIHBsLTBcIiBzdHlsZT17eyBjb2xvcjogXCIjMDAwMDAwNmVcIiwgbWFyZ2luQm90dG9tOiBcIjIwcHhcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5Xcml0ZXJzPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5hZGRXcml0ZXJ9IHN0eWxlPXt7IGZsb2F0OiBcInJpZ2h0XCIsIHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHJpZ2h0OiBcIjE1cHhcIiwgdG9wOiBcIjBweFwiLCBib3JkZXJSYWRpdXM6IFwiMjBweFwiIH19IHZhcmlhbnQ9XCJjb250YWluZWRcIiBjb2xvcj1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHNpemU9ezIwfSBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIxMHB4XCIgfX0gaWNvbj17aWNfcGVyc29uX2FkZH0gLz4gQWRkIFdyaXRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RzLXR5cGUgY29sLTExIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCByb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjQ1cHhcIiwgbWFyZ2luQm90dG9tOiBcIjE1cHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjZjJmOWZmXCIsIHdpZHRoOiBcIjYwcHhcIiwgaGVpZ2h0OiBcIjYwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLCBib3JkZXI6IFwiMXB4IHNvbGlkICMwMDAwMDAzMFwiLCBtYXJnaW5Ub3A6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiLCBtYXJnaW5MZWZ0OiBcIjE4cHhcIiwgY29sb3I6IFwiIzUwNWFjZVwiLCBtYXJnaW5Ub3A6IFwiMTVweFwiIH19IHNpemU9ezI1fSBpY29uPXt1c2VyfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiLCBib3JkZXJSaWdodDogXCIxcHggc29saWQgIzAwMDAwMDMwXCIsIGhlaWdodDogXCI2MHB4XCIsIHBhZGRpbmdSaWdodDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIGNvbG9yOiBcIiM4MjAwMDA5ZSAgICBcIiB9fT5BbGwgd3JpdGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5yb3dzLmxlbmd0aC0xfSA8c3BhbiBzdHlsZT17eyBmb250U2l6ZTogXCIxNXB4XCIsIGNvbG9yOiBcIiMwMDAwMDA2OVwiIH19PldyaXRlcnM8L3NwYW4+PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNCByb3dcIiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjBweFwiLCBtYXJnaW5Cb3R0b206IFwiMTVweFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiNmMmY5ZmZcIiwgd2lkdGg6IFwiNjBweFwiLCBoZWlnaHQ6IFwiNjBweFwiLCBib3JkZXJSYWRpdXM6IFwiNTAlXCIsIGJvcmRlcjogXCIxcHggc29saWQgIzAwMDAwMDMwXCIsIG1hcmdpblRvcDogXCIyMHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIsIG1hcmdpbkxlZnQ6IFwiMThweFwiLCBjb2xvcjogXCIjNTA1YWNlXCIsIG1hcmdpblRvcDogXCIxNXB4XCIgfX0gc2l6ZT17MjV9IGljb249e2ljX2NoZWNrfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLThcIiBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiMTVweFwiLCBib3JkZXJSaWdodDogXCIxcHggc29saWQgIzAwMDAwMDMwXCIsIGhlaWdodDogXCI2MHB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIGNvbG9yOiBcIiM4MjAwMDA5ZSAgICBcIiB9fT5BdmFpbGFibGUgd3JpdGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5hdmFpbGFibGVXcml0ZXItMX0gPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6IFwiMTVweFwiLCBjb2xvcjogXCIjMDAwMDAwNjlcIiB9fT5Xcml0ZXJzPC9zcGFuPjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgcm93XCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIwXCIsIG1hcmdpbkJvdHRvbTogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiI2YyZjlmZlwiLCB3aWR0aDogXCI2MHB4XCIsIGhlaWdodDogXCI2MHB4XCIsIGJvcmRlclJhZGl1czogXCI1MCVcIiwgYm9yZGVyOiBcIjFweCBzb2xpZCAjMDAwMDAwMzBcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luTGVmdDogXCIxOHB4XCIsIGNvbG9yOiBcIiM1MDVhY2VcIiwgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fSBzaXplPXsyNX0gaWNvbj17aWNfYmxvY2t9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtOFwiIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxNXB4XCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17eyBmb250U2l6ZTogXCIxOHB4XCIsIGNvbG9yOiBcIiM4MjAwMDA5ZSAgICBcIiB9fT5CYW4gd3JpdGVyczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57dGhpcy5wcm9wcy5iYW5Xcml0ZXJ9IDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiBcIjE1cHhcIiwgY29sb3I6IFwiIzAwMDAwMDY5XCIgfX0+V3JpdGVyczwvc3Bhbj48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTExIHJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlRG9jcyAgey4uLnRoaXMuc3RhdGV9IHsuLi50aGlzLnByb3BzfSB1cGxvYWREYXRhPXt1cGxvYWREYXRhfSAvPlxuXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8TW9kYWxXcml0ZXIgaGFuZGxlQWRkV3JpdGVyPXtlID0+IHRoaXMuaGFuZGxlQWRkV3JpdGVyKCl9IGluaXREYXRhPXtpbml0RGF0YX0gaGFuZGxlU3VibWl0PXtoYW5kbGVTdWJtaXR9IGhhbmRsZU1vZGFsPXtlID0+IHRoaXMuaGFuZGxlTW9kYWwoKX0gaGFuZGxlU3RhdHVzV3JpdGVyPXt0aGlzLmhhbmRsZVN0YXR1c1dyaXRlcn0gaGFuZGxlT25jaGFuZ2U9e2hhbmRsZU9uY2hhbmdlfSB7Li4udGhpcy5zdGF0ZX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCB3cml0ZXJzUGFnZTsiXX0= */\n/*@ sourceURL=C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\writersPage.js */"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          position: "fixed",
          background: "#f5f6fa",
          width: "200%",
          height: "100%",
          left: "0px",
          top: "0px",
          zIndex: "-10"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          width: "100%"
        },
        className: "jsx-3859198595" + " " + "col-12 row pl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          color: "#0000006e",
          marginBottom: "20px",
          position: "relative"
        },
        className: "jsx-3859198595" + " " + "mt-3 col-11 pl-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, "Writers"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_15___default.a, {
        onClick: this.addWriter,
        style: {
          "float": "right",
          position: "absolute",
          right: "15px",
          top: "0px",
          borderRadius: "20px"
        },
        variant: "contained",
        color: "secondary",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        size: 20,
        style: {
          marginRight: "10px"
        },
        icon: react_icons_kit_md_ic_person_add__WEBPACK_IMPORTED_MODULE_19__["ic_person_add"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }), " Add Writer")), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3859198595" + " " + "contacts-type col-11 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginLeft: "45px",
          marginBottom: "15px"
        },
        className: "jsx-3859198595" + " " + "col-4 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3859198595" + " " + "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          background: "#f2f9ff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid #00000030",
          marginTop: "20px"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        style: {
          marginBottom: "5px",
          marginLeft: "18px",
          color: "#505ace",
          marginTop: "15px"
        },
        size: 25,
        icon: react_icons_kit_fa_user__WEBPACK_IMPORTED_MODULE_20__["user"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginTop: "15px",
          borderRight: "1px solid #00000030",
          height: "60px",
          paddingRight: "20px"
        },
        className: "jsx-3859198595" + " " + "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        style: {
          fontSize: "18px",
          color: "#8200009e    "
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 257
        },
        __self: this
      }, "All writers"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, this.props.rows.length - 1, " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          fontSize: "15px",
          color: "#00000069"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, "Writers")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginLeft: "0px",
          marginBottom: "15px"
        },
        className: "jsx-3859198595" + " " + "col-4 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3859198595" + " " + "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          background: "#f2f9ff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid #00000030",
          marginTop: "20px"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        style: {
          marginBottom: "5px",
          marginLeft: "18px",
          color: "#505ace",
          marginTop: "15px"
        },
        size: 25,
        icon: react_icons_kit_md_ic_check__WEBPACK_IMPORTED_MODULE_17__["ic_check"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginTop: "15px",
          borderRight: "1px solid #00000030",
          height: "60px"
        },
        className: "jsx-3859198595" + " " + "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        style: {
          fontSize: "18px",
          color: "#8200009e    "
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 269
        },
        __self: this
      }, "Available writers"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, this.props.availableWriter - 1, " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          fontSize: "15px",
          color: "#00000069"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270
        },
        __self: this
      }, "Writers")))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginLeft: "0",
          marginBottom: "15px"
        },
        className: "jsx-3859198595" + " " + "col-4 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3859198595" + " " + "col-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          background: "#f2f9ff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "1px solid #00000030",
          marginTop: "20px"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_16__["Icon"], {
        style: {
          marginBottom: "5px",
          marginLeft: "18px",
          color: "#505ace",
          marginTop: "15px"
        },
        size: 25,
        icon: react_icons_kit_md_ic_block__WEBPACK_IMPORTED_MODULE_18__["ic_block"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        style: {
          marginTop: "15px"
        },
        className: "jsx-3859198595" + " " + "col-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h4", {
        style: {
          fontSize: "18px",
          color: "#8200009e    "
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Ban writers"), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("h3", {
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, this.props.banWriter, " ", react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("span", {
        style: {
          fontSize: "15px",
          color: "#00000069"
        },
        className: "jsx-3859198595",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, "Writers"))))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement("div", {
        className: "jsx-3859198595" + " " + "col-11 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_Table__WEBPACK_IMPORTED_MODULE_13__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, this.props, {
        uploadData: uploadData,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_12___default.a.createElement(_modal__WEBPACK_IMPORTED_MODULE_14__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        handleAddWriter: function handleAddWriter(e) {
          return _this2.handleAddWriter();
        },
        initData: initData,
        handleSubmit: handleSubmit,
        handleModal: function handleModal(e) {
          return _this2.handleModal();
        },
        handleStatusWriter: this.handleStatusWriter,
        handleOnchange: handleOnchange
      }, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }))));
    }
  }]);

  return writersPage;
}(react__WEBPACK_IMPORTED_MODULE_12__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (writersPage);

/***/ }),

/***/ "./modules/writersPage/components/writersPageContainer.js":
/*!****************************************************************!*\
  !*** ./modules/writersPage/components/writersPageContainer.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _writersPage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./writersPage */ "./modules/writersPage/components/writersPage.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reducers */ "./modules/writersPage/reducers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../actions */ "./modules/writersPage/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! unfetch */ "unfetch");
/* harmony import */ var unfetch__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(unfetch__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../api */ "./api.js");









var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\writersPage\\components\\writersPageContainer.js";











var DynamicWriterPage = next_dynamic__WEBPACK_IMPORTED_MODULE_18___default()(function () {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./writersPage */ "./modules/writersPage/components/writersPage.js"));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./writersPage */ "./modules/writersPage/components/writersPage.js")];
    },
    modules: ["./writersPage"]
  }
});
var getWriterUrl = _api__WEBPACK_IMPORTED_MODULE_19__["callAPI"]() + "auth";

var writersPageContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(writersPageContainer, _Component);

  function writersPageContainer(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, writersPageContainer);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(writersPageContainer).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "updateCount", function (status) {
      unfetch__WEBPACK_IMPORTED_MODULE_16___default()(getWriterUrl, {
        method: 'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "Bearer " + js_cookie__WEBPACK_IMPORTED_MODULE_17___default.a.get("token")
        }
      }).then(function (res) {
        console.log(res);
        return res.json();
      }).then(function (data) {
        _this.setState({
          rows: data.result
        });

        var numAvail = 0;
        var numBan = 0;
        data.result.map(function (e) {
          if (e.status === true) numAvail++;else numBan++;
        });

        _this.setState({
          availableWriter: numAvail,
          banWriter: numBan
        });
      });
    });

    function createData(status, img, name, phone, email) {
      return {
        status: status,
        img: img,
        name: name,
        phone: phone,
        email: email
      };
    }

    _this.state = {
      showForm: false,
      showContacts: false,
      startDate: new Date(),
      value: '',
      isChecked: true,
      rows: [],
      data: {},
      availableWriter: 0,
      banWriter: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(writersPageContainer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      unfetch__WEBPACK_IMPORTED_MODULE_16___default()(getWriterUrl, {
        method: 'GET',
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": "Bearer " + js_cookie__WEBPACK_IMPORTED_MODULE_17___default.a.get("token")
        }
      }).then(function (res) {
        console.log(res);
        return res.json();
      }).then(function (data) {
        _this2.setState({
          rows: data.result
        });

        var numAvail = 0;
        var numBan = 0;
        data.result.map(function (e) {
          if (e.status === true) numAvail++;else numBan++;
        });

        _this2.setState({
          availableWriter: numAvail,
          banWriter: numBan
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_9___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(DynamicWriterPage, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
        updateCount: this.updateCount
      }, this.props, this.state, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      })));
    }
  }]);

  return writersPageContainer;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

function mapStateToProps(state) {
  return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state[_reducers__WEBPACK_IMPORTED_MODULE_13__["name"]]);
}

function mapDispatchToProps(dispatch) {
  var actions = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _actions__WEBPACK_IMPORTED_MODULE_14__);

  return {
    actions: Object(redux__WEBPACK_IMPORTED_MODULE_11__["bindActionCreators"])(actions, dispatch)
  };
}

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_15__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_12__["connect"])(mapStateToProps, mapDispatchToProps)(writersPageContainer)));

/***/ }),

/***/ "./modules/writersPage/constrants.js":
/*!*******************************************!*\
  !*** ./modules/writersPage/constrants.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/writersPage/reducers.js":
/*!*****************************************!*\
  !*** ./modules/writersPage/reducers.js ***!
  \*****************************************/
/*! exports provided: name, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-freeze */ "deep-freeze");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./modules/writersPage/actions.js");



var name = "WrappedPage";
var initialState = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()({
  isDocsPageMain: true
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])({}, initialState));

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/from.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/from */ "core-js/library/fn/array/from");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "core-js/library/fn/array/is-array");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/is-iterable */ "core-js/library/fn/is-iterable");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/reflect/construct */ "core-js/library/fn/reflect/construct");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithoutHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _construct; });
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/reflect/construct */ "./node_modules/@babel/runtime-corejs2/core-js/reflect/construct.js");
/* harmony import */ var _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");



function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a) return false;
  if (_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default()(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = _core_js_reflect_construct__WEBPACK_IMPORTED_MODULE_0___default.a;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/from */ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js");
/* harmony import */ var _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_from__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/is-iterable */ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js");
/* harmony import */ var _core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1__);


function _iterableToArray(iter) {
  if (_core_js_is_iterable__WEBPACK_IMPORTED_MODULE_1___default()(Object(iter)) || Object.prototype.toString.call(iter) === "[object Arguments]") return _core_js_array_from__WEBPACK_IMPORTED_MODULE_0___default()(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "./node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js");
/* harmony import */ var _nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js");



function _toConsumableArray(arr) {
  return Object(_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || Object(_nonIterableSpread__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map["default"]();
var IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners["delete"](entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = function listenToIntersections(el, cb) {
  var observer = getObserver();

  if (!observer) {
    return function () {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return function () {
    observer.unobserve(el);
    listeners["delete"](el);
  };
};

var Link =
/*#__PURE__*/
function (_react$Component) {
  (0, _inherits2["default"])(Link, _react$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2["default"])(this, Link);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Link).apply(this, arguments));

    _this.cleanUpListeners = function () {};

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    _this.linkClicked = function (e) {
      // @ts-ignore target exists on currentTarget
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router["default"][_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      })["catch"](function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2["default"])(Link, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.cleanUpListeners();
    }
  }, {
    key: "handleRef",
    value: function handleRef(ref) {
      var _this2 = this;

      if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
        this.cleanUpListeners();
        this.cleanUpListeners = listenToIntersections(ref, function () {
          _this2.prefetch();
        });
      }
    } // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = (0, _url.resolve)(pathname, parsedHref);

      _router["default"].prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = _react["default"].createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = _react.Children.only(children);

      var props = {
        ref: function ref(el) {
          return _this3.handleRef(el);
        },
        onMouseEnter: function onMouseEnter(e) {
          if (child.props && typeof child.props.onMouseEnter === 'function') {
            child.props.onMouseEnter(e);
          }

          _this3.prefetch();
        },
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this3.linkClicked(e);
          }
        } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
        // defined, we specify the current 'href', so that repetition is not needed by the user

      };

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (false) {}

      return _react["default"].cloneElement(child, props);
    }
  }]);
  return Link;
}(_react.Component);

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]).isRequired,
    as: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].object]),
    prefetch: _propTypes["default"].bool,
    replace: _propTypes["default"].bool,
    shallow: _propTypes["default"].bool,
    passHref: _propTypes["default"].bool,
    scroll: _propTypes["default"].bool,
    children: _propTypes["default"].oneOfType([_propTypes["default"].element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports["default"] = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/construct */ "./node_modules/@babel/runtime-corejs2/helpers/esm/construct.js"));

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.useRequest = useRequest;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2["default"];
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _requestContext = __webpack_require__(/*! next-server/dist/lib/request-context */ "next-server/dist/lib/request-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter["default"];
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready: function ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
var propertyFields = ['components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty["default"])(singletonRouter, 'events', {
  get: function get() {
    return _router2["default"].events;
  }
});
propertyFields.concat(urlPropertyFields).forEach(function (field) {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty["default"])(singletonRouter, field, {
    get: function get() {
      var router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(function (field) {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field].apply(router, arguments);
  };
});
routerEvents.forEach(function (event) {
  singletonRouter.ready(function () {
    _router2["default"].events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField].apply(_singletonRouter, arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports["default"] = _default;

function useRouter() {
  return _react["default"].useContext(_routerContext.RouterContext);
}

function useRequest() {
  return _react["default"].useContext(_requestContext.RequestContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = (0, _construct2["default"])(_router2["default"], args);
  singletonRouter.readyCallbacks.forEach(function (cb) {
    return cb();
  });
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var _i = 0, _urlPropertyFields = urlPropertyFields; _i < _urlPropertyFields.length; _i++) {
    var property = _urlPropertyFields[_i];

    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2["default"])({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2["default"].events;
  propertyFields.forEach(function (field) {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty["default"])(instance, field, {
      get: function get() {
        return _router[field];
      }
    });
  });
  coreMethodFields.forEach(function (field) {
    instance[field] = function () {
      return _router[field].apply(_router, arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault2 = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _classCallCheck2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js"));

var _createClass2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault2(__webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js"));

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  var WithRouteWrapper =
  /*#__PURE__*/
  function (_react$default$Compon) {
    (0, _inherits2["default"])(WithRouteWrapper, _react$default$Compon);

    function WithRouteWrapper() {
      var _this;

      (0, _classCallCheck2["default"])(this, WithRouteWrapper);
      _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WithRouteWrapper).apply(this, arguments));
      _this.context = void 0;
      return _this;
    }

    (0, _createClass2["default"])(WithRouteWrapper, [{
      key: "render",
      value: function render() {
        return _react["default"].createElement(ComposedComponent, (0, _extends2["default"])({
          router: this.context.router
        }, this.props));
      }
    }]);
    return WithRouteWrapper;
  }(_react["default"].Component);

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes["default"].object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/admin/writers.js":
/*!********************************!*\
  !*** ./pages/admin/writers.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_wrappedMenu_components_wrappedMenuContainer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/wrappedMenu/components/wrappedMenuContainer */ "./modules/wrappedMenu/components/wrappedMenuContainer.js");
/* harmony import */ var _modules_writersPage_components_writersPageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/writersPage/components/writersPageContainer */ "./modules/writersPage/components/writersPageContainer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\pages\\admin\\writers.js";




 // import classes from "../assets/css/custom.docsPage.css"



var Writers = function Writers(props) {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modules_wrappedMenu_components_wrappedMenuContainer__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modules_writersPage_components_writersPageContainer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.slim.min.js",
    integrity: "sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js",
    integrity: "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
    integrity: "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM",
    crossOrigin: "anonymous",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Writers);

/***/ }),

/***/ 7:
/*!**************************************!*\
  !*** multi ./pages/admin/writers.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\COMPUTER\Desktop\project\resource-chains-introduction-web-front-end\src\pages\admin\writers.js */"./pages/admin/writers.js");


/***/ }),

/***/ "@date-io/date-fns":
/*!************************************!*\
  !*** external "@date-io/date-fns" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@date-io/date-fns");

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Checkbox":
/*!*********************************************!*\
  !*** external "@material-ui/core/Checkbox" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "@material-ui/core/Dialog":
/*!*******************************************!*\
  !*** external "@material-ui/core/Dialog" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

/***/ }),

/***/ "@material-ui/core/DialogActions":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogActions" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogActions");

/***/ }),

/***/ "@material-ui/core/DialogContent":
/*!**************************************************!*\
  !*** external "@material-ui/core/DialogContent" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "@material-ui/core/DialogContentText":
/*!******************************************************!*\
  !*** external "@material-ui/core/DialogContentText" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContentText");

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "@material-ui/core/FormControlLabel":
/*!*****************************************************!*\
  !*** external "@material-ui/core/FormControlLabel" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/Input":
/*!******************************************!*\
  !*** external "@material-ui/core/Input" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Input");

/***/ }),

/***/ "@material-ui/core/Menu":
/*!*****************************************!*\
  !*** external "@material-ui/core/Menu" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Menu");

/***/ }),

/***/ "@material-ui/core/MenuItem":
/*!*********************************************!*\
  !*** external "@material-ui/core/MenuItem" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Switch":
/*!*******************************************!*\
  !*** external "@material-ui/core/Switch" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "@material-ui/core/Table":
/*!******************************************!*\
  !*** external "@material-ui/core/Table" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Table");

/***/ }),

/***/ "@material-ui/core/TableBody":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableBody" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableBody");

/***/ }),

/***/ "@material-ui/core/TableCell":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableCell" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableCell");

/***/ }),

/***/ "@material-ui/core/TableHead":
/*!**********************************************!*\
  !*** external "@material-ui/core/TableHead" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableHead");

/***/ }),

/***/ "@material-ui/core/TablePagination":
/*!****************************************************!*\
  !*** external "@material-ui/core/TablePagination" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TablePagination");

/***/ }),

/***/ "@material-ui/core/TableRow":
/*!*********************************************!*\
  !*** external "@material-ui/core/TableRow" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableRow");

/***/ }),

/***/ "@material-ui/core/TableSortLabel":
/*!***************************************************!*\
  !*** external "@material-ui/core/TableSortLabel" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TableSortLabel");

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/TextField");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/*!********************************************!*\
  !*** external "@material-ui/core/Tooltip" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "@material-ui/icons/Create":
/*!********************************************!*\
  !*** external "@material-ui/icons/Create" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Create");

/***/ }),

/***/ "@material-ui/icons/Delete":
/*!********************************************!*\
  !*** external "@material-ui/icons/Delete" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Delete");

/***/ }),

/***/ "@material-ui/icons/FilterList":
/*!************************************************!*\
  !*** external "@material-ui/icons/FilterList" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/FilterList");

/***/ }),

/***/ "@material-ui/pickers":
/*!***************************************!*\
  !*** external "@material-ui/pickers" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/pickers");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "core-js/library/fn/array/from":
/*!************************************************!*\
  !*** external "core-js/library/fn/array/from" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/from");

/***/ }),

/***/ "core-js/library/fn/array/is-array":
/*!****************************************************!*\
  !*** external "core-js/library/fn/array/is-array" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/array/is-array");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/is-iterable":
/*!*************************************************!*\
  !*** external "core-js/library/fn/is-iterable" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/is-iterable");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/reflect/construct":
/*!*******************************************************!*\
  !*** external "core-js/library/fn/reflect/construct" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/reflect/construct");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "deep-freeze":
/*!******************************!*\
  !*** external "deep-freeze" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("deep-freeze");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "material-ui-popup-state":
/*!******************************************!*\
  !*** external "material-ui-popup-state" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("material-ui-popup-state");

/***/ }),

/***/ "next-server/dist/lib/request-context":
/*!*******************************************************!*\
  !*** external "next-server/dist/lib/request-context" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/request-context");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons-kit":
/*!**********************************!*\
  !*** external "react-icons-kit" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit");

/***/ }),

/***/ "react-icons-kit/fa/ellipsisV":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/ellipsisV" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/ellipsisV");

/***/ }),

/***/ "react-icons-kit/fa/envelopeO":
/*!***********************************************!*\
  !*** external "react-icons-kit/fa/envelopeO" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/envelopeO");

/***/ }),

/***/ "react-icons-kit/fa/minus":
/*!*******************************************!*\
  !*** external "react-icons-kit/fa/minus" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/minus");

/***/ }),

/***/ "react-icons-kit/fa/pencil":
/*!********************************************!*\
  !*** external "react-icons-kit/fa/pencil" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/pencil");

/***/ }),

/***/ "react-icons-kit/fa/thList":
/*!********************************************!*\
  !*** external "react-icons-kit/fa/thList" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/thList");

/***/ }),

/***/ "react-icons-kit/fa/times":
/*!*******************************************!*\
  !*** external "react-icons-kit/fa/times" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/times");

/***/ }),

/***/ "react-icons-kit/fa/user":
/*!******************************************!*\
  !*** external "react-icons-kit/fa/user" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/user");

/***/ }),

/***/ "react-icons-kit/fa/userPlus":
/*!**********************************************!*\
  !*** external "react-icons-kit/fa/userPlus" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/fa/userPlus");

/***/ }),

/***/ "react-icons-kit/icomoon/home":
/*!***********************************************!*\
  !*** external "react-icons-kit/icomoon/home" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/icomoon/home");

/***/ }),

/***/ "react-icons-kit/md/ic_arrow_back":
/*!***************************************************!*\
  !*** external "react-icons-kit/md/ic_arrow_back" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_arrow_back");

/***/ }),

/***/ "react-icons-kit/md/ic_assignment":
/*!***************************************************!*\
  !*** external "react-icons-kit/md/ic_assignment" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_assignment");

/***/ }),

/***/ "react-icons-kit/md/ic_block":
/*!**********************************************!*\
  !*** external "react-icons-kit/md/ic_block" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_block");

/***/ }),

/***/ "react-icons-kit/md/ic_check":
/*!**********************************************!*\
  !*** external "react-icons-kit/md/ic_check" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_check");

/***/ }),

/***/ "react-icons-kit/md/ic_list":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_list" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_list");

/***/ }),

/***/ "react-icons-kit/md/ic_person_add":
/*!***************************************************!*\
  !*** external "react-icons-kit/md/ic_person_add" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_person_add");

/***/ }),

/***/ "react-icons-kit/md/ic_remove_circle_outline":
/*!**************************************************************!*\
  !*** external "react-icons-kit/md/ic_remove_circle_outline" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_remove_circle_outline");

/***/ }),

/***/ "react-icons-kit/md/ic_send":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_send" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_send");

/***/ }),

/***/ "react-icons-kit/md/ic_sync":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_sync" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_sync");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-spinners");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-actions":
/*!********************************!*\
  !*** external "redux-actions" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-actions");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "unfetch":
/*!**************************!*\
  !*** external "unfetch" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("unfetch");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=writers.js.map
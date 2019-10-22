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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./modules/dashboardPage/actions.js":
/*!******************************************!*\
  !*** ./modules/dashboardPage/actions.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constrants */ "./modules/dashboardPage/constrants.js");
/* harmony import */ var _constrants__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_constrants__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./modules/dashboardPage/components/dashboardPage.js":
/*!***********************************************************!*\
  !*** ./modules/dashboardPage/components/dashboardPage.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons-kit */ "react-icons-kit");
/* harmony import */ var react_icons_kit__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_kit_ikons_book_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons-kit/ikons/book_2 */ "react-icons-kit/ikons/book_2");
/* harmony import */ var react_icons_kit_ikons_book_2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_ikons_book_2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_kit_md_ic_layers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons-kit/md/ic_layers */ "react-icons-kit/md/ic_layers");
/* harmony import */ var react_icons_kit_md_ic_layers__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_layers__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_kit_md_ic_mail_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons-kit/md/ic_mail_outline */ "react-icons-kit/md/ic_mail_outline");
/* harmony import */ var react_icons_kit_md_ic_mail_outline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_mail_outline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-icons-kit/fa/userPlus */ "react-icons-kit/fa/userPlus");
/* harmony import */ var react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_userPlus__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_icons_kit_md_ic_person_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-icons-kit/md/ic_person_outline */ "react-icons-kit/md/ic_person_outline");
/* harmony import */ var react_icons_kit_md_ic_person_outline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_md_ic_person_outline__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-icons-kit/fa/times */ "react-icons-kit/fa/times");
/* harmony import */ var react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_times__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-icons-kit/fa/thList */ "react-icons-kit/fa/thList");
/* harmony import */ var react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_thList__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-icons-kit/fa/ellipsisV */ "react-icons-kit/fa/ellipsisV");
/* harmony import */ var react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(react_icons_kit_fa_ellipsisV__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-chartjs-2 */ "react-chartjs-2");
/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_chartjs_2__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var rcolor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rcolor */ "rcolor");
/* harmony import */ var rcolor__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(rcolor__WEBPACK_IMPORTED_MODULE_20__);







var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\dashboardPage\\components\\dashboardPage.js";















var initialState = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Numbers of customers',
    backgroundColor: '#3f7bff ',
    borderColor: '#a6c1ff',
    borderWidth: 1,
    hoverBackgroundColor: '#505ace',
    hoverBorderColor: 'rgba(255,99,132,1)',
    data: [65, 59, 80, 81, 56, 55, 40]
  }]
};

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

var getState = {
  labels: ['Pendings', 'Checked', 'Old'],
  datasets: [{
    data: [getRandomInt(50, 200), getRandomInt(100, 150), getRandomInt(150, 250)],
    backgroundColor: ['#CCC', '#36A2EB', '#FFCE56'],
    hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
  }]
};

var DashboardPage =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DashboardPage, _Component);

  function DashboardPage(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DashboardPage);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(DashboardPage).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "gotoPage", function (page) {
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(page);
    });

    _this.state = {
      Doughnut: {}
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DashboardPage, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      this.setState(initialState);
      this.setState({
        Doughnut: getState
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3123024647",
        __self: this
      }, ".item.jsx-3123024647{width:95%;background:white;border-radius:10px;cursor :pointer;}.item.jsx-3123024647:hover{-webkit-transition:all 0.1s;transition:all 0.1s;box-sizing:border-box;box-shadow:inset 1px 0 0 #dadce0,inset -1px 0 0 #dadce0,0 1px 2px 0 rgba(60,64,67,.3),0 1px 3px 1px rgba(60,64,67,.15);z-index:10;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcQ09NUFVURVJcXERlc2t0b3BcXHByb2plY3RcXHJlc291cmNlLWNoYWlucy1pbnRyb2R1Y3Rpb24td2ViLWZyb250LWVuZFxcc3JjXFxtb2R1bGVzXFxkYXNoYm9hcmRQYWdlXFxjb21wb25lbnRzXFxkYXNoYm9hcmRQYWdlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBFcUIsQUFHbUMsQUFNUyxVQUxGLGlCQUNFLG1CQUV4QixFQUcwQixjQUh6QixRQUk4SCx1SEFDaEgsV0FDZCIsImZpbGUiOiJDOlxcVXNlcnNcXENPTVBVVEVSXFxEZXNrdG9wXFxwcm9qZWN0XFxyZXNvdXJjZS1jaGFpbnMtaW50cm9kdWN0aW9uLXdlYi1mcm9udC1lbmRcXHNyY1xcbW9kdWxlc1xcZGFzaGJvYXJkUGFnZVxcY29tcG9uZW50c1xcZGFzaGJvYXJkUGFnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IEljb24gfSBmcm9tICdyZWFjdC1pY29ucy1raXQnXG5pbXBvcnQge2Jvb2tfMn0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2lrb25zL2Jvb2tfMidcbmltcG9ydCB7aWNfbGF5ZXJzfSBmcm9tICdyZWFjdC1pY29ucy1raXQvbWQvaWNfbGF5ZXJzJ1xuaW1wb3J0IHtpY19tYWlsX291dGxpbmV9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19tYWlsX291dGxpbmUnXG5pbXBvcnQgeyB1c2VyUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9mYS91c2VyUGx1cydcbmltcG9ydCB7aWNfcGVyc29uX291dGxpbmV9IGZyb20gJ3JlYWN0LWljb25zLWtpdC9tZC9pY19wZXJzb25fb3V0bGluZSdcbmltcG9ydCB7IHRpbWVzIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL3RpbWVzJ1xuaW1wb3J0IHsgdGhMaXN0IH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL3RoTGlzdCcgIFxuaW1wb3J0IHsgZWxsaXBzaXNWIH0gZnJvbSAncmVhY3QtaWNvbnMta2l0L2ZhL2VsbGlwc2lzVidcbmltcG9ydCB7QmFyfSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuaW1wb3J0IGNvbG9yIGZyb20gJ3Jjb2xvcic7XG5pbXBvcnQge0RvdWdobnV0fSBmcm9tICdyZWFjdC1jaGFydGpzLTInO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxhYmVsczogWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknXSxcbiAgZGF0YXNldHM6IFtcbiAgICB7XG5cdFx0bGFiZWw6ICdOdW1iZXJzIG9mIGN1c3RvbWVycycsXG5cdFx0YmFja2dyb3VuZENvbG9yOiAnIzNmN2JmZiAnLFxuXHRcdGJvcmRlckNvbG9yOiAnI2E2YzFmZicsXG5cdFx0Ym9yZGVyV2lkdGg6IDEsXG5cdFx0aG92ZXJCYWNrZ3JvdW5kQ29sb3I6ICcjNTA1YWNlJyxcbiAgICAgICAgaG92ZXJCb3JkZXJDb2xvcjogJ3JnYmEoMjU1LDk5LDEzMiwxKScsXG5cdFx0ZGF0YTogWzY1LCA1OSwgODAsIDgxLCA1NiwgNTUsIDQwXVxuICAgIH1cbiAgXVxufTtcblxuZnVuY3Rpb24gZ2V0UmFuZG9tSW50IChtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xufVxuY29uc3QgZ2V0U3RhdGUgPXtcbiAgbGFiZWxzOiBbXG4gICAgJ1BlbmRpbmdzJyxcbiAgICAnQ2hlY2tlZCcsXG4gICAgJ09sZCdcbiAgXSxcbiAgZGF0YXNldHM6IFt7XG4gICAgZGF0YTogW2dldFJhbmRvbUludCg1MCwgMjAwKSwgZ2V0UmFuZG9tSW50KDEwMCwgMTUwKSwgZ2V0UmFuZG9tSW50KDE1MCwgMjUwKV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiBbXG4gICAgJyNDQ0MnLFxuICAgICcjMzZBMkVCJyxcbiAgICAnI0ZGQ0U1NidcbiAgICBdLFxuICAgIGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXG4gICAgJyNGRjYzODQnLFxuICAgICcjMzZBMkVCJyxcbiAgICAnI0ZGQ0U1NidcbiAgICBdXG4gIH1dXG59XG5cbmNsYXNzIERhc2hib2FyZFBhZ2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKVxuICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgRG91Z2hudXQgOiB7fVxuICAgICAgICB9XG4gICAgfVxuXHRjb21wb25lbnRXaWxsTW91bnQoKXtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShpbml0aWFsU3RhdGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIERvdWdobnV0IDogZ2V0U3RhdGVcbiAgICAgICAgfSlcbiAgICB9XG4gICAgZ290b1BhZ2U9KHBhZ2UpPT57XG4gICAgICAgIFJvdXRlci5wdXNoKHBhZ2UpXG4gICAgfVxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgICAgICAuaXRlbXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5NSU7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3IgOiBwb2ludGVyXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLml0ZW06aG92ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOmFsbCAwLjFzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzpib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMXB4IDAgMCAjZGFkY2UwLCBpbnNldCAtMXB4IDAgMCAjZGFkY2UwLCAwIDFweCAycHggMCByZ2JhKDYwLDY0LDY3LC4zKSwgMCAxcHggM3B4IDFweCByZ2JhKDYwLDY0LDY3LC4xNSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OjEwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHJvdyBwbC01XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIn19PlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMyBjb2wtMTIgcGwtMFwiIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwNmVcIiwgbWFyZ2luQm90dG9tOlwiMjBweFwifX0+T3ZlcnZpZXc8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIHJvdyBtdC0zXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiLTVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gcm93XCIgb25DbGljaz17KCk9PiB0aGlzLmdvdG9QYWdlKFwiL2FkbWluL2RvY3NcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIiBzdHlsZT17e21hcmdpblRvcDpcIjM1cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJtbC00XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIixjb2xvcjpcIiM1MDVhY2VcIiB9fSBzaXplPXs0NX0gaWNvbj17Ym9va18yfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTcgcHQtNFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+MTA8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzAwMDAwMDk0XCJ9fT5QZW5kaW5nIERvY3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46IFwiMHB4XCIsIG1hcmdpblRvcDpcIjEwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17e2JvcmRlcjpcIjFweCBzb2xpZCAjMDAwMDAwMWNcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlckxlZnQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT4yMDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwOTRcIn19PkRvY3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiIHN0eWxlPXt7Ym9yZGVyOlwiMXB4IHNvbGlkICMwMDAwMDAxY1wiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIiwgYm9yZGVyTGVmdDpcIjBweFwiLCBib3JkZXJSaWdodDpcIjBweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBzdHlsZT17e21hcmdpblRvcDpcIjEwcHhcIn19PjEwPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiMwMDAwMDA5NFwifX0+T2xkIERvY3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcm93IG10LTNcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCItNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSByb3dcIiBvbkNsaWNrPXsoKT0+IHRoaXMuZ290b1BhZ2UoXCIvYWRtaW4vd3JpdGVyc1wiKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNVwiIHN0eWxlPXt7bWFyZ2luVG9wOlwiMzVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJY29uIGNsYXNzTmFtZT1cIm1sLTRcIiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiNXB4XCIsIG1hcmdpblJpZ2h0OiBcIjVweFwiLGNvbG9yOlwiIzUwNWFjZVwiIH19IHNpemU9ezQ1fSBpY29uPXtpY19sYXllcnN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4xMDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwOTRcIn19PldyaXRlcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46IFwiMHB4XCIsIG1hcmdpblRvcDpcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17e2JvcmRlcjpcIjFweCBzb2xpZCAjMDAwMDAwMWNcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlckxlZnQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT41PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiMwMDAwMDA5NFwifX0+QXZhbGlhYmxlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17e2JvcmRlcjpcIjFweCBzb2xpZCAjMDAwMDAwMWNcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlckxlZnQ6XCIwcHhcIiwgYm9yZGVyUmlnaHQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT41PC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiMwMDAwMDA5NFwifX0+QmxvY2s8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTMgcm93IG10LTNcIiBzdHlsZT17e21hcmdpbkxlZnQ6XCItNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSByb3cgY29udGFpbmVyXCIgb25DbGljaz17KCk9PiB0aGlzLmdvdG9QYWdlKFwiL2FkbWluL2NvbnRhY3RzXCIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC01XCIgc3R5bGU9e3ttYXJnaW5Ub3A6XCIzNXB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEljb24gY2xhc3NOYW1lPVwibWwtNFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCI1cHhcIiwgbWFyZ2luUmlnaHQ6IFwiNXB4XCIsY29sb3I6XCIjNTA1YWNlXCIgfX0gc2l6ZT17NDV9IGljb249e2ljX21haWxfb3V0bGluZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02IHB0LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPjEwPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgc3R5bGU9e3tjb2xvcjpcIiMwMDAwMDA5NFwifX0+Q29udGFjdHM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgcm93XCIgc3R5bGU9e3t3aWR0aDpcIjEwMCVcIixtYXJnaW46IFwiMHB4XCIsIG1hcmdpblRvcDpcIjIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIiBzdHlsZT17e2JvcmRlcjpcIjFweCBzb2xpZCAjMDAwMDAwMWNcIiwgdGV4dEFsaWduOlwiY2VudGVyXCIsIGJvcmRlckxlZnQ6XCIwcHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgc3R5bGU9e3ttYXJnaW5Ub3A6XCIxMHB4XCJ9fT4xMDwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwOTRcIn19PkFsbDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3tib3JkZXI6XCIxcHggc29saWQgIzAwMDAwMDFjXCIsIHRleHRBbGlnbjpcImNlbnRlclwiLCBib3JkZXJMZWZ0OlwiMHB4XCIsIGJvcmRlclJpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0+NTwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwOTRcIn19PlNvbHZlPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy0zIHJvdyBtdC0zXCIgc3R5bGU9e3ttYXJnaW5MZWZ0OlwiLTVweFwifX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW0gcm93IGNvbnRhaW5lclwiIG9uQ2xpY2s9eygpPT4gdGhpcy5nb3RvUGFnZShcIi9hZG1pbi9jdXN0b21lcnNcIil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTVcIiBzdHlsZT17e21hcmdpblRvcDpcIjM1cHhcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJtbC00XCIgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiBcIjVweFwiLCBtYXJnaW5SaWdodDogXCI1cHhcIixjb2xvcjpcIiM1MDVhY2VcIiB9fSBzaXplPXs0NX0gaWNvbj17aWNfcGVyc29uX291dGxpbmV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNiBwdC00XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz41MDwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHN0eWxlPXt7Y29sb3I6XCIjMDAwMDAwOTRcIn19PlVzZXJzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHJvd1wiIHN0eWxlPXt7d2lkdGg6XCIxMDAlXCIsbWFyZ2luOiBcIjBweFwiLCBtYXJnaW5Ub3A6XCIyMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3tib3JkZXI6XCIxcHggc29saWQgIzAwMDAwMDFjXCIsIHRleHRBbGlnbjpcImNlbnRlclwiLCBib3JkZXJMZWZ0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0+MTA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzAwMDAwMDk0XCJ9fT5SZWdpc3RlcjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCIgc3R5bGU9e3tib3JkZXI6XCIxcHggc29saWQgIzAwMDAwMDFjXCIsIHRleHRBbGlnbjpcImNlbnRlclwiLCBib3JkZXJMZWZ0OlwiMHB4XCIsIGJvcmRlclJpZ2h0OlwiMHB4XCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7bWFyZ2luVG9wOlwiMTBweFwifX0+NDU8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e2NvbG9yOlwiIzAwMDAwMDk0XCJ9fT5DdXN0b21lcnM8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbSBjb2wtMTEgbXQtNCByb3dcIiBzdHlsZT17eyB3aWR0aDpcIjUwJVwiLCBib3JkZXI6XCIxcHggc29saWQgd2hpdGVcIiwgbWFyZ2luQm90dG9tOlwiMTAwcHhcIiwgbWFyZ2luTGVmdDpcIjBweFwiLGN1cnNvcjpcImRlZmF1bHRcIn19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTcgbXQtM1wiPlxuXHRcdFx0ICAgICAgICAgICAgICAgIDxCYXIgd2lkdGg9ezMwMH0gaGVpZ2h0PXsxNTB9IGRhdGE9e3RoaXMuc3RhdGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy01IG10LTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RG91Z2hudXQgd2lkdGg9ezMwMH0gaGVpZ2h0PXsxNTB9IGRhdGE9e3RoaXMuc3RhdGUuRG91Z2hudXR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IHN0eWxlPXt7dGV4dEFsaWduOlwiY2VudGVyXCIsIG1hcmdpblRvcDpcIjMwcHhcIn19Pk51bWJlcnMgb2YgZG9jdW1lbnRzPC9oND5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRQYWdlOyJdfQ== */\n/*@ sourceURL=C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\dashboardPage\\components\\dashboardPage.js */"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%"
        },
        className: "jsx-3123024647" + " " + "col-12 row pl-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        style: {
          color: "#0000006e",
          marginBottom: "20px"
        },
        className: "jsx-3123024647" + " " + "mt-3 col-12 pl-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "Overview"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginLeft: "-5px"
        },
        className: "jsx-3123024647" + " " + "col-lg-3 row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.gotoPage("/admin/docs");
        },
        className: "jsx-3123024647" + " " + "item row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "35px"
        },
        className: "jsx-3123024647" + " " + "col-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        className: "ml-4",
        style: {
          marginBottom: "5px",
          marginRight: "5px",
          color: "#505ace"
        },
        size: 45,
        icon: react_icons_kit_ikons_book_2__WEBPACK_IMPORTED_MODULE_11__["book_2"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-7 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "Pending Docs")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0px",
          marginTop: "10px"
        },
        className: "jsx-3123024647" + " " + "col-12 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "20"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, "Docs")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px",
          borderRight: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, "Old Docs"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginLeft: "-5px"
        },
        className: "jsx-3123024647" + " " + "col-lg-3 row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.gotoPage("/admin/writers");
        },
        className: "jsx-3123024647" + " " + "item row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "35px"
        },
        className: "jsx-3123024647" + " " + "col-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        className: "ml-4",
        style: {
          marginBottom: "5px",
          marginRight: "5px",
          color: "#505ace"
        },
        size: 45,
        icon: react_icons_kit_md_ic_layers__WEBPACK_IMPORTED_MODULE_12__["ic_layers"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-6 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        },
        __self: this
      }, "Writers")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0px",
          marginTop: "20px"
        },
        className: "jsx-3123024647" + " " + "col-12 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      }, "Avaliable")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px",
          borderRight: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, "Block"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginLeft: "-5px"
        },
        className: "jsx-3123024647" + " " + "col-lg-3 row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.gotoPage("/admin/contacts");
        },
        className: "jsx-3123024647" + " " + "item row container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "35px"
        },
        className: "jsx-3123024647" + " " + "col-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        className: "ml-4",
        style: {
          marginBottom: "5px",
          marginRight: "5px",
          color: "#505ace"
        },
        size: 45,
        icon: react_icons_kit_md_ic_mail_outline__WEBPACK_IMPORTED_MODULE_13__["ic_mail_outline"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-6 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        },
        __self: this
      }, "Contacts")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0px",
          marginTop: "20px"
        },
        className: "jsx-3123024647" + " " + "col-12 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "All")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px",
          borderRight: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      }, "5"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, "Solve"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginLeft: "-5px"
        },
        className: "jsx-3123024647" + " " + "col-lg-3 row mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        onClick: function onClick() {
          return _this2.gotoPage("/admin/customers");
        },
        className: "jsx-3123024647" + " " + "item row container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          marginTop: "35px"
        },
        className: "jsx-3123024647" + " " + "col-5",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_icons_kit__WEBPACK_IMPORTED_MODULE_10__["Icon"], {
        className: "ml-4",
        style: {
          marginBottom: "5px",
          marginRight: "5px",
          color: "#505ace"
        },
        size: 45,
        icon: react_icons_kit_md_ic_person_outline__WEBPACK_IMPORTED_MODULE_15__["ic_person_outline"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-6 pt-4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h3", {
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "50"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Users")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "100%",
          margin: "0px",
          marginTop: "20px"
        },
        className: "jsx-3123024647" + " " + "col-12 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "10"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Register")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          border: "1px solid #0000001c",
          textAlign: "center",
          borderLeft: "0px",
          borderRight: "0px"
        },
        className: "jsx-3123024647" + " " + "col-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          marginTop: "10px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "45"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        style: {
          color: "#00000094"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, "Customers"))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        style: {
          width: "50%",
          border: "1px solid white",
          marginBottom: "100px",
          marginLeft: "0px",
          cursor: "default"
        },
        className: "jsx-3123024647" + " " + "item col-11 mt-4 row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-12 col-lg-7 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_19__["Bar"], {
        width: 300,
        height: 150,
        data: this.state,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3123024647" + " " + "col-12 col-lg-5 mt-3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_chartjs_2__WEBPACK_IMPORTED_MODULE_19__["Doughnut"], {
        width: 300,
        height: 150,
        data: this.state.Doughnut,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h4", {
        style: {
          textAlign: "center",
          marginTop: "30px"
        },
        className: "jsx-3123024647",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, "Numbers of documents")))));
    }
  }]);

  return DashboardPage;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (DashboardPage);

/***/ }),

/***/ "./modules/dashboardPage/components/dashboardPageContainer.js":
/*!********************************************************************!*\
  !*** ./modules/dashboardPage/components/dashboardPageContainer.js ***!
  \********************************************************************/
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
/* harmony import */ var _dashboardPage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboardPage */ "./modules/dashboardPage/components/dashboardPage.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reducers */ "./modules/dashboardPage/reducers.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../actions */ "./modules/dashboardPage/actions.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_13__);







var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\modules\\dashboardPage\\components\\dashboardPageContainer.js";








var dashboardContainer =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(dashboardContainer, _Component);

  function dashboardContainer() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, dashboardContainer);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(dashboardContainer).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(dashboardContainer, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_dashboardPage__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      })));
    }
  }]);

  return dashboardContainer;
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

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])(mapStateToProps, mapDispatchToProps)(dashboardContainer)));

/***/ }),

/***/ "./modules/dashboardPage/constrants.js":
/*!*********************************************!*\
  !*** ./modules/dashboardPage/constrants.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./modules/dashboardPage/reducers.js":
/*!*******************************************!*\
  !*** ./modules/dashboardPage/reducers.js ***!
  \*******************************************/
/*! exports provided: name, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! deep-freeze */ "deep-freeze");
/* harmony import */ var deep_freeze__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(deep_freeze__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-actions */ "redux-actions");
/* harmony import */ var redux_actions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_actions__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./modules/dashboardPage/actions.js");



var name = "WrappedPage";
var initialState = deep_freeze__WEBPACK_IMPORTED_MODULE_0___default()({
  isDocsPageMain: true
});
/* harmony default export */ __webpack_exports__["default"] = (Object(redux_actions__WEBPACK_IMPORTED_MODULE_1__["handleActions"])({}, initialState));

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

/***/ "./pages/admin/home.js":
/*!*****************************!*\
  !*** ./pages/admin/home.js ***!
  \*****************************/
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
/* harmony import */ var _modules_dashboardPage_components_dashboardPageContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/dashboardPage/components/dashboardPageContainer */ "./modules/dashboardPage/components/dashboardPageContainer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\Users\\COMPUTER\\Desktop\\project\\resource-chains-introduction-web-front-end\\src\\pages\\admin\\home.js";




 // import classes from "../assets/css/custom.docsPage.css"



var Docs = function Docs(props) {
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_modules_dashboardPage_components_dashboardPageContainer__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
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

/* harmony default export */ __webpack_exports__["default"] = (Docs);

/***/ }),

/***/ 5:
/*!***********************************!*\
  !*** multi ./pages/admin/home.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\COMPUTER\Desktop\project\resource-chains-introduction-web-front-end\src\pages\admin\home.js */"./pages/admin/home.js");


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

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

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

/***/ "rcolor":
/*!*************************!*\
  !*** external "rcolor" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rcolor");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-chartjs-2":
/*!**********************************!*\
  !*** external "react-chartjs-2" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-chartjs-2");

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

/***/ "react-icons-kit/ikons/book_2":
/*!***********************************************!*\
  !*** external "react-icons-kit/ikons/book_2" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/ikons/book_2");

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

/***/ "react-icons-kit/md/ic_layers":
/*!***********************************************!*\
  !*** external "react-icons-kit/md/ic_layers" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_layers");

/***/ }),

/***/ "react-icons-kit/md/ic_list":
/*!*********************************************!*\
  !*** external "react-icons-kit/md/ic_list" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_list");

/***/ }),

/***/ "react-icons-kit/md/ic_mail_outline":
/*!*****************************************************!*\
  !*** external "react-icons-kit/md/ic_mail_outline" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_mail_outline");

/***/ }),

/***/ "react-icons-kit/md/ic_person_outline":
/*!*******************************************************!*\
  !*** external "react-icons-kit/md/ic_person_outline" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons-kit/md/ic_person_outline");

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

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=home.js.map
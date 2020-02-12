(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/PizzaImages/PizzaImage.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/components/PizzaImages/PizzaImage.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".PizzaImage-module__PizzaImage__3oKI2{\r\n    width: 80%;\r\n    height: 300px;\r\n    margin: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.PizzaImage-module__PizzaImg__1-ZIn{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}", ""]);
// Exports
exports.locals = {
	"PizzaImage": "PizzaImage-module__PizzaImage__3oKI2",
	"PizzaImg": "PizzaImage-module__PizzaImg__1-ZIn"
};
module.exports = exports;


/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/pizza.jpg");

/***/ }),

/***/ "./src/components/PizzaImages/PizzaImage.module.css":
/*!**********************************************************!*\
  !*** ./src/components/PizzaImages/PizzaImage.module.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../node_modules/postcss-loader/src??postcss!./PizzaImage.module.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/PizzaImages/PizzaImage.module.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ "./src/components/PizzaImages/PizzaImages.js":
/*!***************************************************!*\
  !*** ./src/components/PizzaImages/PizzaImages.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _PizzaImage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PizzaImage.module.css */ "./src/components/PizzaImages/PizzaImage.module.css");
/* harmony import */ var _PizzaImage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_PizzaImage_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/pizza.jpg */ "./src/assets/pizza.jpg");




var pizzaImage = function pizzaImage(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: _PizzaImage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.PizzaImage
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_2__["default"],
    className: _PizzaImage_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.PizzaImg
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (pizzaImage);

/***/ }),

/***/ "./src/containers/Pizza.js":
/*!*********************************!*\
  !*** ./src/containers/Pizza.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_PizzaImages_PizzaImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/PizzaImages/PizzaImages */ "./src/components/PizzaImages/PizzaImages.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Pizza =
/*#__PURE__*/
function (_Component) {
  _inherits(Pizza, _Component);

  function Pizza() {
    _classCallCheck(this, Pizza);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pizza).apply(this, arguments));
  }

  _createClass(Pizza, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "The Pizza"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PizzaImages_PizzaImages__WEBPACK_IMPORTED_MODULE_1__["default"], null));
    }
  }]);

  return Pizza;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

;
/* harmony default export */ __webpack_exports__["default"] = (Pizza);

/***/ })

}]);
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
// import * as Demo from './04.ts';
// import * as Demo from './05.ts';
// import * as Demo from './06.ts';
// import * as Demo from './07.ts';
var Demo = __webpack_require__(1);
// import { num } from './04.ts';
// import Demo from './04.ts';
// console.log(Demo)
Demo;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.color = 'red';
// 定义类
var Book = /** @class */ (function () {
    // 构造函数中赋值
    function Book(title, page) {
        // 存储数据
        this.title = title;
        this.page = page || 200;
    }
    // 定义方法
    Book.prototype.getTitle = function () {
        return this.title;
    };
    // 静态方法 获取作者
    Book.getWriter = function () {
        return this.writer;
    };
    // 属性赋值
    Book.writer = 'Mr Zhang';
    return Book;
}());
// 定义js书，继承父类
var JsBook = /** @class */ (function (_super) {
    __extends(JsBook, _super);
    // 构造函数
    function JsBook(title, price) {
        var _this = 
        // 继承父类
        _super.call(this, title) || this;
        _this.color = 'red';
        _this.price = price;
        _this.page = 10;
        return _this;
    }
    return JsBook;
}(Book));
console.log(this);
// 实例化子类
var jb = new JsBook('javascript', 100);
console.log(jb);
// 静态属性和方法，也可以继承
console.log(JsBook.writer);
console.log(JsBook.getWriter());
// __extends(JsBook, _super);
// 实现对父类原型的继承（寄生式继承）
//  var __extends = (this && this.__extends) || (function () {
//     var extendStatics = Object.setPrototypeOf ||
//         (
//         	{ __proto__: [] } instanceof 
//         	Array && function (d, b) { 
//         		d.__proto__ = b; 
//         	}
//         ) ||
//         function (d, b) { 
//         	// 遍历父类属性
//         	for (var p in b) 
//         		// 静态继承
//         		if (b.hasOwnProperty(p)) 
//         			d[p] = b[p]; 
//         };
//     // 这是__extend方法  __extends(JsBook, _super);
//     // d 子类， b 父类
//     return function (d, b) {
//         extendStatics(d, b);
//         // 继承
//         function __() { 
//         	this.constructor = d; 
//         }
//         d.prototype = b === null ? 
//         	Object.create(b) : 
//         	(__.prototype = b.prototype, new __());
//     };
// })();


/***/ })
/******/ ]);
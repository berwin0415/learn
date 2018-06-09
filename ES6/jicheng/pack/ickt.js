/******/
(function (modules) { // webpackBootstrap
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: false,
                /******/
                enumerable: true,
                /******/
                get: getter
                /******/
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/
    return __webpack_require__(__webpack_require__.s = 0);
    /******/
})
/************************************************************************/
/******/
([
    /* 0 */
    /***/
    (function (module, exports, __webpack_require__) {

        "use strict";


        var _ = __webpack_require__(1);

        var Demo = _interopRequireWildcard(_);

        function _interopRequireWildcard(obj) {
            if (obj && obj.__esModule) {
                return obj;
            } else {
                var newObj = {};
                if (obj != null) {
                    for (var key in obj) {
                        if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                    }
                }
                newObj.default = obj;
                return newObj;
            }
        }

        /***/
    }),
    /* 1 */
    /***/
    (function (module, exports, __webpack_require__) {

        "use strict";


        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    console.log(JSON.stringify(descriptor.enumerable));
                    
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }
            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        // 定义类
        var Book = function () {
            _createClass(Book, [{
                key: 'msg',

                // 特性属性
                get: function get() {
                    return 'hello';
                }
                // 构造函数

            }], [{
                key: 'getColor',

                // 静态方法
                value: function getColor() {
                    return this.color;
                }
            }, {
                key: 'color',

                // 静态属性
                get: function get() {
                    return 'red';
                }
            }]);

            function Book(title, page) {
                _classCallCheck(this, Book);

                // 属性
                this.title = title;
                this.page = page;
            }
            // 方法


            _createClass(Book, [{
                key: 'getTitle',
                value: function getTitle() {
                    return this.title;
                }
            }, {
                key: 'getPage',
                value: function getPage() {
                    return this.page;
                }
            }]);

            return Book;
        }();
        // 静态属性


        Book.num = 100;
        // 静态方法
        Book.getNum = function () {
            return this.num;
        };
        // 实例化
        // var book = new Book('javascript设计模式', 200)
        // console.log(book)
        // console.log(Book.num)
        // console.log(Book.color)
        // console.log(Book.getNum())
        // console.log(Book.getColor())
        // 定义子类

        var CssBook = function (_Book) {
            _inherits(CssBook, _Book);

            // 构造函数
            function CssBook(title, page, writer) {
                _classCallCheck(this, CssBook);

                var _this = _possibleConstructorReturn(this, (CssBook.__proto__ || Object.getPrototypeOf(CssBook)).call(this, title, page));
                // 构造函数继承


                _this.writer = writer;
                return _this;
            }

            return CssBook;
        }(Book);
        // 实例化


        var cb = new CssBook('css', 100, 'Mr Zhang');
        console.log(cb);
        console.log(CssBook.num);
        console.log(CssBook.color);
        console.log(CssBook.getNum());
        console.log(CssBook.getColor());
        for (var i in cb) {
            console.log(111, i, cb[i]);
        }

        /***/
    })
    /******/
]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var _class, _class2, _descriptor;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

function log(target) {
  var desc = Object.getOwnPropertyDescriptors(target.prototype);

  var _arr = Object.keys(desc);

  var _loop = function _loop() {
    var key = _arr[_i];

    if (key === "constructor") {
      return "continue";
    }

    var func = desc[key].value;

    if ("function" === typeof func) {
      Object.defineProperty(target.prototype, key, {
        value: function value() {
          console.log("before" + key);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          var ret = func.apply(this, args);
          console.log("after" + key);
          return ret;
        }
      });
    }
  };

  for (var _i = 0; _i < _arr.length; _i++) {
    var _ret = _loop();

    if (_ret === "continue") continue;
  }
}

function readOnly(target, key, descriptor) {
  descriptor.writable = false;
}

function validate(target, key, descriptor) {
  var func = descriptor.value;

  descriptor.value = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    for (var _i2 = 0; _i2 < args.length; _i2++) {
      var num = args[_i2];

      if ("number" !== typeof num) {
        throw new Error("".concat(num, " is not number"));
      }
    }

    return func.apply(this, args);
  };
}

var Numberic = log(_class = (_class2 =
/*#__PURE__*/
function () {
  function Numberic() {
    _classCallCheck(this, Numberic);

    _initializerDefineProperty(this, "PI", _descriptor, this);
  }

  _createClass(Numberic, [{
    key: "add",
    value: function add() {
      for (var _len3 = arguments.length, nums = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nums[_key3] = arguments[_key3];
      }

      return nums.reduce(function (p, n) {
        return p + n;
      }, 0);
    }
  }]);

  return Numberic;
}(), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PI", [readOnly], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 3.1415926;
  }
}), _applyDecoratedDescriptor(_class2.prototype, "add", [validate], Object.getOwnPropertyDescriptor(_class2.prototype, "add"), _class2.prototype)), _class2)) || _class; // console.log(Numberic)


var a = new Numberic();
a.PI = 1;
a.add(1, 2);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImxvZyIsInRhcmdldCIsImRlc2MiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwicHJvdG90eXBlIiwia2V5cyIsImtleSIsImZ1bmMiLCJ2YWx1ZSIsImRlZmluZVByb3BlcnR5IiwiY29uc29sZSIsImFyZ3MiLCJyZXQiLCJhcHBseSIsInJlYWRPbmx5IiwiZGVzY3JpcHRvciIsIndyaXRhYmxlIiwidmFsaWRhdGUiLCJudW0iLCJFcnJvciIsIk51bWJlcmljIiwibnVtcyIsInJlZHVjZSIsInAiLCJuIiwiYSIsIlBJIiwiYWRkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQSxTQUFTQSxHQUFULENBQWFDLE1BQWIsRUFBcUI7QUFDbkIsTUFBTUMsSUFBSSxHQUFHQyxNQUFNLENBQUNDLHlCQUFQLENBQWlDSCxNQUFNLENBQUNJLFNBQXhDLENBQWI7O0FBRG1CLGFBR0RGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZSixJQUFaLENBSEM7O0FBQUE7QUFHZCxRQUFNSyxHQUFHLFdBQVQ7O0FBQ0gsUUFBSUEsR0FBRyxLQUFLLGFBQVosRUFBMkI7QUFDekI7QUFDRDs7QUFDRCxRQUFNQyxJQUFJLEdBQUdOLElBQUksQ0FBQ0ssR0FBRCxDQUFKLENBQVVFLEtBQXZCOztBQUVBLFFBQUksZUFBZSxPQUFPRCxJQUExQixFQUFnQztBQUM5QkwsWUFBTSxDQUFDTyxjQUFQLENBQXNCVCxNQUFNLENBQUNJLFNBQTdCLEVBQXdDRSxHQUF4QyxFQUE2QztBQUMzQ0UsYUFEMkMsbUJBQzVCO0FBQ2JFLGlCQUFPLENBQUNYLEdBQVIsQ0FBWSxXQUFXTyxHQUF2Qjs7QUFEYSw0Q0FBTkssSUFBTTtBQUFOQSxnQkFBTTtBQUFBOztBQUViLGNBQU1DLEdBQUcsR0FBR0wsSUFBSSxDQUFDTSxLQUFMLENBQVcsSUFBWCxFQUFpQkYsSUFBakIsQ0FBWjtBQUNBRCxpQkFBTyxDQUFDWCxHQUFSLENBQVksVUFBVU8sR0FBdEI7QUFDQSxpQkFBT00sR0FBUDtBQUNEO0FBTjBDLE9BQTdDO0FBUUQ7QUFsQmdCOztBQUduQiwyQ0FBcUM7QUFBQTs7QUFBQSw2QkFFakM7QUFjSDtBQUNGOztBQUVELFNBQVNFLFFBQVQsQ0FBa0JkLE1BQWxCLEVBQTBCTSxHQUExQixFQUErQlMsVUFBL0IsRUFBMkM7QUFDekNBLFlBQVUsQ0FBQ0MsUUFBWCxHQUFzQixLQUF0QjtBQUNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JqQixNQUFsQixFQUEwQk0sR0FBMUIsRUFBK0JTLFVBQS9CLEVBQTJDO0FBQ3pDLE1BQU1SLElBQUksR0FBR1EsVUFBVSxDQUFDUCxLQUF4Qjs7QUFDQU8sWUFBVSxDQUFDUCxLQUFYLEdBQW1CLFlBQWtCO0FBQUEsdUNBQU5HLElBQU07QUFBTkEsVUFBTTtBQUFBOztBQUNuQyw0QkFBa0JBLElBQWxCLGdCQUF3QjtBQUFuQixVQUFNTyxHQUFHLEdBQUlQLElBQUosS0FBVDs7QUFDSCxVQUFJLGFBQWEsT0FBT08sR0FBeEIsRUFBNkI7QUFDM0IsY0FBTSxJQUFJQyxLQUFKLFdBQWFELEdBQWIsb0JBQU47QUFDRDtBQUNGOztBQUNELFdBQU9YLElBQUksQ0FBQ00sS0FBTCxDQUFXLElBQVgsRUFBaUJGLElBQWpCLENBQVA7QUFDRCxHQVBEO0FBUUQ7O0lBR0tTLFEsR0FETHJCLEc7Ozs7Ozs7Ozs7OzBCQUtjO0FBQUEseUNBQU5zQixJQUFNO0FBQU5BLFlBQU07QUFBQTs7QUFDWCxhQUFPQSxJQUFJLENBQUNDLE1BQUwsQ0FBWSxVQUFDQyxDQUFELEVBQUlDLENBQUo7QUFBQSxlQUFVRCxDQUFDLEdBQUdDLENBQWQ7QUFBQSxPQUFaLEVBQTZCLENBQTdCLENBQVA7QUFDRDs7Ozt3RUFMQVYsUTs7Ozs7V0FBYyxTOzt5REFFZEcsUSx3R0FLSDs7O0FBQ0EsSUFBSVEsQ0FBQyxHQUFHLElBQUlMLFFBQUosRUFBUjtBQUNBSyxDQUFDLENBQUNDLEVBQUYsR0FBTyxDQUFQO0FBRUFELENBQUMsQ0FBQ0UsR0FBRixDQUFNLENBQU4sRUFBUyxDQUFULEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZnVuY3Rpb24gbG9nKHRhcmdldCkge1xuICBjb25zdCBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModGFyZ2V0LnByb3RvdHlwZSk7XG5cbiAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGVzYykpIHtcbiAgICBpZiAoa2V5ID09PSBcImNvbnN0cnVjdG9yXCIpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBmdW5jID0gZGVzY1trZXldLnZhbHVlO1xuXG4gICAgaWYgKFwiZnVuY3Rpb25cIiA9PT0gdHlwZW9mIGZ1bmMpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQucHJvdG90eXBlLCBrZXksIHtcbiAgICAgICAgdmFsdWUoLi4uYXJncykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYmVmb3JlXCIgKyBrZXkpO1xuICAgICAgICAgIGNvbnN0IHJldCA9IGZ1bmMuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhZnRlclwiICsga2V5KTtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZE9ubHkodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgZGVzY3JpcHRvci53cml0YWJsZSA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICBjb25zdCBmdW5jID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICBmb3IgKGNvbnN0IG51bSBvZiBhcmdzKSB7XG4gICAgICBpZiAoXCJudW1iZXJcIiAhPT0gdHlwZW9mIG51bSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYCR7bnVtfSBpcyBub3QgbnVtYmVyYCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xufVxuXG5AbG9nXG5jbGFzcyBOdW1iZXJpYyB7XG4gIEByZWFkT25seSBQSSA9IDMuMTQxNTkyNjtcblxuICBAdmFsaWRhdGVcbiAgYWRkKC4uLm51bXMpIHtcbiAgICByZXR1cm4gbnVtcy5yZWR1Y2UoKHAsIG4pID0+IHAgKyBuLCAwKTtcbiAgfVxufVxuLy8gY29uc29sZS5sb2coTnVtYmVyaWMpXG5sZXQgYSA9IG5ldyBOdW1iZXJpYygpO1xuYS5QSSA9IDE7XG5cbmEuYWRkKDEsIDIpOyJdLCJzb3VyY2VSb290IjoiIn0=
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test = /** @class */ (function () {
    function Test() {
        this.a = '1';
    }
    Test.prototype.method1 = function () {
        console.log('method1');
    };
    Test.val = 'val';
    return Test;
}());
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        var _this = _super.call(this) || this;
        _this.b = 'b';
        _this.a = 'a';
        return _this;
    }
    return Test2;
}(Test));
var t = new Test2();
console.log(t);

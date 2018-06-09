export let color: string = 'red';
// 定义类
class Book {
    // 属性赋值
    static writer: string = 'Mr Zhang';
    title: string;
    page: number;
    price: number;
    // 构造函数中赋值
    constructor(title: string, page?: number) {
        // 存储数据
        this.title = title;
        this.page = page || 200;
    }
    // 定义方法
    getTitle(): string {
        return this.title;
    }
    // 静态方法 获取作者
    static getWriter(): string {
        return this.writer;
    }
}
// 定义js书，继承父类
class JsBook extends Book {
    color: string = 'red';
    // 构造函数
    constructor(title: string, price: number) {
        // 继承父类
        super(title);
        this.price = price;
        this.page = 10;
    }
}
console.log(this)
// 实例化子类
var jb = new JsBook('javascript', 100);
console.log(jb)
// 静态属性和方法，也可以继承
console.log(JsBook.writer)
console.log(JsBook.getWriter())

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
// 定义类
class Book {
	// 静态属性
	static get color() {
		return 'red';
	}
	// 静态方法
	static getColor() {
		return this.color;
	}
	// 特性属性
	get msg() {
		return 'hello'
	}
	// 构造函数
	constructor(title, page) {
		// 属性
		this.title = title;
		this.page = page;
	}
	// 方法
	getTitle() {
		return this.title
	}
	getPage() {
		return this.page;
	}
}
// 静态属性
Book.num = 100;
// 静态方法
Book.getNum = function() {
	return this.num;
}
// 实例化
// var book = new Book('javascript设计模式', 200)
// console.log(book)
// console.log(Book.num)
// console.log(Book.color)
// console.log(Book.getNum())
// console.log(Book.getColor())
// 定义子类
class CssBook extends Book {
	// 构造函数
	constructor(title, page, writer) {
		// 构造函数继承
		super(title, page);
		this.writer = writer;
	}
}
// 实例化
var cb = new CssBook('css', 100, 'Mr Zhang')
console.log(cb)
console.log(CssBook.num)
console.log(CssBook.color)
console.log(CssBook.getNum())
console.log(CssBook.getColor())
for (var i in cb) {
	console.log(111, i, cb[i])
}
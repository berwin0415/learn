define(function(require, exports, module) {
	// 引入观察者
	var Observer = require("modules/tools").Observer;
	// 添加视图
	MVC.addView("home.whatwedo", function(M) {

	});

	// 添加控制器
	MVC.addCtrl("home.whatwedo", function(M, V) {
		Observer.on("msg", function() {
			console.log("home.whatwedo模块开始创建视图");
			V.create("home.whatwedo");
		});
	});
});
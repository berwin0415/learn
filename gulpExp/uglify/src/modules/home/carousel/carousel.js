define(function(require, exports, module) {
	// 引入观察者
	var Observer = require("modules/tools").Observer;
	// 添加视图
	MVC.addView("home.carousel", function(M) {
		
	});
	// 添加控制器
	MVC.addCtrl("home.carousel", function(M, V) {
		Observer.on("msg", function() {
			console.log("执行创建home.carousel视图方法");
			V.create("home.carousel");
		});
	});
});
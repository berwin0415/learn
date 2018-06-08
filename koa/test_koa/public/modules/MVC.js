var MVC = (function() {
    var M = (function() {
        var _M = {};
        return {
            add: function(pathName, data) {
                console.log(`给M层的${pathName}添加数据啦`);
                var arr = pathName.split(".");
                var obj = _M;
                for (var i = 0; i < arr.length - 1; i++) {
                    if (typeof obj[arr[i]] === "object" && obj[arr[i]] != null || typeof obj[arr[i]] === "function") {
                    } else if (typeof obj[arr[i]] === "undefined") {
                        obj[arr[i]] = {};
                    } else {
                        throw new Error("不可以往值类型上设置数据");
                    }
                    obj = obj[arr[i]];
                }
                obj[arr[i]] = data;
            },
            get: function (pathName) {
                var arr = pathName.split(".");
                var obj = _M;
                for (var i = 0; i < arr.length - 1; i++) {
                    if (typeof obj[arr[i]] === "object" && obj[arr[i]] != null || typeof obj[arr[i]] === "function") {
                        obj = obj[arr[i]];
                    }else {
                       return undefined;
                    }
                }
                return obj[arr[i]]
            }
        }
    })();
    var V = (function(){
        var _V = {};
        return {
            add: function (pathName, fun) {
                console.log(`给V层的${pathName}添加函数啦`);
                _V[pathName] = fun;
            },
            create: function (pathName) {
                console.log(`调用V层的${pathName}函数啦`);
                return _V[pathName](M);
            }
        }
    })();
    var C = (function () {
        var _C = {};
        return {
            add: function (pathName, fun) {
                console.log(`添加C层的${pathName}函数啦`);
                _C[pathName] = fun;
            },
            init: function () {
                for (var i in _C) {
                    _C[i](M, V);
                }
            }
        }
    })();
    return {
        addModel: function(pathName, data) {
            M.add(pathName, data);
        },
        addView: function(pathName, fun) {
            V.add(pathName, fun);
        },
        addCtrl: function(pathName, fun) {
            C.add(pathName, fun);
        },
        install: function () {
            C.init();
        }
    }
})()

export {
    MVC as default
}
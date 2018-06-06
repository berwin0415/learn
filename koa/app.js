const Koa = require("koa");
// 引入路由中间件
const router = require("koa-router");
// 引入静态中间件
const koa_static = require('koa-static')
// 引入解析中间件
const body_parser = require('koa-parser');

const app = new Koa();

app.use(ctx =>{
    ctx.body = "hello world";
})
app.listen(3000);
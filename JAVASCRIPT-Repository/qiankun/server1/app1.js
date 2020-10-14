const Koa = require("koa");
const static = require("koa-static");
const app = new Koa();

app.use(async (ctx, next) => {
  const { method } = ctx;
  if (method === "OPTIONS") {
    ctx.body = "";
    ctx.status = 200;
    return;
  }
  await next();
  ctx.set("Access-Control-Allow-Origin", "*");
});
app.use(static("static1"));

app.listen(5001, () => {
  console.log("server run at 5001");
});

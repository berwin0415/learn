const router = require('koa-router')()
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const mongo_url = "mongodb://localhost:27017";

router.prefix('/users')

router.get('/login',async ctx => {
  await ctx.render("index", {
    title: "登陆",
    type: "login"
  })
})
router.post('/login', async ctx=>{
  let username = ctx.username;
  console.log(ctx.body);
})

router.get('/bar', function(ctx, next) {
	ctx.body = 'this is a users/bar response'
})

module.exports = router
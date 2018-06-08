const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  const username = ctx.session.username;
  if (username) {
    await ctx.render('index', {
      title: 'Hello Koa 2!'
    })
    
  }else{
    await ctx.redirect("/log-in");
  }
})

router.get('/log-in', async (ctx, next) => {
  await ctx.render("index", {
    title: "登陆",
    type: "log-in"
  })
  
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router

const router = require('koa-router')()


router.get('/example/get', async (ctx, next) => {
    ctx.body = 'hello get'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

module.exports = router

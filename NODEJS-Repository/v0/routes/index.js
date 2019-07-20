const router = require('koa-router')()

router.get('/', async (ctx, next) => {
    ctx.body = {
        title: "hello demo",
        url: ctx.request.url
    }
})

router.get('/demo', async (ctx, next) => {
    ctx.body = {
        title: "hello demo",
        url: ctx.request.url
    }
})

router.get('/base/get', async (ctx, next) => {
    const req_query = ctx.request.query
    const ctx_query = ctx.query
    ctx.body = {
        req_query, ctx_query
    }
})
router.post('/base/post', async (ctx, next) => {
    const req_body = ctx.request.body
    ctx.body = {
        req_body
    }
})
router.post('/base/buffer', async (ctx, next) => {
    try {
        const listenBody = ctx => new Promise((resolve, reject) => {
            try {
                let msg = []
                ctx.req.on('data', (chunk) => {
                    if (chunk) {
                        msg.push(chunk)
                    }
                })
                ctx.req.on('end', () => {
                    let buf = Buffer.concat(msg)
                    resolve(buf.toJSON())
                })
            } catch (error) {
                reject(error)
            }
        })
        ctx.body = await listenBody(ctx)

    } catch (error) {
        ctx.body = { msg: "error", err: JSON.stringify(err) }
    }
})

router.get('/error/get', async (ctx, next) => {
    const req_body = ctx.request.body
    ctx.body = {
        req_body
    }
})

router.get('/extend/get', async (ctx, next) => {
    const req_query = ctx.request.query
    const ctx_query = ctx.query
    ctx.body = {
        req_query, ctx_query
    }
})

router.post('/extend/post', async (ctx, next) => {
    const req_body = ctx.request.body
    ctx.body = {
        req_body
    }
})

router.head('/extend/head', async (ctx, next) => {
    const req_query = ctx.request.query
    const ctx_query = ctx.query
    ctx.body = {
        req_query, ctx_query
    }
})

router.delete('/extend/delete', async (ctx, next) => {
    const req_query = ctx.request.query
    const ctx_query = ctx.query
    ctx.body = {
        req_query, ctx_query
    }
})

router.put('/extend/put', async (ctx, next) => {
    const req_body = ctx.request.body
    ctx.body = {
        req_body
    }
})

router.patch('/extend/patch', async (ctx, next) => {
    const req_body = ctx.request.body
    ctx.body = {
        req_body
    }
})

// router.post('/extend/post', async (ctx, next) => {
//     const req_body = ctx.request.body
//     ctx.body = {
//         req_body
//     }
// })
module.exports = router

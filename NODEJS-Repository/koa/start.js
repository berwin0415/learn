const koa = require('koa')

const app = new koa()

app.use(async (ctx,next)=> {
    console.log("mid 1 before")
    const date1 = new Date()
    await next()
    const date2 = new Date()
    console.log("mid 1 after",date2 - date1)
})

app.use(async (ctx,next)=> {
    console.log("mid 2 before")
    await next()
    // ctx.body = "hello"
    console.log("mid 2 after")
})

app.use(async (ctx,next)=> {
    console.log("mid 3 before")
    await next()
    ctx.body = "world"
    console.log("mid 3 after")
})

app.listen(3001,() => {
    console.log('server start at 3001')
})
const router = require("koa-router")();
const mysql = require("mysql2/promise");

// const connection = mysql.createConnection(
//   {
//     host: "118.31.47.24",
//     user: "root",
//     password: "mj120926",
//     database: "mysql_crash_course"
//   },
//   (err, con) => {
//     if (!err) {
//       console.log("mysql connected");
//     }
//   }
// );

// const pool = mysql.createPool({
//   host: "118.31.47.24",
//   user: "root",
//   password: "mj120926",
//   database: "mysql_crash_course"
// }).then(res => {
//   console.log('success')
// })

// const connection = mysql.createConnection({
//   host: "118.31.47.24",
//   user: "root",
//   password: "mj120926",
//   database: "mysql_crash_course"
// });
router.get("/", async (ctx, next) => {
  // let arr = [];

  // const result = await pool.execute(
  //  "INSERT INTO customers(cust_name, cust_address, cust_city, cust_state, cust_zip, cust_country, cust_contact, cust_email) VALUES('Coyote Inc.', '200 Maple Lane', 'Detroit', 'MI', '44444', 'USA', 'Y Lee', 'ylee@coyote.com');"
  // );
  ctx.body = {
    title: "hello demo",
    url: ctx.request.url,
    // arr: result
  };
});

router.get("/demo", async (ctx, next) => {
  ctx.body = {
    title: "hello demo",
    url: ctx.request.url
  };
});

router.get("/base/get", async (ctx, next) => {
  const req_query = ctx.request.query;
  const ctx_query = ctx.query;
  ctx.body = {
    req_query,
    ctx_query
  };
});
router.post("/base/post", async (ctx, next) => {
  const req_body = ctx.request.body;
  ctx.body = {
    req_body
  };
});
router.post("/base/buffer", async (ctx, next) => {
  try {
    const listenBody = ctx =>
      new Promise((resolve, reject) => {
        try {
          let msg = [];
          ctx.req.on("data", chunk => {
            if (chunk) {
              msg.push(chunk);
            }
          });
          ctx.req.on("end", () => {
            let buf = Buffer.concat(msg);
            resolve(buf.toJSON());
          });
        } catch (error) {
          reject(error);
        }
      });
    ctx.body = await listenBody(ctx);
  } catch (error) {
    ctx.body = { msg: "error", err: JSON.stringify(err) };
  }
});

router.get("/error/get", async (ctx, next) => {
  const req_body = ctx.request.body;
  ctx.body = {
    req_body
  };
});

router.get("/extend/get", async (ctx, next) => {
  const req_query = ctx.request.query;
  const ctx_query = ctx.query;
  ctx.body = {
    req_query,
    ctx_query
  };
});

router.post("/extend/post", async (ctx, next) => {
  const req_body = ctx.request.body;
  ctx.body = {
    req_body
  };
});

router.head("/extend/head", async (ctx, next) => {
  const req_query = ctx.request.query;
  const ctx_query = ctx.query;
  ctx.body = {
    req_query,
    ctx_query
  };
});

router.delete("/extend/delete", async (ctx, next) => {
  const req_query = ctx.request.query;
  const ctx_query = ctx.query;
  ctx.body = {
    req_query,
    ctx_query
  };
});

router.put("/extend/put", async (ctx, next) => {
  const req_body = ctx.request.body;
  ctx.body = {
    req_body
  };
});

router.patch("/extend/patch", async (ctx, next) => {
  const req_body = ctx.request.body;
  ctx.body = {
    req_body
  };
});

// router.post('/extend/post', async (ctx, next) => {
//     const req_body = ctx.request.body
//     ctx.body = {
//         req_body
//     }
// })

router.post("/config/post", async (ctx, next) => {
  const req_body = ctx.request.body;

  ctx.body = {
    req_body
  };
});
router.get("/cancel/get", async (ctx, next) => {
  const req_body = ctx.request.body;
  const wait = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  next();
  await wait();
  ctx.body = "request finish";
});

module.exports = router;

const myPromise = require('./myPromise')

const p = new myPromise((resolve,reject)=> {
    setTimeout(() => {
        // const num = Math.floor(Math.round() * 100)%2
        // console.log("num",num);
        const num = 1
        
        num ? resolve("resove:" + num):reject("reject"+num)
    }, 1000);
})
p.then(e => console.log(e),e => console.log(e))
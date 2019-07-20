const MyPromise = require('./myPromise')
let p = new MyPromise(function (resolve, reject) {
    console.log('start')
    setTimeout(function () {
        resolve('data1')
    }, 2000)
})
p.then(
    (v) => {
        console.log('success： ' + v)
    },
    (v) => {
        console.log('error： ' + v)
    }
)
p.then(
    (v) => {
        console.log('success： ' + v)
    },
    (v) => {
        console.log('error： ' + v)
    }
)
console.log('end')

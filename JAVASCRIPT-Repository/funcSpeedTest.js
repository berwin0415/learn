const arr = [];
const date1 = new Date();
const func = a => Array(1000).fill(a).map((item,index) => {
    arr.push({a:item + index})
})

for (let index = 0; index < 10000; index++) {
    func(1)
}
const date2 = new Date()
console.log(date2 - date1)

for (let index = 0; index < 10000; index++) {
    func(index)
}
const date3 = new Date()
console.log(date3 - date2)
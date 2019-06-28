
const a = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("timeOut")
        return reject("resolve")
    }, 1000);
})
a.then(res => console.log("first then")).catch(res => console.log("first catch")).finally(res => console.log("first finally")).then(res => console.log("second then"))
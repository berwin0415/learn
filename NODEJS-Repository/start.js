function test(){// console.log('task1')
    const time1= new Date()

    setTimeout(() => {
        console.log('timeout1')
        const time2 = new Date()
        console.log(time2 - time1)
        Promise.resolve().then(() => {
            console.log('promise1')
        })
        Promise.resolve().then(() => {
            console.log('promise2')
        })
    }, 100)
    // console.log('task2')
    setTimeout(() => {
        console.log('timeout2')
        const time2 = new Date()
        console.log(time2 - time1)
        Promise.resolve().then(() => {
            console.log('promise3')
        })
    }, 100)
    // console.log('task3')
}
for (let i = 0; i < 5; i++) {
    test()
   
    
}
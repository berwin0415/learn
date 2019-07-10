interface Lengthwise {
    length: number
}

function loggingIdentity5<T extends Lengthwise>(arg: T): T {
    console.log(arg.length) // OK
    return arg
}

loggingIdentity5({ length: 10, value: 3 }) // OK



function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key]
}

let x = { a: 1, b: 2, c: 3, d: 4 }

getProperty(x, 'a') // okay
//getProperty(x, 'm') // error
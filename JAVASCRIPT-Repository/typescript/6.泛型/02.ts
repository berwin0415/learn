function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length)
    return arg
}

const output = loggingIdentity(["1"])
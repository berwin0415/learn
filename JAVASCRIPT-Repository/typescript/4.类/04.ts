class Person {
    readonly name: string
    constructor(name: string) {
        this.name = name
    }
}

let john = new Person('John')
//   john.name = 'peter'//error

class Person2 {
    constructor(readonly name: string) {
    }
}
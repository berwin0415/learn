// 可索引的类型

// interface StringArray {
//     [index: number]: string
// }

// let myArray: StringArray
// myArray = ['Bob', 'Fred']

// let myStr: string = myArray[0]


// class Animal {
//     name: string
// }
// class Dog extends Animal {
//     breed: string
// }

// // 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//     [x: number]: Animal
//     [x: string]: Dog
// }

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
"use strict";
//
//public
// class Animal {
//     public name: string
//     public constructor(name: string) {
//         this.name = name
//     }
//     public move(distance: number) {
//         console.log(`${this.name} moved ${distance}m.`)
//     }
// }
//private
// class Animal {
//     private name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// class Rhino extends Animal {
//     constructor() {
//         super('Rhino')
//     }
// }
// class Employee {
//     private name: string
//     constructor(name: string) {
//         this.name = name
//     }
// }
// let animal = new Animal('Goat')
// let rhino = new Rhino()
// let employee = new Employee('Bob')
// animal = rhino
// animal = employee // 错误: Animal 与 Employee 不兼容.
//protected
// class Person {
//     protected name: string
//     protected constructor(name: string) {
//         this.name = name
//     }
// }
// // Employee 能够继承 Person
// class Employee extends Person {
//     private department: string
//     constructor(name: string, department: string) {
//         super(name)
//         this.department = department
//     }
//     public getElevatorPitch() {
//         return `Hello, my name is ${this.name} and I work in ${this.department}.`
//     }
// }
// let howard = new Employee('Howard', 'Sales')
// let john = new Person('John') // 错误: 'Person' 的构造函数是被保护的.

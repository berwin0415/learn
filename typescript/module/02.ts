export var num:number = 100;
module Ickt {
    export let num:string = "102";
    export function add(num1:number, num2?:number):number {
        return num ? num1 + num2 : num1 + 30;
    }
    export class book {
        name:string = "jsbook";
        getname ():string {
            return this.name;
        }
    }
}

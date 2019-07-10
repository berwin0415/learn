// 只读属性

interface Point {
    readonly x: number,
    readonly y: number
}

let p1: Point = { x: 10, y: 5 }
// p1.x = 9;//error

let rda: number[] = [1, 2, 3, 4]
let rdb: ReadonlyArray<number> = rda;

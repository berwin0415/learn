let x1 = 3
let x2 = [0, 1, null]


class Animal {
    numLegs: number
}

class Bee extends Animal {
}

class Lion extends Animal {
}

let zoo: Animal[] = [new Bee(), new Lion()]

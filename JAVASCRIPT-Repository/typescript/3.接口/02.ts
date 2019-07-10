//可选属性

interface Square {
    color: string,
    area: number
}

interface SquareConfig {
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: "red", area: 10 }
    if (config.width) {
        newSquare.area = config.width
    }
    return newSquare
}

let mySquare = createSquare({ width: 50 })


function padLeft(value: string, padding: string | number) {
    if (typeof padding === 'number') {
        return Array(padding + 1).join(' ') + value
    }
    if (typeof padding === 'string') {
        return padding + value
    }
    throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('Hello world', 4) // returns "    Hello world"


interface Bird {
    fly()
    layEggs()
}

interface Fish {
    swim()
    layEggs()
}

function getSmallPet(): Fish | Bird {
    // ...
    return
}

let pet = getSmallPet()
pet.layEggs() // okay
//   pet.swim()    // error
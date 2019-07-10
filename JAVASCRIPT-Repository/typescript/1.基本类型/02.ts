let list:number[] = [1,2,2,3]

enum Color {red ,green, blue}

let cc:Color = Color.green

declare function create(o: object | null): void

create({ prop: 0 }) 
create(null) 
create(Color)

// create(333) 


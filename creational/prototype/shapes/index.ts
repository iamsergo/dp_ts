import Circle from "./Circle"

const c = new Circle(5)
console.log('ORIGINAL : ', c.getSquare())

const cc = c.clone()
console.log('CLONE : ', cc.getSquare())
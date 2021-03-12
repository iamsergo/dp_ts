import Rectangle from './Rectangle'
import JSONVisitor from './JSONVisitor'
import Circle from './Circle'
import XMLVisitor from './XMLVisitor'

const r = new Rectangle(10,5)
const rj = r.accept(new JSONVisitor())
console.log('JSON : ', rj)

const c = new Circle(17)
const cj = c.accept(new XMLVisitor())
console.log('XML : ', cj)
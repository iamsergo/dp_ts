import IShape from "./IShape"
import IShapeFactory from "./IShapeFactory"
import RectangleFactory from './RectangleFactory'
import CircleFactory from './CircleFactory'

// const f : IShapeFactory = new RectangleFactory(4, 5)
const f : IShapeFactory = new CircleFactory(3)
const shape : IShape = f.createShape()

console.log({
  square : shape.getSquare(),
  long : shape.getLong(),
})
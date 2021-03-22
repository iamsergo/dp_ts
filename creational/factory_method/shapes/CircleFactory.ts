import IShape from "./IShape";
import IShapeFactory from "./IShapeFactory";
import Circle from './Circle'

export default
class CircleFactory
implements IShapeFactory
{
  private r: number

  constructor(r: number)
  {
    this.r = r
  }

  createShape() : IShape
  {
    return new Circle(this.r)
  }
}
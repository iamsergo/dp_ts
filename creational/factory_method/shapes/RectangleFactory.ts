import IShape from "./IShape";
import IShapeFactory from "./IShapeFactory";
import Rectangle from './Rectangle'

export default
class RectangleFactory
implements IShapeFactory
{
  private w : number
  private h : number
  
  constructor(w : number, h : number)
  {
    this.w = w
    this.h = h
  }

  createShape() : IShape
  {
    return new Rectangle(this.w, this.h)
  }
}
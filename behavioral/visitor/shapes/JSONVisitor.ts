import Rectangle from './Rectangle'
import Circle from './Circle'
import IVisitor from "./IVisitor";

export default class JSONVisitor implements IVisitor
{
  getForRectangle(r : Rectangle) : string
  {
    return `{ "width" : ${r.w}, "height" : ${r.h} }`
  }
  
  getForCircle(c : Circle) : string
  {
    return `{ "radius" : ${c.r} }`
  }
}
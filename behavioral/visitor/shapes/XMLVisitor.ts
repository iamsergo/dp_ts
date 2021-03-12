import Rectangle from './Rectangle'
import Circle from './Circle'
import IVisitor from "./IVisitor";

export default class XMLVisitor implements IVisitor
{
  getForRectangle(r : Rectangle) : string
  {
    return `<Rectangle "width"="${r.w}" "height"="${r.h}" />`
  }
  
  getForCircle(c : Circle) : string
  {
    return `<Circle radius="${c.r}" />`
  }
}
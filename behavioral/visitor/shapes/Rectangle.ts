import IShape from "./IShape";
import IVisitor from "./IVisitor";

export default class Rectangle implements IShape
{
  public w : number
  public h : number

  constructor(w : number, h : number)
  {
    this.w = w
    this.h = h
  }

  draw() : void
  {
    console.log('Drawed rectangle')
  }
  
  accept(v : IVisitor) : string
  {
    return v.getForRectangle(this)
  }
}
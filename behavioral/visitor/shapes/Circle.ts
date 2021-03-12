import IShape from "./IShape";
import IVisitor from "./IVisitor";

export default class Circle implements IShape
{
  public r : number

  constructor(r : number)
  {
    this.r = r
  }

  draw() : void
  {
    console.log('Drawed circle')
  }

  accept(v : IVisitor) : string
  {
    return v.getForCircle(this)
  }
}
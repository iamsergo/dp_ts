import IClonable from './IClonable'
import IShape from './IShape'

export default
class Circle implements IShape, IClonable<IShape>
{
  private r : number

  constructor(r : number)
  constructor(origin : Circle)
  constructor(arg : Circle | number)
  {
    if(arg instanceof Circle)
    {
      this.r = arg.r
    }
    else
    {
      this.r = arg
    }
  }

  getSquare() : number
  {
    return Math.PI * this.r * this.r
  }

  clone() : IShape
  {
    return new Circle(this)
  }
}
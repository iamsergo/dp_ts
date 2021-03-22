import IShape from './IShape'

export default
class Rectangle
implements IShape
{
  private w : number
  private h : number
  
  constructor(w : number, h : number)
  {
    this.w = w
    this.h = h
  }

  getLong() : number
  {
    return 2 * (this.w + this.h)
  }

  getSquare() : number
  {
    return this.w * this.h
  }
}
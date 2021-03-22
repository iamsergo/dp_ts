import IShape from './IShape'

export default
class Circle
implements IShape
{
  private r : number

  constructor(r : number)
  {
    this.r = r
  }

  getLong() : number
  {
    return 2 * Math.PI * this.r
  }

  getSquare() : number
  {
    return Math.PI * this.r**2
  }
}
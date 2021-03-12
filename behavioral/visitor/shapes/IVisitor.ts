import Rectangle from './Rectangle'
import Circle from './Circle'

export default interface IVisitor
{
  getForRectangle(r : Rectangle) : string
  getForCircle(r : Circle) : string
}
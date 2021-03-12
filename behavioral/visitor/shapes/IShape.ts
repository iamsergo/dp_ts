import IVisitor from './IVisitor'

export default interface IShape
{
  draw() : void
  accept(v : IVisitor) : string
}
import IClonable from './IClonable'
import IElement from './IElement'

export default
class Leaf
implements IElement
{
  private weight : number

  constructor(weight : number)
  constructor(leaf : Leaf)
  constructor(arg : any)
  {
    if(arg instanceof Leaf)
    {
      this.weight = arg.weight
    }
    else
    {
      this.weight = arg
    }
  }

  getWeight() : number
  {
    return this.weight
  }

  clone() : IElement
  {
    return new Leaf(this)
  }
}
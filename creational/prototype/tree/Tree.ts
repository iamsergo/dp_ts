import IElement from './IElement'

export default
class Tree
implements IElement
{
  private weight : number
  private children : IElement[] = []

  constructor(tree : Tree)
  constructor(weight : number, ...children : IElement[])
  constructor(...args : any)
  {
    if(args[0] instanceof Tree)
    {
      this.weight = args[0].weight
      for(const child of args[0].children)
      {
        this.children.push(child.clone())
      }
    }
    else
    {
      const [weight, ...children] = args
      this.weight = weight
      this.children = children
    }
  }

  getWeight() : number
  {
    let w = this.weight
    for(const child of this.children)
    {
      w += child.getWeight()
    }
    
    return w
  }

  clone() : IElement
  {
    return new Tree(this)
  }
}
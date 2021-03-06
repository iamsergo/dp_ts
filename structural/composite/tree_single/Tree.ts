import IElement from "./IElement";

export default class Tree implements IElement
{
  weight : number
  children : IElement[]

  constructor(
    weight : number,
    ...children : IElement[]
  )
  {
    this.weight = weight
    this.children = children
  }

  public getWeight() : number
  {
    let w = this.weight
    for(const leaf of this.children)
    {
      w += leaf.getWeight()
    }

    return w
  }
}
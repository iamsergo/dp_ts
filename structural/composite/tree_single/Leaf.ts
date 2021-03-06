import IElement from "./IElement";

export default class Leaf implements IElement
{
  weight : number

  constructor(weight : number)
  {
    this.weight = weight
  }

  public getWeight() : number
  {
    return this.weight
  }
}
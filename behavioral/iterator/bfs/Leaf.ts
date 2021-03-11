import IElement from "./IElement";
import Levelable from "./Levelable";

export default class Leaf<T> implements IElement<T>
{
  private value : T

  constructor(value : T)
  {
    this.value = value
  }

  getValue(level : number) : Levelable<T>[]
  {
    return [new Levelable<T>(this.value, level)]
  }
}
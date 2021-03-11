import BFSIterator from "./BFSIterator";
import DFSIterator from "./DFSIterator";
import IElement from "./IElement";
import IEnumerable from "./IEnumerable";
import IIterator from "./IIterator";
import Levelable from "./Levelable";

export default class Tree<T> implements IElement<T>, IEnumerable<T>
{
  private value : T
  private children : IElement<T>[] = []

  constructor(value : T, ... children : IElement<T>[])
  {
    this.value = value
    this.children = children
  }

  getValue(level : number) : Levelable<T>[]
  {
    const childValues = []
    for(const child of this.children)
    {
      childValues.push(...child.getValue(level + 1))
    }
    return [new Levelable(this.value, level), ...childValues]
  }

  getBFSIterator() : IIterator<T>
  {
    return new BFSIterator(this)
  }

  getDFSIterator() : IIterator<T>
  {
    return new DFSIterator(this)
  }
}
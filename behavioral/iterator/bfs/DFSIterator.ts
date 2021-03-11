import IIterator from "./IIterator";
import Tree from "./Tree";

export default class DFSIterator<T> implements IIterator<T>
{
  private collection : T[]
  private currentIndex : number = 0

  constructor(collection : Tree<T>)
  {
    this.collection = collection.getValue(0).map(i => i.value)
  }

  next() : T
  {
    const nextItem = this.collection[this.currentIndex]
    this.currentIndex++
    return nextItem
  }

  isDone() : boolean
  {
    return this.currentIndex >= this.collection.length
  }
}
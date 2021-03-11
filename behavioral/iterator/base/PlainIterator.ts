import Collection from "./Collection";
import IIterator from "./IIterator";

export default class PlainIterator<T> implements IIterator<T>
{
  private collection : Collection<T>
  private currentIndex : number = 0
  
  constructor(collection : Collection<T>)
  {
    this.collection = collection
  }

  next() : T
  {
    const nextItem = this.collection.items[this.currentIndex]
    this.currentIndex++
    return nextItem
  }

  isDone() : boolean
  {
    return this.currentIndex >= this.collection.items.length
  }
}
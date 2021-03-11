import Collection from "./Collection";
import IIterator from "./IIterator";

export default class StepIterator<T> implements IIterator<T>
{
  private collection : Collection<T>
  private currentIndex : number = 0
  private step : number
  
  constructor(collection : Collection<T>, step : number)
  {
    this.collection = collection
    this.step = step
  }

  next() : T
  {
    const nextItem = this.collection.items[this.currentIndex]
    this.currentIndex += this.step
    return nextItem
  }

  isDone() : boolean
  {
    return this.currentIndex >= this.collection.items.length
  }
}
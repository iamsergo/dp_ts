import ICollection from './ICollection'
import IIterator from './IIterator';
import StepIterator from './StepIterator';
import PlainIterator from './PlainIterator';

export default class Collection<T> implements ICollection<T>
{
  items : T[]

  constructor(...items : T[])
  {
    this.items = items
  }

  getPlainIterator() : IIterator<T>
  {
    return new PlainIterator(this)
  }

  getStepIterator(step : number) : IIterator<T>
  {
    return new StepIterator(this, step)
  }
}
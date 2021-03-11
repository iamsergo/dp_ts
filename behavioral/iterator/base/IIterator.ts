export default interface IIterator<T>
{
  next() : T
  isDone() : boolean
}
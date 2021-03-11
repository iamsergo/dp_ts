import IIterator from "./IIterator";

export default interface ICollection<T>
{
  getPlainIterator() : IIterator<T>
  getStepIterator(step : number) : IIterator<T>
}
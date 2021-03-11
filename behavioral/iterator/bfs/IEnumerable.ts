import IITerator from "./IIterator";

export default interface IEnumerable<T>
{
  getBFSIterator() : IITerator<T>
  getDFSIterator() : IITerator<T>
}
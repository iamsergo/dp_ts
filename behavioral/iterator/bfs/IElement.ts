import Levelable from "./Levelable";

export default interface IElement<T>
{
  getValue(level : number) : Levelable<T>[]
}
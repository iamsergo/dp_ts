import IClonable from "./IClonable";

export default
interface IElement
extends IClonable<IElement>
{
  getWeight() : number
}
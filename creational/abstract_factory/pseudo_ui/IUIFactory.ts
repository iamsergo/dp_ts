import IDiv from "./IDiv";
import IButton from "./IButton";

export default
interface IUIFactory
{
  createButton() : IButton
  createDiv() : IDiv
}
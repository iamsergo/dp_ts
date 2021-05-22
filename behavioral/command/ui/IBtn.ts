import ICommand from "./ICommand";

export default interface IBtn
{
  onClick(command: ICommand): void
  click(): void
}
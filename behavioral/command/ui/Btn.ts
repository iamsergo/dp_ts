import IBtn from "./IBtn";
import ICommand from "./ICommand";

export default
class Btn
implements IBtn
{
  private command: ICommand

  onClick(command: ICommand): void
  {
    this.command = command
  }

  click(): void
  {
    this.command.execute()
  }
}
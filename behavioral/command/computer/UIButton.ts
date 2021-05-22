import ICommand from "./ICommand"

export default
class UIButton
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
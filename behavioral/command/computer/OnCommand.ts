import Computer from "./Computer";
import ICommand from "./ICommand";

export default
class OnCommand
implements ICommand
{
  constructor(private pc: Computer){}

  execute(): void
  {
    this.pc.on()
  }
}
import Computer from "./Computer";
import ICommand from "./ICommand";

export default
class OffCommand
implements ICommand
{
  constructor(private pc: Computer){}
  
  execute(): void
  {
    this.pc.off()
  }
}
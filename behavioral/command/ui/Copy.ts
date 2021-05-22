import App from "./App";
import Device from "./Device";
import ICommand from "./ICommand";

export default
class Copy
implements ICommand
{
  constructor(
    private device: Device,
    private app: App,
  ){}

  execute() : void
  {
    const selection = this.app.getSelection()
    
    this.device.setClipboard(selection)
  }
}
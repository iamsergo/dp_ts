import App from "./App";
import Device from "./Device";
import ICommand from "./ICommand";

export default
class Paste
implements ICommand
{
  constructor(
    private device: Device,
    private app: App,
  ){}

  execute() : void
  {
    const content = this.device.getClipBoard()

    this.app.setContent(content)
  }
}
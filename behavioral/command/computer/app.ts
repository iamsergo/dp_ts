import Computer from "./Computer"
import OffCommand from "./OffCommand"
import OnCommand from "./OnCommand"
import PowerButton from "./PowerButton"
import UIButton from "./UIButton"

class Sys
{
  private pc: Computer
  private uib: UIButton
  private pb: PowerButton

  constructor()
  {
    this.pc = new Computer()
  }

  init(): void
  {
    const on = new OnCommand(this.pc)
    const off = new OffCommand(this.pc)

    this.uib = new UIButton()
    this.uib.onClick(off)

    this.pb = new PowerButton()
    this.pb.onClick(on)
  }

  run(): void
  {
    this.pb.click()
    this.uib.click()
  }
}

const sys = new Sys()
sys.init()

sys.run()
import Computer from './Computer'
import PowerButton from './PowerButton'
import UIButton from './UIButton'
import OnCommand from './OnCommand'
import OffCommand from './OffCommand'

// init
const pc = new Computer()

const on = new OnCommand(pc)
const off = new OffCommand(pc)

const pb = new PowerButton()
pb.onClick(on)

const uib = new UIButton()
uib.onClick(off)

// actions
pb.click()
uib.click()
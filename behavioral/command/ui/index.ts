import App from "./App"
import Copy from "./Copy"
import Device from "./Device"
import Paste from "./Paste"
import MenuBtn from './MenuBtn'
import Btn from './Btn'

// setup
const app = new App()
const device = new Device()

const paste = new Paste(device, app)
const copy = new Copy(device, app)

// init ui
const pasteBtn = new Btn()
const menuPasteBtn = new MenuBtn()
pasteBtn.onClick(paste)
menuPasteBtn.onClick(paste)

const copyBtn = new Btn()
const menuCopyBtn = new MenuBtn()
copyBtn.onClick(copy)
menuCopyBtn.onClick(copy)


// user actions
app.setContent('0123 567 9')

//   copy
app.setSelection(0, 5)
copyBtn.click()
menuCopyBtn.click()

console.log(app.getContent())

//   paste
app.setCursorPosition(3)
pasteBtn.click()
// menuPasteBtn.click()

console.log(app.getContent())

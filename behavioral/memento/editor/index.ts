import Editor from "./Editor";
import EnterCommand from "./EnterCommand";

const editor = new Editor()
const ec = new EnterCommand(editor)

ec.execute('0')
ec.execute('1')
editor.log()

ec.undo()
editor.log()
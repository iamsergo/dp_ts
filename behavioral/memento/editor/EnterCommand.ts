import Editor from "./Editor";
import EditorSnapshot from "./EditorSnapshot";

export default
class EnterCommand
{
  private history: EditorSnapshot[] = []
  constructor(private editor: Editor){}

  public execute(text: string): void
  {
    this.history.push(this.editor.save())
    this.editor.setText('...Emulation text from keyboard...' + text + '\n')
  }

  public undo(): void
  {
    const snapshot = this.history.pop()
    snapshot.restore()
  }
}
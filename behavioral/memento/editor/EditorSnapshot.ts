import Editor from "./Editor";

export default
class EditorSnapshot
{
  constructor(
    private editor: Editor,
    private text: string
  ){}

  public restore(): void
  {
    this.editor.setText(this.text)
  }
}
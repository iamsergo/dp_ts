import EditorSnapshot from "./EditorSnapshot"

export default
class Editor
{
  private text: string

  public setText(text: string): void
  {
    this.text = text
  }

  public save(): EditorSnapshot
  {
    return new EditorSnapshot(this, this.text)
  }

  public log(): void
  {
    console.log('Current state: ', this.text)
  }
}
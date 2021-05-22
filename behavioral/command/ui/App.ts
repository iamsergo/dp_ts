export default
class App
{
  private content: string = ''
  private selectionRange: [number, number] = [0, 0]
  private cursorPosition: number = 0

  public getContent(): string
  {
    const leftContent = this.content.slice(0, this.cursorPosition)
    const rightContent = this.content.slice(this.cursorPosition)

    return leftContent + '|' + rightContent
  }

  public setContent(newContent: string): void
  {
    const leftContent = this.content.slice(0, this.cursorPosition)
    const rightContent = this.content.slice(this.cursorPosition)

    this.content = leftContent + newContent + rightContent
    this.cursorPosition += newContent.length
  }

  public setCursorPosition(cursorPosition: number): void
  {
    this.cursorPosition = cursorPosition
  }

  public getSelection(): string
  {
    const [startSelectionIndex, endSelectionIndex] = this.selectionRange

    return this.content.slice(startSelectionIndex, endSelectionIndex)
  }

  public setSelection(startSelectionIndex: number, endSelectionIndex: number): void
  {
    this.selectionRange = [startSelectionIndex, endSelectionIndex]
  }
}
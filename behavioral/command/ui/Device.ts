export default
class Device
{
  private clipboard: string = ''

  public getClipBoard(): string
  {
    return this.clipboard
  }

  public setClipboard(clipboard: string): void
  {
    this.clipboard = clipboard
  }
}
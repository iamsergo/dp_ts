import IButton from "./IButton";

export default
class HtmlButton
implements IButton
{
  private content : string

  constructor(content : string)
  {
    this.content = content
  }

  render() : string
  {
    return `<button onclick="handleClick()">${this.content}</button>`
  }
}
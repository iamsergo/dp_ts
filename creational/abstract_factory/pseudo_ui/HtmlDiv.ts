import IDiv from "./IDiv";

export default
class HtmlDiv
implements IDiv
{
  private content : string

  constructor(content : string)
  {
    this.content = content
  }

  render() : string
  {
    return `<div>${this.content}</div>`
  }
}
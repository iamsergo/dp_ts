import IDiv from "./IDiv";

export default
class ReactDiv
implements IDiv
{
  private content : string

  constructor(content : string)
  {
    this.content = content
  }

  render() : string
  {
    return `<Div>${this.content}</Div>`
  }
}
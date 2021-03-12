import FileDecorator from "./FileDecorator";
import IFile from "./IFile";

export default class FileWithCompress extends FileDecorator
{
  constructor(wrapped : IFile)
  {
    super(wrapped)
  }

  private compress(content : string) : string
  {
    return content.slice(0, ~~(content.length / 2))
  }

  read() : string
  {
    return this.compress(super.read())
  }

  write(content : string)
  {
    super.write(this.compress(content))
  }
}
import FileDecorator from "./FileDecorator";
import IFile from "./IFile";

export default class FileWithEncrypt extends FileDecorator
{
  constructor(wrapped : IFile)
  {
    super(wrapped)
  }

  private encrypt(content : string) : string
  {
    return Array.from(content)
            .map(c => String.fromCharCode(c.charCodeAt(0) + 1))
            .join('')
  }

  read() : string
  {
    return this.encrypt(super.read())
  }

  write(content : string)
  {
    super.write(this.encrypt(content))
  }
}
import IFile from "./IFile";

export default class FileDecorator implements IFile
{
  private wrapped : IFile

  constructor(wrapped : IFile)
  {
    this.wrapped = wrapped
  }

  read() : string
  {
    return this.wrapped.read()
  }

  write(content : string)
  {
    this.wrapped.write(content)
  }
}
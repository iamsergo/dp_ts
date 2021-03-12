import IFile from "./IFile";

export default class PlainFile implements IFile
{
  private path : string
  private content : string

  constructor(path : string)
  {
    this.path = path
  }

  read() : string
  {
    return this.content
  }

  write(content : string)
  {
    this.content = content
  }
}
export default interface IFile
{
  read() : string
  write(content : string) : void
}
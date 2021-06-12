export default 
class RepoSnapshot
{
  constructor(private content: string){}

  public getContent(): string
  {
    return this.content
  }
}
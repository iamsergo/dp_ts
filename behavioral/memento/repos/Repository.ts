import RepositorySnapshot from "./RepositorySnapshot"

export default
class Repository
{
  private content: string

  public setContent(content: string)
  {
    this.content = content
  }

  public save(): RepositorySnapshot
  {
    return new RepositorySnapshot(this, this.content)
  }


  public log(): void
  {
    console.log('Current state: ', this.content)
  }
}
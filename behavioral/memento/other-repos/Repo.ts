import RepoSnapshot from "./RepoSnapshot"

export default
class Repo
{
  private content: string

  public setContent(content: string): void
  {
    this.content = content
  }

  public save(): RepoSnapshot
  {
    return new RepoSnapshot(this.content)
  }

  public restore(snapshot: RepoSnapshot): void
  {
    this.content = snapshot.getContent()
  }

  public log(): void
  {
    console.log('Current state: ', this.content)
  }
}
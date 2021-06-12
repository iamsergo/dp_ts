import Repository from "./Repository";

export default
class RepositorySnapshot
{
  constructor(
    private repository: Repository,
    private content: string
  ){}

  public restore(): void
  {
    this.repository.setContent(this.content)
  }
}
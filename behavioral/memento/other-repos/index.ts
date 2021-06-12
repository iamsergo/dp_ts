import Repo from "./Repo"
import RepoSnapshot from "./RepoSnapshot"

class Caretaker
{
  private snapshots: RepoSnapshot[] = []

  public run(): void
  {
    const repo = new Repo()

    repo.setContent('0')
    this.snapshots.push(repo.save())

    repo.setContent('1')
    this.snapshots.push(repo.save())

    repo.setContent('2')
    this.snapshots.push(repo.save())

    repo.log()

    
    repo.restore(this.snapshots[0])
    repo.log()
  }
}

new Caretaker().run()
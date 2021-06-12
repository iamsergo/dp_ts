import Repository from "./Repository";
import RepositorySnapshot from "./RepositorySnapshot";

class Caretaker
{
  private snapshots: RepositorySnapshot[] = []

  public run(): void
  {
    const repository = new Repository()
    
    repository.setContent('0')
    repository.setContent('1')
    this.snapshots.push(repository.save())
    
    repository.setContent('2')
    this.snapshots.push(repository.save())
    
    repository.setContent('3')
    this.snapshots.push(repository.save())
    
    repository.log()
    
    
    this.snapshots[0].restore()
    repository.log()
  }
}


new Caretaker().run()
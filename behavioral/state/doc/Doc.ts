import IState from './IState'

export default
class Doc
{
  private state: IState

  public setState(state: IState): void
  {
    this.state = state
  }

  public publish(): void
  {
    this.state.publish()
  }

  public unpublish(): void
  {
    this.state.unpublish()
  }
}
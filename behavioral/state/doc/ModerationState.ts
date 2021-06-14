import IState from './IState'
import Doc from './Doc'
import PublishedState from './PublishedState'
import DraftState from './DraftState'

export default
class ModerationState
implements IState
{
  constructor(private doc: Doc){}

  public publish(): void
  {
    console.log('Publish from [Moderation] to [Published]')
    this.doc.setState(new PublishedState(this.doc))
  }

  public unpublish(): void
  {
    console.log('Unpublish from [Moderation] to [Draft]')
    this.doc.setState(new DraftState(this.doc))
  }
}
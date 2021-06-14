import IState from './IState'
import Doc from './Doc'
import ModerationState from './ModerationState'

export default
class DraftState
implements IState
{
  constructor(private doc: Doc){}

  public publish(): void
  {
    console.log('Publish from [Draft] to [Moderation]')
    this.doc.setState(new ModerationState(this.doc))
  }

  public unpublish(): void
  {
    console.log('Impossible unpublish from [Draft]')
  }
}
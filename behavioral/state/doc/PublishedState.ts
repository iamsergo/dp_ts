import IState from './IState'
import Doc from './Doc'
import ModerationState from './ModerationState'

export default
class PublishedState
implements IState
{
  constructor(private doc: Doc){}

  public publish(): void
  {
    console.log('Impossible publish from [Published]')
  }

  public unpublish(): void
  {
    console.log('Unpublish from [Published] to [Moderation]')
    this.doc.setState(new ModerationState(this.doc))
  }
}
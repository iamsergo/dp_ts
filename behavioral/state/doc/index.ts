import Doc from './Doc'
import DraftState from './DraftState'

const doc = new Doc()
doc.setState(new DraftState(doc))

doc.publish()
doc.publish()
doc.publish()
doc.publish()
doc.unpublish()
doc.unpublish()
doc.unpublish()
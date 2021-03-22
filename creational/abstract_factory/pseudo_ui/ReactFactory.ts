import IButton from './IButton';
import IDiv from './IDiv';
import IUIFactory from './IUIFactory'
import ReactButton from './ReactButton'
import ReactDiv from './ReactDiv'

export default
class ReactFactory
implements IUIFactory
{
  createButton() : IButton
  {
    return new ReactButton('react')
  }

  createDiv() : IDiv
  {
    return new ReactDiv('react')
  }
}
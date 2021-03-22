import IButton from './IButton';
import IDiv from './IDiv';
import IUIFactory from './IUIFactory'
import HtmlButton from './HtmlButton'
import HtmlDiv from './HtmlDiv'

export default
class HtmlFactory
implements IUIFactory
{
  createButton() : IButton
  {
    return new HtmlButton('html')
  }

  createDiv() : IDiv
  {
    return new HtmlDiv('html')
  }
}
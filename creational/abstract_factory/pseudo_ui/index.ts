import IUIFactory from './IUIFactory'
import ReactFactory from './ReactFactory'
import HtmlFactory from './HtmlFactory'
import IButton from './IButton'
import IDiv from './IDiv'

// const f : IUIFactory = new ReactFactory()
const f : IUIFactory = new HtmlFactory()
const btn : IButton  = f.createButton()
const div : IDiv     = f.createDiv()

console.log(btn.render())
console.log(div.render())
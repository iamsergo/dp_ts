import IMediator from './IMediator'
import Tab from './Tab'

export default
class TabsView
implements IMediator<Tab>
{
  public tab0: Tab
  public tab1: Tab
  public tab2: Tab

  private activeTab: Tab

  constructor()
  {
    this.tab0 = new Tab(this, 'tab0', 'content tab0')
    this.tab1 = new Tab(this, 'tab1', 'content tab1')
    this.tab2 = new Tab(this, 'tab2', 'content tab2')

    this.activeTab = this.tab0
  }

  notify(component: Tab): void
  {
    switch(component)
    {
      case this.tab0:
        this.tab0.show()
        this.tab1.hide()
        this.tab2.hide()
        return

      case this.tab1:
        this.tab0.hide()
        this.tab1.show()
        this.tab2.hide()
        return

      case this.tab2:
        this.tab0.hide()
        this.tab1.hide()
        this.tab2.show()
        return
    }
    this.activeTab = component
  }

  getState(): string
  {
    const title = [this.tab0, this.tab1, this.tab2].reduce((title, tab) => {
      if(tab === this.activeTab)
      {
        return `${title} [__${tab.title}__]`
      }

      return `${title} ${tab.title}`
    }, '')
    const content = this.activeTab.content

    return `\n${title}\n----------------------\n${content}\n`
  }
}
import Component from "./Component";
import ComponentMemento from "./ComponentMemento";
import IMememento from "./IMemento";

export default 
class Caretaker
{
  private history: IMememento[] = []
  private component: Component

  constructor(component: Component)
  {
    this.component = component
  }

  action(): void
  {
    const memento: ComponentMemento = this.component.save()
    this.history.push(memento)

    this.component.setState(currentState => currentState + 1)
  }

  back(): void
  {
    const lastMemento = this.history.pop()
    this.component.restore(lastMemento as ComponentMemento)
  }
}
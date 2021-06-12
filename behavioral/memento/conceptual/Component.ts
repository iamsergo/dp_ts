import ComponentMemento from "./ComponentMemento";

export default
class Component
{
  private state: number = 0

  setState(fn: (state: number) => number): void
  {
    const newState = fn(this.state)
    this.state = newState
  }

  save(): ComponentMemento
  {
    return new ComponentMemento(this.state)
  }

  restore(memento: ComponentMemento): void
  {
    this.state = memento.state
  }


  log(): void
  {
    console.log(this.state);
  }
}
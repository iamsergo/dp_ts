import IUIMediator from "./IUIMediator"

export default
class Selector
{
  public value: string = ''
  public currentValues: string[] = []

  constructor(
    private parent: IUIMediator<Selector>,
    private values: {[key:string]: string[]}
  ){}

  select(value: string): void
  {
    this.value = value
    this.parent.notify(this)
  }

  setValues(parentValue: string): void
  {
    this.currentValues = this.values[parentValue]
  }
}
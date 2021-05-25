import IMediator from "./IMediator";

export default
class Tab
{
  constructor(
    private mediator: IMediator<Tab>,
    public title: string,
    public content: string
  ) {}

  click(): void
  {
    this.mediator.notify(this)
  }

  show(): void
  {
    console.log('show', this.title)
  }

  hide(): void
  {
    console.log('hide', this.title)
  }
}
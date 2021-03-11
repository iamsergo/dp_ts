import Req from './Req'
import IHandler from './IHandler'

abstract class Handler implements IHandler
{
  private next : IHandler | null = null

  public setNext(next : IHandler) : void
  {
    this.next = next
  }

  public handle(request : Req) : void
  {
    if(this.next !== null)
    {
      this.next.handle(request)
    }
    else
    {
      console.log('Untouched...')
    }
  }
}

export default Handler 
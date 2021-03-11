import Req from '../conceptual/Req';
import IHandler from './IHandler'

export default class Handler implements IHandler
{
  next : IHandler | null = null

  setNext(next : IHandler) : void
  {
    this.next = next
  }

  handle(req : Req) : void
  {
    if(this.next !== null)
    {
      this.next.handle(req)
    }
    else
    {
      console.log('Success handled')
    }
  }
}
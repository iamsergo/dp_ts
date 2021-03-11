import Req from '../conceptual/Req';
import IHandler from './IHandler'

export default class App implements IHandler
{
  next : App | null = null

  use(next : App) : App
  {
    this.next = next
    return this.next
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
import Handler from './Handler';
import Req from './Req'

export default class AHandler extends Handler
{
  public handle(request : Req) : void
  {
    if(request.a === 0)
    {
      console.log('Hanled in A')
    }
    else
    {
      super.handle(request)
    }
  }
}
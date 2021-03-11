import Handler from './Handler';
import Req from './Req'

export default class BHandler extends Handler
{
  public handle(request : Req) : void
  {
    if(request.b.length >= 1)
    {
      console.log('Hanled in B')
    }
    else
    {
      super.handle(request)
    }
  }
}
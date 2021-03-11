import Req from "../conceptual/Req";
import Handler from "./Handler";

export default class AHandler extends Handler
{
  handle(req : Req) : void
  {
    if(req.a === 0)
    {
      console.log('a handled success')
      super.handle(req)
    }
    else
    {
      throw new Error('Incorrect a!')
    }
  }
}
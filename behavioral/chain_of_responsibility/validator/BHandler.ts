import Req from "../conceptual/Req";
import Handler from "./Handler";

export default class BHandler extends Handler
{
  handle(req : Req) : void
  {
    if(req.b === 'chain')
    {
      console.log('b handled success')
      super.handle(req)
    }
    else
    {
      throw new Error('Incorrect b!')
    }
  }
}
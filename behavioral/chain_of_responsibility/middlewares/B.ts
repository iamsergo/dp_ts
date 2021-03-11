import Req from "../conceptual/Req";
import App from "./App";

export default class B extends App
{
  handle(req : Req) : void
  {
    if(req.b !== 'chain')
      throw new Error('Incorrect b!')
    
    console.log('b handled success')
    super.handle(req)
  }
}
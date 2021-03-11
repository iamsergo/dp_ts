import Req from "../conceptual/Req";
import App from "./App";

export default class A extends App
{
  handle(req : Req) : void
  {
    if(req.a !== 0)
      throw new Error('Incorrect a!')
    
    console.log('a handled success')
    super.handle(req)
  }
}
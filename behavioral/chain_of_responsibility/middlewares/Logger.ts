import Req from "../conceptual/Req";
import App from "./App";

export default class Logger extends App
{
  handle(req : Req) : void
  {
    console.log('Req : ', req)
    super.handle(req)
  }
}
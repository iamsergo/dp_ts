import Req from "../conceptual/Req";

export default interface IHandler
{
  handle(req : Req) : void
}
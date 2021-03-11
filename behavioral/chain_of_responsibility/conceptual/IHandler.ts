import Req from './Req'

export default interface IHandler
{
  handle(request : Req) : void
}
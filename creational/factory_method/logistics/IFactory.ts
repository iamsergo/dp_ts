import ITransport from "./ITransport";

export default
interface IFactory
{
  createTransport() : ITransport
}
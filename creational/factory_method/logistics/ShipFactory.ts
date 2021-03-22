import Ship from './Ship';
import IFactory from './IFactory'
import ITransport from './ITransport';

export default
class ShipFactory
implements IFactory
{
  createTransport() : ITransport
  {
    return new Ship()
  }
}
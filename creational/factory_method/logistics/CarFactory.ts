import Car from './Car';
import IFactory from './IFactory'
import ITransport from './ITransport';

export default
class CarFactory
implements IFactory
{
  createTransport() : ITransport
  {
    return new Car()
  }
}
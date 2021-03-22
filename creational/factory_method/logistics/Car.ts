import ITransport from './ITransport'

export default
class Car
implements ITransport
{
  deliver()
  {
    console.log('Deliver by car...')
  }
}
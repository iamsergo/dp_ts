import ITransport from './ITransport'

export default
class Ship
implements ITransport
{
  deliver()
  {
    console.log('Deliver by ship...')
  }
}
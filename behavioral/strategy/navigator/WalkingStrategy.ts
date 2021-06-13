import IRouteStrategy from './IRouteStrategy'

export default
class WalkingStrategy
implements IRouteStrategy
{
  public buildRoute(): void
  {
    console.log('Build walking for road')
  }
}
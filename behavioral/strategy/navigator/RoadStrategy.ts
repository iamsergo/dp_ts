import IRouteStrategy from './IRouteStrategy'

export default
class RoadStrategy
implements IRouteStrategy
{
  public buildRoute(): void
  {
    console.log('Build route for road')
  }
}
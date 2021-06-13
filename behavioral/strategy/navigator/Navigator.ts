import IRouteStrategy from './IRouteStrategy'

export default
class NavigatorDevice
{
  private routeStrategy: IRouteStrategy

  public setStrategy(routeStrategy: IRouteStrategy): void
  {
    this.routeStrategy = routeStrategy
  }

  public buildRoute(): void
  {
    this.routeStrategy.buildRoute()
  }
}
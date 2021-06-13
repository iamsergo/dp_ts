import IObserver from "./IObserver"

export default
class UsdRate
{
  private rate: number
  private observers: IObserver[] = []

  public getValue(): number
  {
    return this.rate
  }

  public update(rate: number): void
  {
    this.rate = rate
    this.notifyObservers()
  }

  public subscribe(observer: IObserver): void
  {
    this.observers.push(observer)
  }

  public unsubscribe(observer: IObserver): void
  {
    this.observers = this.observers.filter(o => o === observer)
  }

  public notifyObservers(): void
  {
    for(const observer of this.observers)
    {
      observer.update()
    }
  }
}
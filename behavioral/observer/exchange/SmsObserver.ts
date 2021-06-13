import UsdRate from "./UsdRate";
import IObserver from './IObserver'

export default
class SmsObserver
implements IObserver
{
  constructor(private rate: UsdRate){}

  public update(): void
  {
    console.log(`[SMS]: 1USD = ${this.rate.getValue()}RUB`)
  }
}
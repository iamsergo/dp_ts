import UsdRate from "./UsdRate";
import IObserver from './IObserver'

export default
class EmailObserver
implements IObserver
{
  constructor(private rate: UsdRate){}

  public update(): void
  {
    console.log(`[Email]: 1USD = ${this.rate.getValue()}RUB`)
  }
}
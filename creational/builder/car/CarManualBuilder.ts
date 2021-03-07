import IBuilder from "./IBuilder";
import CarManual from './CarManual'

export default class CarBuilder implements IBuilder
{
  private carManual : CarManual

  reset()
  {
    this.carManual = new CarManual()
  }

  setSeats(seats : number)
  {
    this.carManual.seats = seats
  }

  setEngine(engine : string)
  {
    this.carManual.engine = engine
  }

  setTripComputer(tripComputer : string)
  {
    this.carManual.tripComputer = tripComputer
  }

  setGPS(gps : string)
  {
    this.carManual.gps = gps
  }

  getResult() : CarManual
  {
    return this.carManual
  }
}
import IBuilder from "./IBuilder";
import Car from './Car'

export default class CarBuilder implements IBuilder
{
  private car : Car

  reset()
  {
    this.car = new Car()
  }

  setSeats(seats : number)
  {
    this.car.seats = seats
  }

  setEngine(engine : string)
  {
    this.car.engine = engine
  }

  setTripComputer(tripComputer : string)
  {
    this.car.tripComputer = tripComputer
  }

  setGPS(gps : string)
  {
    this.car.gps = gps
  }

  getResult() : Car
  {
    return this.car
  }
}
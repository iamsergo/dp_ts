import IBuilder from './IBuilder'

export default class Director
{
  makeSportCar(b : IBuilder) : void
  {
    b.setSeats(2)
    b.setEngine('[sport engine]')
    b.setTripComputer('[super trip computer]')
  }

  makeSimpleCar(b : IBuilder) : void
  {
    b.setSeats(4)
    b.setEngine('[simple engine]')
    b.setGPS('[simple gps]')
  }
}
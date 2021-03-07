export default interface IBuilder
{
  reset() : void
  setSeats(s : number) : void
  setEngine(e : string) : void
  setTripComputer(tc : string) : void
  setGPS(g : string) : void
}
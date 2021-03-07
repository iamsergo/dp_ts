import Car from "./Car";
import CarBuilder from "./CarBuilder";
import CarManualBuilder from "./CarManualBuilder";
import Director from "./Director";

const d = new Director()
const cb = new CarBuilder()
const mb = new CarManualBuilder()

cb.reset()
d.makeSportCar(cb)
const sportCar : Car = cb.getResult()
console.log(sportCar)

cb.reset()
d.makeSimpleCar(cb)
const simpleCar : Car = cb.getResult()
console.log(simpleCar)

mb.reset()
d.makeSimpleCar(mb)
const simpleCarManual : Car = mb.getResult()
console.log(simpleCarManual)
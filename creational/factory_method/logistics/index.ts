import ITransport from "./ITransport";
import IFactory from "./IFactory";
import ShipFactory from "./ShipFactory";
import CarFactory from "./CarFactory";

// const f : IFactory = new CarFactory()
const f : IFactory = new ShipFactory()

const t : ITransport = f.createTransport()
t.deliver()
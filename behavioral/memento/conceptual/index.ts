import Caretaker from "./Caretaker"
import Component from "./Component"

const component = new Component()
const caretaker = new Caretaker(component)

component.log()

caretaker.action()
component.log()

caretaker.back()
component.log()
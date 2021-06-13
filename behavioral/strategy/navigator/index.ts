import NavigatorDevice from "./Navigator"
import RoadStrategy from './RoadStrategy'
import WalkingStrategy from './WalkingStrategy'

const navigator = new NavigatorDevice()

navigator.setStrategy(
  new RoadStrategy()
)
navigator.buildRoute()

navigator.setStrategy(
  new WalkingStrategy()
)
navigator.buildRoute()
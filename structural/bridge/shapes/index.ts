import IDrawer from './IDrawer'
import LinuxDrawer from './LinuxDrawer'
import WindowsDrawer from './WindowsDrawer'
import MacDrawer from './MacDrawer'
import Circle from './Circle'
import Rectangle from './Rectangle'


const wd = new WindowsDrawer()
const ld = new LinuxDrawer()
const md = new MacDrawer()

const r0 = new Rectangle(0,0, 1,1, wd)
const r1 = new Rectangle(0,0, 1,1, ld)
const r2 = new Rectangle(0,0, 1,1, md)

console.log('\n[Rectangle]')
r0.draw()
r1.draw()
r2.draw()

const c0 = new Circle(0,0, 5, ld)
const c1 = new Circle(0,0, 5, wd)
const c2 = new Circle(0,0, 5, md)

console.log('\n[Circle]')
c0.draw()
c1.draw()
c2.draw()
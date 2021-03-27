import IShape from './IShape'
import IDrawer from './IDrawer'

export default
class Rectangle
implements IShape
{
  constructor(
    private lx : number,
    private ly : number,
    private rx : number,
    private ry : number,
    private drawer : IDrawer
  ){}

  draw() : void
  {
    this.drawer.drawDot(this.lx,this.ly)
    this.drawer.drawDot(this.rx,this.ly)
    this.drawer.drawDot(this.rx,this.ry)
    this.drawer.drawDot(this.lx,this.ry)
  }
}
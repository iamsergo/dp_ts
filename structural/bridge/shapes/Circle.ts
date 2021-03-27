import IShape from './IShape'
import IDrawer from './IDrawer'

export default
class Circle
implements IShape
{
  constructor(
    private cx : number,
    private cy : number,
    private r : number,
    private drawer : IDrawer
  ){}

  draw() : void
  {
    this.drawer.drawDot(this.cx, this.cy + this.r)
    this.drawer.drawDot(this.cx + this.r, this.cy)
    this.drawer.drawDot(this.cx, this.cy - this.r)
    this.drawer.drawDot(this.cx - this.r, this.cy)
  }
}
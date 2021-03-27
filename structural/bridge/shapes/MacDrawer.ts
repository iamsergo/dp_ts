import IDrawer from './IDrawer'

export default
class MacDrawer
implements IDrawer
{
  drawDot(x : number, y : number) : void
  {
    console.log(`  Mac dot (${x};${y})`)
  }
}
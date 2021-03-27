import IDrawer from './IDrawer'

export default
class WindowsDrawer
implements IDrawer
{
  drawDot(x : number, y : number) : void
  {
    console.log(`  Windows dot (${x};${y})`)
  }
}
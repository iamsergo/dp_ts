import IDrawer from './IDrawer'

export default
class LinuxDrawer
implements IDrawer
{
  drawDot(x : number, y : number) : void
  {
    console.log(`  Linux dot (${x};${y})`)
  }
}
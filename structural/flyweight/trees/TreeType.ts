import Drawer from './Drawer'

export default
class TreeType
{
  constructor(private type : string)
  {
    console.log(`Create type : ${this.type}`)
  }

  draw(drawer : Drawer, x : number, y : number) : void
  {
    drawer.drawTree(this.type, x,y)
  }
}
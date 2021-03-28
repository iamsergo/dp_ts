import Drawer from './Drawer'
import TreeType from './TreeType'

export default
class Tree
{
  constructor(
    private x : number,
    private y : number,
    private treeType : TreeType
  ){}

  draw(drawer : Drawer) : void
  {
    this.treeType.draw(drawer, this.x,this.y)
  }
}
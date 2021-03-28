import TreeType from './TreeType'
import Dub from './Dub'
import Bereza from './Bereza'
import Yel from './Yel'

export default class TreeFactory
{
  private treeTypes : Map<string, TreeType> = new Map<string, TreeType>()

  getTreeType(type : string)
  {
    let treeType = this.treeTypes.get(type)

    if(!treeType)
    {
      switch(type)
      {
        case 'Dub':
          treeType = new Dub()
          break
        case 'Bereza':
          treeType = new Bereza()
          break
        case 'Yel':
          treeType = new Yel()
          break
      }
      
      this.treeTypes.set(type, treeType)
    }

    return treeType
  }
}
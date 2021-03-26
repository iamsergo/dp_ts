import Json from './Json'
import Xml from './Xml'

export default
class XmlToJson
extends Json
{
  private adaptee : Xml

  constructor(xml : Xml)
  {
    super()
    this.adaptee = xml
  }

  stringify() : string
  {
    return `{ "id" : "${this.adaptee.id}", "data" : "${this.adaptee.data}" }`
  }
}
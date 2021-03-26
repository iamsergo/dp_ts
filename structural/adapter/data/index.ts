import Xml from './Xml'
import Json from './Json'
import XmlToJson from './XmlToJson'

const xml = new Xml('xml', '0')
const json = new Json('json', 'null')
const jsonFromXml = new XmlToJson(xml)

const client = (json : Json) => console.log(json.stringify())

client(json)
client(jsonFromXml)
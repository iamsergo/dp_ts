export default class URL
{
  origin : string
  searchParams : {[key : string] : string} = {}
  hash : string

  constructor(origin : string)
  {
    this.origin = origin
  }

  toString() : string
  {
    const sp = Object.entries(this.searchParams)
      .reduce((str,entrie,i,entries) => {
        const [key,value] = entrie

        return str += `${key}=${value}` + (i !== entries.length - 1 ? '&' : '')
      }, '')
    return `${this.origin}?${sp}#${this.hash}`
  }
}
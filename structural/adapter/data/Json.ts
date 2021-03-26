export default class Json
{
  public id : string
  public data : string

  constructor()
  constructor(id : string, data : string)
  constructor(...args : any[])
  {
    if(args.length === 2)
    {
      const [id, data] = args

      this.id = id
      this.data = data
    }
  }

  stringify() : string
  {
    return `{ "id" : "${this.id}", "data" : "${this.data}" }`
  }
}
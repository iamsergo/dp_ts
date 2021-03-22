export default class DB
{
  private static instance : DB | null = null
  private store : number[] = []

  private constructor(){}

  static getInstance() : DB
  {
    if(DB.instance === null)
    {
      DB.instance = new DB()
    }

    return DB.instance
  }

  add(value : number)
  {
    this.store.push(value)
  }

  get() : number[]
  {
    return this.store
  }
}
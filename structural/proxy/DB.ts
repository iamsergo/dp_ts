import IDB from './IDB'
import User from './User'

export default
class DB
implements IDB
{
  private data : User[] = [
    {id : 0, name : 'Petr', age : 12},
    {id : 1, name : 'Petr', age : 12},
    {id : 2, name : 'Petr', age : 12},
  ]

  constructor(table : string)
  {
    console.log('Connect to table', table)
  }

  query(q : string) : User
  {
    console.log('Query to db for', q)
    return this.data[0]
  }
}
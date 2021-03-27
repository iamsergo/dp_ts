import IDB from './IDB'
import User from './User'

export default
class DBProxy
implements IDB
{
  private queries : {query : string, result : User}[] = []
  private db : IDB

  constructor(db : IDB)
  {
    this.db = db
  }

  query(q : string) : User
  {
    const cachedQuery = this.queries.find(cq => cq.query === q)

    if(cachedQuery)
    {
      return cachedQuery.result
    }

    const user = this.db.query(q)

    this.queries.push({query : q, result : user})

    return user
  }
}
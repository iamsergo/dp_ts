import User from './User'

export default interface IDB
{
  query(q : string) : User
}
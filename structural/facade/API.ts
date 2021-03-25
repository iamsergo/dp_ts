type Todo = {
  userId : number
  id : number
  title : string
  completed : boolean
}

export default
class API
{
  async getTodo(url)
  {
    const res = await fetch(url)
    const data : Promise<Todo> = await res.json()

    return data
  }
}
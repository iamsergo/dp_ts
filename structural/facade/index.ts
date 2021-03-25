import API from './API'

const main = async () => {
  const api = new API()
  
  const todo = await api.getTodo('https://jsonplaceholder.typicode.com/todos/1')
  console.log(todo)
}

main()
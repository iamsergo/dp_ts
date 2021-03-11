import App from './App'
import Logger from './Logger'
import A from './A'
import B from './B'

const app = new App()
const l = new Logger()
const a = new A()
const b = new B()

app
  .use(l)
  .use(a)
  .use(b)

app.handle({a : 0, b : 'chain'})
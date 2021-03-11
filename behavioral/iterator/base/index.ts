import Collection from "./Collection";

const c = new Collection<number>(0,1,2,3,4,5,6,7,8)

const pi = c.getPlainIterator()
console.log('PLAIN iterator : ')
while(!pi.isDone())
{
  const item = pi.next()
  console.log('ITEM : ', item)
}

console.log()

const step = 1
const si = c.getStepIterator(step)
console.log(`STEP[${step}] iterator : `)
while(!si.isDone())
{
  const item = si.next()
  console.log('ITEM : ', item)
}
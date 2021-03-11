import AHandler from './AHandler'
import BHandler from './BHandler'

const a = new AHandler()
const b = new BHandler()

// a -> b -> null
a.setNext(b)

try
{
  a.handle({ a : 17, b : '' })
}
catch(err)
{
  console.log('---Error----')
  console.log('| ',err.message,' |')
  console.log('------------')
}
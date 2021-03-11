import AHandler from './AHandler'
import BHandler from './BHandler'

const a = new AHandler()
const b = new BHandler()

// a -> b -> null
a.setNext(b)

a.handle({ a : 1, b : '' })
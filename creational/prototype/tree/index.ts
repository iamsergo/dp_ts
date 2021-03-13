import Tree from './Tree'
import Leaf from './Leaf'

const tree =
  new Tree(
    1,
    new Leaf(2),
    new Tree(
      3,
      new Leaf(4)
    )
  )

console.log('ORIGINAL : ', tree.getWeight())
console.log('CLONE : ', tree.clone().getWeight())
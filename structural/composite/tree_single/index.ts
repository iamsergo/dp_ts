import Leaf from "./Leaf";
import Tree from "./Tree";

const tree =
  new Tree(
    0,
    new Leaf(1),
    new Leaf(2),
    new Tree(
      3,
      new Leaf(4),
      new Leaf(5)
    )
  )

const weight = tree.getWeight()
console.log(weight)
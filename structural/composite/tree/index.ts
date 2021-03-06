import Leaf from "./Leaf";
import Tree from "./Tree";

const l0 = new Leaf(1)
const l1 = new Leaf(5)
const l2 = new Leaf(6)
const l3 = new Leaf(0)
const l4 = new Leaf(9)

const t0 = new Tree(1)
const t1 = new Tree(2)

t0.addLeaf(l0)
t0.addLeaf(l1)

t1.addLeaf(l2)

const tree = new Tree(0)
tree.addLeaf(l3)
tree.addLeaf(l4)
tree.addLeaf(t0)
tree.addLeaf(t1)

const weight = t0.getWeight()
console.log(weight)
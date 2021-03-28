import Drawer from './Drawer'
import Tree from './Tree'
import TreeFactory from './TreeFactory'


const drawer = new Drawer()
const tf = new TreeFactory()

const trees = [
  new Tree(0,0, tf.getTreeType('Dub')),
  new Tree(0,2, tf.getTreeType('Bereza')),
  new Tree(0,3, tf.getTreeType('Dub')),
  new Tree(0,4, tf.getTreeType('Bereza')),
  new Tree(5,0, tf.getTreeType('Dub')),
  new Tree(6,0, tf.getTreeType('Dub')),
  new Tree(7,0, tf.getTreeType('Yel')),
  new Tree(8,0, tf.getTreeType('Yel')),
]

trees.forEach(tree => tree.draw(drawer))
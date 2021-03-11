import Leaf from "./Leaf";
import Tree from "./Tree";

const tree : Tree<number> =
  new Tree(
    0,
    new Tree(
      1,
      new Leaf(2),
      new Leaf(3)
    ),
    new Tree(
      4,
      new Tree(
        5,
        new Tree(
          6,
          new Leaf(9),
          new Leaf(10)
        ),
        new Leaf(7),
        new Leaf(8)
      )
    )
  )

//      0
//     /\
//    1  4
//   /\   \
//  2 3    5
//      / | \
//     6 7  8
//    /\
//   9  10

const bfsi = tree.getBFSIterator()
console.log('BFS : ')
while(!bfsi.isDone())
{
  const item = bfsi.next()
  console.log(item)
}

console.log()

const dfsi = tree.getDFSIterator()
console.log('DFS : ')
while(!dfsi.isDone())
{
  const item = dfsi.next()
  console.log(item)
}
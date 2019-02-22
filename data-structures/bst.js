/*

         10
   5           19
 1   8       14   29


*/

/*const bst = {
    item: {
        left: {

        },
        right: {

        }
    }
}
*/

/*
  1
    5
       8
          10
             14
                 19
                     19
*/
const arr = [1,5,8,10,14,19,19]

function Node (data) {
  this.data = data
  this.left = null
  this.right = null
}

class Tree {
  constructor() {
    this.root = null
  }

  addNode(value) {
    const node = new Node(value)
    if (!this.root) {
        this.root = node
    } else {
        this.insertNode(this.root, node)
    }
  }

  insertNode(root, node) {
    if (node.data < root.data) {
        if (!root.left) {
            root.left = node
        } else {
            this.insertNode(root.left, node)
        }
    } else {
        if (!root.right) {
            root.right = node
        } else {
            this.insertNode(root.right, node)
        }
    }
  }

  remove(data) {
    this.root = this.removeNode(this.root, data)
  }

  removeNode(node, data) {
    if (!node) {
      return null
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data)
      return node
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data)
      return node
    } else {
      if (!node.left && !node.right) {
        node = null
        return node
      }

      if (!node.left) {
        node = node.right
        return node
      }

      if (!node.right) {
        node = node.left
        return node
      }

      let min = this.findMinNode(node.right)
      node.data = min.data
      node.right = this.removeNode(node.right, min.data)
      return node
    }
  }

  findMinNode(node) {
    let min = node
    while (min.left) {
      min = node.left
    }
    return min
  }

  findMaxNode(node) {
    let max = node
    while (max.right) {
      max = node.right
    }
    return max
  }

  getMinNode() {
    let node = this.root
    while (node.left) {
      node = node.left
    }
    return node
  }

  getMaxNode() {
    let node = this.root
    while (node.right) {
      node = node.right
    }
    return node
  }
}

const bst = new Tree()

arr.forEach(item => bst.addNode(item))

console.log(bst.remove(5))

console.log(bst)


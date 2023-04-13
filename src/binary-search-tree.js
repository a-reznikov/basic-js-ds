const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.rootTree = null;
  }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if (!node) {
        // console.log(node, 'Нету, создаем со значением', data);
        return new Node(data);
      } else if (node.data === data) {
        // console.log(node, 'Уже есть со значением', data);
        return node;
      }

      if (data < node.data) {
        // console.log(data, 'Меньше чем значение у ', node);
        node.left = addNode(node.left, data);
      } else {
        // console.log(data, 'Больше значение у ', node);
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchNode(this.rootTree, data);

    function searchNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    } 
  }

  find(data) {

    return searchNode(this.rootTree, data);

    function searchNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
    } 
  }

  remove(data) {
    this.rootTree = removeNode(this.rootTree, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          node = node.right;
          return node;
        } else if (!node.left){
          node = node.left;
          return node;
        } else {
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.rigth = removeNode(node.right, minRight.data);
          return node;
        }
      }
    } 
    
  }

  min() {
    if (!this.rootTree) {
      return null;
    }

    let minNode = this.rootTree;
    while (minNode.left) {
      minNode = minNode.left;
    }
    return minNode.data;

  }

  max() {
    if (!this.rootTree) {
      return null;
    }

    let maxNode = this.rootTree;
    while (maxNode.right) {
      maxNode = maxNode.right;
    }
    return maxNode.data;

  }
}

// function rootShow() {
//   console.log(bst.root());
// }

// function addItems() {
//   console.log('Add 13, 15, 9, 20, 18, 32, 25');

//   bst.add(13);
//   bst.add(15);
//   bst.add(9);
//   bst.add(20);
//   bst.add(18);
//   bst.add(32);
//   bst.add(25);

//   //    13
//   //   /  \
//   //  9    15
//   //         \
//   //         20
//   //        /  \
//   //      18    32
//   //           /
//   //         25
// }

// const bst = new BinarySearchTree();

// addItems();

module.exports = {
  BinarySearchTree
};
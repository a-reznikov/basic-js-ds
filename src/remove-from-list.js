const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
}

function removeKFromList(node, k) {  
  // console.log('-------CURRENT', node, 'CURRENT-------');
  let current = node;
  let length = coutnLength(node);
  // console.log(length);
  // console.log(current);
  let prev = null;
  let index = 0;

  while (current) {
    // console.log(node.value);
    if (current.value === k && index === 0) {
      node = current.next;
      current = node;
      index ++;
    }
    else if (current.value === k && current.next === null) {
      // console.log('Find but null');
      prev.next = null;
      index ++;
    } else if (current.value === k) {
      // console.log('FIND = ',current);
      prev.next = current.next;
      index ++;
    } else if (prev != null && prev.value === k){
      index --;
    } else {
      index ++;
    }
    prev = current;
    current = current.next;
  }
  // console.log('-------K', k, 'K-------');
  // console.log('index', index);
  // console.log('length', length);
  // console.log('!!!!!!!!!!!!\n', node, '\n!!!!!!!!!!!!');
  if (index !== length) {
    removeKFromList(node, k);
  }
  // print(node);
  return node;
}

function print(node) {
  let current = node;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function coutnLength(node) {
  let current = node;
  let len = 0;
  while (current) {
    len ++;
    current = current.next;
  }
  return len;
}




// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 3,
//         next: {
//           value: 5,
//           next: {
//             value: 3,
//             next: null
//           }
//         }
//       }
//     }
//   }
// };

// removeKFromList(list, 3);

module.exports = {
  removeKFromList
};

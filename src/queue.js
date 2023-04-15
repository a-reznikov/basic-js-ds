const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */


class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    console.log('this.head', this.head);
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (this.head) {
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    console.log('this.tail', this.tail);
    this.length ++;
  }

  dequeue() {
    let current = this.head;

    this.head = this.head.next;
    this.length--;
    console.log('current.value', current.value);
    return current.value;
    
  }
}

module.exports = {
  Queue
};

'use strict';

class Stack {
  constructor() {
    this.items = [];
  }

  push(value) {
    this.items.push(value);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty. Cannot pop from an empty stack.');
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty. Cannot peek an empty stack.');
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack(); // First stack for enqueue operation
    this.stack2 = new Stack(); // Second stack for dequeue operation
  }

  enqueue(value) {

    while (!this.stack1.isEmpty()) {
      this.stack2.push(this.stack1.pop());
    }

    this.stack1.push(value);


    while (!this.stack2.isEmpty()) {
      this.stack1.push(this.stack2.pop());
    }
  }

  dequeue() {
    if (this.stack1.isEmpty()) {
      throw new Error('PseudoQueue is empty. Cannot dequeue from an empty queue.');
    }
    return this.stack1.pop();
  }
}

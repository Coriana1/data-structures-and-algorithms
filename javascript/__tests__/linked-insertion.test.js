'use strict';

const LinkedList = require('../LinkedList');

// Test append
const testAppend = () => {
  const myLinkedList = new LinkedList();
  myLinkedList.append(1);
  myLinkedList.append(3);
  myLinkedList.append(2);
  myLinkedList.append(5);

  console.log("After append:");
  myLinkedList.display();
};

// Test insertBefore
const testInsertBefore = () => {
  const myLinkedList = new LinkedList();
  myLinkedList.append(1);
  myLinkedList.append(3);
  myLinkedList.append(2);

  myLinkedList.insertBefore(3, 4);

  console.log("After insertBefore:");
  myLinkedList.display();
};

// Test insertAfter
const testInsertAfter = () => {
  const myLinkedList = new LinkedList();
  myLinkedList.append(1);
  myLinkedList.append(3);
  myLinkedList.append(2);

  myLinkedList.insertAfter(1, 0);

  console.log("After insertAfter:");
  myLinkedList.display();
};

// Run
testAppend();
testInsertBefore();
testInsertAfter();

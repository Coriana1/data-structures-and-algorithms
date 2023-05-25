'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }
}

function zipLists(list1, list2) {
  const newList = new LinkedList();
  let current1 = list1.head;
  let current2 = list2.head;

  while (current1 || current2) {
    if (current1) {
      newList.insert(current1.value);
      current1 = current1.next;
    }
    if (current2) {
      newList.insert(current2.value);
      current2 = current2.next;
    }
  }

  return newList;
}

// Test Cases
const list1 = new LinkedList();
list1.insert(1);
list1.insert(3);
list1.insert(2);

const list2 = new LinkedList();
list2.insert(5);
list2.insert(9);
list2.insert(4);

const zippedList = zipLists(list1, list2);

// Expected: {1} -> {5} -> {3} -> {9} -> {2} -> {4} -> null
let current = zippedList.head;
while (current) {
  console.log(current.value);
  current = current.next;
}

// Additional Test Case
const list3 = new LinkedList();
list3.insert(1);
list3.insert(3);

const list4 = new LinkedList();
list4.insert(5);
list4.insert(9);
list4.insert(4);

const zippedList2 = zipLists(list3, list4);

// Expected: {1} -> {5} -> {3} -> {9} -> {4} -> null
let current2 = zippedList2.head;
while (current2) {
  console.log(current2.value);
  current2 = current2.next;
}

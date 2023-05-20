'use strict';

class Node {
  constructor(value){
    this.value = value;
    this.next = null;

  }
}
class LinkedList {
  constructor(){
    this.head = null;
  }
  // inserts new code w/ given value at beginning of link
  insert(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }
  //appends new code w/ given value at end of list
  append(value){
    let node = new Node(value);
    if (!this.head){
      this.head = node;
      return;
    }

    let current = this.head;
    while(current.next){
      current = current.next;
    }
    current.next = node;
  }

  //checks if node w/ given value exist
  includes(value){
    let isInNode = false;
    let current = this.head;
    while (current !== null){
      if (current.value === value){
        isInNode = true;
      }
      current = current.next;
    }
    return isInNode;
  }
  // converts list to a string - appends each node's value to string with and arrow 2 represent conndection
  toString() {
    let linkedListString = '';
    let current = this.head;

    while (current) {
      linkedListString += `{${current.value}} -> `;
      current = current.next;
    }

    linkedListString += 'NULL';

    return linkedListString;
  }

  //logs values of node to console (starts at head & moves to next node until end of list)
  traversal(){
    let current = this.head;

    while (current){
      console.log('current>>',current.value);
      current = current.next;
      console.log('next>>',current.next);
    }
  }
}

module.exports = LinkedList;

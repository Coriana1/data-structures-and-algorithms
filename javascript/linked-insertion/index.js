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

  append(newValue) {
    const newNode = new Node(newValue);

    if (!this.head) {
      this.head = newNode;
      return;
    } else {
      let current = this.head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  insertBefore(targetValue, newValue) {
    if (!this.head) throw new Error("List is empty");

    let current = this.head;

    if (current.value === targetValue) {
      const newNode = new Node(newValue);
      newNode.next = this.head;
      this.head = newNode;
    } else {
      while (current.next) {
        if (current.next.value === targetValue) {
          let placeHolder = current.next;
          let newNode = new Node(newValue);
          newNode.next = placeHolder;
          current.next = newNode;
          return;
        }
        current = current.next;
      }
      throw new Error("Target value is not found");
    }
  }

  insertAfter(targetValue, newValue) {
    let current = this.head;

    while (current) {
      if (current.value === targetValue) {
        let placeholder = current.next;
        let newNode = new Node(newValue);
        current.next = newNode;
        newNode.next = placeholder;
        return;
      }
      current = current.next;
    }
    throw new Error("Value not found");
  }

  display() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

const myLinkedList = new LinkedList();
myLinkedList.append(1);
myLinkedList.append(3);
myLinkedList.append(2);

console.log("Initial List:");
myLinkedList.display();

myLinkedList.append(5);
console.log("After append:");
myLinkedList.display();

myLinkedList.insertBefore(3, 4);
console.log("After insertBefore:");
myLinkedList.display();

myLinkedList.insertAfter(1, 0);
console.log("After insertAfter:");
myLinkedList.display();

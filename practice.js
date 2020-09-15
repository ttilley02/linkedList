class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }
  whereAmI() {
    return this.head.value;
  }
  insertAfter(item, key) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let afterNode = this.head;
    while (afterNode.next !== null && afterNode.value !== key) {
      afterNode = afterNode.next;
    }
    if (afterNode == null) {
      throw new Error(`no ${key} found`);
    }
    afterNode.next = new _Node(item, afterNode.next);
  }

  insertAt(item, index) {
    if (index < 0) return "Please choose a positive index";

    if (!this.head) return this.insertFirst(item);

    if (this.head.value === index - 1) return this.insertFirst(item);

    let counter = 0;
    let currentNode = this.head;
    let previousNode = this.head;

    while (counter !== index - 1 && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
    }
    if (currentNode === null) {
      return "Index does not exist";
    } else {
      let newNode = new _Node(item, previousNode.next);
      previousNode.next = newNode;
    }
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      counter++;
     
    }
    return counter;
    
  }
  insertBefore(item, key) {
    if (!this.head) return this.insertFirst(item);

    if (this.head.value === key) return this.insertFirst(item);

    let currentNode = this.head;
    let previousNode = this.head;

    while (currentNode.value !== key && currentNode !== null) {
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return "Key not found";
    } else {
      let newNode = new _Node(item, previousNode.next);
      previousNode.next = newNode;
    }
  }
  find(item) {
    // Start at the head
    let currNode = this.head;
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // Check for the item
    while (currNode.value !== item) {
      /* Return null if it's the end of the list 
               and the item is not on the list */
      if (currNode.next === null) {
        return null;
      } else {
        // Otherwise, keep looking
        currNode = currNode.next;
      }
    }
    // Found it
    return currNode;
  }

  removeFirst() {
    this.head = this.head.next;
  }
  remove(item) {
    // If the list is empty
    if (!this.head) {
      return null;
    }
    // If the node to be removed is head, make the next node head
    if (this.head.value === item) {
      this.removeFirst();
      return;
    }
    // Start at the head
    let currNode = this.head;
    // Keep track of previous
    let previousNode = this.head;

    while (currNode !== null && currNode.value !== item) {
      // Save the previous node
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log("Item not found");
      return;
    }
    previousNode.next = currNode.next;
  }
}

module.exports = LinkedList;

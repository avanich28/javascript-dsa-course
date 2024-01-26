"use strict";

/*
LL: Reverse Between ( ** Interview Question)

Implement a member function called reverseBetween(m, n) that reverses the nodes between indexes (using 0-based indexing)  m and n (inclusive) in the linked list.

Note: this linked list class does not have a tail which will make this method easier to implement.


Output:

    The function should reverse the nodes between the indexes m and n in the linked list. The reversal should be done in-place.


Constraints:

    You are not allowed to use any additional data structures (such as arrays) or modify the existing data structure.

    You can only traverse the linked list once.



Example 1:

Suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5


After calling the reverseBetween(1, 3) function:

    list.reverseBetween(1, 3);

The linked list should now have the following values:
1 -> 4 -> 3 -> 2 -> 5



Example 2:

Now suppose you have a LinkedList object, list, with the following values:
1 -> 2 -> 3 -> 4 -> 5 -> 6


After calling the reverseBetween(3, 5) function:

    list.reverseBetween(3, 5);

The linked list should now have the following values:
1 -> 2 -> 3 -> 6 -> 5 -> 4
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    const newNode = new Node(value);
    this.head = newNode;
    this.length = 1;
  }

  printList() {
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
  }

  getHead() {
    if (this.head === null) {
      console.log("Head: null");
    } else {
      console.log("Head: " + this.head.value);
    }
  }

  getLength() {
    console.log("Length: " + this.length);
  }

  makeEmpty() {
    this.head = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // WRITE THE REVERSEBETWEEN METHOD HERE //
  reverseBetween(m, n) {
    if (this.head === null) return;

    const dummy = new Node(0);
    dummy.next = this.head;
    let prev = dummy;

    for (let i = 0; i < m; i++) {
      prev = prev.next;
    }

    let cur = prev.next;
    for (let i = 0; i < n - m; i++) {
      const temp = cur.next;
      cur.next = temp.next;
      temp.next = prev.next;
      prev.next = temp;
    }
    this.head = dummy.next;
  }
}

let myLinkedList = new LinkedList(1);
myLinkedList.push(2);
myLinkedList.push(3);
myLinkedList.push(4);
myLinkedList.push(5);

console.log("Original list:");
myLinkedList.printList();

const m = 2;
const n = 4;
myLinkedList.reverseBetween(m, n);

console.log(`\nList after reversing between indexes of ${m} and ${n}:`);
myLinkedList.printList();

/*
  EXPECTED OUTPUT:
  ----------------
  Original list:
  1
  2
  3
  4
  5
  List after reversing between indexes of 2 and 4:
  1
  2
  5
  4
  3
*/

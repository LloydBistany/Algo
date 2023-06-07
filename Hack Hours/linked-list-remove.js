/*
Write a function to delete the first instance of a node in a singly linked list.
The function should return the deleted node, or undefined if the value was not found.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'c' -> 'b' -> 'd')
 
And given a value, 'b', the linked list after calling your function should look like:

('a' -> 'c' -> 'b' -> 'd')

And the evaluated result would be the removed node with the value of 'b'.

How might you remove a linked list value without adding extra properties to the constructor functions?

*/

// NOTE: needs to be es5 function definition
function LinkedList() {
  this.head = null;
}

// NOTE: needs to be es5 function definition
function Node(val) {
  this.val = val;
  this.next = null;
}

const test = new LinkedList();
const first = new Node('a');
const second = new Node('b');
const third = new Node('c');
const fourth = new Node('b');
const fifth = new Node('d');

test.head = first;
first.next = second;
second.next = third;
third.next = fourth;
fourth.next = fifth;

function linkedListRemove(ll, value) {
  let nodeToRemove;
  let current = ll.head;
  //if the head is the value
  if (ll.head.val === value) {
    nodeToRemove = ll.head;
    ll.head = ll.head.next;
    nodeToRemove.next = null;
    return nodeToRemove;
  }
  //if the value is not the head
  else {
    while (current) {
      if (current.next.val === value) {
        nodeToRemove = current.next;
        current.next = current.next.next;
        nodeToRemove.next = null;
        return nodeToRemove;
      }
      current = current.next;
    }
    return undefined;
  }
}

/*
Extension: 
* Write a function to delete the first instance of a node in a singly linked list with a space complexity of O(1). 
* Write a function to delete the all instances of a node in a singly linked list.

Example: 
Given a linked list:
 
('a' -> 'b' -> 'd' -> 'c' -> 'd')
 
 And given a value, 'd', the evaluated result of calling your function should be:

 ('a' -> 'b' -> 'c')

*/
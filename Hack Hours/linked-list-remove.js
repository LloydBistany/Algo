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

const linkedListRemoveMultiple = (ll, val) => {
  // handling the case where list's head is a match
  while (ll.head.val === val) {
    const deletedHead = ll.head;
    ll.head = ll.head.next;
    deletedHead.next = null;
  }
  // iterate thru list, removing any matches
  let currentNode = ll.head,
    nextNode = ll.head.next;

  while (nextNode) {
    // found a match
    if (nextNode.val === val) {
      currentNode.next = nextNode.next;
      nextNode.next = null;
    }
    // update vars to continue iterating
    // currentNode only needs updating if nextNode was NOT a match
    else currentNode = currentNode.next;
    nextNode = currentNode.next;
  }
  return ll;
};
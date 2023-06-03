function Node(val)  {
  this.value = val;
  this.next = null;
}

const ll = new Node('A');
ll.next = new Node('B');
ll.next.next = new Node('C');
ll.next.next.next = new Node('D');
ll.next.next.next.next = new Node('E');
ll.next.next.next.next.next = new Node('F');

// Iterative 
const linkedListLength = (head) => {
  let curr = head;
  let count = 0;

  while (curr)  {
    count += 1;
    curr = curr.next;
  }

  return count
}

console.log(linkedListLength(ll)) // 6

// Recursive
const linkedListLengthRecursive = (head, count = 0) => {
  if (!head) return count;
  return linkedListLengthRecursive(head.next, ++count);
}

console.log(linkedListLengthRecursive(ll)) // 6
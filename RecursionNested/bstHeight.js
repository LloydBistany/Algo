function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.add = function (value) {
  if (value > this.value) {
    this.right === null ? this.right = new BinarySearchTree(value) : this.right.add(value);
  }
  if (value < this.value) {
    this.left === null ? this.left = new BinarySearchTree(value) : this.left.add(value);
  }
}

const tree = new BinarySearchTree(10);
tree.add(5);
tree.add(12);
tree.add(2);
tree.add(7);
tree.add(3);
tree.add(11);
tree.add(1);
tree.add(15);

// console.log(tree);

const bstHeight = (root) => {
  if (!root) return -1;
  return 1 + Math.max(bstHeight(root.left), bstHeight(root.right));
}
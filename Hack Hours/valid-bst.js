/* 
  Given a node representing the root of a binary tree, write a function to check if it is a valid binary *search* tree. 
  
  A binary tree is a valid binary search tree if it satisfies the following constraints:
    - For any given node, the value of ALL of the child nodes in its left branches must be less than its value.
    - For any given node, the value of ALL of the child nodes in its right branches must be greater than its value.
    - The tree contains no duplicate values.

  For example, this would be a valid BST:

         4
       /   \ 
     2      5
   /   \
  1     3

  whereas this would not be a valid BST:

         3
       /   \
     2      5
   /   \
  1    *4*

  because the node with value 4 on the left-hand side of the tree, but it's value is greater than the root node value 3.
  For this to be considered a valid BST the tree would need to look like this:
  
         3
       /   \
     2      5
   /      /
  1     *4*

*/


function BinaryTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}



//Brute Force Approach
const validBST = tree => {
  const array = [];

  function treeToArray(tree) {
    if (!tree) return;

    treeToArray(tree.left);
    array.push(tree.value);
    treeToArray(tree.right);
  }

  treeToArray(tree);

  for (let j = 0; j < array.length; j++) {
    if (array[j] >= array[j + 1]) {
      return false;
    }
  }

  return true;
}


//RECURSIVE

const validBST = (tree, left = null, right = null) => {
  //base case for bottom of a branch or empty tree
  if (tree === null) return true;
  //check for invalid BST rule on the left branch
  if (left !== null && left.value > tree.value) return false;
  //check for invalid BST rule on the right branch
  if (right !== null && right.value < tree.value) return false;
  //return the results(booleans) of recursive calls to the left and right branch
  return (validBST(tree.left, left, tree) && validBST(tree.right, tree, right))
}

function validBST(tree, min = -Infinity, max = Infinity) {
  if (!tree) return true;
  if (tree.value < min || tree.value > max) return false;
  return (
    validBST(tree.left, min, tree.value) &&
    validBST(tree.right, tree.value, max)
  )
}
# Challenge Title
Create classes and methods to implement a Binary Tree and Binary Search Tree in Node.js

## Whiteboard Process
![lab01whiteboard](whiteboard15.png)

## Approach & Efficiency
Time: O(n) -  "n" is the number of nodes in the tree
Space: O(n) -  the call stack can grow up to the height of the tree

## Solution
Algorithm:
1. Node Class:
  Create a Node class with properties for the value, left child node, and right child node.

2. Create a BinaryTree class.
  Implement methods for pre-order, in-order, and post-order traversals:
    * preOrderTraversal(node): Visit the current node, recursively call preOrderTraversal on the left subtree, then recursively call preOrderTraversal on the right subtree.
    * inOrderTraversal(node): Recursively call inOrderTraversal on the left subtree, visit the current node, then recursively call inOrderTraversal on the right subtree.
    * postOrderTraversal(node): Recursively call postOrderTraversal on the left subtree, then recursively call postOrderTraversal on the right subtree, and finally visit the current node.
  Each traversal method should return an array of values in the appropriate order.

3. Binary Search Tree Class:
  Create a BinarySearchTree class that extends the BinaryTree class.
  Implement additional methods:
    * add(value): Add a new node with the given value in the correct location in the binary search tree. If the value is less than the current node, go to the left subtree. If the value is greater than the current node, go to the right subtree. Repeat this process until finding the appropriate spot for insertion.
    * contains(value): Check if a node with the given value exists in the binary search tree. If the value is less than the current node, go to the left subtree. If the value is greater than the current node, go to the right subtree. Repeat this process until finding the value or reaching a leaf node.

## Collab
Ryan Eastman who collabbed with Reese over the weekend and he gave me a walk down of what he did and why, I asked a few questions along the way for clarity

- [Binary Tree Ref](https://www.javatpoint.com/binary-search-tree)


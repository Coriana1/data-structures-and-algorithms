'use strict';

class BinaryTree {

  constructor() {

    this.root = null;
  }

  findMaxValue() {

    if (!this.root) {

      return null;
    }

    let maxValue = -Infinity;

    // Helper function
    function traverse(node) {
      if (!node) {
        return;
      }

      if (node.value > maxValue) {
        maxValue = node.value;
      }

      traverse(node.left);
      traverse(node.right);
    }

    traverse(this.root);

    return maxValue;
  }
}

module.exports = BinaryTree;


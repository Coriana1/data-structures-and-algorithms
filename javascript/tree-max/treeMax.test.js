'use strict';

const BinaryTree = require('./tree-Max.js');

// Test the findMaxValue method

describe('BinaryTree', () => {

  test('should return null for an empty tree', () => {

    const tree = new BinaryTree();

    expect(tree.findMaxValue()).toBeNull();

  });


  test('should return the correct maximum value for a non-empty tree', () => {

    const tree = new BinaryTree();



    // Build the tree with nodes and values



    tree.root = {

      value: 10,

      left: {

        value: 5,

        left: {

          value: 2,

          left: null,

          right: null,

        },

        right: {

          value: 8,

          left: null,

          right: null,

        },

      },

      right: {

        value: 15,

        left: null,

        right: {

          value: 20,

          left: null,

          right: null,

        },

      },

    };


    expect(tree.findMaxValue()).toBe(20);

  });

});


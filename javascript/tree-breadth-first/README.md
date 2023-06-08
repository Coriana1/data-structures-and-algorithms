## Challenge: List Insertions
Breadth-first Traversal.
## Approach & Efficiency
Big O
Time: O(n)
Space: O(n)

## Solution
### Append :

1. Define a function called breadthFirst that takes a tree as an argument.
2. Initialize an empty queue to store the tree nodes.
3. Initialize an empty array to store the values in the order they are encountered.
4. Enqueue the root node of the tree into the queue.
5. While the queue is not empty, do the following:
    * Dequeue a node from the front of the queue.
    * Add the value of the dequeued node to the result array.
    * Enqueue the left child of the dequeued node, if it exists.
    * Enqueue the right child of the dequeued node, if it exists.
6. Return the result array.

## Whiteboard Process
![lab17whiteboard](whiteboard17.png)

## Collaborator
Ike Steoger and I asked AI for help with the test

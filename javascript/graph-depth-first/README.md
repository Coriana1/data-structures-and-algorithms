## Challenge: graph-depth-first
In the Graph class is to traverse a graph in a depth-first manner and collect the nodes in their pre-order traversal order.

## Approach & Efficiency
Big O
Time: O(V + E)
Space: O(V)

## Solution
### Append :
Create an empty set visited to track visited nodes.
Create an empty array result to store the traversal result.
Start the depth-first traversal from the specified startNode.
Mark the startNode as visited and add it to the result array.
Get the neighbors of the startNode from the adjacency list.
For each neighbor that has not been visited:
Recursively call the depth-first traversal on the neighbor.
Mark the neighbor as visited and add it to the result array.

## Whiteboard Process
![lab38whiteboard](whiteboard38.png)

## Collaborator
AI for test

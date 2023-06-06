## Challenge: List Insertions
Find the Maximum Value in a Binary Tree
## Approach & Efficiency
Big O
Time: O(h)
Space: O(n)

## Solution
### Append :

1. Start at the root of the binary tree.
2. Initialize a variable maxValue with the minimum possible value (e.g., -Infinity).
3. Perform a depth-first traversal of the binary tree.
At each node, compare the node's value with the current maxValue.
	* If the node's value is greater than maxValue, update maxValue with the node's value.
4. Recursively traverse the left and right child nodes.
5. Once all nodes have been traversed, return the maxValue.

## Whiteboard Process
![lab16whiteboard](whiteboard16.png)

## Collaborator
Hayden Cooper and I asked AI for help with the test

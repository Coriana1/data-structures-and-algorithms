## Challenge: List Insertions
Find common values in 2 binary trees.## Approach & Efficiency
Big O
Time: O(n + m)
Space: O(n)

## Solution
### Append :
1. Initialize an empty array results to store the common elements found in both trees.
2. Create a Map object named map.
3. Perform a preorder traversal on treeOne and store the values in an array bt1.
4. Perform a preorder traversal on treeTwo and store the values in an array bt2.
5. Iterate over each item in bt1:
  * Add the item to the map using map.set(item).
6. Iterate over each item in bt2:
  * Check if the item exists in the map using map.has(item). If it does, add it to the results array.
7. Return the results array containing the common elements found in both trees.

## Whiteboard Process
![lab32whiteboard](whiteboard32.png)

## Collaborator
Kenya Womack, Tony (TA), I asked AI for help with the test

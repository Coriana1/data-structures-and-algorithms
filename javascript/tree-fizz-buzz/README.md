## Challenge: List Insertions
The problem is to perform a "FizzBuzz" operation on a k-ary tree while traversing through it to create a new tree.
## Approach & Efficiency
Big O
Time: O(n)
Space: O(n)

## Solution
### Append :
1. Create a new k-ary tree.
2. Traverse the source tree in any desired traversal order (pre-order, post-order, etc.).
3. For each node encountered during traversal:
    * If the node value is divisible by 3 and 5, set the value of the corresponding node in the new tree to "FizzBuzz".
    * If the node value is divisible by 3, set the value of the corresponding node in the new tree to "Fizz".
    * If the node value is divisible by 5, set the value of the corresponding node in the new tree to "Buzz".
    * If the node value is not divisible by 3 or 5, convert the number to a string and set it as the value in the new tree.
4. Return the new k-ary tree.

## Whiteboard Process
![lab18whiteboard](whiteboard18.png)

## Collaborator
I asked AI for help with the test

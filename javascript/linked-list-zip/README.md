## Challenge: List Insertions
We are given two linked lists, and we need to zip them together into a new linked list. The resulting linked list should have nodes alternating between the two lists.
## Approach & Efficiency
Big O
Time: O(max(N, M))
Space: O(1)

## Solution
### Append :
Initialize two pointers, current1 and current2, to point to the heads of the two input linked lists.
Create a new empty linked list, result, to store the zipped list.
While both current1 and current2 are not null:
Append the node pointed by current1 to result.
Move current1 to the next node.
If current2 is not null, append the node pointed by current2 to result and move current2 to the next node.
If there are remaining nodes in either of the input linked lists, append them to the end of result.
Return result, which is the zipped linked list.

## Whiteboard Process
![lab06whiteboard](whiteboard8.png)

## Collaborator
Kenya Womack

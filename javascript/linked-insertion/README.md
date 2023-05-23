## Challenge: List Insertions
Write the following methods for Linked List classes amend, insert before and insert after.

## Approach & Efficiency
Big O
Time: O(n)
Space: O(1)

## Solution
### Append :
Input new_value
Create a new code with that given value
If linked list is empty (head is null), set new node as the head.
Otherwise, traverse the linked list starting from head.
Move to next node until last is reached.
Insert Before:
Input target_value
Create new node with given new_value
If linked list is empty, error as there is no node to insert before.
If target_value is at head of linked list:
Set next pointer of new node to current head
Set the new node as the new head
Otherwise, traverse the linked list starting from head
Move to next node until finding node with value matching the target_value or end of list
Insert after:
Input target_value
Create new node with given value
If empty, throw error as there is no node
Traverse the linked list starting from head
Move until finding node with matching target value or reaching the end of the list
If the target_value isn’t found
throw error as there is no node

## Whiteboard Process
![lab06whiteboard](whiteboard6.png)

## Collaborator
Ethan Storm

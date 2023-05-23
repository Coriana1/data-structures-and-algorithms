# Challenge Title
kth from end
argument: a number, k, as a parameter.
Return the node’s value that is k places from the tail of the linked list.
You have access to the Node class and all the properties on the Linked List class as well as the methods created in previous challenges.

## Whiteboard Process
![lab01whiteboard](whiteboardboard7.png)
![passingtes](passingtest.png)

## Approach & Efficiency
Time: O(1)
Space: O(n)

## Solution
Algorithm:
Declare function named kthFromEnd takes in head, k
	declare 2 pointers p1 and p2 = head
	for loop runs k times
		if p2 === null
			return null
		else p2 = p2.next
	while p2 not null and p2.next not null
		p1 =p1.next
		p2 = p2.next
	return p1.value

## Collab
Josh Coffey

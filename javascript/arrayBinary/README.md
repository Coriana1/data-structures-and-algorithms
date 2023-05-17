# Challenge Title
We are given a sorted array and a search key. Task is to implement a binary search algorithm to find the index of the element in the array that is equal to the search key. If the element is not found, we should return -1.

## Whiteboard Process
![lab01whiteboard](whiteboardBinary.png)

## Approach & Efficiency
Time: O(log n) -  "n" is the number of elements in the sorted array - size of the input array increases, the time taken by the algorithm grows logarithmically rather than linearly.

Space: O(1) - requires a constant amount of additional space regardless of the size of the input array.

## Solution
Algorithm:

1. Initialize the start index as 0 && end index as the length of array minus 1.
2. Use a "while" loop to continue the search until the start index is < or = the end index.
3. Calculate the middle index as the floor of the average of the start and end index.
4. Compare the middle index of the array with the search key:
		* If they are =, return to middle index
		* If middle is > than search key, update start index to middle +1
		* If middle is > than search key, update end index to middle -1
5. If the search key is "not found" after while loop, return -1

## Collab
Hayden Cooper for help with step through and I referenced this website for the step through and visulazation
https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/implementing-binary-search-of-an-array

# Challenge Title
Write a function called  insertshiftArray that takes an array and a value as input. The function will add this value to the middle index of the array and returns the updated array.

## Whiteboard Process
![lab01whiteboard](board2.png)

## Approach & Efficiency
Time: O(n) -  it iterates through the entire input array once in the for loop. In each iteration, it performs constant-time operations (comparisons and assignments) regardless of the size of the array.

Space: O(n) - because it creates a new array (result) to store the updated elements. The size of the new array will be equal to the size of the input array plus one, as it adds the new value at the middle index.

## Solution
Algorithm

1. Define function 'insertShiftArray' hat takes an array and value as parameters
2. Create a variable 'middleIndex' and set it to the middle index of the array
3. Create a variable 'results' and set it as an empty array
4. Iterate over the original array using a loop:
	* If current index is = to 'middleIndex', append the value to be added to 'result' array
	* Append current element from the original array to the 'result' array
5. If middleIndex is greater > or = length of original array, append value to be added to 'result' array after loop ends
6. Return the 'result' array

## Collab
Kenya Womack

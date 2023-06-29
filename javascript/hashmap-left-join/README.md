## Challenge: List Insertions
Write a function that LEFT JOINs two hashmaps into a single data structure.
  * Write a function called left join
  * Arguments: two hash maps
    * The first parameter is a hashmap that has word strings as keys, and a synonym of the key as values.
    * The second parameter is a hashmap that has word strings as keys, and antonyms of the key as values.
Return: The returned data structure that holds the results is up to you. It doesn’t need to exactly match the output below, so long as it achieves the LEFT JOIN logic


## Approach & Efficiency
Big O
Time: O(n)
Space: O(1)

## Solution
### Append :
1. Initialize empty list called results (store data for joined data)
2. Iterate over keys of 1st hashmap
  * Retrieve value from 1st hashmap
  * Get value of 2nd hashmap from key if it exist
  * Add values to new appended list or null if it doesn’t exist
3. Return results containing the joined value

## Whiteboard Process
![lab33whiteboard](hashmap-left-join.png)

## Collaborator
Nick Mullaney, AI for test 



## Challenge: List Insertions
Write a function called repeatedWord that finds the first word to occur more than once in a given string.

## Approach & Efficiency
Big O
Time: O(n)
Space: O(n)

## Solution
### Append :
1. Create a function called repeatedWord that takes in a string as a parameter.
2. Split the string into an array of words using the space character as the delimiter. Store the result in the words variable.
3. Create a new HashTable object with an initial capacity equal to the length of the words array. This hash table will be used to track encountered words.
4. Initialize an empty object called wordCount to keep track of the count of each word.
5. Initialize a variable called max to keep track of the maximum word count.
6. Iterate over each word in the words array using a for loop.
    * Convert the word to lowercase and store it in the word variable.
    * Check if the wordCount object has a property for the current word using Object.prototype.hasOwnProperty.call(wordCount, word).
      * If it does, increment the count of the current word in the wordCount object.
      * If it doesn't, add the current word as a property to the wordCount object with an initial count of 1.
    * Check if the hash contains the current word using the contains method of the HashTable object.
      * If it does, return the current word as it is the first repeated word encountered.
    * Add the current word as a key-value pair in the hash using the set method of the HashTable object.
7. Iterate over the properties of the wordCount object using a for...in loop.
    * Check if the property is a valid own property of the wordCount object using Object.prototype.hasOwnProperty.call(wordCount, word).
    * If it is, compare the count of the current word with the current maximum count.
    * If the count is greater than the current maximum, update the max variable and set freqWords to an array containing only the current word.
      * If the count is equal to the current maximum, add the current word to the freqWords array.
8. If no repeated word is found, return an object with the following properties:
    * repeatedWord: null
    * wordCount: the wordCount object
    * freqWords: the freqWords array

## Whiteboard Process
![lab06whiteboard](hashmap.png)

## Collaborator
Ryan Eastman

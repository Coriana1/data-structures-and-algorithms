## Challenge: Hash Table Implementation
Implement a Hashtable Class with the following methods: set, get, has, keys, hash

## Solution
### Append :
1. Create a HashTable class with a constructor that initializes the size of the hash table and an empty array to store the buckets.
2. Implement a hash function that takes a key as input.
    * Split the key into individual characters and calculate the ASCII sum of those characters using the reducer pattern. Multiply the ASCII sum by a large prime number and return the remainder when divided by the size of the hash table. This provides an index for the key in the hash table.
3. Implement the set method that takes a key and a value as input. Calculate the position of the key in the hash table using the hash function. Create a data object with the key-value pair. Assign the data object to the corresponding bucket in the hash table.
4. Implement the get method that takes a key as input. Calculate the position of the key in the hash table using the hash function. Check if the bucket at the calculated position exists. If it does, retrieve the value associated with the key from the bucket and return it.
5. Implement the has method that takes a key as input. Calculate the position of the key in the hash table using the hash function. Check if the bucket at the calculated position exists. If it does, return true indicating that the key exists in the hash table. Otherwise, return false.
6. Implement the keys method that returns an array of all the unique keys in the hash table. Iterate over each bucket in the hash table. If a bucket exists, collect all the keys in the bucket using Object.keys and merge them with the existing keys array. Return the resulting array of keys.
7. Create an instance of the HashTable class with a specified size.
8. Use the set method to add key-value pairs to the hash table.
9. Use the get method to retrieve the value associated with a specific key.
10. Use the has method to check if a key exists in the hash table.
11. Use the keys method to retrieve an array of all the unique keys in the hash table.

## Collaborator
Keyna Womack, AI for algorithm

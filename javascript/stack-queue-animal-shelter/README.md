## Challenge: List Insertions
Create a class called AnimalShelter which holds only dogs and cats.
## Approach & Efficiency
Big O
Time: O(1)
Space: O(n)

## Solution
### Append :
Create a class called `AnimalShelter` with an empty queue to hold animals.
Use the `enqueue` method:
Check if the give `animal` is a valid object with species and name properties
If the species is a cat or dog, push the animal object to the array
Use the `dequeue` method:
        a. Check if the provided `pref` is either cat or dog
        b. If is dog, check if there are any dogs in shelter. If yes, remove and return the first dog
        c. If cat, check if there are any cats in shelter. If yes, remove and return the first cat
         d. If `pref` is neither return null



## Whiteboard Process
![lab06whiteboard](whiteboard12.png)

## Collaborator
Ethan Storm, I worked on the algorithm and part of the code but got confused so Ethan explained and flowed through everything. I still don't completely understand this one but I have a better understanding so I plan to play around in my own personal time with problem solving the whiteboard my way.

'use strict';

class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let characters = key.split('');
    let asciiSum = characters.reduce((sum, character) => {
      return sum + character.charCodeAt(0);
    }, 0);
    let initialHash = asciiSum * 599;
    return initialHash % this.size;
  }

  set(key, value) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      this.buckets[index] = [];
    }

    let found = false;
    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        this.buckets[index][i].value = value;
        found = true;
        break;
      }
    }

    if (!found) {
      this.buckets[index].push({ key, value });
    }
  }

  get(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return null;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        return this.buckets[index][i].value;
      }
    }

    return null;
  }

  has(key) {
    const index = this.hash(key);

    if (!this.buckets[index]) {
      return false;
    }

    for (let i = 0; i < this.buckets[index].length; i++) {
      if (this.buckets[index][i].key === key) {
        return true;
      }
    }

    return false;
  }

  keys() {
    const keys = [];

    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          if (!keys.includes(this.buckets[i][j].key)) {
            keys.push(this.buckets[i][j].key);
          }
        }
      }
    }

    return keys;
  }
}

// Example usage and tests
const table = new HashTable(1024);

console.log('table:', table);

let hashOne = table.hash('Ryan');
let hashTwo = table.hash('Kati');
console.log('hashOne:', hashOne);
console.log('hashTwo:', hashTwo);

table.set('Ryan', 'this is my value');
table.set('Kati', 'how do we define value');

console.log('updated table:', table);
console.log('get works!', table.get('Ryan'));
console.log('has worked:', table.has('Ryan')); // expect true
console.log('has worked:', table.has('Lucky')); // expect false
let keys = table.keys();
console.log('keys:', keys);

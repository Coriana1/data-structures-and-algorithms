'use strict';

const LinkedList = require('../linked-list');
const zipLists = require('../linked-list-zip/index');

describe('zipLists', () => {
  it('should zip two linked lists together', () => {
    //1at linked list: 1 -> 3 -> 2 -> null
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    // 2nd linked list: 5 -> 9 -> 4 -> null
    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    // Zip
    const result = zipLists(list1, list2);


    expect(result.toString()).toBe('1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null');
  });

  it('should handle empty linked lists', () => {

    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const result = zipLists(list1, list2);

    expect(result.toString()).toBe('null');
  });


});

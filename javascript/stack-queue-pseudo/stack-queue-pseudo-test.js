'use strict';

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  it('should enqueue values using a first-in, first-out approach', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);
    expect(pseudoQueue.stack1.peek()).toEqual(10);
  });

  it('should dequeue values using a first-in, first-out approach', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);
    expect(pseudoQueue.dequeue()).toEqual(10);
    expect(pseudoQueue.stack1.peek()).toEqual(15);
  });

  it('should return null when dequeue is called on an empty PseudoQueue', () => {
    expect(pseudoQueue.dequeue()).toBeNull();
  });

  it('should handle enqueue and dequeue operations correctly', () => {
    pseudoQueue.enqueue(10);
    pseudoQueue.enqueue(15);
    pseudoQueue.enqueue(20);
    expect(pseudoQueue.dequeue()).toEqual(10);
    pseudoQueue.enqueue(5);
    expect(pseudoQueue.dequeue()).toEqual(15);
    expect(pseudoQueue.stack1.peek()).toEqual(20);
  });
});

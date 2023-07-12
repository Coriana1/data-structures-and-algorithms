const Graph = require('./index');

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should perform depth-first traversal correctly', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');
    graph.addNode('E');
    graph.addNode('F');
    graph.addNode('G');
    graph.addNode('H');

    graph.addEdge('A', 'B');
    graph.addEdge('A', 'C');
    graph.addEdge('B', 'G');
    graph.addEdge('C', 'D');
    graph.addEdge('C', 'E');
    graph.addEdge('E', 'H');
    graph.addEdge('E', 'F');

    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'G', 'C', 'D', 'E', 'H', 'F']);
  });

  test('should handle disconnected nodes in depth-first traversal', () => {
    graph.addNode('A');
    graph.addNode('B');
    graph.addNode('C');
    graph.addNode('D');

    const result = graph.depthFirst('A');
    expect(result).toEqual(['A', 'B', 'C', 'D']);
  });
});

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(node) {
    if (!this.adjacencyList.has(node)) {
      this.adjacencyList.set(node, []);
    }
  }

  addEdge(node1, node2) {
    if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
      this.adjacencyList.get(node1).push(node2);
      this.adjacencyList.get(node2).push(node1);
    }
  }

  depthFirst(startNode) {
    const visited = new Set();
    const result = [];

    this._traverseDepthFirst(startNode, visited, result);

    // Check for unvisited nodes
    for (const node of this.adjacencyList.keys()) {
      if (!visited.has(node)) {
        this._traverseDepthFirst(node, visited, result);
      }
    }

    console.log(result.join(', '));
    return result;
  }

  _traverseDepthFirst(node, visited, result) {
    visited.add(node);
    result.push(node);

    const neighbors = this.adjacencyList.get(node);
    for (const neighbor of neighbors) {
      if (!visited.has(neighbor)) {
        this._traverseDepthFirst(neighbor, visited, result);
      }
    }
  }
}

module.exports = Graph;


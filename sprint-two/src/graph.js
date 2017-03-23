
// edge = [];
// Instantiate a new graph
var Graph = function() {
  this.vertices = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.vertices.push(node);
  this.edges[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for ( var item = 0; item < this.vertices.length; item++) {
    if (this.vertices[item] === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var index = this.vertices.indexOf(node);
  if (index !== -1) {
    this.vertices.splice(index, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  debugger;
  var iterateEdges = function(node, searchLink, edges) {
    for (var i = 0; i < edges[node].length; i++) {
      if (edges[node][i] === searchLink) {
        return true;
      }
    }
    return false;
  };
  var fromTo = iterateEdges(fromNode, toNode, this.edges);
  var toFrom = iterateEdges(toNode, fromNode, this.edges);
  return fromTo === toFrom;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.edges[fromNode].push(toNode);
  this.edges[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */



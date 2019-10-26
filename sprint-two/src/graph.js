// {'2': ['1'], '1': ['2']};
// instances of Graph are objects (newGraph)
// each node is a key of the graph object
// edges get stored in value of key in form of array

// Instantiate a new graph
var Graph = function() {
  // create an instance of new graph that is an object that references Graph.prototype
  var newGraph = Object.create(Graph.prototype);
  newGraph.nodes = {};
  // return the new graph object
  return newGraph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add node as a key onto newGraph object
  // set key equal to an empty array that will hold any edges
  this.nodes[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if the object has the property of the input node
  if(this.nodes.hasOwnProperty(node)) {
    // if so, return true
    return true;
  } else {
  // else return false
    return false;
  }
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  // store found node in a variable
  node = node.toString();
  var found;
  // iterate through keys of newGraph object
  for(var key in this.nodes) {
    // find target node
    if(key === node) {
      found = key;
    }
    if (this.hasEdge(key, node)) {
      this.removeEdge(key, node);
    }
    // // for each key, iterate through edges array
    // for(var i = 0; i < this[key].length; i++) {
    //   // check if each edge equals target node to be removed
    //   if(this[key[i]] === node) {
    //     // remove any edges that point to target node
    //     this[key].splice(i, 1);
    //   }
    // }
  }
  // delete the node
  delete this.nodes[found];
  // return the variable
  return found;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  toNode = toNode.toString();
  // check the newGraph object for fromNode key
  // if the edges array contains toNode, return true
  // else return false
  return (this.nodes[fromNode].includes(toNode));
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add the toNode key on the fromNode edges array
  toNode = toNode.toString();
  fromNode = fromNode.toString();
  this.nodes[fromNode].push(toNode);
  this.nodes[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  toNode = toNode.toString();
  fromNode = fromNode.toString();
  // remove the toNode key from the fromNode edges array
  this.nodes[fromNode].splice(this.nodes[fromNode].indexOf(toNode), 1);
  this.nodes[toNode].splice(this.nodes[toNode].indexOf(fromNode), 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var args = Object.keys(this.nodes);
  var applyToAll = function () {
    for (var i = 0; i < args.length; i++) {
      cb.call(this.nodes, args[i]);
    }
  };
  applyToAll();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



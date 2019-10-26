// {'2': ['1'], '1': ['2']};
// instances of Graph are objects (newGraph)
// each node is a key of the graph object
// edges get stored in value of key in form of array

// Instantiate a new graph
var Graph = function() {
  // create an instance of new graph that is an object that references Graph.prototype
  var newGraph = Object.create(Graph.prototype);
  // return the new graph object
  return newGraph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // add node as a key onto newGraph object
  // set key equal to an empty array that will hold any edges
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  // check if the object has the property of the input node
  if(this.hasOwnProperty(node)) {
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
  var found;
  // iterate through keys of newGraph object
  for(var key in this) {
    // find target node
    if(key === node) {
      found = key;
    }
    // for each key, iterate through edges array
    for(var i = 0; i < this[key].length; i++) {
      // check if each edge equals target node to be removed
      if(this[key[i]] === node) {
        // remove any edges that point to target node
        this[key].splice(i, 1);
      }
    }
  }
  // delete the node
  delete this[found];
  // return the variable
  return found;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  // check the newGraph object for fromNode key
  // if the edges array contains toNode, return true
  // else return false
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // add the toNode key on the fromNode edges array
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  // remove the toNode key from the fromNode edges array
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  var args = Object.keys(this);
  // if this doesn't contain prototypes, then we're good!
  console.log(args);
  var applyToAll = function () {
    cb.apply(this,args);
  }
  applyToAll();
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



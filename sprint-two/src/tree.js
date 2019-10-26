var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  // extend newTree with treeMethods
  _.extend(newTree, treeMethods)

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // call the Tree class to create a new instance of tree
  var newChild = Tree(value);
  // push this new tree instance into the children array of the tree in question
  this.children.push(newChild);
};

treeMethods.contains = function(target) {
  // store boolean in variable
  var found = false;
  // store starting point for traverse function
  var start = this;
  // write function to traverse tree
  var traverse = function(tree){
    // if the current input is the target
    if(tree.value === target){
      // then set boolean to true
      found = true;
      return found;
    } else if (tree.children.length > 0) {
    // else if there are children of current input
    // call traverse function on children
      for (var i = 0; i < tree.children.length; i++){
        traverse(tree.children[i])
      }
    }
    return found;
  };
  // call traverse on starting tree
  return traverse(start);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

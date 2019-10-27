var BinarySearchTree = function(value) {
  // object.create with search tree protoype
  var newTree = Object.create(BinarySearchTree.prototype);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

// declare variable for search tree methods

BinarySearchTree.prototype.insert = function(value) {
  // create a new instance of BST passing in the value
  var binaryTree = BinarySearchTree(value);
  // traverse through the tree starting with the first value 'this'
  var traverse = function(tree) {
  // compare new BST value to each node value
  // if BST is larger, begin traversing to the left
    if (tree.value > value) {
      if (tree.left === null) {
        tree.left = binaryTree;
      } else {
        traverse(tree.left);
      }
    }
    // if smaller, begin traversing to the right
    if (tree.value < value) {
      if (tree.right === null) {
        tree.right = binaryTree;
      } else {
        traverse(tree.right);
      }
    }
  // once a null value is reached, set that value to new BST instance
  // else, recurse
  }
  traverse(this);
};

BinarySearchTree.prototype.contains = function(target) {
  // traverse through the tree starting with first value 'this'
  var found = false;

  var traverse = function(tree) {
    // if value of node is equal to target value, return true
    if(tree.value === target) {
      found = true;
      return found;
    } else if(tree.value > target && tree.left !== null) {
      return traverse(tree.left);
    } else if(tree.value < target && tree.right !== null) {
      return traverse(tree.right);
    } else {
      // else, return false
      return found;
    }
  }
  return traverse(this);
};

BinarySearchTree.prototype.depthFirstLog = function(callback) {
  // traverse through the tree starting with the first value 'this'
  var traverse = function(tree) {
    // perform the callback function on each value
    callback(tree.value);
    if(tree.left !== null) {
      traverse(tree.left);
    }
    if(tree.right !== null) {
      traverse(tree.right);
    }
  }
  traverse(this);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

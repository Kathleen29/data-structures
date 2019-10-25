var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // call an instance of Node
    // somehow update previous node to tell it what next should point to
    // add new instance of node to list object
  };

  list.removeHead = function() {
    // head gets reassigned to next of current head node
    // store original node that head points to in variable
    // return original node variable
  };

  list.contains = function(target) {
    // loop through linked list for target value
    // return true if target value is found
    // return false if target value is not found
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

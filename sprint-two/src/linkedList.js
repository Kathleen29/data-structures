var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // call an instance of Node
    var instance = Node(value);
    // somehow update previous node to tell it what next should point to
    // check if list object is empty... if yes
    if (this.head === null) {
      // set head and tail to that node
      this.head = instance;
      this.tail = instance;
    } else {
      // set next of current tail node to equal this instance of node and set this instance to tail
      this.tail.next = instance;
      this.tail = instance;
    // add new instance of node to list object
    }
  };
  // time complexity is constant

  list.removeHead = function() {
    // store original node that head points to in variable
    var currentHead = this.head.value;
    // head gets reassigned to next of current head node
    this.head = this.head.next;
    // return original node variable
    return currentHead;
  };
  // time complexity is constant

  list.contains = function(target) {
    // create a recursive function to find target in chain of nodes
    var start = this.head;
    var found;
    var traverse = function (node) {
      // return true if target value is found
      if (node.value === target) {
        found = true;
      // recurse function if next of current node is not null
      } else if (node.next !== null) {
        return traverse(node.next);
      // return false if target value is not found
      } else {
        found = false;
      }
      return found;
    };
    return traverse(start);
  };
  return list;
};
//  time complexity is linear

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions? O(n) (linear);
 */

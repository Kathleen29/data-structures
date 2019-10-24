var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // declare a storage variable that contains an object
  var storage = {};
  // assign a stack key that contains an empty object
  storage.stack = {};
  // extend the stack methods into the storage object
  _.extend(storage, stackMethods);
  return storage;
};

var stackMethods = {};
var keyNum = 1;

stackMethods.push = function(value){
  // assign new value to the next key
  this.stack[keyNum] = value;
  // increment key number
  keyNum++;
  // return the storage stack
  return this.stack;
};

stackMethods.pop = function(){
  // grab the keys using Object.keys()
  // store the largest key in a variable
  // delete the largest key from the storage stack
  // return the value of the largest key
};

stackMethods.size = function(){
  // return the length of the storage stack
};
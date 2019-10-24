var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // create a storage object where stack methods will be added
  var storage = Object.create(stackMethods);
  // create object where the stack will live
  storage.stack = {};
  // return storage object
  return storage;
};

var stackMethods = {};
var keyNum = 1;

stackMethods.push = function(value){
  // define the value at key number
  this.stack[keyNum] = value;
  // increment the key
  keyNum++;
  // return the stack
  return this.stack;
};

stackMethods.pop = function(){
  // store object keys in an array
  var keys = Object.keys(this.stack);
  // store the largest value in a variable
  var largest = this.stack[keys[keys.length-1]];
  // delete the largest key value pair from the storage stack
  delete this.stack[keys[keys.length-1]];
  // return the largest value variable
  return largest;
};

stackMethods.size = function(){
  // return the length of the object.key(storage) array
  return Object.keys(this.stack).length;
};

var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // assign an empty object to a storage variable with 'this'
  this.storage = {};
};

var keyNum = 1;

Stack.prototype.push = function(value) {
  // assign the value to the key number
  this.storage[keyNum] = value;
  // increment the key number
  keyNum++;
  // return storage object
  return this.storage;
};

Stack.prototype.pop = function(){
  // store the object keys array of storage in a variable
  var keys = Object.keys(this.storage);
  // store the largest key value in a variable
  var largest = this.storage[keys[keys.length-1]];
  // delete the largest value
  delete this.storage[keys[keys.length-1]];
  // return the largest key value variable
  return largest;
};

Stack.prototype.size = function(){
  // return the length of the object keys array of the storage object
  return Object.keys(this.storage).length;
};

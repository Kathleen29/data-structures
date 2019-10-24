var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create storage object, set to empty object for each instance
  this.storage = {};
};

// add each method onto the Queue class
var keyNum = 1;

Queue.prototype.enqueue = function (value) {
  // add value to storage object with numeric key
  this.storage[keyNum] = value;
  // increment keyNum
  keyNum++;
  // return storage object
  return this.storage;
};

Queue.prototype.dequeue = function () {
  // store keys arr of storage object in a variable
  var keys = Object.keys(this.storage);
  // store value at lowest key number in a variable
  var lowest = this.storage[keys[0]];
  // delete lowest key value pair
  delete this.storage[keys[0]];
  // return lowest value variable
  return lowest;
};

Queue.prototype.size = function () {
  // return length of object keys arr
  return Object.keys(this.storage).length;
};

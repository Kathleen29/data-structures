var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // create storage object and set to Object.create.... (create prototype)
  var storage = Object.create(queueMethods);
  // create queue property, set to empty object
  storage.queue = {};
  return storage;
};

var queueMethods = {};
var keyNum = 1;

queueMethods.enqueue = function (value) {
  // add value to storage object at keyNum
  this.queue[keyNum] = value;
  // increment keyNum
  keyNum++;
  // return storage
  return this.queue;
};

queueMethods.dequeue = function () {
  // store stoarge queue keys in a variable (Object.keys)
  var keys = Object.keys(this.queue);
  // store value of lowest key in storage queue object
  var lowest = this.queue[keys[0]];
  // delete lowest key value pair from storage queue
  delete this.queue[keys[0]];
  // return lowest value (from variable above)
  return lowest;
};

queueMethods.size = function () {
  // return length of keys array of the storage queue object
  return Object.keys(this.queue).length;
};




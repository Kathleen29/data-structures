var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // use _.extend!!

  // declare a storage variable
  var storage = {};
  storage.queue = {};
  _.extend(storage, queueMethods);
  return storage;
  // // enqueue method adds
  // Queue.enqueue =
  // // dequeue method adds
  // Queue.dequeue =
  // // size method
  // Queue.size =
};

var queueMethods = {};
var keyNum = 1;
// add the value with numerical key to the storage object
queueMethods.enqueue = function(value){
  // this.storage
  this.queue[keyNum] = value;
  keyNum++;
  return this.queue;
};
// console.log(queueMethods);
// console.log(Queue.queueMethods);
queueMethods.dequeue = function(){
  // take Object.keys array
  var keys = Object.keys(this.queue);
  // save lowest value in variable to return after deletion
  var lowest = this.queue[keys[0]];
  // using lowest object key, remove least recently added property from queue (use delete)
  delete this.queue[keys[0]];
  // return deleted item
  return lowest;
};

queueMethods.size = function(){
  // access storage.queue to determine size
  return Object.keys(this.queue).length;
};

// when size is invoked
// storage.size()
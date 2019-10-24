var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // use _.extend!!

  // declare a storage variable
  var storage = {};
  _.extend(storage, Queue.queueMethods);
  return storage;
  // // enqueue method adds
  // Queue.enqueue =
  // // dequeue method adds
  // Queue.dequeue =
  // // size method
  // Queue.size =
};

Queue.queueMethods = {};
var keyNum = 1;
// add the value with numerical key to the storage object
// Queue.queueMethods.enqueue = function(value){
//   // this.storage
// };
// console.log(queueMethods);
// console.log(Queue.queueMethods);
// Queue.queueMethods.dequeue = function(){

// };

Queue.queueMethods.size = function(){
  // return this.length;
  console.log(this);
  console.log(this.storage);
};

console.log(Queue().storage);
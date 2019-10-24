class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    // create storage key for the instance of Queue and set it equal to an empty object
    this.storage = {};
    this.keyNum = 1;
  }
  // define the enqueue function
  enqueue(value) {
    // set value equal to key number for the storage object
    this.storage[this.keyNum] = value;
    // increment the key number
    this.keyNum++;
    //return the storage object
    return this.storage;
  };

  // define the dequeue function
  dequeue() {
    // set a variable equal to the object keys array
    var keys = Object.keys(this.storage);
    // set a variable equal to the lowest key value
    var lowest = this.storage[keys[0]];
    // delete the lowest key value
    delete this.storage[keys[0]];
    // return the lowest key value variable
    return lowest;
  };

  // define the size function
  size() {
    // return the length of the object keys array of the storage object
    return Object.keys(this.storage).length;
  };
}

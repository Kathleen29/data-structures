class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  // create storage object for each instance
    this.storage = {};
  // create keyNum variable for each instance
    this.keyNum = 1;
  }

  // define push function
  push(value){
    // set value to key number on the storage object
    this.storage[this.keyNum] = value;
    // increment key number
    this.keyNum++;
    // return storage object
    return this.storage;
  };

  // define pop function
  pop(){
    // store array of object key in a variable
    var keys = Object.keys(this.storage);
    // store the value at the largest key in a variable
    var largest = this.storage[keys[keys.length-1]];
    // delete the largest key value pair
    delete this.storage[keys[keys.length-1]];
    // return the largest value
    return largest;
  };

  // define size function
  size(){
    // return length of the object keys array for storage object
    return Object.keys(this.storage).length;
  };
}
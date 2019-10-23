var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var keyNum = 1;
  // Implement the methods below
  someInstance.push = function(value) {
    // track numerical key and insert the value at numerican key in the object
    storage[keyNum] = value;
    // increment numerical key
    keyNum++;
    // return storage object
    return storage;
  };
  // return most recently added value and remove that value from storage obj
  someInstance.pop = function() {
    // use Objects.keys()
    // set the last key in object to a variable
    // delete the last key from the storage object
    // return the last key variable
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

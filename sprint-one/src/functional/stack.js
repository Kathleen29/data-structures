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
    var keysArr = Object.keys(storage);
    // set the last key in object to a variable
    if(keysArr.length >= 1){
      var last = storage[keysArr[keysArr.length-1]];
      // delete the last key from the storage object
      delete storage[keysArr[keysArr.length-1]];
      // return the last key variable
      return last;
    }
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};

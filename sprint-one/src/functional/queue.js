var Queue = function() {
// someInstance stores .enqueue, .dequeue, .size
  var someInstance = {};

  // Use an object with numeric keys to store values
  // numeric keys represent in what order the function was called??
  var storage = {};
  var keyNum = 1;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // set storage at [] numeric value to be the input value
    storage[keyNum] = value;
    keyNum++;
    return storage;
  };

  someInstance.dequeue = function() {
    // Find the lowest numeric key value within storage, return the value
    var keysArr = Object.keys(storage);
    var lowest = parseInt(keysArr[0]);
    var string;
    for (var i = 1; i < keysArr.length; i++) {
      if (parseInt(keysArr[i]) < lowest) {
        lowest = parseInt(keysArr[i]);
      }
    }
    string = storage[lowest];
    delete storage[lowest];
    return string;
    // delete storage.something
  };

  someInstance.size = function() {
    // Count the number of properties within the storage object
    // return the value
    return Object.keys(storage).length;
  };

  return someInstance;
};

// [[1, a], [2, b], [3, c]]
// remove 1
// [[1, b], [2, c]] <--
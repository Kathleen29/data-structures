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
  };

  someInstance.dequeue = function() {
    // Find the lowest numeric key value within storage, return the value
  };

  someInstance.size = function() {
    // Count the number of properties within the storage object
    // return the value
  };

  return someInstance;
};

// [[1, a], [2, b], [3, c]]
// remove 1
// [[1, b], [2, c]] <--
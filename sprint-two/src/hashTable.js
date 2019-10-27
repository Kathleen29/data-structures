

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// index in fn below says which index we add key/value pair to w/in hash table
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // check if index is null
  // use .get here to grab value at index
  // storage isn't a key of
  // var buckets = this._storage.get(index) || [];
  // push k/v pair into bucket array
  var tuple = [k, v];
  // push k & v into tuple
  this._storage.set(index, tuple);
};

// storage = [ [['a', '1'],['c', '3']],
//['b', '2'];

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through storage index bucket and compare index 0 to input k
  // this._storage.each(function () {
  //   if ()
  // });
  // if index 0 matches input k...
    // return index 1
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through storage index bucket and compare index 0 to input k
  // if index 0 matches input k...
    // splice the tuple off of the index array
};



/*
 * Complexity: What is the time complexity of the above functions?
 */





var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

// index in fn below says which index we add key/value pair to w/in hash table
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v];
  // if value at index is undefined, create new bucket
  var bucket = this._storage.get(index);
  if(bucket === undefined) {
    this._storage.set(index, [tuple]);
  } else {
    // this.remove(k);
    // if index 0 matches input k...
    for(var i = 0; i < bucket.length; i++) {
      // splice the tuple off of the index array
      if(bucket[i][0] === k) {
    // overwite old bucket with new bucket
        bucket.splice(i, 1);
      }
    }
    this._storage.set(index, bucket);
    // overwrite existing bucket with a new bucket that cointains result of calling get.push([tuple])
    this._storage.set(index, bucket.push(tuple));
  }
  // console.log(bucket);
};

// storage = [ [['a', '1'],['c', '3']],
//['b', '2'];

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through storage index bucket and compare index 0 to input k
  var bucket = this._storage.get(index); // imagine this as an array [[tuple], [tuple]]
  for (var i = 0; i<bucket.length; i++) {
    // if index 0 matches input k...
    if (bucket[i][0] === k) {
      // console.log(bucket);
      // return index 1
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // loop through storage index bucket and compare index 0 to input k
  var bucket = this._storage.get(index);
  // if index 0 matches input k...
  for(var i = 0; i < bucket.length; i++) {
    // splice the tuple off of the index array
    if(bucket[i][0] === k) {
  // overwite old bucket with new bucket
      bucket.splice(i, 1);
    }
  }
  this._storage.set(index, bucket);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



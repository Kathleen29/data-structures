var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // check if the item already exists in the storage property of the instance of set
  if (!this._storage.includes(item)) {
    this._storage.push(item);
    // if no, push the item into storage array
  }
};

setPrototype.contains = function(item) {
  // if the index of item exists in storage array, return true
  if (this._storage.indexOf(item) > -1) {
    return true;
  } else {
    return false;
  }
  // else, return false
};

setPrototype.remove = function(item) {
  // find the index of the item in the storage array
  // remove the item at that index in the storage array
  this._storage.splice(this._storage.indexOf(item), 1);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

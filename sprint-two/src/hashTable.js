// helpers: LimitedArray() .get .set .each
// getIndexBelowMaxForKey(string, max)-- returns number;

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  console.log(this._storage);
  storage.splice(index, 1);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */



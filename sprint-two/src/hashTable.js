// helpers: LimitedArray() .get .set .each
// getIndexBelowMaxForKey(string, max)-- returns number;

var HashTable = function() {
  this._limit = 8;
  this._counter = 0;
  this._storage = LimitedArray(this._limit);
};

// adds to the bucket in this._storage
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];

  for (var buckIndex = 0; buckIndex < bucket.length; buckIndex++) {
    if (bucket[buckIndex][0] === k) {
      bucket[buckIndex][1] = v;
    }
  }

  bucket.push([k, v]);
  if (this._storage[index] === undefined) {
    this._storage.set(index, bucket);
  }

  this._counter++;
  if (this._counter > (this._limit * 0.75)) {
    this._resize(this._limit * 2);  
  }
};

// finds the 'value' stored in the 'key' on hash table
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket !== undefined) {
    for (var buckIndex = 0; buckIndex < bucket.length; buckIndex++) {
      if (bucket[buckIndex][0] === k) {
        return bucket[buckIndex][1];
      }
    }
  }
  return undefined;
};

// deletes key:value from hash table
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  
  for (var buckIndex = 0; buckIndex < bucket.length; buckIndex++) {
    if (bucket[buckIndex][0] === k) {
      debugger;
      bucket.splice(buckIndex, 1);
      this._counter--;
      if (this._counter < this._limit * 0.25) {
        this._resize(this._limit / 2);
      }
    }
  }
};

HashTable.prototype._resize = function(newLimit) {
  var originalStorage = this._storage;
  this._limit = newLimit;
  this._counter = 0;
  this._storage = LimitedArray(newLimit);

  var context = this;

  originalStorage.each(function(bucket) {
    if (!bucket) {
      return;
    }
    for (var i = 0; i < bucket.length; i++) {
      context.insert(bucket[i][0], bucket[i][1]);
    }
  });

};



/*
 * Complexity: What is the time complexity of the above functions?
 */



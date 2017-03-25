var Set = function() {
  var set = Object.create(setPrototype);

  set._storage = new HashTable(); // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (typeof item === 'string') {
    this._storage.insert(item, item);
  }
};

setPrototype.contains = function(item) {
  if (typeof item === 'string') {
    var found = this._storage.retrieve(item);
    if (found === item) {
      return true;   
    }
    return false;
  }
  return false;
};

setPrototype.remove = function(item) {
  this._storage.remove(item);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

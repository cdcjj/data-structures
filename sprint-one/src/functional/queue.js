var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var numAdd = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[numAdd] = value;
    numAdd++;
    size++;
  };

  someInstance.dequeue = function() {
    size--;
    var deVal = {};
    for (var key in storage) {
      deVal[key] = storage[key];
      delete storage[key];
      return deVal[key];
    }

  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };

  return someInstance;
};

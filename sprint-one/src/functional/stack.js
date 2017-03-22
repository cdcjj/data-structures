var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    console.log('push    ', storage);
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {
    size--;
    var popVal = storage[size];
    delete storage[size];
    return popVal;
  };

  someInstance.size = function() {
    if (size < 0) {
      size = 0;
    }
    return size;
  };
  console.log('storge out side  ', storage);
  return someInstance;
};

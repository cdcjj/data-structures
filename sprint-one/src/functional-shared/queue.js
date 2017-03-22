var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  // _.extend()
  var instance = {};
  instance.storage = {};
  instance.hasSize = 0;
  instance.numAdd = 0;

  _.extend(instance, queueMethods);

  return instance;

};

var queueMethods = {
  'enqueue': function(value) {
    this.storage[this.numAdd] = value;
    this.hasSize++;
    this.numAdd++;
  },
  'dequeue': function() {
    this.hasSize--;
    var deVal;
    for (var key in this.storage) {
      deVal = this.storage[key];
      delete this.storage[key];
      return deVal;
    }
  },
  'size': function() {
    if (this.hasSize < 0) {
      this.hasSize = 0;
    }
    return this.hasSize;
  }

};



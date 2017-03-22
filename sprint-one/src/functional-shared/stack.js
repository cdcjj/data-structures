var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //use _.extend(obj1, obj2) to copy methods
  // dont use new or prototype
  
  var instance = {};
  instance.storage = {};
  instance.hasSize = 0;

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  'pop': function() {
    this.hasSize--;
    var popVal = this.storage[this.hasSize];
    delete this.storage[this.hasSize];
    return popVal;
  },
  'push': function(value) {
    this.storage[this.hasSize] = value;
    this.hasSize++;
  },
  'size': function() {
    if (this.hasSize < 0) {
      this.hasSize = 0;
    }
    return this.hasSize;
  }

};



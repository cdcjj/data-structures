var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //use _.extend(obj1, obj2) to copy methods
  // dont use new or prototype
  
  var instance = {};
  var storage = {};
  instance.hasSize = 0;

  _.extend(instance, stackMethods);
  return instance;
};

var stackMethods = {
  'pop': function(value) {

  },
  'push': function() {

  },
  'size': function() {
    return this.hasSize;
  }

};



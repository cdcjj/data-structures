var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.hasSize = 0;

};

Stack.prototype.push = function(value) {
  this.storage[this.hasSize] = value;
  this.hasSize++;
};

Stack.prototype.pop = function() {
  this.hasSize--;
  var popVal = this.storage[this.hasSize];
  delete this.storage[this.hasSize];
  return popVal;
};

Stack.prototype.size = function() {
  if (this.hasSize < 0) {
    this.hasSize = 0;
  }
  return this.hasSize;
};


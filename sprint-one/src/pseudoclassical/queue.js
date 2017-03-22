var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.hasSize = 0;
  this.numberAdd = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.numberAdd] = value;
  this.numberAdd++;
  this.hasSize++;
};

Queue.prototype.dequeue = function () {
  this.hasSize--;
  var deVal, key;
  for (key in this.storage) {
    deVal = this.storage[key];
    delete this.storage[key];
    return deVal;
  }
};

Queue.prototype.size = function () {
  if (this.hasSize < 0) {
    this.hasSize = 0;
  }
  return this.hasSize;
};


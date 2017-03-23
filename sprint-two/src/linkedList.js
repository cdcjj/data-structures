var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = {
      'value': value,
      'next': null
    };
    if (!this.head) {
      this.head = node;
    } else{
      var current = this.tail;
      while (current.next) {
        current = current.next;
      }
      this.tail = node;
    }
  };

  list.removeHead = function() {

  };

  list.contains = function(target) {

  };

  return list;
};



var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

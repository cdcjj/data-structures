var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // adds value to the end of the list and change the tail to the new added value
  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  // shift the head of the list.
  list.removeHead = function() {
    var current = this.head;
    this.head = current.next;
    return current.value;
  };

  // checks list to determine if the target value is there
  list.contains = function(target) {
    var current = this.head;
    while (current.value !== target) {
      if (current.next === null) {
        return false;
      }
      current = current.next;
    }
    return true;
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

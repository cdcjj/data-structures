var BinarySearchTree = function(value) {

  var instance = {};
  instance.value = value;
  // a binary search tree (BST) where all values are lower than than it the current value
  instance.left;
  // a BST where all values are higher than than it the current value.
  instance.right;

  
  // Methods:
  // "insert": which accepts a value and places in the tree in the correct position.
  instance.insert = function(value) {
    // var node = BinarySearchTree(value);
    // compares values to current
    var checkLF = function(compare, value) {
      var compareTo = compare.value;
      var node = BinarySearchTree(value);
      if (value > compareTo) {
        if (compare.right) {
          checkLF(compare.right, value);
        } else {
          compare.right = node;
        }
      } else if (value < compareTo) {
        if (compare.left) {
          checkLF(compare.left, value);
        } else {
          compare.left = node;  
        }
      }
    };
    checkLF(this, value);
  };

  // "contains": accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  instance.contains = function(target) {
    var result;
    var checkEquality = function (target, compare) {
      var nextComp;
      if (compare.value === target) {
        result = true;
      } else {
        if (compare.value < target) {
          nextComp = compare.right;
        } else {
          nextComp = compare.left;
        }
        nextComp === undefined ? result = false : checkEquality(target, nextComp);  
      }
    };

    checkEquality(target, this);
    return result;
  };

  // "depthFirstLog': accepts a callback and executes it on every value contained in the tree.
  instance.depthFirstLog = function(func) {

    var callPass = function(node, func) {
      var current = node.value;
      func(current);
      if (node.left) {
        callPass(node.left, func);
      } 
      if (node.right) {
        callPass(node.right, func);
      }
    };
    callPass(this, func);
    //var callFunc pass in the current node and the func[] 
      //var current = this.value
      //call func pass in current
      //check left exist 
        //recurs call func on left element
      //else if check right 
        //recur call on right element
      //else break
    //call func pass in this, func
  };

  return instance;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

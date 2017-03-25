var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];  // fixed

  // points to parent
  newTree.parent;

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //recursively call Tree function
  var node = Tree(value);
  node.parent = this;
  this.children.push(node);
};

treeMethods.contains = function(target) {
  var result = false;
  var searchTarget = function(node) {
    if (node.value === target) {
      result = true;
    }

    node.children.forEach(function (child) {
      return searchTarget(child);
    });
  };
  
  searchTarget(this);
  return result;
};

treeMethods.removeFromParent = function() {
  var previousParent = this.parent;
  this.parent = null;
  
  for (var i = 0; i < previousParent.children.length; i++) {
    if (previousParent.children[i].value === this.value) {
      previousParent.children.splice(i, 1);
      break;
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

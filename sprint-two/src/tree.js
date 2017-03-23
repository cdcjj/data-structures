var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fixed

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //recursively call Tree function
  var node = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */

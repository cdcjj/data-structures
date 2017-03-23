var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  //recursively call Tree function
  var node = Tree(value);

  debugger;
  //if tree is empty;
  if (this.children.length === 0) {
    this.children.push(node);
    console.log(this);
    console.log(this.children);
  } else {
    debugger;
    this.children[0].children.push(node);
    // if there is children-- enter while loop.
    // while (this.children) {
      // keep looking for new children for children == null.

    // }
  }
};

treeMethods.contains = function(target) {
  if (this.children[0].value === target) {
    return true;
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

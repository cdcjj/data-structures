var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  
  newTree.value = value;
  newTree.children = [];  // fixed

  // points to parent
  newTree.parent = null;

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

// advanced
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

treeMethods.traverse = function(callback) {
  var findEach = function(node, callback) {
    callback(node.value);

    if (node.children.length !== 0) {
      node.children.forEach(function (kid) {
        return findEach(kid, callback);
      });
    }

  };
  findEach(this, callback);
};

treeMethods.breadthFirstLog = function() {
  // var counter = 0;
  var allNodes = [];
  var eachLevel = function(node) {
    // if node is the first one in the tree
    if (node.parent === null) {
      allNodes.push(node.value);
      // push node.value to the allNodes array
    }
    if (node.children.length !== 0) {
      for (var i = 0; i < node.children.length; i++) {
        allNodes.push(node.children[i].value);
      }
      node.children.forEach(function (kid) {
        return eachLevel(kid);
      });
    }
    //counter++;
  };

  eachLevel(this);
  console.log(allNodes.join(', '));
  return allNodes.join(', ');
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

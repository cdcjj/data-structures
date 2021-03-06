describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", "traverse" and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.traverse).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  // added additional test
  it('should accept all types of values passed in', function() {
    var allVal = ['a', undefined, true, null, [1, 2], {'a': '1'}];
    for (var i = 0; i < allVal.length; i++) {
      tree.addChild(i);
      expect(tree.contains(i)).to.equal(true);
    }
  });

  //advanced Tree
  it('should refer to parent node', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should disassociate from parent when "removeFromParent" is called', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    var child6 = tree.children[1];
    tree.children[1].removeFromParent();
    expect(child6.parent).to.equal(null);
    expect(tree.contains(6)).to.equal(false);
  });

  // traverse through three
  it('should perform callback function on each node in the tree', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    tree.traverse(func);
    expect(array.length).to.equal(5);
  });

  // logs the nodes contained in the tree using a breadth-first approach -- tree level approach
  it('should log nodes using breadth-first approach', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[0].addChild(10);
    tree.children[1].addChild(8);
    var loggedString = tree.breadthFirstLog();
    expect(loggedString).to.equal(', 5, 6, 7, 10, 8');
    // makes test
  });
});

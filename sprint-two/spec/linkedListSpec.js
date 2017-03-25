describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  // modified for advanced doubly-linked list: "addToHead", "removeTail"
  it('should have methods named "addToTail", "removeHead", "contains", "addToHead", and "removeTail"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
    expect(linkedList.addToHead).to.be.a('function');
    expect(linkedList.removeTail).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added with addToTail', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });


  // add more tests here to test the functionality of linkedList
  it('should accept all types of values passed in', function() {
    var allVal = ['a', undefined, true, null, [1, 2], {'a': '1'}];
    for (var i = 0; i < allVal.length; i++) {
      linkedList.addToTail(i);
      expect(linkedList.contains(i)).to.equal(true);
    }
  });

  // Tests for Doubly-Linked List
  it('should designate a new head when addToHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToHead(10);
    expect(linkedList.head.value).to.equal(10);
    expect(linkedList.head.next.value).to.equal(4);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    linkedList.removeTail();
    expect(linkedList.contains(10)).to.equal(false);
    expect(linkedList.tail.next).to.equal(null);
  });

  it('should add link to previous node when addToTail is called', function () {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.addToTail(10);
    expect(linkedList.tail.previous.value).to.equal(5);
  });
});

describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  // added additional tests
  it('should only handle strings', function() {
    set.add(1);
    expect(set.contains(1)).to.equal(false);
  });

  xit('should be able to handle numbers also', function () {
    set.add(1);
    expect(set.contains(1)).to.equal(true);
  });

  xit('should accept all types of values passed in', function() {
    var allVal = ['a', undefined, true, null, [1, 2], {'a': '1'}];
    for (var i = 0; i < allVal.length; i++) {
      linkedList.addToTail(i);
      expect(linkedList.contains(i)).to.equal(true);
    }
  });

});

const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park
  let dinosaur
  
  beforeEach(function () {
    park = new Park ('Jurassic Park XVI: The Re-Parkening - Diploducus Strikes Back', '¥16256')
    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('diplodocus', 'herbivore', 40);
  });

  it('should have a name', function () {
    const actual = park.name
    assert.strictEqual(actual, 'Jurassic Park XVI: The Re-Parkening - Diploducus Strikes Back')
  });

  it('should have a ticket price',function () {
    const actual = park.ticketPrice
    assert.strictEqual(actual, '¥16256')
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [])
  });

  it('should be able to add a dinosaur to its collection', function () {
    park.addDino(dinosaur1)
    const actual = park.dinoCollection
    assert.deepStrictEqual(actual, [dinosaur1])
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    park.removeDino(dinosaur1);
    const actual = park.dinoCollection
    assert.strictEqual(actual, park.dinoCollection)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park.addDino(dinosaur1);
    park.addDino(dinosaur2);
    const actual = park.dinoCollection
    assert.strictEqual(actual, park.dinoCollection)
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});

const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it.skip('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it.skip('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it.skip('should have a guess and a current card in play', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    expect(turn.guess).to.deep.equal('Sasquatch');
    expect(turn.currentCard).to.deep.equal(card);
    });

  it.skip('should show the player their guess', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    
    const guess1 = turn.returnGuess();
    expect(guess1).to.deep.equal('Sasquatch');
  });
  });
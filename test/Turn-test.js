const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  it('should be a function', function() {
    const turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    const turn = new Turn();
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should have a guess and a current card in play', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    expect(turn.guess).to.equal('Sasquatch');
    expect(turn.currentCard).to.deep.equal(card);
    });

  it('should show the player their guess', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    
    const guess1 = turn.returnGuess();
    expect(guess1).to.equal('Sasquatch');
  });

  it('should show the player the current card', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    

    const card1 = turn.returnCard();
    expect(card1).to.deep.equal(card);
  });

  it('should evaluate if the guess matches the correct answer', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    
    const evaluation1 = turn.evaluateGuess();
    expect(evaluation1).to.equal(true);
  });

  it('should give feedback if the guess is correct', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Sasquatch', card);
    
    const feedback1 = turn.giveFeedback();
    expect(feedback1).to.equal('Correct!');
  });

  it('should give feedback if the guess is incorrect', function() {
    const card = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const turn = new Turn('Monster', card);
    
    const feedback2 = turn.giveFeedback();
    expect(feedback2).to.equal('Incorrect!');
  });
});
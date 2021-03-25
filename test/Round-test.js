const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(function() {
    card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
    card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should have a deck of cards at the start of each round', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should keep track of turns and incorrect guesses', function() {
    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('the current card should be the first in the deck, and should return the current card', function() {
    const currentCard1 = round.returnCurrentCard();
    expect(currentCard1).to.equal(card1);
  });

  it('should be able to take a turn', function() {
    const turn1 = round.takeTurn('Sasquatch', card1);
    expect(round.takeTurn).to.be.a('function');
  });

  it('should increase turns whether guess is correct or incorrect', function() {
    round.takeTurn('Sasquatch', card1);
    expect(round.turns).to.equal(1);
  });

  it('should return feedback if the answer is correct', function() {
    const turn1 = round.takeTurn('Sasquatch');
    expect(turn1).to.equal('Correct!');
  });

  it('should return feedback if the answer is incorrect', function() {
    const turn1 = round.takeTurn('Monster');
    expect(turn1).to.equal('Incorrect!');
  });

  it('should store incorrect guesses', function() {
    round.takeTurn('Monster');

    expect(round.incorrectGuesses).to.deep.equal([1]);
  });

  it('should make the next card the current card after a guess is made', function() {
    round.takeTurn('Sasquatch');
    expect(round.currentCard).to.equal(card2);
  });

  it('should calculate the percentage of correct guesses', function() {
    round.takeTurn('Sasquatch');
    round.takeTurn('The Basin');
    round.takeTurn('Coco Donuts');

    const percentage = round.calculatePercentCorrect();
    expect(percentage).to.deep.equal(33);

  });

  it('should tell the user when a round has ended, and their percent of correct answers', function() {
    round.takeTurn('Sasquatch');
    round.takeTurn('The Basin');
    round.takeTurn('Coco Donuts');
    round.calculatePercentCorrect();

    const end = round.endRound();
    expect(end).to.equal('Round over! You answered 33% of the questions correctly!')
  });
});
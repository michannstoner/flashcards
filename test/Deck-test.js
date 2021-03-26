const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1;
  let card2;
  let card3;
  let deck;

  beforeEach(function() {
    card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
    card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have an array of card objects as a parameter', function() {
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
   });

   it('should tell the user how many cards are in the deck', function() {
    const deck1 = deck.countCards();
    expect(deck1).to.equal(3);
   });
});
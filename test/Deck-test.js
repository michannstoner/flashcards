const chai = require('chai');
const Card = require('../src/Card');
const expect = chai.expect;

const Deck = require('../src/Deck');

describe('Deck', function() {

  it('should be a function', function() {
    const deck = new Deck();
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    const deck = new Deck();
    expect(deck).to.be.an.instanceOf(Deck);
  });

  it('should have an array of card objects as a parameter', function() {
    const card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
    const card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts');
    const deck = new Deck([card1, card2, card3]);
    expect(deck.cards).to.deep.equal([card1, card2, card3]);
   });

   it('should be able to add more cards to the deck', function() {
    const card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
     const card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts')
     const deck = new Deck([card1, card2]);

     const deck1 = deck.addCard(card3);
     expect(deck1).to.deep.equal([card1, card2, card3]);
   });

   it('should tell the user how many cards are in the deck', function() {
    const card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
    const deck = new Deck([card1, card2]);

    const deck1 = deck.countCards();
    expect(deck1).to.equal(2);
   });
})
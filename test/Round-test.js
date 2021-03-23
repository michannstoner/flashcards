const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Round', function() {

  // it('should be a function', function() {
  //   const round = new Round();
  //   expect(Round).to.be.a('function');
  // });
  
  // it('should be an instance of Round', function() {
  //   const round = new Round();
  //   expect(round).to.be.an.instanceOf(Round);
  // });

  it('should have a current card at the start of each round', function() {
    const card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
     const card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.deck).to.deep.equal([card1, card2, card3]);
  });

  it('should also have turns and incorrect guesses', function() {
    const card1 = new Card(1, 'What is the name of a monster that is said to roam the PNW', ['Monster', 'Sasquatch', 'Gorilla'], 'Sasquatch');
    const card2 = new Card(2, 'What is another name for the area alongside the Columbia River?', ['The Gorge', 'The Basin', 'The Banks'], 'The Gorge');
     const card3 = new Card(3, 'Which of these is NOT a donut shop in Portland', ['Blue Star Donuts', 'Riot Donuts', 'Coco Donuts'], 'Riot Donuts');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.turns).to.equal(0);
    expect(round.incorrectGuesses).to.deep.equal([]);

  })


});



const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cardData = prototypeQuestions.map((prototype) => {
      prototype = new Card(prototype.id, prototype.question, prototype.answers, prototype.correctAnswer);
      return prototype;
    )};

    let deck = new Deck(cardData);
    this.currentRound = new Round(deck);

    this.printMessage(this.currentRound.deck, this.currentRound);
    this.printQuestion(this.currentRound);
    this.currentRound.endRound;
  }
  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
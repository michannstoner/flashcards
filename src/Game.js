const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
  }
  start() {
    const cardData = prototypeQuestions.map((prototype) => {
      let card = new Card(prototype.id, prototype.question, prototype.answers, prototype.correctAnswer)
      return card
    });

    let deck = new Deck(cardData);
    this.currentRound = new Round(deck);
    this.printMessage(deck);
    this.printQuestion(this.currentRound);
    this.currentRound.endRound;
  }

  printMessage(deck) {
    console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }
  printQuestion(round) {
    util.main(round);
  }
}

module.exports = Game;
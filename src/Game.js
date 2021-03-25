const data = require('./data');
const prototypeQuestions = data.prototypeData;
//prototypeData becomes a deck of cards / deck class / round class
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');

class Game {
  constructor() {

  }
  start() {
    const cardData = prototypeQuestions.map((prototype) => {
      prototype = new Card(prototype.id, prototype.question, prototype.answers, prototype.correctAnswer);
      return prototype;
    })
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
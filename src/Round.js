const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = this.deck[0]
  }
  returnCurrentCard() {
    return this.currentCard;
  }
  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    if (this.turns > this.deck.length) {
      this.endRound();
    }
    return turn.giveFeedback();
  }
  calculatePercentCorrect() {
    const correctGuesses = this.deck.length - this.incorrectGuesses.length;
    const percent = Math.floor((correctGuesses / this.deck.length) * 100);
    return percent;
  }
  endRound() {
    return `Round over! You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
};

module.exports = Round;
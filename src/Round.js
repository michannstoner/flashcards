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
    if (!turn.evaluateGuess) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turns++;
    this.currentCard = this.deck[this.turns];
    return turn.giveFeedback();
  }
};

module.exports = Round;
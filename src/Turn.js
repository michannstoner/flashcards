class Turn {
  constructor(guess, currentCard) {
    this.guess = guess;
    this.currentCard = currentCard;
    this.isCorrect = false;
  }
  returnGuess() {
    return this.guess;
  }
  returnCard() {
    return this.currentCard;
  }
  evaluateGuess() {
    if (this.guess === this.currentCard.correctAnswer) {
      this.isCorrect = true;
      return true;
    } else {
      return false;
    }
  }
  giveFeedback() {
    if (this.evaluateGuess()) {
      return 'Correct!'
    } else {
      return 'Incorrect!'
    }
  }
};


module.exports = Turn;
class Deck {
  constructor(cards) {
    this.cards = cards;
  }
  addCard(card) {
    this.cards.push(card);
    return this.cards;
  }
  countCards() {
    return this.cards.length;
  }
}



module.exports = Deck;
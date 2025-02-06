/**
 * Represents a dealer in a card game.
 * This class is used to manage the dealers hand and interact with a deck of cards.
 * The dealer can draw cards from the deck and maintain their hand of cards.
 * @class
 * @property {Card[]} hand - The list of `Card` objects in the dealer's hand. Each card has a suit and a value.
 * @property {CardDeck} deck - The deck object that contains a full deck of cards, with methods for creating, shuffling, and drawing cards.
 * @method draw() - Draws a card from the deck and adds it to the dealer's hand.
 * @method getHand() - Returns the current cards in the dealer's hand.
 * @param {any} deck - The deck object that provides the `draw` method for drawing cards.
 * @returns {Dealer} - A new instance of the Dealer class with an empty hand and the provided deck.
 */

import Card from "./Card";
import CardDeck from "./CardDeck";

export default class Dealer {
  private hand: Card[];
  private deck: CardDeck;

  constructor(deck: any) {
    this.hand = [];
    this.deck = deck;
  }

  draw() {
    const drawnCard = this.deck.draw();
    if (drawnCard) {
      this.hand.push(drawnCard);
    }
  }

  getHand() {
    return this.hand;
  }
}

/**
 * Represents a player in a card game.
 * This class is used to manage the player's hand, their name, and interact with a deck of cards.
 * The player can draw cards from the deck, set and get their first name, and maintain their hand of cards.
 * @class
 * @property {Card[]} hand - The list of `Card` objects in the players hand. Each card has a suit and a value.
 * @property {CardDeck} deck - The deck object that contains a full deck of cards, with methods for creating, shuffling, and drawing cards.
 * @property {string} first_name - The first name of the player.
 * @method setFirstName(first_name: string) - Sets the player's first name.
 * @method getFirstName() - Returns the player's first name.
 * @method draw() - Draws a card from the deck and adds it to the player's hand.
 * @method getHand() - Returns the current cards in the player's hand.
 * @param {any} deck - The deck object that provides the `draw` method for drawing cards.
 * @param {string} first_name - The first name of the player, passed during initialisation.
 * @returns {Player} - A new instance of the Player class with an empty hand, the provided deck, and the player's first name.
 */

import Card from "./Card";
import CardDeck from "./CardDeck";

export default class Player {
  private hand: Card[];
  private deck: CardDeck;
  private first_name: string;

  constructor(deck: any, first_name: string) {
    this.first_name = first_name;
    this.hand = [];
    this.deck = deck;
  }

  setFirstName(first_name: string) {
    this.first_name = first_name;
  }

  getFirstName() {
    return this.first_name;
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

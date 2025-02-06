/**
 * Represents a playing card in a deck.
 * This class is used to create individual cards with a suit and a value.
 * The card has two main properties: suit (the type of the card, e.g., "Hearts") and value (the rank or value of the card, e.g., "10").
 * @class
 * @param {string} suit - The suit of the card (e.g., "Clubs", "Spades", "Diamonds", "Hearts").
 * @param {string} value - The value or rank of the card (e.g., "2", "King", "Ace").
 * @returns {Card} - A new instance of the Card class with the specified suit and value.
 */

export default class Card {
  suit: string;
  value: string;
  constructor(suit: string, value: string) {
    this.suit = suit;
    this.value = value;
  }
}

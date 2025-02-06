/**
 * Represents a deck of playing cards.
 * This class is used to create a full deck, shuffle the deck, and draw cards from it.
 * The deck contains cards of four suits (Spades, Diamonds, Clubs, Hearts) and thirteen values (Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King).
 * The class includes methods for creating cards, shuffling the deck, drawing cards, and checking the number of remaining cards.
 * @class
 * @property {Card[]} cards - The list of cards in the deck.
 * @property {string[]} cardValues - The list of possible card values (Ace, 2, 3, etc.).
 * @property {string[]} suits - The list of possible card suits (Spades, Diamonds, Clubs, Hearts).
 * @method createCard(value: string, suit: string) - Creates a new card with the given value and suit.
 * @method createDeck() - Creates a full deck of 52 cards by combining all values with all suits.
 * @method shuffleDeck() - Shuffles the deck randomly using the Fisher-Yates algorithm.
 * @method draw() - Draws a card from the top of the deck and removes it.
 * @method getLength() - Returns the current number of remaining cards in the deck.
 * @returns {CardDeck} - A new instance of the CardDeck class, which is initially empty.
 */


import Card from './Card';

export default class CardDeck {
  private cards: Card[];
  private cardValues: string[];
  private suits: string[];

  constructor() {
    this.cards = [];
    this.cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    this.suits = ['Spades', 'Diamonds', 'Clubs', 'Hearts'];
  }

  createCard(value: string, suit: string): Card {
    return new Card(value, suit);
  }

  createDeck() {
    for (const suit of this.suits) {
      for (const value of this.cardValues) {
        this.cards.push(this.createCard(suit, value));
      }
    }
  }

  shuffleDeck() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw(): Card | undefined {
    return this.cards.pop();
  }

  getLength() {
    return this.cards.length;
  }
}


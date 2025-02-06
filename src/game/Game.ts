/**
 * Represents a card game between a player and a dealer.
 * This class is responsible for managing the deck of cards, dealing cards to the player and the dealer, and allowing the player and dealer to draw additional cards (hit).
 * The deck is shuffled at the start of the game, and the player and dealer are initialised with the shuffled deck.
 * The class provides methods for dealing cards, drawing cards, and retrieving the player and dealer objects.
 *
 * @class
 * @property {CardDeck} deck - The deck of cards used in the game, which is shuffled at the start.
 * @property {Player} player - The player participating in the game (Sam).
 * @property {Player} dealer - The dealer participating in the game.
 * @method deal() - Deals two cards each to the player and dealer at the start of the game.
 * @method hit(target: 'player' | 'dealer') - Allows the target (player or dealer) to draw a card from the deck.
 * @method getPlayer() - Returns the player instance.
 * @method getDealer() - Returns the dealer instance.
 * @returns {Game} - A new instance of the Game class, with a shuffled deck and initialised player and dealer.
 */

import CardDeck from "./CardDeck";
import Dealer from "./Dealer";
import Player from "./Player";
export default class Game {
  private deck: CardDeck;
  private player: Player;
  private dealer: Dealer;

  constructor() {
    this.deck = new CardDeck();
    this.deck.createDeck();
    this.deck.shuffleDeck();
    this.player = new Player(this.deck, "Sam");
    this.dealer = new Dealer(this.deck);
  }

  deal() {
    this.player.draw();
    this.dealer.draw();
    this.player.draw();
    this.dealer.draw();
  }

  hit(target: "player" | "dealer") {
    if (target === "player") {
      this.player.draw();
    } else if (target === "dealer") {
      this.dealer.draw();
    }
  }

  getPlayer() {
    return this.player;
  }

  getDealer() {
    return this.dealer;
  }
}

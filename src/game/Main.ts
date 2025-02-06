/**
 * Manages the flow of a card game between a player and a dealer.
 * This class orchestrates the game by dealing cards, checking the totals of each player's hand, and determining the winner based on the game rules.
 * The game starts with dealing cards to the player and the dealer, followed by the player drawing cards until they have at least 17 total value or bust.
 * Then, the dealer plays their turn by drawing cards until they have a higher total value than the player or bust.
 * The game events are logged throughout the process, describing each player's actions, card values, and the final outcome.
 *
 * @class
 * @property {Game} game - The instance of the Game class which is used to deal and hit cards.
 * @method start() - Starts the game, handles the dealers and players turns, and returns the game events as an array of strings.
 *   The game events include information about the players hand, the dealers hand, and the result of the game (win, loss, draw).
 * @method checkTotal(player: Player) - Calculates and returns the total value of a players hand. It accounts for face cards (Jack, Queen, King), Ace cards (which can be 1 or 11), and numeric cards.
 *   It adjusts for Aces to prevent a bust if the total value exceeds 21.
 * @returns {string[]} - An array of strings representing the sequence of events during the game, including card draws, hand values, and the final result.
 */

import Card from "./Card";
import Dealer from "./Dealer";
import Game from "./Game";
import Player from "./Player";

export default class Main {
  private game: Game;

  constructor() {
    this.game = new Game();
  }

  start(): string[] {
    this.game.deal();
    const gameEvents: string[] = ["The game has started!"];
    const player = this.game.getPlayer();
    const dealer = this.game.getDealer();

    let playersCardsTotalValue: number = this.checkTotal(player);

    if (playersCardsTotalValue === 21) {
      gameEvents.push(
        `Blackjack! ${player.getFirstName()} has won with their dealt hand! ${player.getFirstName()} has a total card count of 21 with ${player
          .getHand()
          .map((card) => `${card.value} of ${card.suit}`)
          .join(", ")}`
      );
      return gameEvents;
    }

    gameEvents.push(
      `${player.getFirstName()}s total card count is ${playersCardsTotalValue} and their initial cards are: ${player
        .getHand()
        .map((card) => `${card.value} of ${card.suit}`)
        .join(", ")}`
    );

    while (playersCardsTotalValue < 17) {
      this.game.hit("player");
      const hand = player.getHand();
      const drawnCard: Card | null = hand.length > 0 ? hand[hand.length - 1] : null;
      gameEvents.push(
        `${player.getFirstName()}s total card count is ${playersCardsTotalValue} and has drawn ${
          drawnCard?.value
        } of ${drawnCard?.suit}`
      );
      playersCardsTotalValue = this.checkTotal(player);
    }

    if (playersCardsTotalValue > 21) {
      gameEvents.push(
        `Dealer Has Won, ${player.getFirstName()} has busted with ${playersCardsTotalValue}`
      );
      return gameEvents;
    }

    gameEvents.push(
      `${player.getFirstName()} has stopped drawing cards with a total card count of ${playersCardsTotalValue}, it is now the dealer's turn`
    );

    let dealersCardsTotalValue: number = this.checkTotal(dealer);

    gameEvents.push(
      `The dealer has a total card count of ${dealersCardsTotalValue}, his cards are: ${dealer
        .getHand()
        .map((card: Card) => `${card.value} of ${card.suit}`)
        .join(", ")}`
    );

    while (
      dealersCardsTotalValue <= playersCardsTotalValue &&
      dealersCardsTotalValue < 21
    ) {
      this.game.hit("dealer");
      dealersCardsTotalValue = this.checkTotal(dealer);
      const hand: Card[] = dealer.getHand();
      const drawnCard: Card | null = hand.length > 0 ? hand[hand.length - 1] : null;

      gameEvents.push(
        `The dealer has drawn ${drawnCard?.value} of ${drawnCard?.suit}, their total card count is ${dealersCardsTotalValue}`
      );
    }

    if (dealersCardsTotalValue > 21) {
      gameEvents.push(
        `${player.getFirstName()} has won with ${playersCardsTotalValue}, Dealer has busted with ${dealersCardsTotalValue}`
      );
    } else if (dealersCardsTotalValue > playersCardsTotalValue) {
      gameEvents.push(
        `Dealer has won with ${dealersCardsTotalValue}, ${player.getFirstName()}s value is ${playersCardsTotalValue}`
      );
    } else if (dealersCardsTotalValue === playersCardsTotalValue) {
      gameEvents.push(
        `It is a draw! ${playersCardsTotalValue}, both ${player.getFirstName()} and the Dealer have the same value`
      );
    } else {
      gameEvents.push(
        `${player.getFirstName()} has won with ${playersCardsTotalValue}`
      );
    }
    return gameEvents;
  }

  checkTotal(player: Player | Dealer) {
    const faceCards = ["Jack", "Queen", "King"];
    let cardsTotalValue = 0;
    let acesCount = 0;
    let hand = player.getHand();

    if (!hand || hand.length === 0) {
      console.error("Error: Player has no cards!");
      return 0;
    }

    for (const card of hand) {
      if (!card || !card.value) {
        console.error("Error: Found an undefined card!", card);
        continue;
      }

      if (faceCards.includes(card.value)) {
        cardsTotalValue += 10;
      } else if (card.value === "Ace") {
        acesCount++;
        cardsTotalValue += 11;
      } else {
        cardsTotalValue += parseInt(card.value);
      }
    }

    while (cardsTotalValue > 21 && acesCount > 0) {
      cardsTotalValue -= 10;
      acesCount--;
    }

    return cardsTotalValue;
  }
}

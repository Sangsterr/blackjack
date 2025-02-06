import Game from "./game/Game";
import Player from "./game/Player";
import CardDeck from "./game/CardDeck";
import Card from "./game/Card";
import Main from "./game/Main";

jest.mock("./game/CardDeck");

describe("Main Tests", () => {
  let gameMock: jest.Mocked<Game>;
  let playerMock: jest.Mocked<Player>;
  let dealerMock: jest.Mocked<Player>;
  let deckMock: jest.Mocked<CardDeck>;

  beforeEach(() => {
    deckMock = new CardDeck() as jest.Mocked<CardDeck>;
    deckMock.createDeck();
    deckMock.shuffleDeck();
    jest.spyOn(deckMock, "draw").mockReturnValue(new Card("Hearts", "A")); 

    playerMock = new Player(deckMock, "Sam") as jest.Mocked<Player>;
    dealerMock = new Player(deckMock, "Dealer") as jest.Mocked<Player>;

  
    jest
      .spyOn(playerMock, "getHand")
      .mockReturnValue([new Card("Hearts", "10"), new Card("Spades", "7")]);
    jest
      .spyOn(dealerMock, "getHand")
      .mockReturnValue([new Card("Diamonds", "10"), new Card("Clubs", "5")]);


    jest
      .spyOn(playerMock, "draw")
      .mockImplementation(() => playerMock.getHand().push(new Card("Clubs", "5")));


    gameMock = new Game() as jest.Mocked<Game>;

    gameMock.getPlayer = jest.fn().mockReturnValue(playerMock);
    gameMock.getDealer = jest.fn().mockReturnValue(dealerMock);
  });

  it("should ensure both players have 2 cards after draw", () => {
    const playerHand = playerMock.getHand();
    const dealerHand = dealerMock.getHand();

    expect(playerHand.length).toBe(2);
    expect(dealerHand.length).toBe(2);
  });

  it("should add a card to the player's hand when draw() is called", () => {
    const initialPlayerHand = playerMock.getHand();
    expect(initialPlayerHand.length).toBe(2);
    console.log(initialPlayerHand);

    playerMock.draw();

    const updatedPlayerHand = playerMock.getHand();
    console.log(updatedPlayerHand);
    expect(updatedPlayerHand.length).toBe(3);
  });
});

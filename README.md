Welcome to the 'Blackjack Game'

This game is known by several names, most commonly: '21', 'Blackjack', 'Pontoon'.

--------------------------------------------------------------------------------

The rules:

Card Values:

- 2 -> 10 are worth their actual number
- Face cards (King, Queen, Jack) are all worth 10 each
- Ace is either 1 or 11, the player can determine the value

Both player and dealer are dealt two cards, the goal is to reach a total value of either 21, or as close as possible to this value. If a players total value exceeds 21, they are 'bust', meaning they're out.
If they are dealt a 'blackjack' hand (A face card + an Ace), they automatically win.
Once the player has finished their turn (stick), the dealer than has to aim to beat the number the player has decided to 'stick' on, if the dealer manages this without going 'bust' - the player loses.

This game is made for a player called Sam, playing against the Dealer. 

Once the game has started, the 'Next Event' button will toggle the user through each step of the game, until the outcome of the game has been determined.

--------------------------------------------------------------------------------

For this application to work correctly, you will need to follow these steps:

- Ensure Node.js is installed, you can follow the steps here to install this onto your device: https://nodejs.org/en

- Clone this repository, using this command: git clone https://github.com/Sangsterr/blackjack.git

- cd into blackjack

- Install application dependencies with the command 'npm install'

- Start the development server with the command 'npm start'

- If this doesn't automatically open up the browser to the correct page, access it here: http://localhost:3000

--------------------------------------------------------------------------------

Tests have been created for this application, if you would like to run these to ensure the application is working as expected, use the command 'npm test'

--------------------------------------------------------------------------------

Once the application is running, you can start the game by clicking the 'Start Game' button, this button will disappear and a new button called 'Next Event' will appear, keep clicking this button to see
each event of the game, until the outcome is determined. Once the outcome has happened, you can start a new game by clicking the 'Start Game' button again

import React, { useState } from "react";
import "./App.css";
import Main from "./game/Main";

function App() {
  const [gameEvents, setGameEvents] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStartGame = () => {
    const main = new Main();
    const result: string[] = main.start();
    setGameEvents(result);
    setCurrentIndex(0);
  };

  const handleNextEvent = () => {
    if (currentIndex < gameEvents.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="/websiteLogo.png" alt="Website Logo" className="logo" />

        <div>
          {gameEvents.length > 0 && (
            <p className="game-event">{gameEvents[currentIndex]}</p>
          )}
        </div>

        {gameEvents.length > 0 && currentIndex < gameEvents.length - 1 && (
          <button className="button next-button" onClick={handleNextEvent}>
            Next Event
          </button>
        )}

        {gameEvents.length === 0 || currentIndex === gameEvents.length - 1 ? (
          <button className="button start-button" onClick={handleStartGame}>
            Start Game
          </button>
        ) : null}
      </header>
    </div>
  );
}

export default App;
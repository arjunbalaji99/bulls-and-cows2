import { useContext } from "react";
import { AppContext } from "../../App";
import './gameOver.css'

const GameOver = () => {
  const { correctWord, gameOver } = useContext(AppContext);

  const resetGame = () => {
    window.location.reload();
  }

  return (
    <div className="gameover-container">
      <div className="modal">
        {gameOver.guessedWord
          ? <p>Congratulations! You guessed the word!</p>
          : <p>Game Over - Correct Word Was: {correctWord}</p>}
        <button className="playagain-button" onClick={resetGame}>
          Play Again
        </button>
      </div>
    </div>
  )
}

export default GameOver
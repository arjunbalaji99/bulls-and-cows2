import './App.css'
import Header from './containers/header/Header'
import Game from './containers/game/Game'
import { createContext, useState, useEffect } from 'react'
import { boardDefault, generateWordSet } from './Words'

export const AppContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrAttempt] = useState({
    attempt: 0,
    letter: 0
  });
  const [wordSet, setWordSet] = useState(new Set());
  const [correctWord, setCorrectWord] = useState('');
  const [gameOver, setGameOver] = useState({
    gameOver: false,
    guessedWord: false
  });

    useEffect(() => {
      generateWordSet().then((words) => {
        setWordSet(words.wordSet);
        setCorrectWord(words.randomWord);
      });
    }, [])

    useEffect(() => {
      if (wordSet.size === 0) return;
      const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        if (/^[A-Z]$/.test(key)) {
          onSelectLetter(key);
        } else if (key === 'ENTER') {
          onEnter();
        } else if (key === 'BACKSPACE') { 
          onDelete();
        }
      };
      document.addEventListener('keydown', handleKeyPress);
      return () => {
        document.removeEventListener('keydown', handleKeyPress);
      };
    }, [board, currAttempt, wordSet, correctWord, gameOver]);

    const onEnter = () => {
      if (currAttempt.letter !== 4) return;
      let currWord = "";
      for (let i = 0; i < 4; i++) {
        currWord += board[currAttempt.attempt][i];
      }
      if (wordSet.has(currWord.toUpperCase())) {
        setCurrAttempt({ attempt: currAttempt.attempt + 1, letter: 0 });
      } else {
        alert("Word not found");
      }
      if (currWord === correctWord) {
        setGameOver({ gameOver: true, guessedWord: true });
        return;
      }
      if (currAttempt.attempt === 7) {
        setGameOver({ gameOver: true, guessedWord: false });
        return;
      }
    };
  
    const onDelete = () => {
      if (currAttempt.letter === 0) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter - 1] = "";
      setBoard(newBoard);
      setCurrAttempt({ ...currAttempt, letter: currAttempt.letter - 1 });
    };
  
    const onSelectLetter = (key) => {
      if (currAttempt.letter > 3) return;
      const newBoard = [...board];
      newBoard[currAttempt.attempt][currAttempt.letter] = key;
      setBoard(newBoard);
      setCurrAttempt(prevState => ({
        attempt: prevState.attempt,
        letter: prevState.letter + 1,
      }));
    };

  return (
    <>
      <div>
        <AppContext.Provider
            value={{
              board,
              setBoard,
              currAttempt,
              setCurrAttempt,
              correctWord,
              gameOver,
              setGameOver,
              wordSet
            }}
          >
          <div className='header-container'>
            <Header />
          </div>
          <div className='gameplay-container'>
            <Game />
          </div>
        </AppContext.Provider>
      </div>
    </>
  )
}

export default App;

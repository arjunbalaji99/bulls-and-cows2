import { useContext } from 'react'
import { AppContext } from "../../App";
import './result.css'

const Result = ( {attemptVal} ) => {
  const { board, correctWord } = useContext(AppContext);

  const bulls = board[attemptVal].filter((letter, index) => letter === correctWord[index]).length;
  const cows = board[attemptVal].filter((letter) => correctWord.includes(letter)).length - bulls;
  return (
    <div>
      <div className='result-container'>
        <div className='bulls'> 
          <div className='circle bull-circle'></div>
          {bulls}
        </div>
        <div className='cows'>
          <div className='circle cow-circle'></div>
          {cows}
        </div>
      </div>
    </div>
  )
}

export default Result
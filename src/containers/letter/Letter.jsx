import { useContext } from 'react'
import { AppContext } from "../../App";
import './letter.css'

const Letter = ( {letterPos, attemptVal} ) => {
  const { board } = useContext(AppContext);
  const letter = board[attemptVal][letterPos];
  return (
    <div className='letter-container'>
      <span className='letter-text'>{letter}</span>
    </div>
  )
}

export default Letter
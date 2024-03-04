import Row from '../row/Row'
import GameOver from '../gameOver/GameOver'
import Keyboard from '../keyboard/Keyboard';
import { useContext } from 'react'
import { AppContext } from "../../App";
import './game.css'

const Game = () => {
  const { gameOver } = useContext(AppContext);

  return (
    <div className='game-container'>
      <div className='rows-container'>
        <Row attemptVal={0}/>
        <Row attemptVal={1}/>
        <Row attemptVal={2}/>
        <Row attemptVal={3}/>
        <Row attemptVal={4}/>
        <Row attemptVal={5}/>
        <Row attemptVal={6}/>
        <Row attemptVal={7}/>
      </div>
      <div className='keyboard-container'>
        <Keyboard />
      </div>
      <div className='gameover-container'>
        {gameOver.gameOver  ? <GameOver /> : null}
      </div>
    </div>
  )
}

export default Game;
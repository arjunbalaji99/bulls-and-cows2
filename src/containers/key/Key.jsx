import { useContext } from 'react'
import { AppContext } from "../../App";
import './key.css'

const Key = ( {keyVal} ) => {
    const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === '\u21B5') {
      onEnter();
    } else if (keyVal === '\u232B') {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };

    return (
        <div className='key' onClick={selectLetter}>{keyVal}</div>
    )
}

export default Key
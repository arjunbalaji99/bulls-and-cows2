import './header.css'
import { useState } from 'react';

const Header = () => {
  const [showHowTo, setShowHowTo] = useState(false);

  const toggleHowTo = () => {
    setShowHowTo(!showHowTo);
  }

  const closeModal = () => {
    setShowHowTo(false);
  }

  return (
    <div className='header-container'>
      <div className='header-title-container'>
        <span className='header-title'>Bulls and Cows</span>
      </div>
      <div className='header-icon-container'>
        <button className='question-mark' onClick={toggleHowTo}>
          ?
        </button>
      </div>
      {showHowTo ? (
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Try to guess the four letter word!</p>
          <p>A bull (green circle) means one of the letters is in the world and is in the correct spot</p>
          <p>A cow (yellow circle) means one of the letters is in the word but is in the wrong spot</p>
          <p>The rest is up to your deductive reasoning. Good luck!</p>
        </div>
      ) : null}
    </div>
  )
}

export default Header;
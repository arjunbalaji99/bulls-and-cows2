import Letter from '../letter/Letter'
import Result from '../results/Result'
import { useContext } from 'react'
import { AppContext } from "../../App";
import './row.css'

const Row = ( {attemptVal} ) => {
  const { currAttempt } = useContext(AppContext);

  let showResults = currAttempt.attempt > attemptVal;
  
  return (
    <div className='row-container'>
      <div className='row-letters-container'>
        <Letter letterPos={0} attemptVal={attemptVal}/>
        <Letter letterPos={1} attemptVal={attemptVal} />
        <Letter letterPos={2} attemptVal={attemptVal}/>
        <Letter letterPos={3} attemptVal={attemptVal}/>
      </div>
      <div className='row-result-container'>
        {showResults ? <Result attemptVal={attemptVal}/> : null}
      </div>
    </div>
  )
}

export default Row
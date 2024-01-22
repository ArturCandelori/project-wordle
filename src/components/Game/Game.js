import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { checkGuess } from '../../game-helpers'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  // playing | won | lost
  const [gameStatus, setGameStatus] = React.useState('playing')
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(guessInput) {
    const newGuesses = [...guesses, checkGuess(guessInput, answer)]
    setGuesses(newGuesses)
    if (guessInput === answer) {
      setGameStatus('won')
    } else if (newGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost')
    }
  }

  return (
    <>
      {gameStatus === 'won' && (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{' '}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      )}
      {gameStatus === 'lost' && (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      )}
      <GuessResults guesses={guesses} />
      <GuessInput
        handleSubmitGuess={handleSubmitGuess}
        gameStatus={gameStatus}
      />
    </>
  )
}

export default Game

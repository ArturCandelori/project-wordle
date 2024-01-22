import React from 'react'

import { sample } from '../../utils'
import { WORDS } from '../../data'
import { checkGuess } from '../../game-helpers'

import GuessInput from '../GuessInput/GuessInput'
import GuessResults from '../GuessResults/GuessResults'

// Pick a random word on every pageload.
const answer = sample(WORDS)
// To make debugging easier, we'll log the solution in the console.
console.info({ answer })

function Game() {
  const [guesses, setGuesses] = React.useState([])

  function handleSubmitGuess(guessInput) {
    const newGuest = checkGuess(guessInput, answer)
    setGuesses([...guesses, newGuest])
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput handleSubmitGuess={handleSubmitGuess} />
    </>
  )
}

export default Game

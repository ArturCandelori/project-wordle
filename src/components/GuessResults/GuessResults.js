import React from 'react'

import Guess from '../Guess/Guess'

import { range } from '../../utils'
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'

function GuessResults({ guesses }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess guess={guesses[num]} key={num} />
      ))}
    </div>
  )
}

export default GuessResults

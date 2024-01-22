import React from 'react'

import { range } from '../../utils'

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((n) => (
        <span className="cell" key={n}>
          {guess ? guess[n] : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess

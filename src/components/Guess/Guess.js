import React from 'react'

import { range } from '../../utils'

function Guess({ guess }) {
  return (
    <p className="guess">
      {range(5).map((n) => (
        <span className={`cell ${guess ? guess[n].status : ''}`} key={n}>
          {guess ? guess[n].letter : ''}
        </span>
      ))}
    </p>
  )
}

export default Guess

import React from 'react'

function GuessInput({ handleSubmitGuess }) {
  const [nextGuess, setNextGuess] = React.useState('')

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmitGuess(nextGuess)
        setNextGuess('')
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={nextGuess}
        onChange={(e) => setNextGuess(e.target.value.toUpperCase())}
      />
    </form>
  )
}

export default GuessInput

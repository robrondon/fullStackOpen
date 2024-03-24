import { useState } from 'react'

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)
const Title = ({ text }) => (<h2>{text}</h2>)
const Display = ({ text, value }) => (<p>{text} {value}</p>)

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodButton = () => setGood(good + 1)
  const handleNeutralButton = () => setNeutral(neutral + 1)
  const handleBadButton = () => setBad(bad + 1)

  return (
    <>
      <Title text={'Give Feedback'} />
      <Button onClick={handleGoodButton} text={'good'} />
      <Button onClick={handleNeutralButton} text={'neutral'} />
      <Button onClick={handleBadButton} text={'bad'} />
      <Title text={'Statistics'} />
      <Display text={'good'} value={good} />
      <Display text={'neutral'} value={neutral} />
      <Display text={'bad'} value={bad} />
    </>
  )
}

export default App

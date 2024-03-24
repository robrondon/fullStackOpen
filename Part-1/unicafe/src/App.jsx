import { useState } from 'react'

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)
const Title = ({ text }) => (<h2>{text}</h2>)
const Display = ({ text, value }) => (<p>{text} {value}</p>)

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [points, setPoints] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodButton = () => {
    const newPoints = points + 1
    const newTotal = total + 1
    const newGood = good + 1
    setGood(newGood)
    setTotal(newTotal)
    setPoints(newPoints)
    setAverage(newPoints / newTotal)
    setPositive((newGood * 100) / newTotal)
  }
  const handleNeutralButton = () => {
    const newTotal = total + 1
    setNeutral(neutral + 1)
    setTotal(newTotal)
    setAverage(points / newTotal)
    setPositive((good * 100) / newTotal)
  }
  const handleBadButton = () => {
    const newPoints = points - 1
    const newTotal = total + 1
    setBad(bad + 1)
    setTotal(newTotal)
    setPoints(newPoints)
    setAverage(newPoints / newTotal)
    setPositive((good * 100) / newTotal)
  }

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
      <Display text={'all'} value={total} />
      <Display text={'average'} value={average} />
      <Display text={'positive'} value={`${positive}%`} />
    </>
  )
}

export default App

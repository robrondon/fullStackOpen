import { useState } from 'react'

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)
const Title = ({ text }) => (<h2>{text}</h2>)
const StatisticLine = ({ text, value = '' }) => (<p>{text} {value}</p>)
const Statistics = ({ good, neutral, bad, total, average, positive }) => {
  return (
    <>
      <Title text={'Statistics'} />
      {!total ? (<StatisticLine text={'No feedback given'} />) : (
        <div>
          <StatisticLine text={'good'} value={good} />
          <StatisticLine text={'neutral'} value={neutral} />
          <StatisticLine text={'bad'} value={bad} />
          <StatisticLine text={'all'} value={total} />
          <StatisticLine text={'average'} value={average} />
          <StatisticLine text={'positive'} value={`${positive}%`} />
        </div>
      )
      }
    </>
  )
}

function App () {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)
  const average = total === 0 ? 0 : points / total
  const positive = total === 0 ? 0 : (good / total) * 100

  const handleGoodButton = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setPoints(points + 1)
  }
  const handleNeutralButton = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
  }
  const handleBadButton = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setPoints(points - 1)
  }

  return (
    <>
      <Title text={'Give Feedback'} />
      <Button onClick={handleGoodButton} text={'good'} />
      <Button onClick={handleNeutralButton} text={'neutral'} />
      <Button onClick={handleBadButton} text={'bad'} />
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
    </>
  )
}

export default App

import { useState } from 'react'

const Button = ({ onClick, text }) => (<button onClick={onClick}>{text}</button>)

const DayAnecdote = ({ anecdote, votes, handleVote, handleNextAnecdote }) => (
  <>
    <h2>Anecdote of the day</h2>
    <div>{anecdote}</div>
    <div>has {votes} votes</div>
    <Button text={'vote'} onClick={handleVote} />
    <Button text={'next anecdote'} onClick={handleNextAnecdote} />
  </>
)

const MostVoted = ({ anecdote }) => (
  <>
    <h2>Anecdote with most votes</h2>
    <div>{anecdote}</div>
  </>
)

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const [mostVotedIndex, setMostVotedIndex] = useState(0)

  const generateRandomNumber = (length = 1) => {
    return Math.floor(Math.random() * length)
  }
  const handleNextAnecdote = () => {
    const randomNumber = generateRandomNumber(anecdotes.length)
    setSelected(randomNumber)
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)

    if (newVotes[selected] > newVotes[mostVotedIndex]) setMostVotedIndex(selected)
  }

  return (
    <>
      <DayAnecdote
        anecdote={anecdotes[selected]}
        votes={votes[selected]}
        handleNextAnecdote={handleNextAnecdote}
        handleVote={handleVote}
      />
      <MostVoted anecdote={anecdotes[mostVotedIndex]} />
    </>
  )
}


export default App

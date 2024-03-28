import { useState } from 'react'

function App () {
  const [persons, setPersons] = useState([
    { name: 'Rob Rondon' }
  ]);
  const [newName, setNewName] = useState('');
  const addName = (e) => setNewName(e.target.value)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newPerson = {
      name: newName
    }
    setPersons(persons.concat(newPerson))
    setNewName('')
  }
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={addName} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (<p key={person.name}>{person.name}</p>))}
    </div>
  )
}

export default App
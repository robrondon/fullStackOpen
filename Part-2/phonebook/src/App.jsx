import { useState } from 'react'

function App () {
  const [persons, setPersons] = useState([
    { name: 'Rob Rondon', number: '+5491112345678' }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const addName = (e) => setNewName(e.target.value)
  const addNumber = (e) => setNewNumber(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (newName.trim() === '') return
    if (checkIfNameExists(newName.trim())) return alert(`${newName} is already added to the phonebook`)

    const newPerson = {
      name: newName.trim(),
      number: newNumber.trim()
    }
    setPersons(persons.concat(newPerson))

    setNewName('')
    setNewNumber('')
  }
  const checkIfNameExists = (name) => persons.some(p => p.name.toLowerCase() === name.toLowerCase())

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={addName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNumber} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => (<p key={person.name}>{person.name} {person.number}</p>))}
    </div>
  )
}

export default App

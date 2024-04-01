import { useEffect, useState } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import axios from 'axios';

function App () {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  console.log(`We have ${persons.length} persons loaded`)
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
  const handleFilter = (e) => {
    setFilter(e.target.value)
  }

  const personsToShow = filter.trim() !== '' ? persons.filter(person => person.name.toLowerCase().includes(filter.trim().toLowerCase())) : persons

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm
        onSubmit={handleSubmit}
        onNameChange={addName}
        onNumberChange={addNumber}
        name={newName}
        number={newNumber}
      />
      <h2>Numbers</h2>
      <Persons persons={personsToShow} />
    </div>
  )
}

export default App

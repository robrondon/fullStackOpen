const Persons = ({ persons }) => (
  persons.length > 0 ? persons.map(person => (<p key={person.name}>{person.name} {person.number}</p>)) : <p>No results found ..</p>
)

export default Persons
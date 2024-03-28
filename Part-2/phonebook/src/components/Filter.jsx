const Filter = ({ filter, onFilter }) => (
  <div>
    filter shown with <input value={filter} onChange={onFilter} />
  </div>)

export default Filter
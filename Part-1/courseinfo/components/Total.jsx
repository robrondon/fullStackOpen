const Total = ({ parts }) => {
  const total = parts.reduce((s, { exercises }) => s + exercises, 0)
  return (<p><strong>total of {total} exercises </strong></p>)
};

export default Total
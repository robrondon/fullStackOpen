const Course = ({ course, course: { parts } }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>)
}

const Header = ({ course: { name } }) => (<h1>{name}</h1>)

const Content = ({ parts }) => {
  return (
    <>
      {parts.map(({ id, name, exercises }) => {
        return (
          <Part
            key={id}
            part={name}
            exercises={exercises}
          />
        )
      })}
    </>
  )
}

const Total = ({ parts }) => {
  const total = parts.reduce((s, { exercises }) => s + exercises, 0)
  return (<p><strong>total of {total} exercises </strong></p>)
};

const Part = ({ part, exercises }) => ((<p>{part} {exercises}</p>))

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Effects of a component',
        exercises: 17,
        id: 4
      },
      {
        name: 'Memorize components',
        exercises: 20,
        id: 5
      }
    ]
  }

  return <Course course={course} />
}

export default App

const Header = ({ course: { name } }) => (<h1>{name}</h1>)

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part
            key={part.id}
            part={part.name}
            exercises={part.exercises}
          />
        )
      })}
    </>
  )
}

const Part = ({ part, exercises }) => ((<p>{part} {exercises}</p>))

const Total = ({ course: { parts } }) => (<p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>)

const Course = ({ course }) => {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      {/* <Total course={course} /> */}
    </>)
}


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

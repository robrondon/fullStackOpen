const Header = (props) => (<h1>{props.course}</h1>)

const Content = (props) => {
  console.log(props)
  return (
    <>
      <Part
        part={props.parts.part1}
        exercises={props.exercises.exercises1}
      />
      <Part
        part={props.parts.part2}
        exercises={props.exercises.exercises2}
      />
      <Part
        part={props.parts.part3}
        exercises={props.exercises.exercises3}
      />
    </>
  )
}

const Part = (props) => ((<p>{props.part} {props.exercises}</p>))

const Total = (props) => (<p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }


  return (
    <>
      <Header course={course} />
      <Content
        parts={{ part1: part1.name, part2: part2.name, part3: part3.name }}
        exercises={{ exercises1: part1.exercises, exercises2: part2.exercises, exercises3: part3.exercises }}
      />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </>
  )
}

export default App

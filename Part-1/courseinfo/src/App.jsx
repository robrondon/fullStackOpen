const Header = (props) => (<h1>{props.course}</h1>)

const Content = (props) => {
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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14


  return (
    <>
      <Header course={course} />
      <Content parts={{ part1, part2, part3 }} exercises={{ exercises1, exercises2, exercises3 }} />
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
    </>
  )
}

export default App
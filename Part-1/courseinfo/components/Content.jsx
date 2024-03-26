import Part from "./Part"

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

export default Content
const App = () => {
  const course = "Half Stack application development"
  const part1 = "Fundamentals of React"
  const exercises1 = 10
  const part2 = "Using props to pass data"
  const exercises2 = 7
  const part3 = "State of a component"
  const exercises3 = 14

  return (
    <>
      <Header title={course} />
      <Content
        part1={part1} number1={exercises1}
        part2={part2} number2={exercises2}
        part3={part3} number3={exercises3}
      />
      <p>Number of exercises</p><Total first={exercises1} second={exercises2} third={exercises3} />
    </>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>{props.title}</h1>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.part1} number={props.number1} />
      <Part part={props.part2} number={props.number2} />
      <Part part={props.part3} number={props.number3} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
      <p>{props.first + props.second + props.third}</p>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>{props.part} {props.number}</p>
    </>
  )
}

export default App
